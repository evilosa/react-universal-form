// @flow
import * as React from 'react';
import Radium from 'radium';
import { styles } from './styles';

type Props = {
  style?: Object,
  children: any,
}

class Button extends React.Component<Props> {

  _onClick = () => {
    console.log('dffd');
  };

  render() {
    const { style, children } = this.props;

    return (
      <button style={[styles.base, styles.primary, style]} onClick={this._onClick} type="Button">{children}</button>
    )
  }
}

//$FlowFixMe
export default Radium(Button);