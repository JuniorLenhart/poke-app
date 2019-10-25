import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { LayoutBlankComponent } from './layout-blank/layout-blank.component';

import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LayoutDefaultComponent,
    LayoutBlankComponent,

    LayoutNavbarComponent
  ]
})
export class LayoutModule { }