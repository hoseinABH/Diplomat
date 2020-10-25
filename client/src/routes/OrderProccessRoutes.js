import React from 'react';
import { Route } from 'react-router-dom';
import Lazyloading from './LazyLoading';
import ProgressBar from 'react-topbar-progress-indicator';
import Steps from '../components/Steps';
ProgressBar.config({
  barColors: {
    0: '#EE384E',
    '1.0': '#EE384E',
  },
  shadowBlur: 5,
});
const Shipping = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/Shipping')), 500);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);
const Payment = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/Payment')), 500);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);
const PlaceOrder = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/PlaceOrder')), 500);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);

const OrderProccessRoutes = () => {
  return (
    <div className="h-screen bg-white">
      <div className="flex w-full flex-col items-center text-xs">
        <Steps />
        <Route exact path="/shipping" component={Shipping} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/place-order" component={PlaceOrder} />
      </div>
    </div>
  );
};

export default OrderProccessRoutes;
