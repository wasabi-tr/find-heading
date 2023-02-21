import '@unocss/reset/tailwind.css'
import '@/styles/globals.scss'
import Layout from '@/components/Layout'
import Hamburger from '@/components/Hamburger'
import SideMenu from '@/components/SideMenu'
import SideMenuContainer from '@/components/sideMenuContainer'

export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <SideMenuContainer></SideMenuContainer>
      <Component {...pageProps} />
    </Layout>
  )

}
