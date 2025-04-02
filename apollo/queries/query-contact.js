import { gql } from "@apollo/client";
import SeoFragment from "./seo/query-seo";

export const QUERY_CONTACT = gql`
  query {
    contacts {
      title
      description
    }
    ${SeoFragment}
  }
`;
