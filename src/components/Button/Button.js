// @flow
import * as React from 'react';
import Radium from 'radium';
import ThemedComponent from 'theme/ThemedComponent';

type Props = {
  style: Object,
  customStyle?: Object,
  inlineStyle?: Object,
  children: any,
}

class Button extends React.Component<Props> {

  _onClick = () => {
    const { style } = this.props;
    console.log('Button style');
    console.log(style);
  };

  render() {
    const { style, inlineStyle, children } = this.props;

    return (
      <button style={[style.base, style.primary, inlineStyle]} onClick={this._onClick} type="Button">{children}</button>
    )
  }
}

//$FlowFixMe
export default ThemedComponent(Radium(Button), 'ButtonStyle');