import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { WithHeader } from './routes/WithHeader';
import Spinner from './components/Spinner';
const Checkout = React.lazy(() => import('./pages/Checkout'));
const Home = React.lazy(() => import('./pages/Home'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Profile = React.lazy(() => import('./pages/Profile'));

const App = () => {
  return (
    <Router>
      <Switch>
        <React.Suspense fallback={<Spinner />}>
          <WithHeader exact path="/" component={Home} />
          <WithHeader exact path="/product/:id" component={ProductDetails} />
          <WithHeader exact path="/cart/:id?" component={Cart} />
          <WithHeader exact path="/shipping" component={Checkout} />
          <WithHeader path="/profile" component={Profile} />
          <Route path="/Login" component={Login} />
          <Route path="/register" component={Register} />
        </React.Suspense>
      </Switch>
    </Router>
  );
};

export default App;
