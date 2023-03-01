import { siteMeta } from "@/lib/contents";
import Head from "next/head";
import { useRouter } from "next/router";
import ogp from '@/images/ogp.jpg'

const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta;
const Meta = (props) => {
    //ページのタイトル
    const title = props.title ? `${props.title}｜${siteTitle}` : siteTitle;
    //ページの説明
    const desc = props.desc ?? siteDesc;
    //ページのURL
    const router = useRouter()
    const url = `${siteUrl}${router.asPath}`
    //OGP
    const img = props.pageImage || ogp.src
    const imgW = props.pageImageW || ogp.width
    const imgH = props.pageImageH || ogp.height
    const imageUrl = img.startsWith('https') ? img : `${siteUrl}${img}`

    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title}></meta>
            <meta name="description" content={desc}></meta>
            <link rel="canonical" href={url} />
            <meta property="og:url" content={url}></meta>
            <meta property="og:site_name" content={siteTitle}></meta>
            <meta property="og:description" content={desc}></meta>
            <meta property="og:type" content={siteType}></meta>
            <meta property="og:locale" content={siteLocale}></meta>
            <link rel="icon" href={siteIcon} />
            <link rel="apple-touch-icon" href={siteIcon} />
            <meta property="og:image" content={imageUrl}></meta>
            <meta property="og:image:width" content={imgW}></meta>
            <meta property="og:image:height" content={imgH}></meta>
            <meta property="twitter:card" content="summary_large_image"></meta>
        </Head>
    );
}

export default Meta;