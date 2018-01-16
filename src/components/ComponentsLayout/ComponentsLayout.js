// @flow
import * as React from 'react';
import Radium from 'radium';
import defaultStyle from './styles';

export type ComponentsLayoutProps = {
  children?: React.Node,
  style: Object,
  direction: 'horizontal' | 'vertical'
}

const ComponentsLayout = ({children, style, direction}: ComponentsLayoutProps) => (
  <div
    style={
      [
        style.base,
        style[direction],
      ]
    }
  >
    {children}
  </div>
);

ComponentsLayout.defaultProps = {
  style: defaultStyle,
  direction: 'horizontal',
};

//$FlowFixMe
export default Radium(ComponentsLayout);