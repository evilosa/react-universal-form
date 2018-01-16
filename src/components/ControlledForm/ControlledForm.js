// @flow
import * as React from 'react';
import Radium from 'radium';
import defaultStyle from './styles';
import ThemedComponent from 'theme';
import getComponentStyle from 'theme/getComponentStyle';

export type ControlledFormProps = {
  children?: React.Node,
  header: string,
  footer: string,
  onCreate?: Function,
  onRead?: Function,
  onUpdate?: Function,
  onDelete?: Function,
  onClose?: Function,
  direction?: 'horizontal' | 'vertical',
  style: Object,
}

let ControlledFormDumb = (props: any) => (
  <div
    type="ControlledForm"
    style={
      [
        props.style.root,
        props.style[props.direction]
      ]
    }
  >
    <h1 type="ControlledFormHeader" style={props.style.header}>{props.header}</h1>
    {props.children}
    <div type="ControlledFormFooter" style={props.style.footer}>{props.footer}</div>
  </div>
);

//$FlowFixMe
ControlledFormDumb = Radium(ControlledFormDumb);

class ControlledForm extends React.Component<ControlledFormProps> {
  props: ControlledFormProps;

  static defaultProps = {
    header: 'Provide form header',
    footer: 'Provide form footer',
    style: defaultStyle,
    direction: 'vertical',
  };

  render() {
    const { style } = this.props;

    return (
      <ThemedComponent sourceStyle={style}>
        <ControlledFormDumb {...this.props}/>
      </ThemedComponent>
    );
  }
}

//$FlowFixMe
export default ControlledForm;