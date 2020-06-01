import React from "react";
import styled from "styled-components";
import FatText from "./FatText";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import Button from "./Button";
import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";

const UserCardPropTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  url: PropTypes.string,
  isSelf: PropTypes.bool.isRequired,
};

const UserCard = ({
  id,
  fullName,
  username,
  isFollowing,
  url,
  isSelf,
  updateQuery,
}) => (
  <Card>
    <ELink to={`/${username}`}>
      <EAvatar url={url} size={"md"} />
      <FatText text={username} />
      <GreyText>{fullName}</GreyText>
    </ELink>
    {!isSelf ? (
      <FollowButton
        id={id}
        isFollowing={isFollowing}
        updateQuery={updateQuery}
      />
    ) : (
      <Button text={"My account"} disabled={true} />
    )}
  </Card>
);
UserCard.propTypes = UserCardPropTypes;

const Card = styled.div`
  ${(props) => props.theme.whiteBox}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const EAvatar = styled(Avatar)`
  margin-bottom: 5px;
`;

const ELink = styled(Link)`
  color: inherit;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GreyText = styled.span`
  margin-top: 2px;
  font-weight: 400;
  color: ${(props) => props.theme.darkGreyColor};
`;

export default UserCard;
