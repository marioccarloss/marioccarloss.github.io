import { gql } from "@apollo/client";
import SeoFragment from "./seo/query-seo";

export const QUERY_PORTFOLIO = gql`
  query {
    portfolios {
      title
      description
    }
    projects {
      order
      title
      description
      url
      image {
        url
      }
    }
    ${SeoFragment}
  }
`;
