import React from 'react'
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import NotFound from "../../pages/General/CommonNotFound";
import MainAdminRoute from "./PrivateRoute"

const AdminRoute = () => {
  return (
    <Switch>
      <Route path={`/`} component={MainAdminRoute} />
      <Route component={NotFound} />
    </Switch>
  )
};

export default AdminRoute;