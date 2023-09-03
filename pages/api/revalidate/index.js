import { isCollectSignature } from '@/lib/crypto'

const handler = async (req, res) => {
  try {
    if (!isCollectSignature(req.headers['x-microcms-signature'], req.body)) {
      return res.status(401).send('Invalid token')
    }

    await res.revalidate(`/`)
    return res.status(200).send()
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}

export default handler
