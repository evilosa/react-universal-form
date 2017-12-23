// @flow
import TabPaneComponent from '../components/TabPane';
import type { IEditableComponentBaseProps } from './EditableComponentBase';
import { EditableComponentBase } from './EditableComponentBase';
import { TabComponentBase } from './TabComponentBase';

export type ITabPaneProps = {
  panes?: Array<TabComponentBase>,
  scrollable?: boolean,
} & IEditableComponentBaseProps;

export class TabPane extends EditableComponentBase {
  panes: Array<TabComponentBase>;
  scrollable: boolean;

  constructor(props: ITabPaneProps) {
    super(props);

    this.type = 'TabPane';
    this.component = TabPaneComponent;

    this.panes = [];
    this.scrollable = false;

    Object.assign(this, props);
  }
}

export default TabPane;
