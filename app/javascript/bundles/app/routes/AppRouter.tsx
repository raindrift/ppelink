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
import {
  ADD_CONTACT_PATH,
  DONOR_SIGN_UP_PATH,
  HOME_PATH,
  HOSPITAL_SIGN_UP_PATH
} from '../../constants/routes';

export default (props) => (
  <Switch>
    <Route exact path={HOME_PATH}>
      <Home {...props} />
    </Route>

    <Route exact path={HOSPITAL_SIGN_UP_PATH}>
      <SignupOrganization {...props} />
    </Route>

    <Route exact path={DONOR_SIGN_UP_PATH}>
      <SignupOrganization {...props} />
    </Route>

    <Route exact path={ADD_CONTACT_PATH}>
      <AddContact {...props} />
    </Route>
  </Switch>
);
