import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useInput from "../../Hooks/useInput";
import PostPresenter from "./PostPresenter";

const PostContainer = ({
  id,
  user,
  createdAt,
  location,
  caption,
  files,
  isLiked,
  likeCount,
  comments
}) => {
  const [isLiked_, setIsLiked] = useState(isLiked);
  const [likeCount_, setLikeCount] = useState(likeCount);
  const [currentItem, setCurrentItem] = useState(0);

  const slide = () => {
    const totalFiles = files.length;
    if (currentItem === totalFiles - 1) {
      setCurrentItem(0);
    } else {
      setCurrentItem(currentItem + 1);
    }
    console.log(currentItem);
  };
  const comment = useInput("");

  useEffect(() => {
    setTimeout(() => {
      slide();
    }, 5000);
  }, [currentItem]);

  return (
    <PostPresenter
      user={user}
      createdAt={createdAt}
      location={location}
      caption={caption}
      files={files}
      isLiked={isLiked_}
      likeCount={likeCount_}
      comments={comments}
      newComment={comment}
      setIsLiked={setIsLiked}
      setLikeCount={setLikeCount}
      currentItem={currentItem}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  location: PropTypes.string,
  caption: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  isLiked: PropTypes.bool.isRequired,
  likeCount: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.shape({
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired
};

export default PostContainer;
