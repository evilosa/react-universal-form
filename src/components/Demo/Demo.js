// @flow
import * as React from 'react';
import Radium from 'radium';
import defaultStyle from './styles';

import { Broadcast, Subscriber } from 'react-broadcast';

import DemoControlledForm from './DemoControlledForm';

import Button from 'components/Button';
import TextInput from 'components/TextInput';
import UpdateBlocker from 'components/UpdateBlocker';

import { demoObject } from './demoObject';

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
    );
  }
}

export default Demo;
