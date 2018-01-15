// @flow
import * as React from 'react';
import Radium from 'radium';
import { styles } from './styles';

type Props = {
  style: Object,
  children: any,
}

class Button extends React.Component<Props> {

  render() {
    const { style, children } = this.props;

    return (
      <button style={[styles.base, styles.primary, style]}>{children}</button>
    )
  }
}

export default Radium(Button);