import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { WithHeader } from './routes/WithHeader';
import { WithoutHeader } from './routes/WithoutHeader';
const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const App = () => {
  return (
    <Router>
      <Switch>
        <React.Suspense fallback="Loading...">
          <WithHeader exact path="/" component={Home} />
          <WithoutHeader path="/Login" component={Login} />
          <WithoutHeader path="/register" component={Register} />
        </React.Suspense>
      </Switch>
    </Router>
  );
};

export default App;
