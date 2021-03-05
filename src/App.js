import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicNavbar from "./components/PublicNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./routes/PrivateRoute";

import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {isAuthenticated === null ? (
        <p>Loading...</p>
      ) : (
        <Router>
          {/* <PublicNavbar /> */}
          {/* <AlertMsg /> */}
          <Switch>
            {/* <Route exact path="/" component={HomePage} /> */}
            {/* <Route exact path="/login" component={LoginPage} /> */}
            {/* <Route exact path="/register" component={RegisterPage} /> */}

            {/* <PrivateRoute exact path="/user" component={UserLayout} /> */}
            {/* <AdminRoute exact path="/admin" component={AdminLayout} /> */}
            {/* <Route component={NotFoundPage} /> */}
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
