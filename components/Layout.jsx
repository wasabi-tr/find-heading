import Footer from './Footer'
import Header from './Header'
import styles from '@/styles/layout.module.scss'
import Container from './Container'

function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <main className={`${styles.mainWidth} pb-16 ml-auto`}>
        <Container>{children}</Container>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Layout
