import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder, NonNullableFormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router"; 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public router: Router,
    public alertController: AlertController) { this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),

    });
  }

  ngOnInit() {
  }
  async guardar(){
    var f = this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message : 'Tienes que llenar todos los datos',
        buttons : ['ok']
      });
      await alert.present();
      return;
    }

    var usuario = {
      nombre : f.nombre,
      password : f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
    this.router.navigate(['list']);
  }
  
}
