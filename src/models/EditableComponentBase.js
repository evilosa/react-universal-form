// @flow
import type { IComponentBaseProps } from './ComponentBase';
import type { ValidableModel } from './ValidableModel';
import { ComponentBase } from './ComponentBase';

export type IEditableComponentBaseProps = {
  source: ValidableModel,
  propName: string,
  onValueEdit: (value: any, propName: string) => void,
} & IComponentBaseProps;

export class EditableComponentBase extends ComponentBase {
  source: Object;
  propName: string;
  onValueEdit: (value: any, propName: string) => void;

  constructor(props: IEditableComponentBaseProps) {
    super(props);

    Object.assign(this, { ...props });
  }
}
