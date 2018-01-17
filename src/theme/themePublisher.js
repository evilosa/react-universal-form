// @flow
import PubSub from 'pubsub-js';
import { themeUpdateChannelName } from './themeUpdateChannelName';

export const themePublisher = (theme: Object): void => {
  PubSub.publish(themeUpdateChannelName, theme);
};