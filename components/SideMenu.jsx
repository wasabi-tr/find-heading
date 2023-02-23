import styles from '@/styles/side-menu.module.scss'
import { useEffect, useState } from 'react';
import Categories from './Categories';
function SideMenu(props) {

    const [isHover, setIsHover] = useState(false);
    const openSideMenu = () => {
        setIsHover((prev) => !prev);
    }
    const closeSideMenu = () => {
        isHover ? setIsHover(!isHover) : ""
    }
    return (
        <nav className={isHover ? styles.open : styles.close}>
            <div className={`${styles.buttonWrap} fixed left-0 top-0 w-20 h-full z-20`} onMouseEnter={openSideMenu} onMouseLeave={closeSideMenu}>
                <button className={"flex flex-col justify-center items-center w-full h-full"}>
                    <div className={styles.hamburger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.button}>カテゴリー</div>
                </button>
            </div>
            <div className={styles.menu_wrap} onMouseEnter={openSideMenu} onMouseLeave={closeSideMenu}>
                <Categories closeMenu={()=>setIsHover(false)}></Categories>
            </div>
        </nav>
    );
}

export default SideMenu;