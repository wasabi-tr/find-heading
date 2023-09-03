const handler = async (req, res) => {
  let revalidated = false
  try {
    await res.revalidate(`/category/`)
    await res.revalidate(`/category/${category}`)
    revalidated = true
  } catch (err) {
    return console.log(err)
  }
  res.json({
    revalidated,
  })
}

export default handler
const crypto = require('crypto')
