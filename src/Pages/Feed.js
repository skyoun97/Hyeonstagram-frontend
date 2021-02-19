import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import Post from "../Components/Post";
import { toast } from "react-toastify";

export default () => {
  const limit = 3;
  const { data, loading, fetchMore } = useQuery(QUERY_FEED, {
    variables: {
      offset: 0,
      limit,
    },
    fetchPolicy: "cache-and-network",
  });

  const [isLast, setIsLast] = useState(false);
  const [target, setTarget] = useState(null);

  const loadMore = () =>
    fetchMore({
      variables: {
        offset: data.seeFeed.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (
          !fetchMoreResult ||
          fetchMoreResult.seeFeed.length < limit
        ) {
          toast.success("모든 피드를 확인했습니다!");
          setIsLast(true);
          return prev;
        }
        return Object.assign({}, prev, {
          seeFeed: [...prev.seeFeed, ...fetchMoreResult.seeFeed],
        });
      },
    });

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(_onIntersect, {
        threshold: 1,
      });
      observer.observe(target);
    }

    return () => observer && observer.disconnect();
  }, [target, data, isLast]);

  const _onIntersect = ([entry]) => {
    if (entry.isIntersecting && !loading && !isLast) {
      console.log(data.seeFeed);
      loadMore();
    }
  };

  return (
    <>
      <Helmet>
        <title>Feed | Petstagram</title>
      </Helmet>
      <Wrapper>
        {data &&
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
        {loading && <Loader />}
        {!loading && <div ref={setTarget} />}
        {isLast && <div>모든 게시글을 보았습니다.</div>}
      </Wrapper>
    </>
  );
};

const QUERY_FEED = gql`
  query seeFeed($offset: Int!, $limit: Int!) {
    seeFeed(offset: $offset, limit: $limit)
      @connection(key: "seeFeed") {
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
  min-height: 60vh;
`;
