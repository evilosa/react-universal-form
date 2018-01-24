// Style management
import ThemeProvider from './ThemeProvider';
import getComponentStyle from './getComponentStyle';
import ThemedComponent from './ThemedComponent';

export { ThemeProvider, ThemedComponent, getComponentStyle }

// Publish/Subscribe part
import { themePublisher } from './themePublisher';
import { themeSubscriber } from './themeSubscriber';
import { themeUnsubscriber } from './themeUnsubscriber';
import { themeUpdateChannelName } from './themeUpdateChannelName';

export { themePublisher, themeSubscriber, themeUnsubscriber, themeUpdateChannelName };

export default ThemedComponent;

// Default themes
import { defaultThemeStyle } from './defaultThemeStyle';

export { defaultThemeStyle };