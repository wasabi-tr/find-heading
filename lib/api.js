import { createClient } from 'microcms-js-sdk'

export const client = createClient({
    serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
})

export async function getAllPosts(limit = 10) {
    try {
        const post = await client.get({
            endpoint: 'heading-post',
            queries:{
                fields:"title,slug"},
                orders:'-publishDate',
                limit:limit,
        })
        return post.contents;

    } catch (err) {
        console.log("getAllPosts");
        
        console.log(err);
    }
}