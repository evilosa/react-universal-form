// @flow
import * as React from 'react';

export const ThemedComponent = (defaultStyle: Object) => (WrappedComponent: any) => (props: any) => {

  console.log('Component was wrapped!');

  console.log(props);
  console.log(defaultStyle);

  console.log('Theme was changed!');
  return <WrappedComponent {...props} style={defaultStyle}/>
};

export default ThemedComponent;