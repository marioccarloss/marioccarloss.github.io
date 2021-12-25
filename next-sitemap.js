module.exports = {
  siteUrl: process.env.REACT_APP_URL,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap'],
  alternateRefs: [
    {
      href: process.env.REACT_APP_URL,
      hreflang: 'en',
    },
  ],

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/additional-page'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'test-bot',
        allow: ['/portfolio', '/contact'],
      },
    ],
    additionalSitemaps: [
      `${process.env.REACT_APP_URL}/sitemap.xml`
    ],
  },
}