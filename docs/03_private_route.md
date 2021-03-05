## React Router

In this step, we'll setup the routes to the pages in our React app, e.g. Home Page, Login Page, Register Page etc.

There are two different types of Routes, one of them called `PrivateRoute` .

- Create `src/routes/PrivateRoute.js`:

```jsx
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) return <Route {...rest} />;
  delete rest.component;
  return <Route {...rest} render={(props) => <Redirect to="/login" />} />;
};

export default PrivateRoute;
```

- In this step, we'll setup the routes to the pages in our React app, e.g. Home Page, Login Page, Register Page etc.

  In `src/App.js`:

```jsx
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
```

Good job! [Back to instructions](/README.md)
