import styles from '@/styles/side-menu.module.scss'
import { useEffect, useRef, useState } from 'react';
import Categories from './Categories';
import GlobalNav from './GlobalNav';
function SideMenu() {

    const [isHover, setIsHover] = useState(false);
    const [ariaExpanded, setAriaExpanded] = useState(false)
    const openSideMenu = () => {
        setIsHover((prev) => !prev);
        setAriaExpanded((prev) => !prev);
    }
    const clickOpenSideMenu = () => {
        setIsHover(!isHover)
        setAriaExpanded(!ariaExpanded)
    }
    const closeSideMenu = () => {
        isHover ? setIsHover(!isHover) : ""
        ariaExpanded ? setAriaExpanded(!ariaExpanded) : ""
    }
    useEffect(() => {
        const body = document.querySelector('body');
        if (isHover) {
            body.style.overflow = 'hidden';
            body.style.height = '100%';
        } else {
            body.style.overflow = '';
            body.style.height = '';
        }
    }, [isHover]);

    const buttonRef = useRef(null)
    const handleFocus = () => {
        buttonRef.current.focus()
    }
    return (
        <>
            <nav className={isHover ? styles.open : styles.close}>
                <div className={styles.buttonWrap} onMouseEnter={openSideMenu} onMouseLeave={closeSideMenu}>
                    <button
                        className={"flex flex-col justify-center items-center w-full h-full"}
                        onKeyDown={(event) => {
                            event.code === 'Space' || event.code === 'Enter' || event.code === 'Escape' ? clickOpenSideMenu() : null
                        }}
                        aria-controls="side-menu"
                        aria-expanded={ariaExpanded}
                        ref={buttonRef}
                    >
                        <div className={styles.hamburger} onClick={clickOpenSideMenu} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={styles.button}>カテゴリー</div>
                    </button>
                </div>
                <nav id="side-menu" className={styles.menu_wrap} onMouseEnter={openSideMenu} onMouseLeave={closeSideMenu} aria-label="サイドメニュー">
                    <Categories
                        closeMenu={() => setIsHover(false)}
                        ariaExpanded={() => setAriaExpanded(false)}
                        lastCategoryFocus={() => setLastCategoryFocus(true)}
                    />
                    <GlobalNav
                        isPcShow={true}
                        closeMenu={() => setIsHover(false)}
                        ariaExpanded={() => setAriaExpanded(false)}
                    />
                    <div onFocus={handleFocus} tabIndex={0}></div>
                </nav>
            </nav>

        </>
    );
}

export default SideMenu;