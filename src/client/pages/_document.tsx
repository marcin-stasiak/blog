import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const language = process.env.NEXT_LANGUAGE;

  return (
    <Html lang={language} className="dark">
      <Head />
      <body className="bg-white text-black dark:bg-black dark:text-white min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
