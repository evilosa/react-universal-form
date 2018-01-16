// @flow
import * as React from 'react';
import Radium from 'radium';
import defaultStyles from './styles';

export type ComponentHeaderType = {
  children?: React.Node,
  header: string,
  place: 'top' | 'left' | 'right' | 'bottom',
  style: Object,
}

const ComponentHeader = ({header, place, style, children}: ComponentHeaderType) => (
  <div
    style={
      [
        style.base,
        style[place],
      ]
    }
    type="ComponentHeader"
  >
    <div style={style.header}>{header}</div>
    <div style={style.content}>{children}</div>
  </div>
);

ComponentHeader.defaultProps = {
  header: '',
  place: 'left',
  style: defaultStyles,
};

//$FlowFixMe
export default Radium(ComponentHeader);