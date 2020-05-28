import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Feed from "../Pages/Feed";
import Auth from "../Pages/Auth";
import Explore from "../Pages/Explore";
import Profile from "../Pages/Profile";
import Search from "../Pages/Search";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";
import { LOG_OUT } from "../Pages/Auth/AuthQueries";
import Header from "../Components/Header";

const QUERY_CHECK_TOKEN = gql`
  {
    checkToken
  }
`;

const RoutesListWithLogin = [
  {
    path: "/",
    component: Feed,
  },
  {
    path: "/explore",
    component: Explore,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/:username",
    component: Profile,
  },
];

const Routes = ({ isLoggedIn }) => {
  const { data } = useQuery(QUERY_CHECK_TOKEN);
  const [logOutMutation] = useMutation(LOG_OUT);

  if (isLoggedIn && data && data.checkToken === false) {
    logOutMutation();
  }

  return (
    <>
      {isLoggedIn && <Header />}
      <Switch>
        {!isLoggedIn ? (
          <Route exact path="/" component={Auth} />
        ) : (
          RoutesListWithLogin.map((route) => (
            <Route exact {...route} />
          ))
        )}
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
};

Routes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Routes;
