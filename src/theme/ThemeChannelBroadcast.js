// @flow
import * as React from 'react';
import { Broadcast } from 'react-broadcast';
import { themeUpdateChannelName } from './themeUpdateChannelName';

type ThemeChannelProps = {
  theme: Object,
  children?: React.Node,
}

export const ThemeChannelBroadcast = ({theme, children}: ThemeChannelProps) => (
  <Broadcast channel={themeUpdateChannelName} value={theme}>
    {children}
  </Broadcast>
);