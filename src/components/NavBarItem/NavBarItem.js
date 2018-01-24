// @flow
import * as React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import ThemedComponent from 'theme/ThemedComponent';

type Props = {
  style: Object,
  customStyle?: Object,
  inlineStyle?: Object,
  path: string,
}

const NavBarItem = ({style, inlineStyle, path}: Props) => (
  <Link style={[style.base, inlineStyle]} to={path}>
    {path}
  </Link>
);

NavBarItem.defaultProps = {
  path: '/',
};

//$FlowFixMe
export default ThemedComponent(Radium(NavBarItem), 'NavBarItemStyle');