// @flow
import PubSub from 'pubsub-js';
import { themeUpdateChannelName } from './themeUpdateChannelName';

type subscriberFunc = (msg: Object, theme: Object) => void;

export const themeSubscriber = (subscriber: subscriberFunc) => {
  PubSub.subscribe(themeUpdateChannelName, subscriber);
};