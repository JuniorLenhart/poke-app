import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ApiService } from './../service/api.service';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponentsModule } from './home-components.module';

import { Home } from './home.component';

@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    FormsModule,

    HomeRoutingModule,
    HomeComponentsModule
  ],
  providers: [
    ApiService
  ]
})
export class HomeModule { }
