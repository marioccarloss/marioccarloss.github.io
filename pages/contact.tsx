import { GetStaticProps } from 'next';
import client from "../apollo/apolloClient";
import { QUERY_CONTACT } from '../apollo/queries/query-contact';
import FormContact from '../components/molecule/FormContact';
import Layout from '../components/template/Layout';
import { ContactPageProps } from '../types/contact';

export default function Contact({ contact }: ContactPageProps): JSX.Element {
  const info = contact?.contacts?.[0];
  const schema = contact?.schemata?.[0]?.schema;
  const structuredData = schema ? (typeof schema === 'string' ? JSON.parse(schema) : schema) : null;

  return (
    <>
      <Layout structuredData={structuredData}>
        <article className="info">
          <h1 className="title" dangerouslySetInnerHTML={{ __html: info?.title || 'Contact' }}/>
          <p className="paragraph" dangerouslySetInnerHTML={{ __html: info?.description || 'Get in touch with me' }}/>
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
  );
}

export const getStaticProps: GetStaticProps<ContactPageProps> = async () => {
  const { data: contact } = await client.query({
    query: QUERY_CONTACT,
  });

  return {
    props: {
      contact
    },
    revalidate: 1,
  };
};
