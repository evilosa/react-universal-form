// @flow
import * as React from 'react';
import Radium from 'radium';
import defaultStyle from './styles';

export type ActionsPaneProps = {
  children?: React.Node,
  style: Object,
  direction: 'horizontal' | 'column',
  align: 'left' | 'center' | 'right',
}

const ActionsPane = ({children, style, direction, align}: ActionsPaneProps) => {
  return (
    <div
      style={
        [
          style.base,
          style[direction],
          style[direction][align],
        ]
      }
      type="ActionsPane"
    >
      {children}
    </div>
  );
};

ActionsPane.defaultProps = {
  style: defaultStyle,
  direction: 'horizontal',
  align: 'left',
};

//$FlowFixMe
export default Radium(ActionsPane);