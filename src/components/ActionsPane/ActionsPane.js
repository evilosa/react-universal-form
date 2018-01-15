// @flow
import * as React from 'react';

export type ActionsPaneProps = {
  children?: React.Node,
}

const ActionsPane = (props: ActionsPaneProps) => {
  return (
    <div>{props.children}</div>
  );
};

export default ActionsPane;