import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router';

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
  authState: {
    authenticated: boolean;
    needConfirm: boolean;
  };
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  authState,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (authState.authenticated) {
        return <Component {...props} />;
      }
      if (authState.needConfirm) {
        <Redirect
          to={{ pathname: '/confirm', state: { from: props.location } }}
        />;
      }
      if (!authState.authenticated) {
        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }
    }}
  />
);

export default ProtectedRoute;
