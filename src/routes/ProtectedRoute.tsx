import React from "react";
import { RouteProps, Route, Redirect } from "react-router";
import { useAuthListener } from "./useAuthStatus";

interface ProtectedRouteProps extends RouteProps {
  component: any;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const loggedIn = useAuthListener();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedIn) {
          return <Component {...props} />;
        } else {
          console.log(1);
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
