import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenqrPageRoutingModule } from './genqr-routing.module';
import { QRCodeModule } from 'angularx-qrcode';

import { GenqrPage } from './genqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenqrPageRoutingModule,
    QRCodeModule
  ],
  declarations: [GenqrPage]
})
export class GenqrPageModule {}
