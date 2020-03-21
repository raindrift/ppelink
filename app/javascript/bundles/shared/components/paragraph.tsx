import React, { PureComponent, ReactNode } from 'react';

// Types
import { DefaultComponentState } from '../types/react';

type Props = {
  children: ReactNode;
};

export default class Paragraph extends PureComponent<Props, DefaultComponentState> {
  render() {
    const { children } = this.props;

    return (
      <p>{children}</p>
    );
  }
}