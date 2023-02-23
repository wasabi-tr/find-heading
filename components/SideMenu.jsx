import { getAllCategories } from '@/lib/api';
import styles from '@/styles/side-menu.module.scss'
import Link from 'next/link';
import { useEffect, useState } from 'react';
function SideMenu(props) {

    const [isHover, setIsHover] = useState(false);
    const openSideMenu = () => {
        setIsHover((prev) => !prev);
    }
    const closeSideMenu = () => {
        isHover ? setIsHover(!isHover) : ""
    }

    const [categories, setCategories] = useState([]);//空の配列を初期値に持った変数を定義
    useEffect(() => {//マウント時に処理をさせたいため、useEffectを使用
        const fetchCategoriesData = async () => {
            const res = await getAllCategories();
            setCategories(res);
        }
        fetchCategoriesData();//取得したカテゴリーをsetCategoriesに渡す処理
    }, [])


    return (
        <nav className={isHover ? styles.open : styles.close}>
            <div className={`fixed left-0 top-0 w-20 h-full z-20 bg-white`} onMouseEnter={openSideMenu}onMouseLeave={closeSideMenu}>
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
                <div className="text-xl font-bold text-center mb-5">サイドメニュー</div>
                <div className="text-lg">カテゴリータイトル</div>
                <ul>
                    {categories.map(({ name, slug }) =>
                        <li key={slug}>
                            <Link href={`/category/${slug}`} onClick={closeSideMenu}>{name}</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default SideMenu;