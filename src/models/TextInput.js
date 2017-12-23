// @flow
import TextInputComponent from '../components/TextInput';
import type { IEditableComponentBaseProps } from './EditableComponentBase';
import { EditableComponentBase } from './EditableComponentBase';

export type ITextInputProps = {
  title?: string, // field title
  placeholder?: string, // input placeholder

  showCopyToClipboard?: boolean,
  copyToClipboardTemplate?: string,
  onCopyToClipboardCompleted?: string => void,
} & IEditableComponentBaseProps;

export class TextInput extends EditableComponentBase {
  title: string;
  placeholder: string;

  showCopyToClipboard: boolean;
  copyToClipboardTemplate: string;
  onCopyToClipboardCompleted: ?(string) => void;

  constructor(props: ITextInputProps) {
    super(props);

    this.type = 'TextInput';
    this.component = TextInputComponent;

    this.title = '';
    this.placeholder = '';

    this.showCopyToClipboard = false;
    this.copyToClipboardTemplate = '${value}';
    this.onCopyToClipboardCompleted = null;

    Object.assign(this, { ...props });
  }
}

export default TextInput;

// Default view - left title align.
// -----------------------------------------------------------------------
// | Title  |  Input                                                     |
// -----------------------------------------------------------------------
