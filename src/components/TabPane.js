'no babel-plugin-flow-react-proptypes';
// @flow
import * as React from 'react';
import 'styles/default.css';

import { TabPane as TabPaneModel } from '../models/TabPane';

type State = {
  activeTabId: string,
};

class FormTabPane extends React.Component<TabPaneModel, State> {
  props: TabPaneModel;
  state: State;

  constructor(props: TabPaneModel) {
    super(props);

    this.state = {
      activeTabId: props.panes.length > 0 ? props.panes[0].id : '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { editEnabled } = this.props;
    if (editEnabled !== nextProps.editEnabled) {
      const visiblePanes = nextProps.panes.filter(
        pane => (nextProps.editEnabled ? pane.visibleInEditMode : pane.visibleInViewMode)
      );

      if (visiblePanes.length > 0) {
        this.setState(prev => ({
          ...prev,
          activeTabId: visiblePanes[0].id,
        }));
      }
    }
  }

  _onTabChanges = activeTabId => {
    this.setState(prev => ({
      ...prev,
      activeTabId,
    }));
  };

  _renderPanes = panes => {
    const { activeTabId } = this.state;

    return panes.map((pane, index) => (
      <div
        key={`pane-headers-${pane.id}-${index}`}
        styleName={`tab-header${pane.id === activeTabId ? '-active' : ''}`}
        onClick={() => this._onTabChanges(pane.id)}
      >
        {pane.title}
      </div>
    ));
  };

  _renderLists = panes => {
    const { editEnabled, source, onValueEdit } = this.props;
    const { activeTabId } = this.state;

    return panes
      .filter(pane => pane.id === activeTabId)
      .map((pane, index) => (
        <pane.component
          key={`list-${pane.id}-${index}`}
          {...pane}
          editEnabled={editEnabled}
          source={source}
          onValueEdit={onValueEdit}
        />
      ));
  };

  render() {
    const { panes, editEnabled } = this.props;

    const visiblePanes = panes.filter(
      pane => (editEnabled ? pane.visibleInEditMode : pane.visibleInViewMode)
    );

    if (visiblePanes.length > 0) {
      return (
        <div styleName="tab-pane">
          <div styleName="tab-pane-headers">{this._renderPanes(visiblePanes)}</div>
          <div styleName="tab-content">{this._renderLists(visiblePanes)}</div>
        </div>
      );
    }
  }
}

export default FormTabPane;
