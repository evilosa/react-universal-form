// @flow
import TableTabComponent from '../components/TableTab';
import type { SearchFunction } from 'utils/flowTypes';
import type { ITabComponentBaseProps } from './TabComponentBase';
import { TabComponentBase } from './TabComponentBase';
import type { TableTabColumn } from './TableTabColumn';

export type ITableTabProps = {
  tableName: string,
  columns: Array<TableTabColumn>,

  placeholder?: string,
  displayTemplate?: string,
  onDisplayData?: (row: any) => string,

  onSearch?: SearchFunction,
  onRowClick?: (row: any) => void,
} & ITabComponentBaseProps;

export class TableTab extends TabComponentBase {
  tableName: string;
  columns: Array<TableTabColumn>;

  placeholder: string;
  displayTemplate: string;
  onDisplayData: (row: any) => string;

  onSearch: SearchFunction;
  onRowClick: ?(row: any) => void;

  constructor(props: ITableTabProps) {
    super(props);

    this.type = 'TableTab';
    this.component = TableTabComponent;

    this.columns = [];

    this.placeholder = '';
    this.displayTemplate = '${title}';
    this.onDisplayData = this._onDisplayData;

    this.onSearch = this._onSearch;

    Object.assign(this, { ...props });
  }

  _onDisplayData = row => {
    return this.displayTemplate.replace(/\${(\w+)}/g, (_, v) => row[v]);
  };

  _onSearch = (query, field, page, sorting) => {
    console.log('You need to provide function for drop down search!!!');
    console.log(
      `Given values query="${query}" field="${field}" page="${page}" sorting="${sorting}".`
    );
  };
}

export default TableTab;
