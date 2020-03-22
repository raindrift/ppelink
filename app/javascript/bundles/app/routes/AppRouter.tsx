// Libraries
import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

// Components
import Home from '../components/Home';
import SignupOrganization from '../components/SignupOrganization';
import AddContact from '../components/AddContact';

export default (props) => (
  <Switch>
    <Route exact path="/">
      <Home {...props} />
    </Route>

    <Route path="/hospital_signup">
      <SignupOrganization {...props} />
    </Route>

    <Route path="/donor_signup">
      <SignupOrganization {...props} />
    </Route>

    <Route path="/add_contact">
      <AddContact {...props} />
    </Route>
  </Switch>
);
