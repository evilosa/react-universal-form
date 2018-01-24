// @flow
import * as React from 'react';
import Radium from 'radium';
import ThemedComponent from 'theme/ThemedComponent';

type Props = {
  style: Object,
  customStyle?: Object,
  children: any,
}

class Button extends React.Component<Props> {

  _onClick = () => {
    console.log('dffd');
  };

  render() {
    const { style, customStyle, children } = this.props;

    return (
      <button style={[style.base, style.primary, customStyle]} onClick={this._onClick} type="Button">{children}</button>
    )
  }
}

//$FlowFixMe
export default Radium(ThemedComponent(Button, 'ButtonStyle'));