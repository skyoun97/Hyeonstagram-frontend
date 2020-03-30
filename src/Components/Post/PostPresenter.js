import React from "react";
import styled from "styled-components";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { IconHeartFull, IconHeartEmpty, IconComment } from "../Icons";
import TextareaAutoSize from "react-autosize-textarea";

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

const Files = styled.div`
  position: relative;
  padding-bottom: 480px;
  display: flex;
  flex-direction: column:
  align-items: stretch;
  flex-shrink: 0;
  overflow: hidden;
`;

const File = styled.img`
  max-width: 100%;
  width: 100%;
  height: 480px;
  position: absolute;
  top: 0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transform: translateX(
    ${props => props.itemIdx * 600 - props.currentItem * 600}px
  );
  transition: transform 0.4s ease;
`;

const Button = styled.div`
  cursor: pointer;
  padding: 8px;
  display: inline-block;
`;

const Buttons = styled.div`
  padding: 0px 8px;
  margin: 0px;
`;

const Meta = styled.div`
  padding: 0px 16px;
`;

const Comments = styled.div``;

const Comment = styled.div`
  margin: 5px 0px;
`;

const CommentContent = styled.span`
  margin-left: 5px;
`;

const Timestapm = styled.span`
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  margin: 10px 0px;
`;

const AddComment = styled.div`
  border-top: 1px solid rgba(var(--ce3, 239, 239, 239), 1);
  padding: 8px 16px;
`;

const Textarea = styled(TextareaAutoSize)`
  border: none;
  width: 92%;
  display: inline-block;
  font-size: 14px;
  &:focus {
    outline: none;
  }
  resize: none;
`;

const AddCommnentButton = styled.button`
  background: none;
  width: auto;
  margin: auto 0px;
  font-weight: 600;
  font-size: 14px;
  color: ${props => props.theme.blueColor};
  border: none;
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
  setLikeCount,
  currentItem
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
        files.map((file, index) => {
          return (
            <File
              id={file.id}
              src={file.url}
              itemIdx={index}
              currentItem={currentItem}
            />
          );
        })}
    </Files>
    <Buttons>
      <Button>
        {isLiked ? <IconHeartFull /> : <IconHeartEmpty />}
      </Button>
      <Button>
        <IconComment />
      </Button>
    </Buttons>
    <Meta>
      <FatText
        text={likeCount === 1 ? " 1 like" : `${likeCount} likes`}
      />
      <Comments>
        <Comment>
          <FatText text={username} />
          <CommentContent>{caption}</CommentContent>
        </Comment>
        {comments &&
          comments.map(comment => {
            return (
              <Comment>
                <FatText text={comment.user.username} />
                <CommentContent>{comment.text}</CommentContent>
              </Comment>
            );
          })}
      </Comments>
      <Timestapm> {createdAt} </Timestapm>
    </Meta>
    <AddComment>
      <Textarea
        placeholder="Add a comment..."
        maxlength="1000"
        {...newComment}
      />
      <AddCommnentButton> Post </AddCommnentButton>
    </AddComment>
  </Post>
);
