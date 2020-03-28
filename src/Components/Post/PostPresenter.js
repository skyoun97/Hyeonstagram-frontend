import React from "react";
import styled from "styled-components";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartFull, HeartEmpty, Comment } from "../Icons";

const Post = styled.div`
  ${props => props.theme.whiteBox}
  width: 100%;
  max-width: 600px;
  margin: 5px auto;
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Files = styled.div``;

const File = styled.img`
  width: 100%;
`;

const Button = styled.span`
  cursor: pointer;
  padding: 8px;
`;

const Buttons = styled.div``;

const Meta = styled.div`
  padding: 15px;
`;

const Timestapm = styled.span`
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  margin: 10px 0px;
  border-bottom: ${props => props.theme.lightGreyColor} 1px solid;
`;

export default ({
  user: { username, avatar },
  createdAt,
  location,
  caption,
  files,
  isLiked,
  likeCount,
  comments,
  newComment,
  setIsLiked,
  setLikeCount
}) => (
  <Post>
    <Header>
      <Avatar size="sm" url={avatar} />
      <UserColumn>
        <FatText text={username} />
        {location && <Location>{location}</Location>}
      </UserColumn>
    </Header>
    <Files>
      {files &&
        files.map(file => {
          console.log(file.id);
          return <File id={file.id} src={file.url} />;
        })}
    </Files>
    <Meta>
      <Buttons>
        <Button>{isLiked ? <HeartFull /> : <HeartEmpty />}</Button>
        <Button>
          <Comment />
        </Button>
      </Buttons>
      <FatText
        text={likeCount === 1 ? " 1 like" : `${likeCount} likes`}
      />
      <Timestapm> {createdAt} </Timestapm>
    </Meta>
  </Post>
);
