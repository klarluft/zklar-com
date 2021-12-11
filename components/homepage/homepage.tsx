import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import styled from "styled-components";
import { mediaTabletPortrait } from "../../styles/media-queries";
import { Footer } from "../footer";
import { Header } from "../header";
import { NewsletterBanner } from "./newsletter-banner";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  gap: 32px;

  @media ${mediaTabletPortrait} {
    gap: unset;
  }
`;

const RE_CAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

export const Homepage = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={RE_CAPTCHA_KEY}>
      <Container>
        <Header />
        <NewsletterBanner />
        <Footer />
      </Container>
    </GoogleReCaptchaProvider>
  );
};
