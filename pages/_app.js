import '@unocss/reset/tailwind.css'
import '@/styles/globals.scss'
import Layout from '@/components/Layout'
import SideMenuContainer from '@/components/SideMenuContainer'

export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <SideMenuContainer></SideMenuContainer>
      <Component {...pageProps} />
    </Layout>
  )

}

