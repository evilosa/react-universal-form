// @flow
import * as React from 'react';
import Radium from 'radium';
import defaultStyle from './styles';

export type ControlledFormProps = {
  children?: any,
  onCreate?: Function,
  onRead?: Function,
  onUpdate?: Function,
  onDelete?: Function,
  direction?: 'horizontal' | 'vertical',
  style: Object,
}

class ControlledForm extends React.Component<ControlledFormProps> {
  props: ControlledFormProps;

  static defaultProps = {
    style: defaultStyle,
    direction: 'horizontal',
  };

  render() {
    const { children, style, direction} = this.props;

    return (
      <div
        style={
          [
            style.base,
            style[direction]
          ]
        }
      >
        {children}
      </div>
    );
  }
}

//$FlowFixMe
export default Radium(ControlledForm);