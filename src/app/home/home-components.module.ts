import { NgModule } from '@angular/core';

import { DatatableModule } from './../../components/datatable/datatable.module';

@NgModule({
    imports: [
        DatatableModule
    ],
    exports: [
        DatatableModule
    ]
})
export class HomeComponentsModule { }
