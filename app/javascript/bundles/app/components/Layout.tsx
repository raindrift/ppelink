import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import AppRouter from '../routes/AppRouter';

const useStyles = makeStyles({
  Layout: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column'
  },
  Page: {
    flex: '1 1',
    overflow: 'auto'
  }
});

export default function Layout(props): JSX.Element {
  const classes = useStyles();
  return (
    <Container>
      <AppRouter {...props} />
    </Container>
  );
}
