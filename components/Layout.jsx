import Footer from './Footer'
import Header from './Header'
import styles from '@/styles/layout.module.scss'
import Container from './Container'
import SideMenu from './SideMenu'

function Layout({ children }) {
  return (
    <>
      <Header />
      <SideMenu />
      <main className={`${styles.mainWidth} pb-16 ml-auto`}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  )
}

export default Layout
