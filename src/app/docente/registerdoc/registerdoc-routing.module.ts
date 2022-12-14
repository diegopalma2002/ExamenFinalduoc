import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterdocPage } from './registerdoc.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterdocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterdocPageRoutingModule {}
