import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import Post from "../Components/Post";

export default () => {
  const { data, loading } = useQuery(FEED_QUERY);
  return (
    <Wrapper>
      <Helmet>
        <title>Feed | Petstagram</title>
      </Helmet>
      {loading && <Loader />}
      {!loading &&
        data &&
        data.seeFeed &&
        data.seeFeed.map((post) => (
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
            commentCount={post.commentCount}
            comments={post.comments}
          />
        ))}
    </Wrapper>
  );
};

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
      commentCount
      comments {
        id
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
