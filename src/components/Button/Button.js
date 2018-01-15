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

    const componentStyles = [styles.base, styles.primary];
    if (style) {
      componentStyles.push(style);
    }

    return (
      <button style={componentStyles}>{children}</button>
    )
  }
}

export default Radium(Button);