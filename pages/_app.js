import '@unocss/reset/tailwind.css'
import '@/styles/globals.scss'
import Layout from '@/components/Layout'
import SideMenu from '@/components/SideMenu'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { GA_MEASUREMENT_ID, pageview } from '@/components/Gtag'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouterChange = (url) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouterChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouterChange)
    }
  }, [router.events])
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${GA_MEASUREMENT_ID}');
           `,
        }}
      />

      <Layout>
        <SideMenu></SideMenu>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
