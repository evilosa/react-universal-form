// @flow
import * as React from 'react';

export type ActionProps = {
  type: 'link' | 'button' | 'icon',
  caption: string,
  href: string,
  icon: string,
  onClick?: Function,
}

const LinkAction = (caption: string, href: string) => (
  <a href={href} type="LinkAction">{caption}</a>
);

const ButtonAction = (caption, onClick) => (
  <button onClick={onClick} type="ButtonAction">{caption}</button>
);

const IconAction = (icon: string) => (
  <div type="IconAction">Icon action {icon} is not implemented yet!</div>
);

const Action = ({type, caption, href, icon, onClick}: ActionProps) => {
  switch (type) {
    case 'link':
      return LinkAction(caption, href);

    case 'button':
      return ButtonAction(caption, onClick);

    case 'icon':
      return IconAction(icon);
  }
  return (
    <div type="Action">I'm an unknown action</div>
  );
};

Action.defaultProps = {
  type: 'button',
  caption: '',
  href: '#',
  icon: 'default',
};

export default Action;