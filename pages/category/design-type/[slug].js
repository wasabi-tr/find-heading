import Breadcrumb from "@/components/Breadcrumb";
import Meta from "@/components/Meta";
import PageHeader from "@/components/PageHeader";
import Posts from "@/components/Posts";
import Section from "@/components/Section";
import { getAllCategories, getAllPostByCategory } from "@/lib/api";
import { defaultEyecatch } from "@/lib/contents";


export default function Slug(props) {
    const breadcrumbList = [
        {
            name: "ホーム",
            path: "/",
        },
        {
            name: "カテゴリー",
            path: "/category",
        },
        {
            name: props.name,
            path: `/category/design-type/${props.slug}`,
        },
    ]
    return (
        <div>
            <Meta
                title={props.name}
            />
            <Breadcrumb list={breadcrumbList}></Breadcrumb>
            <PageHeader pageTitle={props.name}></PageHeader>
            <Section>
                {props.posts.length ? <Posts posts={props.posts} /> : <div>投稿はございません</div>}
            </Section>
        </div>
    );
}


export async function getStaticPaths() {
    //カテゴリーを取得（endpoint:categories）
    const allCategory = await getAllCategories("design-type");
    return {
        paths: allCategory.map(({ slug }) => `/category/design-type/${slug}`),
        fallback: false,
    }
}


export async function getStaticProps(context) {

    const catSlug = context.params.slug //取得したカテゴリーのスラッグ
    // console.log(context)
    //カテゴリー名を取得するためにもう一度getAllCategoriesを呼び出す
    const allCats = await getAllCategories("design-type")
    const cat = allCats.find(({ slug }) => slug === catSlug)

    const posts = await getAllPostByCategory("design-type", cat.slug)

    for (const post of posts) {
        if (!post.hasOwnProperty("eyecatch")) {
            post.eyecatch = defaultEyecatch;
        }
        if (!post.hasOwnProperty("link")) {
            post.link = "/";
          }
    }


    return {
        props: {
            name: cat.name,
            slug: cat.slug,
            posts: posts,
        }
    }


}

