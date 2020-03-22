import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AppState from '../bundles/app/containers/AppState';
import Layout from '../bundles/app/components/Layout';

const customHistory = createBrowserHistory();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AppState>
      {
        (props) => (
          <BrowserRouter history={customHistory}>
            <Layout {...props}/>
          </BrowserRouter>
        )
      }
    </AppState>,
    document.body.appendChild(document.createElement('div'))
  );
});
