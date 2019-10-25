import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutDefaultComponent } from './layout/layout-default/layout-default.component';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: LayoutDefaultComponent, loadChildren: './home/home.module#HomeModule' },

  { path: '**', redirectTo: 'notFound', pathMatch: 'full' },
  { path: 'notFound', component: LayoutBlankComponent, loadChildren: './error/error.module#ErrorModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
