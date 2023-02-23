import Posts from "@/components/Posts";
import { getAllCategories, getAllPostByCategory } from "@/lib/api";
import { defaultEyecatch } from "@/lib/contents";


export default function Slug(props) {
    return (
        <div>
           {props.posts.length? <Posts posts={props.posts} /> : <div>投稿はございません</div>}
        </div>
    );
}


export async function getStaticPaths() {
    //カテゴリーを取得（endpoint:categories）
    const allCategory = await getAllCategories("site-type");
    return {
        paths: allCategory.map(({ slug }) => `/site-type/${slug}`),
        fallback: false,
    }
}


export async function getStaticProps(context) {
    const catSlug = context.params.slug //取得したカテゴリーのスラッグ
    // console.log(context)
    //カテゴリー名を取得するためにもう一度getAllCategoriesを呼び出す
    const allCats = await getAllCategories("site-type")
    const cat = allCats.find(({ slug }) => slug === catSlug)
    const posts = await getAllPostByCategory("site-type",cat.slug)
    
    for (const post of posts) {
        if (!post.hasOwnProperty("eyecatch")) {
            post.eyecatch = defaultEyecatch;
        }
    }
    return {
        props: {
            name:cat.name,
            posts: posts,
        }
    }
}

