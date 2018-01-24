// @flow
import * as React from 'react';
import UpdateBlocker from 'components/UpdateBlocker';
import Button from 'components/Button';

const DemoThemedButtons = () => (
  <UpdateBlocker>
    <Button>Themed button233</Button>
    <Button customStyle={{primary: { background: '#ffc'}}} inlineStyle={{color: 'black'}}>Themed button233</Button>
  </UpdateBlocker>
);

export default DemoThemedButtons;