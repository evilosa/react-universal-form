// @flow

export class ValidableModel {
  validation: {
    constraints: Object,
    errors: ?Object,
  };

  constructor() {
    this.validation = {
      constraints: {},
      errors: null,
    };
  }
}

export default ValidableModel;
