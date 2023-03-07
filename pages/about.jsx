import Form from "@/components/Form";
import Meta from "@/components/Meta";
import Section from "@/components/Section";
import styles from "@/styles/page-about.module.scss"

function about() {
    return (
        <>
            <Meta
                title="運営者について"
            />
            <Section width="small">
                <section className={styles.section}>
                    <h2 className={styles.heading}>Heeeeadingとは</h2>
                    <div className={styles.content}>
                        <p className={styles.text}>当Webサイトは見出しのデザインだけを集めたギャラリーサイトです。<br />「ここの見出しは、よしなに構築しといて」という言葉がきっかけで当Webサイトを制作いたしました。デザイナーだけでなくエンジニアやWebディレクターの方にも使っていただけると幸いです。</p>
                    </div>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.heading}>制作・運営者</h2>
                    <div className={styles.content}>
                        <a href="https://wasabi-web.net/" target="_blank" rel="noreferrer">Wasabi（わさび）</a>
                        <p className={styles.text}>千葉県で活動するWebサイト制作者です。</p>
                    </div>
                </section>
                <section className={styles.section}>
                    <h2 className={styles.heading}>免責事項</h2>
                    <div className={styles.content}>
                        <p className={styles.text}>
                            当Webサイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。<br />当Webサイトで掲載している画像の著作権や肖像権は各デザインの権利者に帰属します。<br />掲載内容や掲載画像に問題がございましたら、お問い合わせフォームよりお問い合わせください。
                        </p>
                        <Form></Form>
                    </div>
                </section>
            </Section>
        </>
    );
}

export default about;