import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogindocPageRoutingModule } from './logindoc-routing.module';

import { LogindocPage } from './logindoc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogindocPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LogindocPage]
})
export class LogindocPageModule {}
