import Breadcrumb from '@/components/Breadcrumb'
import { Button } from '@/components/Button'
import Meta from '@/components/Meta'
import PageHeader from '@/components/PageHeader'
import Posts from '@/components/Posts'
import Section from '@/components/Section'
import { getAllCategories, getAllPostByCategory, getCategory } from '@/lib/api'
import Link from 'next/link'
import React from 'react'

const categories = ({ postsGroups, pageTitle, pageSlug }) => {
  const breadcrumbList = [
    {
      name: 'ホーム',
      path: '/',
    },
    {
      name: 'カテゴリー',
      path: '/category',
    },
    {
      name: pageTitle,
      path: `/category/${pageSlug}`,
    },
  ]
  return (
    <>
      <Meta title={pageTitle} />
      <Breadcrumb list={breadcrumbList}></Breadcrumb>
      {postsGroups.map(
        (postsGroup) =>
          postsGroup && (
            <div key={postsGroup.categoryObj.slug}>
              <PageHeader pageTitle={postsGroup.categoryObj.name}></PageHeader>
              <Section>
                <Posts posts={postsGroup.posts} />
                <Button
                  href={`/category/${pageSlug}/${postsGroup.categoryObj.slug}`}
                >
                  もっと見る
                </Button>
              </Section>
            </div>
          )
      )}
    </>
  )
}

export async function getStaticPaths() {
  const paths = [
    { params: { category: 'design-type' } },
    { params: { category: 'site-type' } },
  ]

  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps(context) {
  const categorySlug = context.params.category
  const categoryName =
    context.params.category === 'design-type'
      ? 'デザインの系統'
      : 'サイトの種類'
  const allTerms = await getAllCategories(categorySlug)
  const allTermSlugs = allTerms.map((term) => term.slug)

  const postsPromises = allTermSlugs.map(async (ternSlug) => {
    const [categoryObj, posts] = await Promise.all([
      getCategory(categorySlug, ternSlug),
      getAllPostByCategory(categorySlug, ternSlug, 8),
    ])
    return {
      categoryObj,
      posts,
    }
  })

  const postsGroups = await Promise.all(postsPromises)

  for (const postsGroup of postsGroups) {
    for (const post of postsGroup.posts) {
      if (!post.hasOwnProperty('eyecatch')) {
        post.eyecatch = defaultEyecatch
      }
      if (!post.hasOwnProperty('link')) {
        post.link = '/'
      }
    }
  }

  return {
    props: { postsGroups, pageTitle: categoryName, pageSlug: categorySlug },
  }
}

export default categories
