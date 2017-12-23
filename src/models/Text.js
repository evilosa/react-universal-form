// @flow
import TextComponent from '../components/Text';
import type { IComponentBaseProps } from './ComponentBase';
import { ComponentBase } from './ComponentBase';

export type ITextProps = {
  title?: string,
  text?: string,
  isNote?: boolean,
} & IComponentBaseProps;

export class Text extends ComponentBase {
  title: ?string;
  text: string;
  isNote: boolean;

  constructor(props: ITextProps) {
    super(props);

    this.type = 'Text';
    this.component = TextComponent;

    this.isNote = false;

    Object.assign(this, { ...props });
  }
}

export default Text;

// Default text view - left title align.
// -----------------------------------------------------------------------
// | Title  |  Text                                                      |
// -----------------------------------------------------------------------
