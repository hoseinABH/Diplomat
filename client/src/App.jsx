import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { WithHeader } from './routes/WithHeader';
import Spinner from './components/Spinner';
const Home = React.lazy(() => import('./pages/Home'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Cart = React.lazy(() => import('./pages/Cart'));

const App = () => {
  return (
    <Router>
      <Switch>
        <React.Suspense fallback={<Spinner />}>
          <WithHeader exact path="/" component={Home} />
          <WithHeader exact path="/product/:id" component={ProductDetails} />
          <WithHeader exact path="/cart" component={Cart} />
          <Route path="/Login" component={Login} />
          <Route path="/register" component={Register} />
        </React.Suspense>
      </Switch>
    </Router>
  );
};

export default App;
