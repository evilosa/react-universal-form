// @flow
import * as React from 'react';
import { fromJS } from 'immutable';
import { Broadcast, Subscriber } from "react-broadcast"

import Button from 'components/Button';
import TextInput from 'components/TextInput';

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
}

class UpdateBlocker extends React.Component<any> {
  shouldComponentUpdate() {
    // This is how you indicate to React's reconciler that you don't
    // need to be updated. It's a great way to boost performance when
    // you're sure (based on your props and state) that your render
    // output will not change, but it makes it difficult for libraries
    // to communicate changes down the hierarchy that you don't really
    // know anything about.
    return false
  }

  render() {
    return this.props.children
  }
}

export class Demo extends React.Component<any, State> {

  constructor() {
    super();

    this.state = {
      source: sourceObject,
    }
  }

  _onEdit = (propName, value) => {
    this.setState(
      prev => ({
        ...prev,
        source: sourceObject.set(propName, value),
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
          <Broadcast channel="fullNameChannel" value={this.state.source.fullName}>
            <UpdateBlocker>
              <Subscriber channel="fullNameChannel">
                {fullName => <TextInput value={fullName} propName="fullName" onEdit={this._onEdit}/>}
              </Subscriber>
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
