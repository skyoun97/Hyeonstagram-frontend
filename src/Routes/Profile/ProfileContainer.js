import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { withRouter } from "react-router-dom";
import ProfilePresenter from "./ProfilePresenter";

const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      avatar
      username
      fullName
      isFollowing
      isSelf
      bio
      followersCount
      followingCount
      postsCount
      posts {
        id
        files {
          url
        }
        likeCount
        commentCount
      }
    }
  }
`;

export default withRouter((props) => {
  //const username = props.split("=")[1];
  const username = props.match.params.username;
  const { data, loading } = useQuery(GET_USER, {
    skip: username === undefined,
    variables: { username },
  });

  return <ProfilePresenter data={data} loading={loading} />;
});
