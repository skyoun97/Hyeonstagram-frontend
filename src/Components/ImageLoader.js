import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ImageLoaderPropTypes = {
  src: PropTypes.bool,
  setLoading: PropTypes.func,
};

const ImageLoader = ({ src, setLoading }) => {
  const onLoad = () => {
    setLoading(false);
  };
  return <Img src={src} onLoad={onLoad} />;
};
ImageLoader.propTypes = ImageLoaderPropTypes;

const Img = styled.img`
  display: none;
`;

export default ImageLoader;
