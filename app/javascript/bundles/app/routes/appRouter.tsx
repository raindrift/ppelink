// Libraries
import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

// Components
import Home from '../components/Home';
import Signup from '../components/Signup';

export default (props) => (
  <Switch>

    <Route exact path="/">
      <Home {...props} />
    </Route>

    <Route exact path="/hospital_signup">
      <Signup {...props} />
    </Route>

    <Route exact path="/donor_signup">
      <Signup {...props} />
    </Route>

  </Switch>
);
