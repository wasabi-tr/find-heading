import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/footer.module.scss";
import utility from "@/styles/utility.module.scss";
import Container from "./Container";
function Footer() {
    return (
        <footer className={`${styles.footer} border-t pt-8 ml-auto`}>
            <Container>
                <Link href="/">
                    <Image
                        src={'/logo.svg'}
                        width={300}
                        height={100}
                        alt="ロゴ"
                        className="m-auto"
                    />
                </Link>
                <p className="text-center text-xs mt-4">見出しだけを集めたギャラリーサイト</p>
                <nav className={styles.nav}>
                    <ul className="flex items-center gap-6 justify-center mt-4 pb-4 pt-4 text-sm font-bold ">
                        <li>
                            <Link href="/" className={utility.textHover}>すべて</Link>
                        </li>
                        <li>
                            <Link href="/category" className={utility.textHover}>カテゴリー</Link>
                        </li>
                        <li>
                            <Link href="/about" className={utility.textHover}>運営者について</Link>
                        </li>

                    </ul>
                </nav>
                <div className="text-sm text-center py-3 ">© 2023 Heeeead</div>
            </Container>
        </footer>
    );
}

export default Footer;