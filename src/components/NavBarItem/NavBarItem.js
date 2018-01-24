// @flow
import * as React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import ThemedComponent from 'theme/ThemedComponent';

type Props = {
  style: Object,
  customStyle?: Object,
  inlineStyle?: Object,
  path: string,
  title: string,
}

const NavBarItem = ({style, inlineStyle, path, title}: Props) => (
  <Link style={[style.base, inlineStyle]} to={path}>
    {title}
  </Link>
);

NavBarItem.defaultProps = {
  path: '/',
  title: 'Link',
};

//$FlowFixMe
export default ThemedComponent(Radium(NavBarItem), 'NavBarItemStyle');