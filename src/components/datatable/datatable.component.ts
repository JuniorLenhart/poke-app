import { Component, Input } from '@angular/core';

import { DatatableBase } from './datatable-base';

@Component({
  selector: 'datatable',
  templateUrl: './datatable.template.html'
})
export class Datatable extends DatatableBase {

  @Input() parent;

  constructor() {
    super();
  }

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  loadPage(data) {
    this.page.pageNumber = data.page;
    this.page.totalElements = data.count;
    this.rows = data.content;
  }

  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.parent.findAll();
  }

  getParams() {
    let filter = {
      limit: this.limit,
      offset: this.page.pageNumber * this.limit
    }

    return filter;
  }


}