import React, { PureComponent } from 'react';
import { DefaultComponentState } from '../../shared/types/react';

type Props = any;

export default class Home extends PureComponent<Props, DefaultComponentState> {
  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

