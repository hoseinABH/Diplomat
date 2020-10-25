import React from 'react';
import { Route } from 'react-router-dom';
import Steps from '../components/Steps';

export const WithSteps = ({ component: Component, ...rest }) => {
  const component = (props) => (
    <div className="h-screen bg-white">
      <div className="flex w-full flex-col items-center text-xs">
        <Steps />
        <Component {...props} />
      </div>
    </div>
  );

  return <Route {...rest} component={component} />;
};
