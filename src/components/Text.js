'no babel-plugin-flow-react-proptypes';
// @flow
import * as React from 'react';
import 'styles/default.css';

import type { Text as TextModel } from '../models/Text';

class Text extends React.Component<TextModel> {
  props: TextModel;

  render() {
    const { title, text, isNote } = this.props;

    return (
      <div styleName={isNote ? 'text-control-note' : 'text-control'}>
        {title && <span styleName="text-control-title">{title}</span>}
        <div styleName="text-control-input-container">
          <input styleName={`text-control-input${isNote ? '-note' : ''}`} readOnly value={text} />
        </div>
      </div>
    );
  }
}

export default Text;
