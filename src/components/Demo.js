// @flow
import * as React from 'react';
import Button from 'components/Button';
import TextInput from 'components/TextInput';

import Color from 'color';

export class Demo extends React.Component<any> {

  render() {
    const customStyle = {
      width: '250px',
      height: '40px',
      background: '#000',
      // base: {
        // color: '#fff',

        // Adding interactive state couldn't be easier! Add a special key to your
        // style object (:hover, :focus, :active, or @media) with the additional rules.
        ':hover': {
          background: Color('#0ff').lighten(0.2).hex(),
        }
      // },
    };
    return (
      <div>
        Hello world!
        <div>
          <Button style={customStyle}/>
          <TextInput/>
        </div>
      </div>
    );
  }
}