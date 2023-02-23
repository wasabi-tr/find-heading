import '@unocss/reset/tailwind.css'
import '@/styles/globals.scss'
import Layout from '@/components/Layout'
import SideMenu from '@/components/SideMenu'

export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <SideMenu></SideMenu>
      <Component {...pageProps} />
    </Layout>
  )

}

