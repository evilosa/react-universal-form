// @flow
import * as React from 'react';
import Radium from 'radium';
import defaultStyle from './styles';

export type ControlledFormProps = {
  children?: React.Node,
  header: string,
  footer: string,
  direction?: 'horizontal' | 'vertical',
  style: Object,
}

class ControlledForm extends React.Component<ControlledFormProps> {
  props: ControlledFormProps;

  static defaultProps = {
    header: 'Provide form header',
    footer: 'Provide form footer',
    style: defaultStyle,
    direction: 'vertical',
  };

  render() {
    const { children, style, direction, header, footer} = this.props;

    return (
      <div
        type="ControlledForm"
        style={
          [
            style.root,
            style[direction]
          ]
        }
      >
        <h1 type="ControlledFormHeader" style={style.header}>{header}</h1>
        {children}
        <div type="ControlledFormFooter" style={style.footer}>{footer}</div>
      </div>);
  }
}

//$FlowFixMe
export default Radium(ControlledForm);