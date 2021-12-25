import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps = async (ctx) => {

  const fields = [
    {
      loc: process.env.REACT_APP_URL,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${process.env.REACT_APP_URL}/portfolio`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${process.env.REACT_APP_URL}/contact`,
      lastmod: new Date().toISOString(),
    },
  ]

  return getServerSideSitemap(ctx, fields)
}

export default () => {}
