import { createGlobalStyle } from "styled-components";
import { normalizeCss } from "./normalize-css";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

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
`;
