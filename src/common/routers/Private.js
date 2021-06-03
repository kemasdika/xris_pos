import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import {
  Route,
  // Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
// import { getAccessLog } from "helpers";

// pages
// import NotFound from "../../pages/General/CommonNotFound";

function PrivateRoute({children, component: Components, auth, ...rest }) {
  // const isAuthenticated = getAccessLog('user_data');
  // const [authCheck, setAuthCheck] = useState(isAuthenticated?._key ? true : false);
  // const authentication = useSelector(state => state.authentication)

  // useEffect(() => {
  //   const checkMoreData = authentication?.user?.data?._key ? true : false
  //   setAuthCheck(checkMoreData);
  // }, [authentication]);

  const isAuthenticate = localStorage.getItem('access_token')
  return (
    <Route
      {...rest}
    >
      {children}
      {  isAuthenticate
        ? <Components {...rest}/>
        : (
          < Redirect to={
            {
              pathname: '/login',
              // state: { from: props.location }
            }
          }
          />
        )}
    </Route>
  )
};

export default withRouter(PrivateRoute)