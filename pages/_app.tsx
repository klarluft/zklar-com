import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { CookieBanner } from "../components/cookie-banner";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";
import { GA_ANALYTICS_MEASUREMENT_ID } from "../utilities/configuration";

const isProduction = process.env.NODE_ENV === "production";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (isProduction) {
        window.gtag("config", GA_ANALYTICS_MEASUREMENT_ID, {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
