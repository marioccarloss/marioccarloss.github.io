/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com', 'localhost'],
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

module.exports = nextConfig;
