import React from 'react';
import Header from '../components/Header';
import { Route } from 'react-router-dom';
import Footer from '../components/Footer';

export const WithHeader = ({ component: Component, ...rest }) => {
  const component = (props) => (
    <>
      <Header />
      <Component {...props} />
      <Footer />
    </>
  );

  return <Route {...rest} component={component} />;
};
