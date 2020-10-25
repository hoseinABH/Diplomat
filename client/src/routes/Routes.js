import React from 'react';
import { Route } from 'react-router-dom';
import Lazyloading from './LazyLoading';
import { WithHeader } from './WithHeader';
import ProgressBar from 'react-topbar-progress-indicator';

ProgressBar.config({
  barColors: {
    0: '#EE384E',
    '1.0': '#EE384E',
  },
  shadowBlur: 5,
});

const Checkout = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/Checkout')), 500);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);

const Home = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/Home')), 0);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);
const ProductDetails = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/ProductDetails')), 500);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);
const Profile = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/Profile')), 500);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);
const Login = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/Login')), 500);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);
const Register = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/Register')), 500);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);
const Cart = Lazyloading(
  () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import('../pages/Cart')), 500);
    });
  },
  {
    fallback: <ProgressBar />,
  }
);
const Routes = () => (
  <>
    <WithHeader exact path="/" component={Home} />
    <WithHeader exact path="/product/:id" component={ProductDetails} />
    <WithHeader exact path="/cart/:id?" component={Cart} />
    <WithHeader exact path="/shipping" component={Checkout} />
    <WithHeader path="/profile" component={Profile} />
    <Route path="/Login" component={Login} />
    <Route path="/register" component={Register} />
  </>
);

export default Routes;
