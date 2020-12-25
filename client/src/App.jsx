import React from 'react';
import Routes from './routes/Routes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
