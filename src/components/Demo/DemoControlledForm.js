// @flow
import * as React from 'react';

import ControlledForm from 'components/ControlledForm';
import ActionsPane from 'components/ActionsPane';
import Action from 'components/Action';
import ComponentsLayout from 'components/ComponentsLayout';


import { demoObject } from './demoObject';
import TextInput from 'components/TextInput';

type Props = {

};

type State = {
  source: Object, // Immutable object, we can't change it direct
};

class DemoControlledForm extends React.Component<Props, State> {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      source: demoObject,
    }
  }

  handleCreate = () => {
    console.log('Write your own create request to API');
  };

  handleRead = () => {
    console.log('Write your own read request to API');
  };

  handleUpdate = () => {
    console.log('Write your own update request to API');
  };

  handleDelete = () => {
    console.log('Write your own delete request to API!');
  };

  render() {
    return (
      <ControlledForm
        onCreate={this.handleCreate}
        onRead={this.handleRead}
        onUpdate={this.handleUpdate}
        onDelete={this.handleDelete}
      >
        <ActionsPane>
          <Action type="link" caption="I'm a link action. Go to google!" href="http://google.com"/>
          <Action type="button" caption="I'm a button action" onClick={this.handleCreate}/>
          <Action type="icon" onClick={this.handleUpdate}/>
        </ActionsPane>

        <ComponentsLayout>
          <ComponentsLayout direction="vertical">
            <TextInput/>
            <TextInput/>
          </ComponentsLayout>
          <ComponentsLayout direction="vertical">
            <TextInput/>
            <TextInput/>
          </ComponentsLayout>
        </ComponentsLayout>
      </ControlledForm>
    );
  }
}

export default DemoControlledForm;