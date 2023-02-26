import Link from "next/link";
import styles from "@/styles/global-nav.module.scss";
import utility from "@/styles/utility.module.scss";

const GlobalNav = (props) => {
    return (
        <nav className={`${styles.nav} ${props.isSpHidden ? styles.hidden : ""} ${props.isPcShow ? styles.show : ""}`}>
            <ul className="flex items-center gap-6 justify-center text-sm ">
                <li>
                    <Link 
                    href="/" 
                    className={utility.textHover} 
                    onClick={props.isPcShow ?props.closeMenu:null}
                    >すべて</Link>
                </li>
                <li>
                    <Link href="/category" className={utility.textHover}>カテゴリー</Link>
                </li>
                <li>
                    <Link href="/about" className={utility.textHover}>運営者について</Link>
                </li>
            </ul>
        </nav>
    );
}

export default GlobalNav;