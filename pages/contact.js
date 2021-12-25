import client from "../apollo/apolloClient";
import { QUERY_CONTACT } from '../apollo/queries/query-contact';
import FormContact from '../components/molecule/FormContact';
import Layout from '../components/template/Layout';

export default function Contact({contact}) {

  const info = contact?.contacts[0];

  return (
    <>
      <Layout structuredData={contact?.schemata[0]}>
        <article className="info">
          <h1 className="title" dangerouslySetInnerHTML={{ __html: info?.title }}/>
          <p className="paragraph" dangerouslySetInnerHTML={{ __html: info?.description }}/>
        </article>
        <FormContact />
      </Layout>

      <style jsx>{`
        h1 {
          margin-top: 0;
        }
        @media screen and (min-width: 1024px) {
          .info {
            margin-bottom: auto;
          }
        }
      `}
      </style>
    </>
  )
}

export async function getStaticProps() {
  const {data: contact} = await client.query({
    query: QUERY_CONTACT,
  });

  return {
    props: {
      contact
    },
    revalidate: 1,
  }
}

