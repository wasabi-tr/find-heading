import styles from '@/styles/side-menu.module.scss'
import { useEffect, useRef, useState } from 'react'
import GlobalNav from './GlobalNav'
import { Categories } from './Categories'
import { getAllCategories } from '@/lib/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
function SideMenu() {
  const [isHover, setIsHover] = useState(false)
  const [ariaExpanded, setAriaExpanded] = useState(false)
  const [categories, setCategories] = useState([]) //空の配列を初期値に持った変数を定義
  const [isLoading, setIsLoading] = useState(true)

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

  useEffect(() => {
    //マウント時に処理をさせたいため、useEffectを使用
    const fetchCategoriesData = async () => {
      const categoriesByDesignType = await getAllCategories('design-type')
      const categoriesBySiteType = await getAllCategories('site-type')
      const allCategories = [
        {
          catName: 'デザインの系統',
          catApiName: 'design-type',
          catSlugs: categoriesByDesignType,
        },
        {
          catName: 'サイトの種類',
          catApiName: 'site-type',
          catSlugs: categoriesBySiteType,
        },
      ]
      setCategories(allCategories)
      setIsLoading(false)
    }
    fetchCategoriesData() //取得したカテゴリーをsetCategoriesに渡す処理
  }, [])

  const buttonRef = useRef(null)
  const handleFocus = () => {
    buttonRef.current.focus()
  }
  return (
    <>
      <div className={isHover ? styles.open : styles.close}>
        <div
          className={`${styles.mask} ${isHover ? styles.open : styles.close}`}
        ></div>
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
          {isLoading ? (
            <div className="text-center" aria-label="ロード中">
              <FontAwesomeIcon icon={faSpinner} spin />{' '}
              {/* フォントアイコンを表示 */}
              <span>ロード中...</span> {/* テキストを<span>で囲む */}
            </div>
          ) : (
            <Categories
              closeMenu={() => setIsHover(false)}
              ariaExpanded={() => setAriaExpanded(false)}
              lastCategoryFocus={() => setLastCategoryFocus(true)}
              allCategories={categories}
            />
          )}
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
