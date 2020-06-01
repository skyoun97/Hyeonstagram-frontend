import React from "react";
import styled from "styled-components";
import FatText from "../../Components/FatText";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";
import SquarePost from "../../Components/SquarePost";

const SearchPresenterPropType = {
  searchTerm: PropTypes.string,
  loading: PropTypes.bool,
};

const SearchPresenter = ({
  searchTerm,
  loading,
  data,
  updateQuery,
}) => {
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
        {data.searchUser.length === 0 ? (
          <EFatText text={"No Users Found"} />
        ) : (
          <EFatText text={"Users"} />
        )}
        <UserSection>
          {data.searchUser.length !== 0 &&
            data.searchUser.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                url={user.avatar}
                username={user.username}
                fullName={user.fullName}
                isFollowing={user.isFollowing}
                isSelf={user.isSelf}
                updateQuery={updateQuery}
              />
            ))}
        </UserSection>
        {data.searchPost.length === 0 ? (
          <EFatText text={"No Posts Found"} />
        ) : (
          <EFatText text={"Posts"} />
        )}
        <PostSection>
          {data.searchPost.length !== 0 &&
            data.searchPost.map((post) => (
              <SquarePost
                key={post.id}
                id={post.id}
                file={post.files[0]}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
              />
            ))}
        </PostSection>
      </Wrapper>
    );
  }
};

SearchPresenter.propType = SearchPresenterPropType;

const Wrapper = styled.div`
  height: auto;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const UserSection = styled.div`
  margin-bottom: 40px;
  margin: 10px 15px 40px 15px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: 160px;
  grid-auto-rows: 160px;
`;
const PostSection = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;
  @media only screen and (min-width: 768px) {
    grid-gap: 25px;
  }
`;

const EFatText = styled(FatText)`
  color: ${(props) => props.theme.darkGreyColor};
  margin-bottom: 15px;
  font-size: 15px;
  display: block;
  align-self: flex-start;
`;

export default SearchPresenter;
