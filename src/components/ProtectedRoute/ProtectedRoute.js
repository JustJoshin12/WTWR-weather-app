import React from "react";
import { Route, Redirect } from "react-router-dom";
import  AppContext  from "../../contexts/AppContext";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const value = React.useContext(AppContext);
  return (
    <Route
      {...props}
      render={(props) =>
        value.state.loggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default ProtectedRoute;