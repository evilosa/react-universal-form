// @flow
import * as React from 'react';

export type IComponentBaseProps = {
  type: string,
  component: React.ComponentType<any>,

  editEnabled?: boolean,
  expanded: boolean,
  visibleInViewMode?: boolean,
  visibleInEditMode?: boolean,

  readOnly?: boolean,
};

export class ComponentBase {
  type: string;
  component: React.ComponentType<any>;

  editEnabled: boolean;
  expanded: boolean;
  visibleInViewMode: boolean;
  visibleInEditMode: boolean;

  readOnly: boolean;

  constructor(props: IComponentBaseProps) {
    this.editEnabled = false;
    this.expanded = false;
    this.visibleInViewMode = true;
    this.visibleInEditMode = true;

    this.readOnly = false;

    Object.assign(this, props);
  }
}
