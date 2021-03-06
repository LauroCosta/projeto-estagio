import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import Layout from '../layout';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <>
            <Layout>
              <Component />
            </Layout>
          </>
        ) : (
          <>
            <Redirect
              to={{
                pathname: isPrivate ? '/' : '/dashboard',
                state: { from: location },
              }}
            />
          </>
        );
      }}
    />
  );
};

export default Route;
