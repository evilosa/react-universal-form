// @flow
import * as React from 'react';
import Radium from 'radium';
import defaultStyle from './styles';
import ComponentHeader from 'components/ComponentHeader';

export type TextInputProps = {
  title: string,
  value: string,
  propName?: string,
  onChange?: Function,
  style: Object,
}

const TextInput = ({title, value, propName, onChange, style}: TextInputProps) => {
  return (
    <ComponentHeader header={title}>
      <input
        style={
          [
            style.base,
          ]
        }
        type="TextInput"
        value={value}
        onChange={e => onChange && onChange(propName, e.currentTarget.value)}
      />
    </ComponentHeader>
  );
};

TextInput.defaultProps = {
  title: '',
  value: '',
  style: defaultStyle,
};

//$FlowFixMe
export default Radium(TextInput);