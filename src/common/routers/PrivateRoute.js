import React from "react";
import {
  // BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useRouteMatch
} from "react-router-dom";

// pages
// import Fallback from "../../pages/General/SpecialFallback";

import { useHistory } from 'react-router'
// import Dashboard from "../../pages/General/CommonDashboard";
import Login from "../../pages/General/CommonSignIn";
import Private from './Private'
import NotFound from "../../pages/General/CommonNotFound";
import Menu from './../../pages/MgPanel/Menu/index'
import Cashier from '../../pages/MgPanel/Cashier/index'
import Checkout from '../../pages/MgPanel/Checkout/index'
// import {
//   DashboardLayout,
// } from "../../components";


export default function TheRouter() {
  const history = useHistory()
  let { path, url } = useRouteMatch();
  console.log("🚀 ~ file: PrivateRoute.js ~ line 47 ~ TheRouter ~ url", url)
  console.log("🚀 ~ file: PrivateRoute.js ~ line 47 ~ TheRouter ~ path", path)

  return (
    <React.Fragment>
      <Switch>
        <Route exact path={`/`} render={() => <Redirect to={`/login`} />} />
        <Route path={`/login`} component={Login} />
        <Route path={`/menu`} component={Menu} />
        <Route path={`/cashier`} component={Cashier} />
        <Route path={`/checkout`} component={Checkout} />
        {/* <Private path={`/dashboard`}>
          <DashboardLayout history={history}>
            <Dashboard />
          </DashboardLayout>
        </Private> */}
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}