/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://heeeeading-web.net',
    generateRobotsTxt: true, // (optional)
    outDir: './out',
    // ...other options
  }