import React from 'react';
import Routes from './routes/Routes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Switch>
        <Routes />
      </Switch>
    </Router>
  );
};

export default App;
