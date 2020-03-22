import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AppState from '../bundles/app/containers/AppState';
import Layout from '../bundles/app/components/Layout';

const customHistory = createBrowserHistory();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AppState>
      {
        (props) => (
          <Router history={customHistory}>
            <Layout {...props}/>
          </Router>
        )
      }
    </AppState>,
    document.body.appendChild(document.createElement('div'))
  );
});
