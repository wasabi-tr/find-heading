import { Inter } from '@next/font/google'
import { getAllPostByPagination, getAllPosts } from '@/lib/api'
import Posts from '@/components/Posts'
import { defaultEyecatch } from '@/lib/contents'
import Section from '@/components/Section'
import Meta from '@/components/Meta'
import ogp from '@/images/ogp.jpg'

const PER_PAGE = 100;

const inter = Inter({ subsets: ['latin'] })
export default function Home(props) {

    return (
        <>
            <Meta
                pageImage={ogp.src}
                pageImageW={ogp.width}
                pageImageH={ogp.height}
            />
            <Section>
                <Posts posts={props.posts} totalCount={props.totalCount} />
            </Section>
        </>
    )
}


export async function getStaticPaths() {
    const data = await getAllPosts();
    const totalCount = data.totalCount

    const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

    const paths = range(1, Math.ceil(totalCount / PER_PAGE)).map((repo) => `/page/${repo}`);

    return { paths, fallback: false };
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const limit = 100
    const number = (id - 1) * limit;

    const data = await getAllPostByPagination(number, limit);
    const posts = data.contents
    const totalCount = data.totalCount

    return {
        props: {
            posts: posts,
            totalCount: totalCount
        }
    }


}