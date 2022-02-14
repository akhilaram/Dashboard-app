import {
  gql,
} from "@apollo/client";

export const DASHBOARD_LIST = gql`
  query {
    characters(page: 1) {
      results {
        id
        name
        gender
        status
        species
        type
      }
    }
  }
`;
