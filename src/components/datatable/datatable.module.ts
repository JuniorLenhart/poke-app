import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { Datatable } from './datatable.component';

@NgModule({
  declarations: [
    Datatable
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule
  ],
  exports: [
    NgxDatatableModule,
    Datatable
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DatatableModule { }