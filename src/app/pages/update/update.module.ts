import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { UpdatePageRoutingModule } from './update-routing.module';

import { UpdatePage } from './update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdatePage]
})
export class UpdatePageModule {}
