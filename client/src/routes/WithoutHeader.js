import React from 'react';
import { Route } from 'react-router-dom';

export const WithoutHeader = ({ component: Component, ...rest }) => {
  const component = (props) => <Component {...props} />;
  return <Route {...rest} component={component} />;
};
