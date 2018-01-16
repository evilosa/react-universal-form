// @flow
import * as React from 'react';
import defaultStyle from './styles';


const TextInput = ({value, propName, onEdit}) => {
  return (
    <input value={value} onChange={e => onEdit(propName, e.currentTarget.value)}/>
  );
};

TextInput.defaultProps = {

};

export default TextInput;