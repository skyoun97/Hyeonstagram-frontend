import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius: 0px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
    text-align: center;
    padding 20px 0px;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

export default ({
  action,
  setAction,
  firstName,
  lastName,
  username,
  email,
  secret,
  onSummit
}) => (
  <Wrapper>
    <Form>
      {action === "logIn" && (
        <form onSubmit={onSummit}>
          <Input placeholder={"Email"} {...email} type="email" />
          <Button text={"Log in"} />
        </form>
      )}
      {action === "signUp" && (
        <form onSubmit={onSummit}>
          <Input placeholder={"First name"} {...firstName} />
          <Input placeholder={"Last name"} {...lastName} />
          <Input placeholder={"Email"} {...email} type="email" />
          <Input placeholder={"Username"} {...username} />
          <Button text={"Sign up"} />
        </form>
      )}
      {action === "confirm" && (
        <form onSubmit={onSummit}>
          <Input placeholder={"Secret code"} required {...secret} />
          <Button text={"Confirm"} />
        </form>
      )}
    </Form>

    <StateChanger>
      {action === "logIn" ? (
        <>
          Don't have an account?{" "}
          <Link onClick={() => setAction("signUp")} to={""}>
            Sign up
          </Link>
        </>
      ) : (
        <>
          Have an account?{" "}
          <Link onClick={() => setAction("logIn")} to={""}>
            Log in
          </Link>
        </>
      )}
    </StateChanger>
  </Wrapper>
);
