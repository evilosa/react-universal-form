'no babel-plugin-flow-react-proptypes';
// @flow
import * as React from 'react';
import 'styles/default.css';
import DropDownFeature from 'features/dropDownSearch';
const { DropDownSearch } = DropDownFeature;

import type { TableTab as TableTabModel } from 'models/TableTab';

type State = {
  isSelectionStarted: boolean,
};

class TableTab extends React.Component<TableTabModel, State> {
  props: TableTabModel;
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
    const { tableName, source, onValueEdit } = this.props;
    onValueEdit([...source[tableName], selectedBook], tableName);

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

  _renderTableHeader = ({ columns }) => {
    return (
      <div styleName="table-header">
        <div key={`row-number-header`} styleName="table-row-number-header">
          #
        </div>
        {columns.map((column, index) => (
          <div key={index} styleName="table-header-column">
            {column.header}
          </div>
        ))}
      </div>
    );
  };

  _renderTableRows = ({ columns, sourceTable }) => {
    const { onRowClick } = this.props;

    return sourceTable.map((rowData, index) => (
      <div key={index} styleName="table-row" onClick={() => onRowClick && onRowClick(rowData)}>
        <div key={`row-number-key-${index}`} styleName="table-row-number">
          {index + 1}
        </div>
        {columns.map((column, key) => this._renderTableColumn({ column, key, rowData }))}
      </div>
    ));
  };

  _renderTableColumn = ({ column, key, rowData }) => {
    return (
      <div key={key} styleName="table-column">
        {rowData[column.propName]}
      </div>
    );
  };

  render() {
    const { tableName, columns, editEnabled, onSearch, placeholder, source } = this.props;

    const { isSelectionStarted } = this.state;

    const sourceTable = source[tableName] || [];
    const { validation: { errors } } = source;

    const hasError = errors && !!errors[tableName];

    return (
      <div key={`table-${tableName}`} styleName={`table${hasError ? '-error' : ''}`}>
        {!editEnabled && this._renderTableHeader({ columns })}

        {!editEnabled && this._renderTableRows({ columns, sourceTable })}

        {editEnabled && this._renderItems(sourceTable)}

        {editEnabled &&
          isSelectionStarted && (
            <div styleName="list-add-item">
              <DropDownSearch
                placeholder={placeholder}
                onSearch={onSearch}
                onSelect={this._onItemSelect}
                onEscKeyDown={this._onEscKeyDown}
              />
            </div>
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

export default TableTab;
