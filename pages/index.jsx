import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import { getAllPosts } from '@/lib/api'
import ArchivePosts from '@/components/ArchivePosts'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return (
    <>
      <Layout>
        <ArchivePosts posts={props.posts} />
      </Layout>
    </>
  )
}


export async function getStaticProps(context) {
  const posts = await getAllPosts();
  return {
    props: {
      posts: posts,
    }
  }
}