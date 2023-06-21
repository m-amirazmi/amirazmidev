import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="scrollbar-hide md:scrollbar-default">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
