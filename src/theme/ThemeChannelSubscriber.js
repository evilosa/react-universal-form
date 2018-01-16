// @flow
import * as React from 'react';
import { Subscriber } from 'react-broadcast';
import { themeUpdateChannelName } from './themeUpdateChannelName';

type ThemeChannelProps = {
  theme: Object,
  children?: React.Node,
}

export const ThemeChannelSubscriber = (props: ThemeChannelProps) => (
  <Subscriber {...props} channel={themeUpdateChannelName}/>
);