import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* Google Fonts 読み込み */}
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand&family=Zen+Maru+Gothic&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}