import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background-color: ${(props) =>
    props.isDark ? props.theme.darkGreyColor : props.theme.blueColor};
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
`;

const Button = ({ text, isDark, className, onClick }) => (
  <Container isDark={isDark} className={className} onClick={onClick}>
    {text}
  </Container>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
};

export default Button;
