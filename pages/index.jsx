import { Inter } from '@next/font/google'
import { getAllPosts } from '@/lib/api'
import Posts from '@/components/Posts'
import { defaultEyecatch } from '@/lib/contents'
import Section from '@/components/Section'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return (
    <Section>
      <Posts posts={props.posts} />
    </Section>
  )
}


export async function getStaticProps() {
  const posts = await getAllPosts();
  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = defaultEyecatch;
    }
  }
  return {
    props: {
      posts: posts,
    }
  }
}