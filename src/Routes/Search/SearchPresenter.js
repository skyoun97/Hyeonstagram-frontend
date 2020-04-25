import React from "react";
import styled from "styled-components";
import FatText from "../../Components/FatText";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";
import SquarePost from "../../Components/SquarePost";

const Wrapper = styled.div`
  height: 50vh;
  text-align: center;
`;

const UserSection = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, 160px);
  grid-template-rows: 160px;
  grid-auto-rows: 160px;
`;
const PostSection = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(3, 280px);
  grid-template-rows: 280px;
  grid-auto-rows: 280px;
`;

const SearchPresenter = ({ searchTerm, loading, data }) => {
  if (searchTerm === undefined) {
    return (
      <Wrapper>
        <FatText text={"Search for something"} />
      </Wrapper>
    );
  } else if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && (data.searchUser || data.searchPost)) {
    return (
      <Wrapper>
        <UserSection>
          {data.searchUser.length === 0 ? (
            <FatText text={"No Users Found"} />
          ) : (
            data.searchUser.map((user) => (
              <UserCard
                id={user.id}
                url={user.avatar}
                username={user.username}
                fullName={user.fullName}
                isFollowing={user.isFollowing}
                isSelf={user.isSelf}
              />
            ))
          )}
        </UserSection>
        <PostSection>
          {data.searchPost.length === 0 ? (
            <FatText text={"No Posts Found"} />
          ) : (
            data.searchPost.map((post) => (
              <SquarePost
                id={post.id}
                file={post.files[0]}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
              />
            ))
          )}
        </PostSection>
      </Wrapper>
    );
  }
};

SearchPresenter.propType = {
  searchTerm: PropTypes.string,
  loading: PropTypes.bool,
};

export default SearchPresenter;
