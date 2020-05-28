import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FatTextProppTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

const FatText = ({ text, color, className }) => (
  <Text className={className} color={color}>
    {text}
  </Text>
);

const Text = styled.span`
  font-weight: 600;
  color: ${(props) => props.color};
`;

FatText.proppTypes = FatTextProppTypes;

export default FatText;
