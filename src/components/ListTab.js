'no babel-plugin-flow-react-proptypes';
// @flow
import * as React from 'react';
import 'styles/default.css';
import DropDownFeature from 'features/dropDownSearch';
const { DropDownSearch } = DropDownFeature;

import type { ListTab as ListTabModel } from '../models/ListTab';

type State = {
  isSelectionStarted: boolean,
};

class ListTab extends React.Component<ListTabModel, State> {
  props: ListTabModel;
  state: State;

  constructor(props) {
    super(props);

    this.state = {
      isSelectionStarted: false,
    };
  }

  _onAddItemClick = () => {
    this.setState(prev => ({
      ...prev,
      isSelectionStarted: true,
    }));
  };

  _onItemSelect = (id: string, label: string, selectedSource: any) => {
    const selectedBook = { ...selectedSource, id };
    const { tableName, source } = this.props;
    const sourceList = source[tableName];
    sourceList.push(selectedBook);

    this.setState(prev => ({
      ...prev,
      isSelectionStarted: false,
    }));
  };

  _onDeleteItem = id => {
    console.log('Delete ' + id);
    const { tableName, source, onValueEdit } = this.props;
    const sourceList = source[tableName];
    onValueEdit(sourceList.filter(item => item.id !== id), tableName);
  };

  _renderItem = (rowNumber, item) => {
    const { editEnabled, onDisplayData, onRowClick } = this.props;

    return (
      <div key={item.value} styleName="list-item">
        {editEnabled && (
          <a
            onClick={e => {
              e.stopPropagation();
              this._onDeleteItem(item.id);
            }}
          >
            <Icon name="close" style={globalStyles.icon} />
          </a>
        )}
        <div
          onClick={() => onRowClick && !editEnabled && onRowClick(item)}
        >{`${rowNumber}) ${onDisplayData(item)}`}</div>
      </div>
    );
  };

  _renderItems = items => {
    let rowNumber = 1;
    return items.map(item => this._renderItem(rowNumber++, item));
  };

  _onEscKeyDown = () => {
    this.setState(prev => ({
      ...prev,
      isSelectionStarted: false,
    }));
  };

  render() {
    const { tableName, editEnabled, onSearch, placeholder, source } = this.props;

    const { isSelectionStarted } = this.state;

    const sourceList = source[tableName] || [];

    return (
      <div key={`list-items-${tableName}`} styleName="list-items">
        {this._renderItems(sourceList)}

        {editEnabled &&
          isSelectionStarted && (
            <DropDownSearch
              placeholder={placeholder}
              onSearch={onSearch}
              onSelect={this._onItemSelect}
              styleName="list-item"
              onEscKeyDown={this._onEscKeyDown}
            />
          )}

        {editEnabled &&
          !isSelectionStarted && (
            <a styleName="list-add-item" onClick={this._onAddItemClick}>
              + Add new item
            </a>
          )}
      </div>
    );
  }
}

export default ListTab;
