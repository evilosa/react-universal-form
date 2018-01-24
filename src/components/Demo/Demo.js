// @flow
import * as React from 'react';
import defaultStyle from './styles';

import DemoControlledForm from './DemoControlledForm';

import { demoObject } from './demoObject';
import { defaultThemeStyle as defaultTheme } from 'theme';

import { ThemeProvider } from 'theme';
import Button from 'components/Button';
import UpdateBlocker from 'components/UpdateBlocker/UpdateBlocker';


type Props = {
  style: Object,
  theme: Object,
}

type State = {
  source: any,
  fullName: string,
  theme: Object,
}


class Demo extends React.Component<Props, State> {
  static defaultProps = {
    style: defaultStyle,
    theme: defaultTheme,
  };

  constructor(props: Props) {
    super();

    const { theme } = props;

    this.state = {
      source: demoObject,
      fullName: 'Baba',
      theme,
    };

    setTimeout(() => {
      this.setState(prev => ({
        ...prev,
        source: prev.source.set('fullName', 'Vasia pupkin'),
        fullName: 'Tata',
        theme: {
          ...prev.theme,
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
        ...prev.theme,
        ControlledForm: {
          background: 'red',
        },
        ButtonStyle: {
          base: {
            color: '#fff',
            // ':hover': {
            //   background: Color('#0074d9').lighten(0.2).hex(),
            // },
            background: '#4dd981'
          },

          primary: {
            background: '#4dd981'
          },

          warning: {
            background: '#FF4136'
          }
        }
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
            <UpdateBlocker>
              <Button>Themed button233</Button>
              <Button customStyle={{primary: { background: '#ffc'}}} inlineStyle={{color: 'black'}}>Themed button233</Button>
            </UpdateBlocker>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Demo;
