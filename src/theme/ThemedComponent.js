// @flow
import * as React from 'react';
import { ThemeChannelSubscriber } from './ThemeChannelSubscriber';

type ThemedComponentProps = {
  sourceStyle: Object,
  children?: React.Node,
}

export const ThemedComponent2 = ({sourceStyle, children}: ThemedComponentProps) => {
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


export const ThemedComponent = (defaultStyle: Object) => (WrappedComponent: any) => (props: any) => {

  console.log('Component was wrapped!');

  console.log(props);
  console.log(defaultStyle);

  return (
    <ThemeChannelSubscriber>
      {theme => {
          console.log('Theme was changed!');
          console.log(theme);
          return <WrappedComponent {...props} style={defaultStyle}/>
        }
      }
    </ThemeChannelSubscriber>
  )
};

export default ThemedComponent;