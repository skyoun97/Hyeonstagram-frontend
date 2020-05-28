import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import NoAvatarImage from "../Asset/no_avatar.png";
import Skeleton from "react-loading-skeleton";
import ImageLoader from "./ImageLoader";

const AvatarPropTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  url: PropTypes.string,
};

const Avatar = ({ size = "sm", url, className }) => {
  const [loading, setLoading] = useState(true);
  if (url === undefined || url === null) {
    url = noAvatarURl;
  }
  return (
    <>
      <ImageLoader src={url} setLoading={setLoading} />
      {loading ? (
        <Skeleton
          circle={true}
          width={size === "sm" ? 30 : size === "md" ? 50 : 150}
          height={size === "sm" ? 30 : size === "md" ? 50 : 150}
        />
      ) : (
        <Contatiner size={size} url={url} className={className} />
      )}
    </>
  );
};
Avatar.propTypes = AvatarPropTypes;

const noAvatarURl = NoAvatarImage;

const getSize = (size) => {
  let num = 0;
  if (size === "sm") {
    num = 30;
  } else if (size === "md") {
    num = 50;
  } else if (size === "lg") {
    num = 150;
  }
  return `
        width: ${num}px;
        height: ${num}px;
        `;
};

const Contatiner = styled.div`
    ${(props) => getSize(props.size)}
    background-image: url(${(props) => props.url});
    background-size: cover;
    border-radius:50%;
`;

export default Avatar;
