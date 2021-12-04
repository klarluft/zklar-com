import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Manifest & icons */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />

          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />

          {/* General info */}
          <meta
            name="title"
            content="ZKlar - Private, fast and cheap Ethereum transactions"
          />
          <meta
            name="description"
            content="Secure blockchain payment technology powered by zero-knowledge proofs"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://zklar.com/" />
          <meta
            property="og:title"
            content="ZKlar - Private, fast and cheap Ethereum transactions"
          />
          <meta
            property="og:description"
            content="Secure blockchain payment technology powered by zero-knowledge proofs"
          />
          <meta
            property="og:image"
            content="https://zklar.com/share-image.png"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://zklar.com/" />
          <meta
            property="twitter:title"
            content="ZKlar - Private, fast and cheap Ethereum transactions"
          />
          <meta
            property="twitter:description"
            content="Secure blockchain payment technology powered by zero-knowledge proofs"
          />
          <meta
            property="twitter:image"
            content="https://zklar.com/share-image.png"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
