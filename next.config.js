module.exports = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "",
    domains: ['media.graphcms.com','localhost'],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/portfolio': { page: '/portfolio' },
      '/contact': { page: '/contact' },
    }
  },
}