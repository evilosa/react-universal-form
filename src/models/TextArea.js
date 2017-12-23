// @flow
import * as React from 'react';
import TextInputComponent from '../components/TextInput';

export type ITextInputProps = {
  propName: string,

  title?: string, // field title
  disabled?: boolean, // disable input field
  placeholder?: string, // input placeholder
};

export class TextInput {
  type: string;
  component: React.ComponentType<any>;
  editable: boolean;

  propName: string;
  title: string;
  disabled: boolean;
  placeholder: string;

  constructor(props: ITextInputProps) {
    this.type = 'TextInput';
    this.component = TextInputComponent;
    this.editable = true;

    this.title = '';
    this.disabled = false;

    Object.assign(this, props);
  }
}

export default TextInput;

// Default view - left title align.
// -----------------------------------------------------------------------
// | Title  |  TextArea                                                  |
// |        |                                                            |
// |        |                                                            |
// |        |                                                            |
// |        |                                                            |
// |        |                                                            |
// -----------------------------------------------------------------------
