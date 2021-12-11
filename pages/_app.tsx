import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { CookieBanner } from "../components/cookie-banner";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>zKlar - Private, fast and cheap Ethereum transactions</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
        <CookieBanner />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
