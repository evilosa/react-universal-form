// @flow
import * as React from 'react';
import { Subscriber } from 'react-broadcast';
import { themeUpdateChannelName } from './themeUpdateChannel';

type ThemeChannelProps = {
  theme: Object,
  children?: React.Node,
}

export const ThemeChannelSubscriber = (props: ThemeChannelProps) => (
  <Subscriber {...props} channel={themeUpdateChannelName}/>
);