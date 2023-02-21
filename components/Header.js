import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/header.module.scss"

function Header() {
    return (
        <header className={`flex justify-between items-center ml-auto ${styles.header}`}>
            <Link href="/">
                <Image
                    src={'/next.svg'}
                    width={200}
                    height={100}
                />
            </Link>
            <nav className="">
                <ul className="flex items-center gap-6 font-bold">
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