// @flow
import * as React from 'react';

type Props = {
  children?: any,
  onCreate?: Function,
  onRead?: Function,
  onUpdate?: Function,
  onDelete?: Function,
  componentDirection?: 'horizontal' | 'vertical',
}

class ControlledForm extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;

    return (
      <div>{children}</div>
    );
  }
}

export default ControlledForm;