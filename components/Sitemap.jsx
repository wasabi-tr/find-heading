const { siteMeta } = require("@/lib/contents")

const { siteUrl } = siteMeta
module.exports = {
    siteUrl: process.env.SITE_URL || siteUrl,
    generateRobotsTxt: true, // (optional)
    outDir: './out'
    // ...other options
}