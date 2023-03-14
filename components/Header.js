import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/header.module.scss"
import Container from "./Container";
import GlobalNav from "./GlobalNav";

function Header() {
    return (
        <header className={`items-center ml-auto ${styles.header}`}>
            <Container>
                <div className="flex justify-between items-center border-b pb-8">
                    <div className={`${styles.logo} flex items-center gap-4`}>
                        <Link href="/">
                            <Image
                                src={'/logo.svg'}
                                width={200}
                                height={100}
                                alt="ロゴ"
                                className="m-auto"
                            />
                        </Link>
                        <h1 className="text-center text-xs">見出しだけを集めたギャラリーサイト</h1>
                    </div>
                    <GlobalNav isSpHidden={true}/>
                </div>
            </Container>
        </header>
    );
}

export default Header;