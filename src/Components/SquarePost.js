import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { IconHeartFull, IconCommentFull } from "./Icons";
import FatText from "./FatText";

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: opacity 0.05s linear;
  justify-content: center;
  opacity: 0;
  svg {
    fill: white;
  }
  &:hover {
    opacity: 1;
  }
  &::before {
    content: "";
    padding-bottom: 100%;
    display: inline-block;
    vertical-align: top;
  }
  cursor: pointer;
`;

const Container = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const Number = styled.div`
  color: white;
  display: flex;
  align-items: center;
  &:first-child {
    margin-right: 25px;
  }
`;

const NumberText = styled(FatText)`
  color: white;
  font-size: 19px;
  font-weight: 500;
  margin-left: 7px;
`;

const SquarePost = ({ id, file, likeCount, commentCount }) => {
  return (
    <Container bg={file.url}>
      <Overlay>
        <Number>
          <IconHeartFull />
          <NumberText text={likeCount} />
        </Number>
        <Number>
          <IconCommentFull />
          <NumberText text={commentCount} />
        </Number>
      </Overlay>
    </Container>
  );
};

SquarePost.propTypes = {
  id: PropTypes.string.isRequired,
  file: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default SquarePost;
