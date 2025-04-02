import client from "../apollo/apolloClient";
import { QUERY_PORTFOLIO } from '../apollo/queries/query-portfolio';
import CarouselPortfolio from '../components/organism/CarouselPortfolio';
import Layout from '../components/template/Layout';

type PortfolioProps = {
  portfolio: {
    portfolios: {
      title: string;
      description: string;
      images: {
        url: string;
      }[];
    }[];
    projects: {
      title: string;
      description: string;
      images: {
        url: string;
      }[];
    }[];
    schemata: {
      title: string;
      description: string;
    }[];
  };
};

export default function Portfolio({portfolio}: PortfolioProps) {

  const projects = portfolio?.projects;
  const info = portfolio?.portfolios[0];

  return (
    <>
      <Layout structuredData={portfolio?.schemata[0]}>
        <article className="info">
          <h1 className="title" dangerouslySetInnerHTML={{ __html: info?.title }}/>
          <p className="paragraph" dangerouslySetInnerHTML={{ __html: info?.description }}/>
        </article>
        <CarouselPortfolio portfolio={projects} />
      </Layout>

      <style jsx>{`
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
  const {data: portfolio} = await client.query({
    query: QUERY_PORTFOLIO,
  });

  return {
    props: {
      portfolio
    },
    revalidate: 1,
  }
}
