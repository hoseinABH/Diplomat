import React from 'react';
import Header from '../components/Header';
import { Route } from 'react-router-dom';

export const WithHeader = ({ component: Component, ...rest }) => {
  const component = (props) => (
    <>
      <Header />
      <Component {...props} />
    </>
  );

  return <Route {...rest} component={component} />;
};
