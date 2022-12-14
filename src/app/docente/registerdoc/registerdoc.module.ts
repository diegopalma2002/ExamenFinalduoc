import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RegisterdocPageRoutingModule } from './registerdoc-routing.module';

import { RegisterdocPage } from './registerdoc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegisterdocPageRoutingModule
  ],
  declarations: [RegisterdocPage]
})
export class RegisterdocPageModule {}
