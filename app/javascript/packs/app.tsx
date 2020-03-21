import React from 'react'
import ReactDOM from 'react-dom'

import AppRouter from '../bundles/app/routes/appRouter';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AppRouter />,
    document.body.appendChild(document.createElement('div')),
  )
});
