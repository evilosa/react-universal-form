// @flow
import type { IEditableComponentBaseProps } from './EditableComponentBase';
import { EditableComponentBase } from './EditableComponentBase';

export type ITabComponentBaseProps = {
  id?: string,
  title?: string,
} & IEditableComponentBaseProps;

export class TabComponentBase extends EditableComponentBase {
  id: string;
  title: string;

  constructor(props: ITabComponentBaseProps) {
    super(props);

    this.id = 'id';
    this.title = 'Tab';

    Object.assign(this, { ...props });
  }
}
