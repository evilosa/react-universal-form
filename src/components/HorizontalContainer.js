'no babel-plugin-flow-react-proptypes';
// @flow
import * as React from 'react';
import 'styles/default.css';

import type { HorizontalContainer as HorizontalContainerModel } from 'models/HorizontalContainer';

class HorizontalContainer extends React.Component<HorizontalContainerModel> {
  props: HorizontalContainerModel;

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
    return <div styleName="horizontal-container">{this._renderComponents()}</div>;
  }
}

export default HorizontalContainer;
