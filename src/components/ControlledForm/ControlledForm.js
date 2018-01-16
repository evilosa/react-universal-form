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
  onClose?: Function,
  direction?: 'horizontal' | 'vertical',
  style: Object,
}

class ControlledForm extends React.Component<ControlledFormProps> {
  props: ControlledFormProps;

  static defaultProps = {
    style: defaultStyle,
    direction: 'vertical',
  };

  render() {
    const { children, style, direction} = this.props;

    return (
      <div
        style={
          [
            style.root,
            style[direction]
          ]
        }
        type="ControlledForm"
      >
        <div>Header</div>
        {children}
        <div>Footer</div>
      </div>
    );
  }
}

//$FlowFixMe
export default Radium(ControlledForm);