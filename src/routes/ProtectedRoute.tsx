import React from "react";
import { RouteProps, Route, Redirect } from "react-router";
import { useAuthListener } from "./useAuthStatus";

interface ProtectedRouteProps extends RouteProps {
  component: any;
  isLogin: boolean;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  isLogin,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLogin) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
