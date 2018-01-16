// @flow
import * as React from 'react';
import Radium from 'radium';
import defaultStyle from './styles';

export type TextInputProps = {
  value: string,
  propName: string,
  onEdit: Function,
  style: Object,
}

const TextInput = ({value, propName, onEdit, style}: TextInputProps) => {
  return (
    <input
      style={
        [
          style.base,
        ]
      }
      value={value}
      onChange={e => onEdit(propName, e.currentTarget.value)}
    />
  );
};

TextInput.defaultProps = {
  value: '',
  style: defaultStyle,
};

//$FlowFixMe
export default Radium(TextInput);