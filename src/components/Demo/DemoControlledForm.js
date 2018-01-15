// @flow
import * as React from 'react';
import ControlledForm from 'components/ControlledForm';
import { demoObject } from './demoObject';

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
        Some data
      </ControlledForm>
    );
  }
}

export default DemoControlledForm;