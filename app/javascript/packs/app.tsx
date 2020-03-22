import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";

import AppState from '../bundles/app/containers/AppState';
import Layout from '../bundles/app/components/Layout';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AppState>
      {props =>
        <Router>
          <Layout {...props}/>
        </Router>
      }

    </AppState>,
    document.body.appendChild(document.createElement('div')),
  )
});
