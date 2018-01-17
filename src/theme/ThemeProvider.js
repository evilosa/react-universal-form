// @flow
import * as React from 'react';
import { defaultThemeStyle } from './defaultThemeStyle';
import { themePublisher } from './themePublisher';

type ThemeChannelProps = {
  theme: Object,
  children?: React.Node,
}

type ThemeProviderState = {
  theme: Object,
}

class ThemeProvider extends React.Component<ThemeChannelProps, ThemeProviderState> {
  props: ThemeChannelProps;
  state: ThemeProviderState;

  static defaultProps = {
    theme: defaultThemeStyle,
  };

  constructor(props: ThemeChannelProps) {
    super(props);

    this.state = {
      theme: props.theme
    };
  }

  componentWillReceiveProps(next: ThemeChannelProps) {
    if (next.theme) {
      this.setState(
        prev => ({
          ...prev,
          theme: next.theme,
        }),
        () => {
          console.log('ThemeProvider - Publish new theme!');
          themePublisher(this.state.theme);
        }
      );
    }
  }

  render() {
    return this.props.children;
  }
}

export default ThemeProvider