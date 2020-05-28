import React from "react";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "react-apollo-hooks";
import { withRouter } from "react-router-dom";
import ProfilePresenter from "./ProfilePresenter";
import { LOG_OUT } from "../Auth/AuthQueries";

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

  const [logOutMutation] = useMutation(LOG_OUT);

  return (
    <ProfilePresenter
      data={data}
      logOut={logOutMutation}
      loading={loading}
    />
  );
});
