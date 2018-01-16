// @flow
import * as React from 'react';
import { ThemeChannelSubscriber } from './ThemeChannelSubscriber';

type ThemedComponentProps = {
  sourceStyle: Object,
  children?: React.Node,
}

// // const ThemedComponent = ({sourceStyle, children}: ThemedComponentProps) => {
// //   return (
//     <ThemeChannelSubscriber>
//       {theme => {
//         const currentStyle = sourceStyle;
//         // currentStyle.root.background = '#daa';
//
//         console.log('Style was updated');
//
//         const childrenWithProps = React.Children.map(children, child =>
//           React.cloneElement(child, { style: currentStyle }));
//
//         return childrenWithProps;
//       }}
//     </ThemeChannelSubscriber>
// //   );
// // };


export const ThemedComponent = (defaultStyle: Object) => (WrappedComponent: any) => (props: any) => {

  console.log('Wrapped component');

  console.log(props);
  console.log(defaultStyle);

  return (
    <WrappedComponent {...props} style={defaultStyle}/>
  )
};

export default ThemedComponent;