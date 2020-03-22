import React, { Fragment, PureComponent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Link, Toolbar } from '@material-ui/core';
import { DefaultComponentState } from '../../shared/types/react';
import { HOME_PATH } from '../../constants/routes';

type Props = any;

export default class Navigation extends PureComponent<Props, DefaultComponentState> {
  render() {
    return (
      <Fragment>
        <AppBar>
          <Toolbar>
            <Link component={RouterLink} to={HOME_PATH} color="inherit">
              PPE Link
            </Link>
          </Toolbar>
        </AppBar>
        <Toolbar/>
      </Fragment>
    );
  }
}
