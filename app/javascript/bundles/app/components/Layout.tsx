import React from 'react';
import { Container } from '@material-ui/core';
import AppRouter from '../routes/AppRouter';
import Navigation from './Navigation';

export default function Layout(props): JSX.Element {
  return (
    <Container>
      <Navigation />
      <AppRouter {...props} />
    </Container>
  );
}
