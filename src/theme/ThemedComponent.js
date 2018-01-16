// @flow
import * as React from 'react';
import { ThemeChannelSubscriber } from './ThemeChannelSubscriber';

type ThemedComponentProps = {
  sourceStyle: Object,
  children?: React.Node,
}

const ThemedComponent = ({sourceStyle, children}: ThemedComponentProps) => {
  return (
    <ThemeChannelSubscriber>
      {theme => {
        const currentStyle = sourceStyle;
        // currentStyle.root.background = '#daa';

        console.log('Style was updated');

        const childrenWithProps = React.Children.map(children, child =>
          React.cloneElement(child, { style: currentStyle }));

        return childrenWithProps;
      }}
    </ThemeChannelSubscriber>
  );
};

export default ThemedComponent;