import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import Post from "../Components/Post";

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;
`;

export default () => {
  const { data, loading } = useQuery(FEED_QUERY);
  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading &&
        data &&
        data.seeFeed &&
        data.seeFeed.map(post => (
          <Post
            key={post.id}
            id={post.id}
            user={post.user}
            createdAt={post.createdAt}
            location={post.location}
            caption={post.caption}
            files={post.files}
            isLiked={post.isLiked}
            likeCount={post.likeCount}
            comments={post.comments}
          />
        ))}
    </Wrapper>
  );
};
