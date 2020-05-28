import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonPropTypes = {
  text: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
};

const Button = ({ text, className, onClick, disabled }) => (
  <Container
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </Container>
);

Button.propTypes = ButtonPropTypes;

const Container = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background-color: ${(props) =>
    props.disabled
      ? props.theme.darkGreyColor
      : props.theme.blueColor};
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
`;

export default Button;
