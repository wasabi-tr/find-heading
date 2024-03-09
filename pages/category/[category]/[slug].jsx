import Breadcrumb from '@/components/Breadcrumb'
import PageHeader from '@/components/PageHeader'
import Posts from '@/components/Posts'
import Section from '@/components/Section'
import { getAllCategories, getAllPostByCategory } from '@/lib/api'
import { defaultEyecatch } from '@/lib/contents'

export default function Slug(props) {
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
      name: props.parent.name,
      path: `/category/${props.parent.slug}`,
    },
    {
      name: props.name,
      path: `/category/${props.parent.slug}/${props.slug}`,
    },
  ]
  return (
    <div>
      <Breadcrumb list={breadcrumbList}></Breadcrumb>
      <PageHeader pageTitle={props.name}></PageHeader>
      <Section>
        {props.posts.length ? (
          <Posts posts={props.posts} />
        ) : (
          <div>投稿はございません</div>
        )}
      </Section>
    </div>
  )
}

export async function getStaticPaths() {
  const designTypeCategories = await getAllCategories('design-type')
  const siteTypeCategories = await getAllCategories('site-type')

  // designTypeCategories を /category/design-type/${slug} の形に整形
  const designTypePaths = designTypeCategories.map(({ slug }) => {
    return {
      params: { category: 'design-type', slug: slug },
    }
  })

  // siteTypeCategories を /category/site-type/${slug} の形に整形
  const siteTypePaths = siteTypeCategories.map(({ slug }) => {
    return {
      params: { category: 'site-type', slug: slug },
    }
  })

  // 2つのカテゴリーパスを一つの配列にまとめる
  const paths = [...designTypePaths, ...siteTypePaths]

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const category = context.params.category
  const catSlug = context.params.slug
  //カテゴリー名を取得するためにもう一度getAllCategoriesを呼び出す
  const allCats = await getAllCategories(category)
  const cat = allCats.find(({ slug }) => slug === catSlug)
  const posts = await getAllPostByCategory(category, catSlug)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = defaultEyecatch
    }
    if (!post.hasOwnProperty('link')) {
      post.link = '/'
    }
  }
  const parent =
    context.params.category === 'design-type'
      ? { name: 'デザインの系統', slug: context.params.category }
      : {
          name: 'サイトの種類',
          slug: context.params.category,
        }

  return {
    props: {
      name: cat.name,
      slug: cat.slug,
      posts: posts,
      parent,
    },
  }
}
