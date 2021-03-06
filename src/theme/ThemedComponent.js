// @flow
import * as React from 'react';
import { themeSubscriber, themeUnsubscriber } from 'theme/index';
import { defaultThemeStyle } from 'theme/defaultThemeStyle';
import { themeUpdateChannelName } from 'theme';

type State = {
  theme: Object,
}

export const ThemedComponent = (WrappedComponent: any, styleName: string) => {

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
          })
        );
      }
    };

    render() {
      const { children, customStyle } = this.props;
      const { theme } = this.state;

      return <WrappedComponent {...this.props} style={{...theme[styleName], ...customStyle}} children={children}/>;
    }
  }
};

export default ThemedComponent;