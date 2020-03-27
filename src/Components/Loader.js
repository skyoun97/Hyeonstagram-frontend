import React from "react";
import styled, { keyframes } from "styled-components";
import { Logo } from "./Icons";

const Animation = keyframes`
    from{
        opacity:0;
    }
    50% {
        opacity:1;
    }
    to{
        opacity:0;
    }
`;

const Loader = styled.div`
  animation: ${Animation} 1s linear infinite;
`;

export default () => (
  <Loader>
    <Logo size={36} />
  </Loader>
);
