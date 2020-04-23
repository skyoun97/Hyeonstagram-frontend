import { gql } from "apollo-boost";

export const ME = gql`
  {
    me {
      username
      posts {
        caption
      }
    }
  }
`;
