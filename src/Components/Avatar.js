import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const noAvatarURl =
  "https://www.uclg-planning.org/sites/default/files/styles/featured_home_left/public/no-user-image-square.jpg?itok=PANMBJF-";

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
    background-image:url(${(props) => props.url});
    background-size: cover;
    border-radius:50%;
`;

const Avatar = ({ size = "sm", url, className }) => {
  if (url === undefined || url === null) {
    url = noAvatarURl;
  }
  return <Contatiner size={size} url={url} className={className} />;
};

Avatar.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  url: PropTypes.string,
};

export default Avatar;
