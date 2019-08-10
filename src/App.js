import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/Main/Main';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </Router>
);

export default App;
