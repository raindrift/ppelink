// Libraries
import React from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Components
import Home from '../components/Home';
import SignupOrganization from '../components/SignupOrganization';
import AddContact from '../components/AddContact';

const customHistory = createBrowserHistory();

export default (props) => (
  <Router history={customHistory}>
    <Switch>
      <Route exact path="/">
        <Home {...props} />
      </Route>

      <Route exact path="/hospital_signup">
        <SignupOrganization {...props} />
      </Route>

      <Route exact path="/donor_signup">
        <SignupOrganization {...props} />
      </Route>

      <Route exact path="/add_contact">
        <AddContact {...props} />
      </Route>
    </Switch>
  </Router>
);
