import Section from "@/components/Section";
import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <Section>
                <h1 className="text-center font-bold">お探しのページが見つかりません。</h1>
                <div className="text-center mt-6">
                    <p className="inline-block text-left">申し訳ございませんが、お探しのページは見つかりませんでした。<br />
                        ページが移動または削除されたか、URLの入力間違いの可能性があります。<br />
                        お手数ですがホームへ移動するか、サイトマップより情報をお探しください。</p>
                </div>
                <div className="text-center mt-6">
                    <Link 
                    href={"/"}
                    className="inline-block text-left"
                    >ホーム</Link>
                </div>
            </Section>
        </>
    )
}