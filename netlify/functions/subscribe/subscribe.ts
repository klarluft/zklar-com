import { Handler } from "@netlify/functions";
import axios from "axios";

interface RequestBody {
  email: string;
  recaptchaToken: string;
}

interface RecaptchaResponseBody {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  score: number;
  action: string;
}

const handler: Handler = async (event, _context) => {
  try {
    const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER;
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;

    if (!RECAPTCHA_SECRET_KEY)
      throw new Error("RECAPTCHA_SECRET_KEY env not available");
    if (!MAILCHIMP_API_KEY)
      throw new Error("MAILCHIMP_API_KEY env not available");
    if (!MAILCHIMP_SERVER)
      throw new Error("MAILCHIMP_SERVER env not available");
    if (!MAILCHIMP_LIST_ID)
      throw new Error("MAILCHIMP_LIST_ID env not available");

    const { email, recaptchaToken } = JSON.parse(
      event.body ?? ""
    ) as RequestBody;

    const recaptchaResponse = await axios.post<RecaptchaResponseBody>(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    );

    const { success, hostname, action } = recaptchaResponse.data;

    if (
      !success ||
      !["localhost", "zklar.com"].includes(hostname) ||
      action !== "subscribe"
    )
      throw new Error("Recaptcha validation failed");

    const response = await axios.post(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        email_address: email,
        status: "subscribed",
      },
      { auth: { username: "anystring", password: MAILCHIMP_API_KEY } }
    );

    return {
      statusCode: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    };
  }
};

export { handler };
