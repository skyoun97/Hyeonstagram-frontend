import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import PropTypes from "prop-types";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import SquarePost from "../../Components/SquarePost";
import FollowButton from "../../Components/FollowButton";
import Helmet from "react-helmet";
import Button from "../../Components/Button";

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
  min-height: 15vh;
`;

const Username = styled.span`
  font-size: 28px;
  display: block;
  margin-bottom: 10px;
  margin-right: 50px;
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

const UsernameRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  margin: 20px auto 80px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;
  @media only screen and (min-width: 768px) {
    grid-gap: 25px;
  }
`;

const ProfilePresenter = ({ data, loading, logOut }) => {
  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && data.seeUser) {
    return (
      <>
        <Helmet>
          <title> {data.seeUser.username} | Petstagram</title>
        </Helmet>
        <Header>
          <HeaderColumn>
            <Avatar url={data.seeUser.avatar} size={"lg"} />
          </HeaderColumn>
          <HeaderColumn>
            <UsernameRow>
              <Username>{data.seeUser.username}</Username>
              {data.seeUser.isSelf ? (
                <Button text={"LogOut"} onClick={logOut} />
              ) : (
                <FollowButton
                  id={data.seeUser.id}
                  isFollowing={data.seeUser.isFollowing}
                />
              )}
            </UsernameRow>
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
