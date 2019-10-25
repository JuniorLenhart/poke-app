import { Input } from '@angular/core';

import { Page } from './page';
import { ColumnType } from './column-type';

export class DatatableBase {

  @Input() limit;

  messages = { emptyMessage: 'Nenhum registro encontrado!', totalMessage: 'Total' };

  page: Page;
  rows: Array<any>;
  columns: Array<any>;

  constructor() {
    this.limit = 10;

    this.init();
  }

  init() {
    this.page = new Page(this.limit);
    this.rows = [];
    this.columns = [];
  }

  addColumn(column: any) {
    column.headerClass = 'text-center font-weight-bold';
    column.cellClass = 'text-center';

    if (column.type) {
      if (column.type == ColumnType.COLUMN_STRING) {
        column.headerClass = 'text-left font-weight-bold';
        column.cellClass = 'text-left';
      }
    }

    this.columns.push(column);
  }

}