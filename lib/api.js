import { createClient } from 'microcms-js-sdk'

//microCMSのAPIを取得して変数「client」に格納
export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
})

//すべての投稿を取得
export async function getAllPosts(limit = 10) {
    try {
        const posts = await client.get({
            endpoint: 'heading-post',
            queries: {
                fields: "title,slug,eyecatch,link"
            },
            orders: '-publishDate',
            limit: limit,
        })

        return posts.contents;

    } catch (err) {
        console.log("getAllPosts");

        console.log(err);
    }
}

//すべてのカテゴリー（デザインの系統）を取得
export async function getAllCategories(apiName,limit = 100) {
    try {
        const categories = await client.get({
            endpoint: apiName,
            queries: {
                fields: "name,id,slug",
            },
            orders: '-publishDate',
            limit: limit,
        })

        return categories.contents;

    } catch (err) {
        console.log("getAllCategories");

        console.log(err);
    }
}

//デザインの系統のタームがついた記事一覧を取得
export async function getAllPostByCategory(apiName,catId, limit = 100) {
    try {
        const posts = await client.get({
            endpoint: 'heading-post',
            queries: {
                filters: `${apiName}[contains]${catId}`,
                fields: "title,slug,eyecatch,link",
                orders: '-publishDate',
                limit: limit,
            },
        })
        return posts.contents;

    } catch (err) {
        console.log("getAllPostByDesignType");

        console.log(err);
    }
}