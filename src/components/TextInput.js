'no babel-plugin-flow-react-proptypes';
// @flow
import * as React from 'react';
import 'styles/default.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import type { TextInput as TextInputModel } from 'models/TextInput';

type State = {
  showCopied: boolean,
};

class TextInput extends React.Component<TextInputModel, State> {
  props: TextInputModel;
  state: State;

  constructor(props: TextInputModel) {
    super(props);

    this.state = {
      showCopied: false,
    };
  }

  _fillTemplate = value => {
    const { copyToClipboardTemplate } = this.props;
    return copyToClipboardTemplate.replace(/\${(\w+)}/g, value);
  };

  _onCopy = copiedText => {
    const { onCopyToClipboardCompleted } = this.props;

    this.setState(
      prev => ({
        ...prev,
        showCopied: true,
      }),
      () => {
        onCopyToClipboardCompleted && onCopyToClipboardCompleted(copiedText);
        setTimeout(() => {
          this.setState(prev => ({
            ...prev,
            showCopied: false,
          }));
        }, 2000);
      }
    );
  };

  render() {
    const {
      title,
      showCopyToClipboard,
      source,
      editEnabled,
      readOnly,
      onValueEdit,
      propName,
      placeholder,
    } = this.props;

    const { showCopied } = this.state;

    const value = source[propName] || '';
    const { validation: { errors } } = source;
    const hasError = errors && !!errors[propName];

    const formControlStyle =
      editEnabled && !readOnly
        ? `text-control-input-${hasError ? 'error' : 'edit-mode'}`
        : 'text-control-input';

    return (
      <div styleName={`text-control${hasError ? '-error' : ''}`}>
        <span styleName="text-control-title">{title}</span>
        <div styleName="text-control-input-container">
          <input
            placeholder={placeholder || ''}
            styleName={formControlStyle}
            readOnly={readOnly || !editEnabled}
            onChange={e => onValueEdit(e.currentTarget.value, propName)}
            value={value}
          />
          {!editEnabled &&
            showCopied && (
              <div styleName="tooltip-managed">
                <span styleName="tooltip-text">Copied to clipboard</span>
              </div>
            )}
          {!editEnabled &&
            showCopyToClipboard && (
              <CopyToClipboard text={this._fillTemplate(value)} onCopy={this._onCopy}>
                <button styleName="text-control-copy-button">Copy</button>
              </CopyToClipboard>
            )}
        </div>
      </div>
    );
  }
}

export default TextInput;
