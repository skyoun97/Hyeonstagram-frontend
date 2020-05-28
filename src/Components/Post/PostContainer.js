import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useInput from "../../Hooks/useInput";
import PostPresenter from "./PostPresenter";
import { useMutation } from "react-apollo-hooks";
import { TOGGLE_LIKE, ADD_COMMENT } from "./PostQueries";
import { toast } from "react-toastify";

const PostContainer = ({
  id,
  user,
  createdAt,
  location,
  caption,
  files,
  isLiked,
  likeCount,
  comments,
}) => {
  const [isLikedS, setIsLiked] = useState(isLiked);
  const [likeCountS, setLikeCount] = useState(likeCount);
  const [currentItem, setCurrentItem] = useState(0);
  const [selfComments, setSelfComments] = useState([]);
  const comment = useInput("");
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: { postId: id },
  });
  const [addCommentMuation] = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: comment.value },
  });
  const slideNext = () => {
    const totalFiles = files.length;
    if (currentItem < totalFiles - 1) {
      setCurrentItem(currentItem + 1);
    }
  };
  const slidePrev = () => {
    if (currentItem > 0) {
      setCurrentItem(currentItem - 1);
    }
  };

  const toggleLike = () => {
    if (isLikedS === true) {
      setLikeCount(likeCountS - 1);
    } else if (isLikedS === false) {
      setLikeCount(likeCountS + 1);
    }

    try {
      setIsLiked(!isLikedS);
      toggleLikeMutation();
    } catch (err) {
      toast.error("좋아요 요청을 실패했습니다." + err);
      setIsLiked(!isLikedS);
    }
  };

  const onKeyPress = async (e) => {
    const { which } = e;
    if (which === 13) {
      e.preventDefault();
      sendComment();
    }
  };

  const sendComment = async () => {
    const text = comment.value;
    if (text === "") {
      return;
    }
    try {
      const {
        data: { addComment },
      } = await addCommentMuation();
      comment.onChange({ target: { value: "" } });
      setSelfComments([...selfComments, addComment]);
    } catch {
      toast.error("댓글을 추가하는 과정에서 문제가 발생했습니다.");
    }
  };
  return (
    <PostPresenter
      user={user}
      createdAt={createdAt}
      location={location}
      caption={caption}
      files={files}
      isLiked={isLikedS}
      likeCount={likeCountS}
      comments={comments}
      newComment={comment}
      currentItem={currentItem}
      toggleLike={toggleLike}
      onKeyPress={onKeyPress}
      sendComment={sendComment}
      selfComments={selfComments}
      slideNext={slideNext}
      slidePrev={slidePrev}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  location: PropTypes.string,
  caption: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  isLiked: PropTypes.bool.isRequired,
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.shape({
        username: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default PostContainer;
