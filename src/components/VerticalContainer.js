'no babel-plugin-flow-react-proptypes';
// @flow
import * as React from 'react';
import 'styles/default.css';

import type { VerticalContainer as VerticalContainerModel } from 'models/VerticalContainer';

class VerticalContainer extends React.Component<VerticalContainerModel> {
  props: VerticalContainerModel;

  _renderComponents = () => {
    const { components, source, editEnabled, onValueEdit } = this.props;
    return components
      .filter(
        component => (editEnabled ? component.visibleInEditMode : component.visibleInViewMode)
      )
      .map((elementMetadata, index) => (
        <elementMetadata.component
          key={index}
          {...elementMetadata}
          source={source}
          editEnabled={editEnabled}
          onValueEdit={onValueEdit}
        />
      ));
  };

  render() {
    return <div styleName="vertical-container">{this._renderComponents()}</div>;
  }
}

export default VerticalContainer;
