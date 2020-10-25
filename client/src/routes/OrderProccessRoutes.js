import React from 'react';
import Lazyloading from './LazyLoading';
import ProgressBar from 'react-topbar-progress-indicator';
import { WithSteps } from './WithSteps';
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
    <>
      <WithSteps exact path="/shipping" component={Shipping} />
      <WithSteps exact path="/payment" component={Payment} />
      <WithSteps exact path="/place-order" component={PlaceOrder} />
    </>
  );
};

export default OrderProccessRoutes;
