import { Inter } from '@next/font/google'
import { getAllPosts } from '@/lib/api'
import Posts from '@/components/Posts'
import { defaultEyecatch } from '@/lib/contents'
import Section from '@/components/Section'
import Meta from '@/components/Meta'
import ogp from '@/images/ogp.jpg'

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
        <Posts posts={props.posts} />
      </Section>
    </>
  )
}


export async function getStaticProps() {
  const posts = await getAllPosts();
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
      posts: posts,
    }
  }
}