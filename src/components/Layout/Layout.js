// @flow
import * as React from 'react';
import Radium from 'radium';
import defaultStyle from './styles';

export type LayoutProps = {
  children?: React.Node,
  style: Object,
  direction: 'horizontal' | 'vertical'
}

const Layout = ({children, style, direction}: LayoutProps) => (
  <div
    style={
      [
        style.base,
        style[direction],
      ]
    }
    type="Layout"
  >
    {children}
  </div>
);

Layout.defaultProps = {
  style: defaultStyle,
  direction: 'horizontal',
};

//$FlowFixMe
export default Radium(Layout);