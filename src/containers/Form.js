'no babel-plugin-flow-react-proptypes';
// @flow
import * as React from 'react';
import 'styles/default.css';
import { browserHistory } from 'react-router';
// $FlowFixMe: @lix
// import * as globalStyles from 'utils/styles';
// import Button from '@lix/lix-ui/Button';
// import Loading from 'components/Loading';
import validateModel, { validateField } from 'utils/validateModel';
import type { Form as FormProps } from 'models/Form';

type State = {
  editEnabled: boolean,
  isNew: boolean,
  source: Object,
};

class Form extends React.Component<FormProps, State> {
  props: FormProps;
  state: State;

  constructor(props) {
    super(props);

    const { sourceObject } = this.props;

    this.state = {
      isNew: !!sourceObject.get('isNew'),
      editEnabled: !!sourceObject.get('isNew'),
      source: sourceObject.toJS(),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sourceObject) {
      this.setState(prev => ({
        ...prev,
        isNew: !!nextProps.sourceObject.get('isNew'),
        editEnabled: !!nextProps.sourceObject.get('isNew'),
        source: nextProps.sourceObject.toJS(),
      }));
    }
  }

  _goBack = () => {
    browserHistory.goBack();
  };

  _onEditClick = () => {
    this.setState(prev => ({
      ...prev,
      editEnabled: !prev.editEnabled,
    }));
  };

  _onDeleteClick = () => {
    const { sourceObject, onDelete } = this.props;

    if (onDelete) {
      this.setState(
        prev => ({
          ...prev,
          editEnabled: false,
        }),
        () => onDelete(sourceObject)
      );
    }
  };

  _onOkClick = () => {
    const { onCreate, onUpdate, dispatch } = this.props;
    const { isNew, source } = this.state;

    const errors = validateModel(source);
    if (!errors) {
      if (isNew && onCreate) {
        onCreate(this.state.source);
        // dispatch(success(createNotification('Create item', 'Item was created successfully!')));
      }

      if (!isNew && onUpdate) {
        this.setState(
          prev => ({
            ...prev,
            editEnabled: false,
          }),
          () => {
            onUpdate(this.state.source);
            // dispatch(success(createNotification('Update item', 'Item was updated successfully!')));
          }
        );
      }
    } else {
      Object.entries(errors).forEach(keyValuePair => {
        // dispatch(error(createNotification(keyValuePair[0], keyValuePair[1])));
      });
    }

    this.setState(prev => ({
      ...prev,
      source: {
        ...prev.source,
        validation: { ...prev.source.validation, errors },
      },
    }));
  };

  _onCancelClick = () => {
    const { sourceObject } = this.props;
    const { isNew } = this.state;

    if (!isNew) {
      this.setState(prev => ({
        ...prev,
        editEnabled: false,
        source: sourceObject.toJS(),
      }));
    } else {
      browserHistory.goBack();
    }
  };

  _onValueEdit = (value, propName) => {
    const { source } = this.state;

    if (Object.keys(source).includes(propName)) {
      this.setState(
        prev => ({
          ...prev,
          source: { ...prev.source, [propName]: value },
        }),
        () => {
          const { source } = this.state;
          const { validation: { errors } } = source;
          if (errors && !!errors[propName]) {
            // validate exact field
            const propErrors = validateField(source, propName);
            this._setFieldValidationErrors(propName, propErrors);
          }
        }
      );
    }
  };

  _setFieldValidationErrors = (propName, errors) => {
    this.setState(prev => ({
      ...prev,
      source: {
        ...prev.source,
        validation: {
          ...prev.source.validation,
          errors: { ...prev.source.validation.errors, [propName]: errors },
        },
      },
    }));
  };

  _renderComponents = components => {
    const { expanded } = this.props;
    const { source, editEnabled } = this.state;
    return components
      .filter(
        component => (editEnabled ? component.visibleInEditMode : component.visibleInViewMode)
      )
      .map((elementMetadata, index) => (
        <elementMetadata.component
          key={index}
          {...elementMetadata}
          expanded={expanded}
          source={source}
          editEnabled={editEnabled}
          onValueEdit={this._onValueEdit}
        />
      ));
  };

  render() {
    const {
      expanded,
      canGoBack,
      components,
      title,
      onCreate,
      onUpdate,
      onDelete,
      okButtonCaption,
      isLoading,
    } = this.props;
    const { isNew, editEnabled } = this.state;

    return (
      <div styleName="root" style={{ height: expanded && !editEnabled ? 'auto' : '100%' }}>
        {canGoBack && (
          <div styleName="action-panel-left">
            <a onClick={this._goBack}>Go back</a>
          </div>
        )}
        <div styleName="header">{title && <h1 styleName="title">{title}</h1>}</div>

        {isLoading && <Loading center />}

        {!isLoading && [
          <div key="top-panel" styleName="action-panel-right">
            {!editEnabled &&
              onUpdate && (
                <Button small onClick={() => this._onEditClick()} style={globalStyles.button}>
                  Edit
                </Button>
              )}

            {!editEnabled &&
              onDelete && (
                <Button small style={globalStyles.button} onClick={() => this._onDeleteClick()}>
                  Delete
                </Button>
              )}

            {editEnabled && (
              <Button small style={globalStyles.button} onClick={() => this._onCancelClick()}>
                Cancel
              </Button>
            )}
          </div>,
          <div key="content" styleName="content">
            {this._renderComponents(components)}
          </div>,
          <div key="footer" styleName="footer">
            <div styleName="action-panel-right">
              {((editEnabled && onUpdate) || (isNew && onCreate)) && (
                  <button styleName="button" onClick={() => this._onOkClick()}>
                    {okButtonCaption}
                  </button>
                )}
            </div>
          </div>,
        ]}
      </div>
    );
  }
}

import { connect } from 'react-redux';

export default connect(() => ({}))(Form);
