'no babel-plugin-flow-react-proptypes';
// @flow
import * as React from 'react';
import 'styles/default.css';

import type { Select as SelectProps } from 'models/Select';

class Select extends React.Component<SelectProps> {
  props: SelectProps;

  _onSelectChange = (value: string): void => {
    const { propName, onValueEdit } = this.props;

    onValueEdit(value, propName);
  };

  render() {
    const { title, propName, options, editEnabled, source } = this.props;
    const value = source[propName] || '';
    const formControlStyle = editEnabled ? 'text-control-input-edit-mode' : 'text-control-input';

    return (
      <div styleName="text-control">
        <span styleName="text-control-title">{title}</span>
        <div styleName="text-control-input-container">
          <select
            styleName={formControlStyle}
            value={value}
            onChange={e => this._onSelectChange(e.currentTarget.value)}
            disabled={!editEnabled}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default Select;
