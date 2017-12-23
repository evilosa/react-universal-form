// @flow
import StepperInputComponent from '../components/StepperInput';
import type { IEditableComponentBaseProps } from './EditableComponentBase';
import { EditableComponentBase } from './EditableComponentBase';

export type IStepperInputProps = {
  title?: string, // Input title
  placeholder?: string, // input placeholder

  displayTemplate?: string,
  onDisplayData?: (value: any) => string,
  minValue?: number,
} & IEditableComponentBaseProps;

export class StepperInput extends EditableComponentBase {
  title: string;
  placeholder: string;
  displayTemplate: string;
  onDisplayData: (value: any) => string;

  minValue: number;

  constructor(props: IStepperInputProps) {
    super(props);

    this.type = 'StepperInput';
    this.component = StepperInputComponent;

    this.title = '';
    this.placeholder = '';
    this.displayTemplate = '${value}';
    this.onDisplayData = this._onDisplayData;
    this.minValue = 1;

    Object.assign(this, { ...props });
  }

  _onDisplayData = (value: any): string => {
    return this.displayTemplate.replace(/\${(\w+)}/g, value);
  };
}

export default StepperInput;

// Default view - left title align.
// -----------------------------------------------------------------------
// | Title       | - | Value | + |                                       |
// -----------------------------------------------------------------------
