import { Handler } from "@netlify/functions";

const mailchimp = require("@mailchimp/mailchimp_marketing");

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER;

console.log(1);

mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_SERVER,
});

const handler: Handler = async (_event, _context) => {
  const response = await mailchimp.ping.get();

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};

export { handler };
