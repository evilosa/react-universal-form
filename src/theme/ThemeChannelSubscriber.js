// @flow
import * as React from 'react';
import { Subscriber } from 'react-broadcast';
import { themeUpdateChannelName } from './themeUpdateChannelName';

export const ThemeChannelSubscriber = (props: any) => (
  <Subscriber {...props} channel={themeUpdateChannelName}/>
);