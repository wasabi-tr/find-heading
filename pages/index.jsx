import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import { getAllPosts } from '@/lib/api'
import Posts from '@/components/Posts'
import { defaultEyecatch } from '@/lib/contents'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return (
    <>
        <Posts posts={props.posts} />
    </>
  )
}


export async function getStaticProps(context) {
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