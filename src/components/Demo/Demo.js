// @flow
import * as React from 'react';
import { fromJS } from 'immutable';
import { Broadcast, Subscriber } from 'react-broadcast';

import Button from 'components/Button';
import TextInput from 'components/TextInput';
import UpdateBlocker from 'components/UpdateBlocker';

import Color from 'color';

import { demoObject } from './demoObject';

type State = {
  source: any,
  fullName: string,
}



class Demo extends React.Component<any, State> {

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

    return (
      <div>
        Hello world!
        <div>
          <Button>Click me!</Button>
          <Broadcast channel="fullNameChannel" value={this.state.source.get('fullName')}>
            <UpdateBlocker>
              <Subscriber channel="fullNameChannel">
                {fullName => <TextInput value={fullName} propName="fullName" onEdit={this._onEdit}/>}
              </Subscriber>

              <TextInput value={this.state.source.get('fullName')} propName="fullName" onEdit={this._onEdit}/>
            </UpdateBlocker>
          </Broadcast>
        </div>
      </div>
    );
  }
}

export default Demo;
