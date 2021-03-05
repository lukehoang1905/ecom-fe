import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AdminRoute = ({ ...rest }) => {
  const isAdmin = useSelector((state) => state.user.isAdmin);
  if (isAdmin) return <Route {...rest} />;
  delete rest.component;
  return <Route {...rest} render={(props) => <Redirect to="/" />} />;
};

export default AdminRoute;
