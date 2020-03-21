import React, { PureComponent } from 'react';
import { DefaultComponentState } from '../../shared/types/react';
import Paragraph from '../../shared/components/paragraph';

type Props = any;

export default class Home extends PureComponent<Props, DefaultComponentState> {
  render() {
    return (
      <Paragraph>
        Hello World
      </Paragraph>
    );
  }
}

