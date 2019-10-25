import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Home } from './home.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '', component: Home
    }
  ])],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
