// @flow
import * as React from 'react';
import Radium from 'radium';
import ThemedComponent from 'theme';

export type ActionsPaneProps = {
  children?: React.Node,
  style: Object,
  inlineStyle?: Object,
  direction: 'horizontal' | 'column',
  align: 'left' | 'center' | 'right',
}

const ActionsPane = ({children, style, direction, align, inlineStyle}: ActionsPaneProps) => {
  return (
    <div
      style={
        [
          style.base,
          style[direction],
          style[direction][align],
          inlineStyle,
        ]
      }
      type="ActionsPane"
    >
      {children}
    </div>
  );
};

ActionsPane.defaultProps = {
  direction: 'horizontal',
  align: 'left',
};

//$FlowFixMe
export default ThemedComponent(Radium(ActionsPane), 'ActionsPaneStyle');