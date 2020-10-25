import React from 'react';
import Routes from './routes/Routes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import OrderProccessRoutes from './routes/OrderProccessRoutes';
const App = () => {
  return (
    <Router>
      <Switch>
        <Routes />
      </Switch>
      <OrderProccessRoutes />
    </Router>
  );
};

export default App;
