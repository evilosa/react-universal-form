// @flow
import * as React from 'react';
import defaultStyle from './styles';

import DemoControlledForm from './DemoControlledForm';
import DemoThemedButtons from './DemoThemedButtons';

import { demoObject } from './demoObject';
import { defaultThemeStyle as defaultTheme } from 'theme';

import { ThemeProvider } from 'theme';
import NavBar from 'components/NavBar';
import NavBarItem from 'components/NavBarItem';

import { BrowserRouter, Route } from 'react-router-dom';


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

  render() {
    const { style } = this.props;
    const { theme } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div style={style.root} type="DemoPage">
            <NavBar>
              <NavBarItem path="/controlled-form" title="Controlled form" active={true}/>
              <NavBarItem path="/themed-buttons" title="Themed buttons"/>
            </NavBar>
            <Route path="/controlled-form" component={DemoControlledForm}/>
            <Route path="/themed-buttons" component={DemoThemedButtons}/>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default Demo;
