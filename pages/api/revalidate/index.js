const handler = async (req, res) => {
  const crypto = require('crypto')
  try {
    if (!crypto(req.headers['x-microcms-signature'], req.body)) {
      return res.status(401).send('Invalid token')
    }

    // const playerId = req.body.contents.new.publishValue.player.id
    await res.revalidate(`/`)

    return res.status(200).send()
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}

export default handler
