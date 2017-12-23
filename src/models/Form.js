// @flow
import { Map } from 'immutable';
import type { ComponentBase } from './ComponentBase';

export type IFormProps = {
  isLoading?: boolean,
  expanded?: boolean,

  // Title
  title?: string,
  canGoBack?: boolean,
  okButtonCaption?: string,

  // Callbacks
  onCreate?: (data: Object) => void,
  onUpdate?: (data: Object) => void,
  onDelete?: (data: Object) => void,

  // Form context
  components: Array<ComponentBase>,
  sourceObject: any,
};

export class Form {
  dispatch: Function;

  isLoading: boolean;
  expanded: boolean;

  title: string;
  canGoBack: boolean;
  okButtonCaption: string;

  onCreate: ?(source: Object) => void;
  onUpdate: ?(source: Object) => void;
  onDelete: ?(source: Object) => void;

  components: Array<ComponentBase>;

  sourceObject: Object;

  constructor(props: IFormProps) {
    this.isLoading = false;
    this.expanded = false;

    this.title = 'Form';
    this.canGoBack = true;
    this.okButtonCaption = 'Save';

    this.components = [];

    this.sourceObject = Map({});

    Object.assign(this, { ...props });
  }
}

export default Form;
