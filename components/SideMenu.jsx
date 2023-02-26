import styles from '@/styles/side-menu.module.scss'
import { useState } from 'react';
import Categories from './Categories';
import GlobalNav from './GlobalNav';
function SideMenu() {

    const [isHover, setIsHover] = useState(false);
    const openSideMenu = () => {
        setIsHover((prev) => !prev);
    }
    const clickOpenSideMenu = () => {
        setIsHover(!isHover);
    }
    const closeSideMenu = () => {
        isHover ? setIsHover(!isHover) : ""
    }
    return (
        <>
            <nav className={isHover ? styles.open : styles.close}>
                <div className={styles.buttonWrap} onMouseEnter={openSideMenu} onMouseLeave={closeSideMenu}>
                    <button className={"flex flex-col justify-center items-center w-full h-full"}>
                        <div className={styles.hamburger} onClick={clickOpenSideMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={styles.button}>カテゴリー</div>
                    </button>
                </div>
                <div className={styles.menu_wrap} onMouseEnter={openSideMenu} onMouseLeave={closeSideMenu}>
                    <Categories closeMenu={() => setIsHover(false)}></Categories>
                    <GlobalNav isPcShow={true} closeMenu={() => setIsHover(false)}/>
                </div>
            </nav>

        </>
    );
}

export default SideMenu;