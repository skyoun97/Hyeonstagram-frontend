import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      user {
        id
        avatar
        username
      }
      createdAt
      location
      caption
      files {
        id
        url
      }
      isLiked
      likeCount
      comments {
        text
        createdAt
        user {
          username
        }
      }
    }
  }
`;

export default () => {
  const { data, loading } = useQuery(FEED_QUERY);
  console.log(data, loading);
  return;
};
