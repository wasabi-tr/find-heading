import Posts from "@/components/Posts";
import { getAllCategories, getAllPostByCategory } from "@/lib/api";
import { defaultEyecatch } from "@/lib/contents";


export default function Slug(props) {
    return (
        <div>
            <Posts posts={props.posts} />
        </div>
    );
}


export async function getStaticPaths() {
    //カテゴリーを取得（endpoint:categories）
    const allCategory = await getAllCategories();
    return {
        paths: allCategory.map(({ slug }) => `/category/${slug}`),
        fallback: false,
    }
}


export async function getStaticProps(context) {
    
    const catSlug = context.params.slug //取得したカテゴリーのスラッグ

    //カテゴリー名を取得するためにもう一度getAllCategoriesを呼び出す
    const allCats = await getAllCategories()
    const cat = allCats.find(({ slug }) => slug === catSlug)

    const posts = await getAllPostByCategory(cat.slug)
    
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

