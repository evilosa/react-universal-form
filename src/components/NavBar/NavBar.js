// @flow
import * as React from 'react';
import Radium from 'radium';
import ThemedComponent from 'theme/ThemedComponent';

type Props = {
  style: Object,
  customStyle?: Object,
  inlineStyle?: Object,
  direction: 'horizontal' | 'vertical',
  children: any,
}

const NavBar = ({style, inlineStyle, direction, children}: Props) => (
  <div style={[style.base, style[direction], inlineStyle]}>
    {children}
  </div>
);

NavBar.defaultProps = {
  direction: 'vertical',
};

//$FlowFixMe
export default ThemedComponent(Radium(NavBar), 'NavBarStyle');