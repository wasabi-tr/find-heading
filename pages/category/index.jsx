import Breadcrumb from '@/components/Breadcrumb'
import { Categories } from '@/components/Categories'
import Meta from '@/components/Meta'
import Section from '@/components/Section'
import SideMenu from '@/components/SideMenu'
import { getAllCategories } from '@/lib/api'
import styles from '@/styles/page-category.module.scss'

const category = ({ allCategories }) => {
  const breadcrumbList = [
    {
      name: 'ホーム',
      path: '/',
    },
    {
      name: 'カテゴリー',
      path: '/category',
    },
  ]
  return (
    <>
      <Meta title="カテゴリー" />
      <SideMenu allCategories={allCategories} />
      <div className={styles.wrap}>
        <Breadcrumb list={breadcrumbList}></Breadcrumb>
        <Section width="small">
          <Categories allCategories={allCategories} />
        </Section>
      </div>
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const categoriesByDesignType = await getAllCategories('design-type')
  const categoriesBySiteType = await getAllCategories('site-type')
  const allCategories = [
    {
      catName: 'デザインの系統',
      catApiName: 'design-type',
      catSlugs: categoriesByDesignType,
    },
    {
      catName: 'サイトの種類',
      catApiName: 'site-type',
      catSlugs: categoriesBySiteType,
    },
  ]
  return {
    props: {
      allCategories,
    },
  }
}

export default category
