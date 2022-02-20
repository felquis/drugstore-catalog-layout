// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="shortcut icon"
          href="icon.svg"
          type="image/svg+xml"
          sizes="any"
        />
      </Head>
      <body className="bg-green-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
