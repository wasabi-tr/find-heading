import Link from "next/link";
import styles from "@/styles/global-nav.module.scss";
import utility from "@/styles/utility.module.scss";

const GlobalNav = (props) => {
    return (
        <nav className={`${styles.nav} ${props.isSpHidden ? styles.hidden : ""} ${props.isPcShow ? styles.show : ""}`} aria-label="グローバルナビ">
            <ul className="flex items-center gap-6 justify-center text-sm ">
                <li>
                    <Link 
                    href="/" 
                    className={utility.textHover} 
                    onClick={props.isPcShow ?props.closeMenu:null}
                    onKeyDown={(event)=>{ event.code === 'Space' || event.code === 'Enter'||event.code === 'Escape'?props.ariaExpanded:null
                    }}
                    >ホーム</Link>
                </li>
                <li>
                    <Link href="/category" 
                    className={utility.textHover}
                    onClick={props.isPcShow ?props.closeMenu:null}
                    onKeyDown={(event)=>{ event.code === 'Space' || event.code === 'Enter'||event.code === 'Escape'?props.ariaExpanded:null
                    }}
                    >カテゴリー</Link>
                </li>
                <li>
                    <Link href="/about" 
                    className={utility.textHover}
                    onClick={props.isPcShow ?props.closeMenu:null}
                    onKeyDown={(event)=>{ event.code === 'Space' || event.code === 'Enter'||event.code === 'Escape'?props.ariaExpanded:null
                    }}
                    >運営者について</Link>
                </li>
            </ul>
        </nav>
    );
}

export default GlobalNav;