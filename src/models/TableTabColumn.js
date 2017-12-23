// @flow
import TextInputComponent from '../components/TextInput';
import type { IComponentBaseProps } from './ComponentBase';
import { ComponentBase } from './ComponentBase';

export type ITableTabColumnProps = {
  header?: string,
  propName: string,
} & IComponentBaseProps;

export class TableTabColumn extends ComponentBase {
  header: ?string;
  propName: string;

  constructor(props: ITableTabColumnProps) {
    super(props);

    this.type = 'TableTabColumn';
    this.component = TextInputComponent;

    Object.assign(this, { ...props });
  }
}

export default TableTabColumn;
