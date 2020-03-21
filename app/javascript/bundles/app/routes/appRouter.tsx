// Libraries
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Components
import Home from '../components/home';

export default () => (
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);
