import { createClient } from 'microcms-js-sdk'
import { defaultEyecatch } from './contents';

export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
})

export async function getAllPosts(limit = 10) {
    try {
        const posts = await client.get({
            endpoint: 'heading-post',
            queries: {
                fields: "title,slug,eyecatch"
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
export async function getAllCategories(limit = 100) {
    try {
        const categories = await client.get({
            endpoint: 'design-type',
            queries: {
                fields: "name,slug",
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

export async function getAllPostByCategory(catId, limit = 100) {
    try {
        const posts = await client.get({
            endpoint: 'heading-post',
            queries: {
                filters: `design-type[contains]${catId}`,
                fields: "title,slug,eyecatch",
                orders: '-publishDate',
                limit: limit,
            },
        })

        return posts.contents;

    } catch (err) {
        console.log("getAllPostByCategory");

        console.log(err);
    }
}