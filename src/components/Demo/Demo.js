// @flow
import * as React from 'react';
import defaultStyle from './styles';

import DemoControlledForm from './DemoControlledForm';

import { demoObject } from './demoObject';

import ThemeProvider from 'theme';

type Props = {
  style: Object,
}

type State = {
  source: any,
  fullName: string,
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
    };

    setTimeout(() => {
      this.setState(prev => ({
        ...prev,
        source: prev.source.set('fullName', 'Vasia pupkin'),
        fullName: 'Tata',
      }),
        () => console.log('Updated by timeout'));
    }, 4000);
  }

  _onEdit = (propName, value) => {
    this.setState(
      prev => ({
        ...prev,
        source: prev.source.set(propName, value),
      }),
      () => console.log(this.state.source.toJS())
    );
  };

  render() {
    const { style } = this.props;

    return (
      <ThemeProvider>
        <div style={style.root} type="DemoPage">
          <div style={style.navBar} type="DemoPageNavBar">
            <div>Link 1</div>
            <div>Link 2</div>
            <div>Link 3</div>
            <div>Link 4</div>
          </div>
          <div style={style.content} type="DemoPageContent">
            {/*Hello world!*/}
            {/*<div>*/}
              {/*<Button>Click me!</Button>*/}
              {/*<Broadcast channel="fullNameChannel" value={this.state.source.get('fullName')}>*/}
                {/*<UpdateBlocker>*/}
                  {/*<Subscriber channel="fullNameChannel">*/}
                    {/*{fullName => <TextInput value={fullName} propName="fullName" onEdit={this._onEdit}/>}*/}
                  {/*</Subscriber>*/}

                  {/*<TextInput value={this.state.source.get('fullName')} propName="fullName" onEdit={this._onEdit}/>*/}
                {/*</UpdateBlocker>*/}
              {/*</Broadcast>*/}
            {/*</div>*/}
            <DemoControlledForm/>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Demo;
