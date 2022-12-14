import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-scanqr',
  templateUrl: './scanqr.page.html',
  styleUrls: ['./scanqr.page.scss'],
})
export class ScanqrPage implements OnDestroy {
  qrString = 'Asistencia Registrada'
  scanResult : any;
  content = ''
  constructor() {}
  async checkPermission (){
    try {

      const status = await BarcodeScanner.checkPermission({ force:true});
      if (status.granted) {

        return true;
      } 

      return false;
      
    } catch (e) {
      console.log(e);
    }


}



 async startScan(){
  try{
    const permission = await this.checkPermission();
    if (!permission){
      return;
    }
    await BarcodeScanner.hideBackground();
    document.querySelector('body').classList.add('scanner-active');
    this.content = 'hidden';
    const result = await BarcodeScanner.startScan();
    console.log(result);
    this.content = '';
    BarcodeScanner.showBackground();
    document.querySelector('body').classList.remove('scanner-active');
    if (result?.hasContent){
      this.scanResult = result.content;
      
      console.log(this.scanResult);

    }
  }
  catch(e) {
    console.log(e);
    this.stopScan();
  }
 }

  stopScan(){
    
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
    this.content ='';

  }
  
  
  ngOnDestroy(): void {
    this.stopScan();
  }
}