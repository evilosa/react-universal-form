// @flow
import * as React from 'react';
import Radium from 'radium';
import defaultStyle from './styles';

type Props = {
  children?: any,
  onCreate?: Function,
  onRead?: Function,
  onUpdate?: Function,
  onDelete?: Function,
  direction?: 'horizontal' | 'vertical',
  style: Object,
}

class ControlledForm extends React.Component<Props> {
  props: Props;

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

export default Radium(ControlledForm);