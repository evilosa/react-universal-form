// @flow
import * as React from 'react';
import defaultStyle from './styles';

import DemoControlledForm from './DemoControlledForm';

import { demoObject } from './demoObject';

import { ThemeProvider } from 'theme';
import PubSub from 'pubsub-js';

import UpdateBlocker from 'components/UpdateBlocker/UpdateBlocker';

import { themePublisher } from 'theme';

type Props = {
  style: Object,
}

type State = {
  source: any,
  fullName: string,
  theme: Object,
}


class Demo extends React.Component<Props, State> {
  static defaultProps = {
    style: defaultStyle,
  };

  constructor() {
    super();

    this.state = {
      source: demoObject,
      fullName: 'Baba',
      theme: {
        ControlledForm: {
          backgroundColor: '#fff',
        },
      },
    };

    setTimeout(() => {
      this.setState(prev => ({
        ...prev,
        source: prev.source.set('fullName', 'Vasia pupkin'),
        fullName: 'Tata',
        theme: {
          ControlledForm: {
            backgroundColor: '#000',
          },
        },
      }));
    }, 4000);
  }

  _onThemeChange = () => {
    console.log('Need to change theme!');
    this.setState(prev => ({
      ...prev,
      theme: {
        ControlledForm: {
          backgroundColor: '#ccc',
        },
      },
    }));
  };

  render() {
    const { style } = this.props;
    const { theme } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <div style={style.root} type="DemoPage">
          <div style={style.navBar} type="DemoPageNavBar">
            <div>Link 1</div>
            <div>Link 2</div>
            <div>Link 3</div>
            <div>Link 4</div>
            <div onClick={this._onThemeChange}>Change backround to red</div>
          </div>
          <div style={style.content} type="DemoPageContent">
            <UpdateBlocker>
              <DemoControlledForm/>
            </UpdateBlocker>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Demo;
