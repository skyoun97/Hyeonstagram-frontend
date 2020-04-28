import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import PropTypes from "prop-types";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import SquarePost from "../../Components/SquarePost";

const Wrapper = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  margin: 45px 10px;
`;

const Username = styled.span`
  font-size: 28px;
  display: block;
  margin-bottom: 10px;
`;

const Counts = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 25px 0px;
`;

const Count = styled.li`
  &:not(:last-child) {
    margin-right: 35px;
  }
`;

const HeaderColumn = styled.div`
  &:first-child {
    margin: 0px 95px 0px 60px;
  }
`;

const Bio = styled.p`
  margin: 10px 0px;
`;

const EFatText = styled(FatText)`
  color: ${(props) => props.theme.darkGreyColor};
  margin-top: 70px;
  margin-bottom: 15px;
  font-size: 15px;
  display: block;
  align-self: flex-start;
`;

const PostSection = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(3, 280px);
  grid-template-rows: 280px;
  grid-auto-rows: 280px;
`;

const ProfilePresenter = ({ data, loading }) => {
  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && data.seeUser) {
    return (
      <>
        <Header>
          <HeaderColumn>
            <Avatar url={data.seeUser.avatar} size={"lg"} />
          </HeaderColumn>
          <HeaderColumn>
            <Username>{data.seeUser.username}</Username>
            <Counts>
              <Count>
                <FatText text={data.seeUser.postsCount} /> posts
              </Count>
              <Count>
                <FatText text={data.seeUser.followersCount} />{" "}
                followers
              </Count>
              <Count>
                <FatText text={data.seeUser.followingCount} />{" "}
                following
              </Count>
            </Counts>
            <FatText text={data.seeUser.fullName} />
            <Bio>{data.seeUser.bio}</Bio>
          </HeaderColumn>
        </Header>
        {data.seeUser.posts.length === 0 ? (
          <EFatText text={"No Photos"} />
        ) : (
          <EFatText text={"Photos"} />
        )}
        <PostSection>
          {data.seeUser.posts.length !== 0 &&
            data.seeUser.posts.map((post) => (
              <SquarePost
                key={post.id}
                id={post.id}
                file={post.files[0]}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
              />
            ))}
        </PostSection>
      </>
    );
  } else {
    return <FatText text={"Cannot find user"} />;
  }
};

ProfilePresenter.propType = {
  id: PropTypes.string,
};

export default ProfilePresenter;
