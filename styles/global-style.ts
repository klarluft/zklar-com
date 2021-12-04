import { createGlobalStyle } from "styled-components";
import { googleRecaptchaCss } from "./google-recaptcha-css";
import { normalizeCss } from "./normalize-css";

export const GlobalStyle = createGlobalStyle`
  ${normalizeCss};

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.color.black};
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  ${googleRecaptchaCss};
`;
