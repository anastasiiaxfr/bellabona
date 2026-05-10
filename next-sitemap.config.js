/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.bellabona.de",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  sitemapSize: 5000,
};
