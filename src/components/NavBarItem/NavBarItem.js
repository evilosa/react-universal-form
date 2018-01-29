// @flow
import * as React from 'react';
import Radium from 'radium';
import ThemedComponent from 'theme/ThemedComponent';

type Props = {
  style: Object,
  customStyle?: Object,
  inlineStyle?: Object,
  path: string,
  title: string,
  isActive: boolean,
  onClick?: Function,
  onNavBarNotify?: Function,
}

class NavBarItem extends React.Component<Props> {

  static defaultProps = {
    path: '/',
    title: 'Link',
    active: false,
  };

  _handleClick = (event) => {
    const { onNavBarNotify, onClick, path } = this.props;

    if (onNavBarNotify)
      onNavBarNotify(event, path);

    if (onClick)
      onClick(event, path);
  };

  render() {
    const {style, inlineStyle, title, isActive} = this.props;

    return (
      <div
        style={[
          style.base,
          isActive && style.active,
          inlineStyle
        ]}
        onClick={this._handleClick}
      >
        {title}
      </div>
    );
  }
}

//$FlowFixMe
const ThemedNavBarItem = ThemedComponent(Radium(NavBarItem), 'NavBarItemStyle');
ThemedNavBarItem.displayName = 'NavBarItem';

export default ThemedNavBarItem;