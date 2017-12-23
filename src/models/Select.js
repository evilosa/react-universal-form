// @flow
import SelectComponent from '../components/Select';
import type { IEditableComponentBaseProps } from './EditableComponentBase';
import { EditableComponentBase } from './EditableComponentBase';

type Option = {
  value: string,
  title: string,
};

export type ISelectProps = {
  title?: string,
  options: Array<Option>,
} & IEditableComponentBaseProps;

export class Select extends EditableComponentBase {
  title: string;
  options: Array<Option>;

  constructor(props: ISelectProps) {
    super(props);

    this.type = 'Select';
    this.component = SelectComponent;

    this.title = 'Select';
    this.options = [];

    Object.assign(this, { ...props });
  }
}

export default Select;
