// @flow
import * as React from 'react';
import { fromJS } from 'immutable';
import { Broadcast, Subscriber } from 'react-broadcast';

import Button from 'components/Button';
import TextInput from 'components/TextInput';
import UpdateBlocker from 'components/UpdateBlocker';

import Color from 'color';

const sourceObject = fromJS({
  title: 'Title',
  fullName: 'Full name',
  number: 1,
  client: { id: 1, title: 'Client 1' },
  orders:
    [
      { rowNumber: 1, product: 'Food 1', count: 1, price: 10, sum: 10 },
      { rowNumber: 2, product: 'Food 2', count: 3, price: 10, sum: 30 },
      { rowNumber: 3, product: 'Food 3', count: 2, price: 10, sum: 20 },
    ],
  user: 'Graham Davis',
  comment: 'Comment for current order',
});

type State = {
  source: any,
  fullName: string,
}



export class Demo extends React.Component<any, State> {

  constructor() {
    super();

    this.state = {
      source: sourceObject,
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
          <Button style={customStyle}/>
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

const customStyle = {
  width: '250px',
  height: '40px',
  background: '#000',
  // base: {
  // color: '#fff',

  // Adding interactive state couldn't be easier! Add a special key to your
  // style object (:hover, :focus, :active, or @media) with the additional rules.
  ':hover': {
    background: Color('#0ff').lighten(0.2).hex(),
  }
  // },
};
