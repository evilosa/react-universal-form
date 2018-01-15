// @flow
import * as React from 'react';
import type { ActionTypes } from 'components/Action';

export type ActionsPaneProps = {
  actions: Array<ActionTypes>,
}

const ActionsPane = (props: ActionsPaneProps) => {
  return (
    <div>Actions Pane</div>
  );
};

export default ActionsPane;