import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router';

interface ProtectedRouteProps extends RouteProps {
  component: any;
  isLogin: boolean;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  isLogin,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (isLogin) {
        return <Component {...props} />;
      }
      return (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      );
    }}
  />
);

export default ProtectedRoute;
