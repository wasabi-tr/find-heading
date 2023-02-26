import { siteMeta } from '@/lib/contents'
import { Html, Head, Main, NextScript } from 'next/document'

const { siteLang } = siteMeta;
export default function Document() {
  return (
    <Html lang={siteLang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
