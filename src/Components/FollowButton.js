import React, { useState } from "react";
import { gql } from "apollo-boost";
import PropType from "prop-types";
import Button from "./Button";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";

const FollowButtonPropTypes = {
  id: PropType.string.isRequired,
  isFollowing: PropType.bool.isRequired,
};

const FollowButton = ({ id, isFollowing }) => {
  const [isFollowingS, setIsFollowing] = useState(isFollowing);
  const [followMutation] = useMutation(FOLLOW, {
    variables: { id },
  });
  const [unfollowMutation] = useMutation(UNFOLLOW, {
    variables: { id },
  });

  const toggleFollow = async (e) => {
    setIsFollowing(!isFollowingS);
    try {
      if (isFollowingS) {
        await unfollowMutation();
      } else {
        await followMutation();
      }
      //console.log(updateQuery());
    } catch {
      setIsFollowing(!isFollowingS);
      toast.error("문제가 발생했습니다.");
    }
  };

  return (
    <Button
      text={isFollowingS ? "Unfollow" : "Follow"}
      isDark={isFollowingS ? true : false}
      onClick={toggleFollow}
    ></Button>
  );
};

FollowButton.propTypes = FollowButtonPropTypes;

const FOLLOW = gql`
  mutation follow($id: String!) {
    follow(id: $id)
  }
`;

const UNFOLLOW = gql`
  mutation unfollow($id: String!) {
    unfollow(id: $id)
  }
`;

export default FollowButton;
