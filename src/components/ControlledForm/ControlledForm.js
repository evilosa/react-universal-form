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
  componentDirection?: 'horizontal' | 'vertical',
  style: Object,
}

class ControlledForm extends React.Component<Props> {
  props: Props;

  static defaultProps = {
    style: defaultStyle,
  };

  render() {
    const { children, style } = this.props;

    return (
      <div style={style.base}>{children}</div>
    );
  }
}

export default Radium(ControlledForm);