import { Component, ViewChild, TemplateRef } from '@angular/core';

import { AppService } from './../app.service';
import { ApiService } from './../service/api.service';

import { ColumnType } from './../../components/datatable/column-type';
import { Datatable } from './../../components/datatable/datatable.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.template.html'
})
export class Home {

  @ViewChild('datatable', { static: true }) datatable: Datatable;
  @ViewChild('favoriteColumn', { static: true }) favoriteColumnTmpl: TemplateRef<any>;

  constructor(
    private appService: AppService,
    private apiService: ApiService) {
    this.appService.pageTitle = 'Home';
  }

  ngOnInit() {
    this.datatable.addColumn({ name: 'Nome', prop: 'name', sortable: false, searchable: false, resizeable: false, type: ColumnType.COLUMN_STRING });
    this.datatable.addColumn({ sortable: false, searchable: false, resizeable: false, maxWidth: 100, cellTemplate: this.favoriteColumnTmpl });
    this.findAll();
  }

  findAll() {
    const params = this.datatable.getParams();

    this.apiService.findAll(params).then(
      data => {
        this.datatable.loadPage({
          page: Math.trunc(params.offset / params.limit),
          count: data.count,
          content: data.results
        });
      }
    );
  }

  isFavorite(name) {
    const favorites = localStorage.getItem('favorites');

    if (favorites) {
      return favorites.includes(name)
    }

    return false;
  }

  classFavorite(row) {
    if (this.isFavorite(row.name)) {
      return 'ion ion-md-star text-warning';
    }

    return 'ion ion-md-star-outline text-secondary';
  }

  toggleFavorite(row) {
    let favorites = localStorage.getItem('favorites');

    if (this.isFavorite(row.name)) {
      favorites = favorites.replace(row.name, '');
    } else {
      favorites += ' ' + row.name;
    }

    localStorage.setItem('favorites', favorites);
  }

}

