import { gql } from "@apollo/client";
import SeoFragment from "./seo/query-seo";

export const QUERY_HOME = gql`
  query {
    informations {
      title
      description
      photo {
        url
      }
    }
    ${SeoFragment}
  }
`;
