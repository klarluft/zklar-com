import { ThemeProvider } from "styled-components";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Homepage } from "../components/homepage";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";

const RE_CAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <GoogleReCaptchaProvider reCaptchaKey={RE_CAPTCHA_KEY}>
        <>
          <GlobalStyle />
          <Homepage />
        </>
      </GoogleReCaptchaProvider>
    </ThemeProvider>
  );
}
