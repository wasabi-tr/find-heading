import styles from '@/styles/side-menu.module.scss'
import { useEffect, useRef, useState } from 'react'
import Categories from './Categories'
import GlobalNav from './GlobalNav'
function SideMenu() {
  const [isHover, setIsHover] = useState(false)
  const [ariaExpanded, setAriaExpanded] = useState(false)

  const clickOpenSideMenu = () => {
    setIsHover(!isHover)
    setAriaExpanded(!ariaExpanded)
  }
  useEffect(() => {
    const body = document.querySelector('body')
    if (isHover) {
      body.style.overflow = 'hidden'
      body.style.height = '100%'
    } else {
      body.style.overflow = ''
      body.style.height = ''
    }
  }, [isHover])

  const buttonRef = useRef(null)
  const handleFocus = () => {
    buttonRef.current.focus()
  }
  return (
    <>
      <div className={isHover ? styles.open : styles.close}>
        <div className={styles.buttonWrap}>
          <button
            className={
              'flex flex-col justify-center items-center w-full h-full'
            }
            onKeyDown={(event) => {
              event.code === 'Escape' ? clickOpenSideMenu() : null
            }}
            onClick={clickOpenSideMenu}
            ref={buttonRef}
            aria-label="サイドメニュー"
            aria-controls="side-menu"
            aria-expanded={ariaExpanded}
          >
            <div className={styles.hamburger}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={styles.button}>カテゴリー</div>
          </button>
        </div>
        <nav
          id="side-menu"
          className={styles.menu_wrap}
          aria-label="サイドメニュー"
        >
          {/* <Categories
                        closeMenu={() => setIsHover(false)}
                        ariaExpanded={() => setAriaExpanded(false)}
                        lastCategoryFocus={() => setLastCategoryFocus(true)}
                    /> */}
          <GlobalNav
            isPcShow={true}
            closeMenu={() => setIsHover(false)}
            ariaExpanded={() => setAriaExpanded(false)}
          />
          <div onFocus={handleFocus} tabIndex={0}></div>
        </nav>
      </div>
    </>
  )
}

export default SideMenu
