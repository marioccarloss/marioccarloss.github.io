import Image from 'next/image';
import Link from 'next/link';
import client from "../apollo/apolloClient";
import { QUERY_HOME } from '../apollo/queries/query-home';
import Badge from '../components/atoms/Badge';
import Layout from '../components/template/Layout';

type HomeProps = {
  home: {
    informations: {
      title: string;
      description: string;
      photo: {
        url: string;
      };
    }[];
    schemata: {
      title: string;
      description: string;
    }[];
  };
};

export default function Home({ home }: HomeProps) {
  const info = home?.informations[0];

  return (
    <Layout structuredData={home?.schemata[0]}>
      <article className="info">
        <h1 className="title" dangerouslySetInnerHTML={{ __html: info?.title }}/>
        <p className="paragraph" dangerouslySetInnerHTML={{ __html: info?.description }}/>
        <Link href="/contact" className="btn">
          Get in touch
        </Link>
      </article>
      <figure className="cover__image">
        {info?.photo?.url && (
          <Image
            src={info?.photo?.url}
            width={618.88}
            height={693.67}
            layout="responsive"
            loading="eager"
            alt="marioccarloss"
          />
        )}
        <Badge />
      </figure>
    </Layout>
  )
}

export async function getStaticProps() {
  const {data: home} = await client.query({
    query: QUERY_HOME,
  });

  return {
    props: {
      home
    },
    revalidate: 1,
  }
}
