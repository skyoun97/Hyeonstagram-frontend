import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.span`
  font-weight: 600;
  color: ${(props) => props.color};
`;

const FatText = ({ text, color, className }) => (
  <Text className={className} color={color}>
    {text}
  </Text>
);

FatText.proppTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default FatText;
