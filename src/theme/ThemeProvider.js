// @flow
import * as React from 'react';
import { defaultThemeStyle } from './defaultThemeStyle';
import { ThemeChannelBroadcast } from './ThemeChannelBroadcast';

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
    if (next.style) {
      this.setState(prev => ({
        ...prev,
        theme: next.theme,
      }))
    }
  }

  render() {
    const { children } = this.props;
    const { theme } = this.state;

    return (
      <ThemeChannelBroadcast theme={theme} children={children}/>
    );
  }
}

export default ThemeProvider