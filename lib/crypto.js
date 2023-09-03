// libs/crypto.js

const crypto = require('crypto')

/**
 * リクエストの署名が正しいかどうかを確認する。
 * @param {string} signature - リクエストヘッダの署名
 * @param {Object} body - リクエストボディ
 * @returns {boolean} 署名が正しい場合はtrue、それ以外の場合はfalse
 */
function isCollectSignature(signature, body) {
  const expectedSignature = crypto
    .createHmac('sha256', process.env.NEXT_PUBLIC_MICROCMS_SECRET_KEY)
    .update(JSON.stringify(body))
    .digest('hex')

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  )
}

module.exports = {
  isCollectSignature,
}
