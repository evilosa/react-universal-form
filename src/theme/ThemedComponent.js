// @flow
import * as React from 'react';
import {themeSubscriber, themeUnsubscriber} from 'theme/index';
import { defaultThemeStyle } from 'theme/defaultThemeStyle';
import { themeUpdateChannelName } from 'theme';

// export const ThemedComponent = (defaultStyle: Object) => (WrappedComponent: any) => (props: any) => {
//
//   console.log('Component was wrapped!');
//
//   console.log(props);
//   console.log(defaultStyle);
//
//   console.log('Theme was changed!');
//   return <WrappedComponent {...props} style={defaultStyle}/>
// };

type State = {
  theme: Object,
}

export const ThemedComponent = (WrappedComponent: any) => {

  return class extends React.Component<any, State> {
    state: State;

    constructor() {
      super();

      this.state = {
        theme: defaultThemeStyle,
      };

      themeSubscriber(this._themeUpdated);
    }

    componentWillUnmount() {
      themeUnsubscriber(this._themeUpdated)
    }

    _themeUpdated = (msg, theme) => {
      if (msg === themeUpdateChannelName) {
        this.setState(
          prev => ({
            ...prev,
            theme: theme,
          }),
          () => {
            console.log('Themed component: theme was updated!');
          }
        );
      }
    };

    render() {
      const { children } = this.props;

      return <WrappedComponent style={{rabotaet: 'da'}} children={children}/>;
    }
  }
};

export default ThemedComponent;