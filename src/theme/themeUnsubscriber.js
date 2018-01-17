// @flow
import PubSub from 'pubsub-js';

type subscriberFunc = (msg: Object, theme: Object) => void;

export const themeUnsubscriber = (subscriber: subscriberFunc) => {
  PubSub.unsubscribe(subscriber);
};