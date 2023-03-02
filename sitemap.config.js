const { siteMeta } = require("@/lib/contents")

const { siteUrl } = siteMeta
module.exports = {
    siteUrl: siteUrl,
    generateRobotsTxt: true, // (optional)
    outDir: './out'
    // ...other options
}