import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router"; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioHome: FormGroup;

  constructor(public fb: FormBuilder,
    public router: Router,
    public alertController: AlertController) {
      this.formularioHome = this.fb.group({

      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
    }) 
  }

  ngOnInit()  {
  }
  async ingresar(){
    var f = this.formularioHome.value;
  
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('ingresado'),
      this.router.navigate(['list']);
    }else {
      const alert = await this.alertController.create({
        header: 'datos incorrectos',
        message: 'los datos son incorrectos',
        buttons: ['acepta']
      });

      await alert.present();
    }
  }
}
