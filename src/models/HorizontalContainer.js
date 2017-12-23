// @flow
import HorizontalContainerComponent from '../components/HorizontalContainer';
import type { IEditableComponentBaseProps } from './EditableComponentBase';
import { EditableComponentBase } from './EditableComponentBase';

export type IHorizontalContainerProps = {
  components?: Array<EditableComponentBase>,
} & IEditableComponentBaseProps;

export class HorizontalContainer extends EditableComponentBase {
  components: Array<EditableComponentBase>;

  constructor(props: IHorizontalContainerProps) {
    super(props);

    this.type = 'HorizontalContainer';
    this.component = HorizontalContainerComponent;

    this.components = [];

    Object.assign(this, { ...props });
  }
}

export default HorizontalContainer;
