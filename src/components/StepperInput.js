'no babel-plugin-flow-react-proptypes';
// @flow
import * as React from 'react';
import 'styles/default.css';

import type { StepperInput as StepperInputModel } from 'models/StepperInput';

class StepperInput extends React.Component<StepperInputModel> {
  props: StepperInputModel;

  _onMinus = () => {
    const { propName, source, onValueEdit, minValue } = this.props;
    const value = source[propName] || minValue;
    if (value > minValue) {
      onValueEdit(value - 1, propName);
    }
  };

  _onPlus = () => {
    const { propName, source, onValueEdit, minValue } = this.props;
    const value = source[propName] || minValue;
    onValueEdit(value + 1, propName);
  };

  render() {
    const {
      title,
      source,
      editEnabled,
      readOnly,
      propName,
      onValueEdit,
      placeholder,
      onDisplayData,
    } = this.props;

    const value = source[propName] || '';
    const formControlStyle =
      editEnabled && !readOnly ? 'text-control-input-edit-mode' : 'text-control-input';

    return (
      <div styleName="text-control">
        <span styleName="text-control-title">{title}</span>
        <div styleName="text-control-input-container">
          <input
            styleName={formControlStyle}
            placeholder={placeholder || ''}
            type="text"
            value={onDisplayData(value)}
            onChange={e => onValueEdit(e.currentTarget.value, propName)}
            readOnly={readOnly || !editEnabled}
          />
          <div styleName="stepper-buttons-container">
            {editEnabled &&
              !readOnly && (
                <button styleName={'stepper-button-plus'} onClick={this._onPlus}>
                  +
                </button>
              )}
            {editEnabled &&
              !readOnly && (
                <button styleName={'stepper-button-minus'} onClick={this._onMinus}>
                  -
                </button>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default StepperInput;
