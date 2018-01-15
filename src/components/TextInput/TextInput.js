// @flow
import * as React from 'react';

const TextInput = ({value, propName, onEdit}) => {
  return (
    <input value={value} onChange={e => onEdit(propName, e.currentTarget.value)}/>
  );
};

export default TextInput;