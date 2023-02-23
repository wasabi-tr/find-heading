import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/header.module.scss"

function Header() {
    return (
        <header className={`items-center ml-auto ${styles.header}`}>
            <Link href="/">
                <Image
                    src={'/next.svg'}
                    width={200}
                    height={100}
                    alt="ロゴ"
                    className="m-auto"
                />
            </Link>
            <p  className="text-center text-xs mt-4">見出しだけを集めたギャラリーサイト</p>
            <nav className="">
                <ul className="flex items-center gap-6 justify-center mt-4 pb-4 pt-4 text-sm font-bold border-y borderb">
                    <li>
                        <Link href="/">すべて</Link>
                    </li>
                    <li>
                        <Link href="/category">カテゴリー</Link>
                    </li>
                    <li>
                        <Link href="/about">運営者について</Link>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Header;