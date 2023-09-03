import { isCollectSignature } from '@/lib/crypto'

const handler = async (req, res) => {
  try {
    if (!isCollectSignature(req.headers['x-microcms-signature'], req.body)) {
      return res.status(401).send('Invalid token')
    }
    const designCategorySlugs = req.body.contents.new.publishValue[
      'design-type'
    ].map((item) => item.slug)
    const siteCategorySlugs = req.body.contents.new.publishValue[
      'site-type'
    ].map((item) => item.slug)

    await res.revalidate(`/`)
    await res.revalidate(`/category/design-type`)
    await res.revalidate(`/category/site-type`)
    for (const designCategorySlug of designCategorySlugs) {
      await res.revalidate(`/category/design-type/${designCategorySlug}`)
    }
    for (const siteCategorySlug of siteCategorySlugs) {
      await res.revalidate(`/category/site-type/${siteCategorySlug}`)
    }

    return res.status(200).send()
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}

export default handler
