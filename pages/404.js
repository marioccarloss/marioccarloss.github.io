import Layout from '../components/template/Layout';

export default function Custom404() {
  return (
    <>
      <Layout>
        <article className="info">
          <h1 className="title">
            404
          </h1>
          <p className="paragraph">
            The page you where looking for doesn’t exist.
          </p>
        </article>
      </Layout>

      <style jsx>{`
        article {
          margin: auto;
        }

        @media screen and (min-width: 1024px) {
          .title {
            font-size: calc(6vw + 6vh);
          }
        }
      `}
      </style>
    </>
  )
}
