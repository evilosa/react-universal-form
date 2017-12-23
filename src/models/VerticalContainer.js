// @flow
import VerticalContainerComponent from '../components/VerticalContainer';
import type { IEditableComponentBaseProps } from './EditableComponentBase';
import { EditableComponentBase } from './EditableComponentBase';

export type IVerticalContainerProps = {
  components?: Array<EditableComponentBase>,
} & IEditableComponentBaseProps;

export class VerticalContainer extends EditableComponentBase {
  components: Array<EditableComponentBase>;

  constructor(props: IVerticalContainerProps) {
    super(props);

    this.type = 'VerticalContainer';
    this.component = VerticalContainerComponent;

    this.components = [];

    Object.assign(this, { ...props });
  }
}

export default VerticalContainer;
