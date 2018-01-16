// @flow
import * as React from 'react';
import Radium from 'radium';
import defaultStyle from './styles';

export type ActionsPaneProps = {
  children?: React.Node,
  style: Object,
  direction: 'horizontal' | 'column',
}

const ActionsPane = ({children, style, direction}: ActionsPaneProps) => {
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
};

ActionsPane.defaultProps = {
  style: defaultStyle,
  direction: 'horizontal',
};

//$FlowFixMe
export default Radium(ActionsPane);