import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogindocPage } from './logindoc.page';

const routes: Routes = [
  {
    path: '',
    component: LogindocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogindocPageRoutingModule {}
