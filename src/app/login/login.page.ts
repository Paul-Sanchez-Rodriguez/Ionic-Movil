import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { logindto } from '../dtos/login.dto';
import { ClienteService } from '../services/clientes/cliente.service';
import { VentaService } from '../services/venta/venta.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginform: FormGroup = new FormGroup<any>({});
  constructor(private fb: FormBuilder,
    private router: Router,
    public clienteService: ClienteService,
    private toastController: ToastController,
    private ventaService:VentaService) {

  }

  ngOnInit() {
    this.loginform = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required],
    })
  }

  login() {
    const logins: logindto = {
      usuario: this.loginform.controls['usuario'].value,
      contraseña: this.loginform.controls['contraseña'].value,
    }
    this.clienteService.login(logins).subscribe(res => {
      if (res && res.length > 0) {
        const user = res[0];
        VentaService.idcli = user.id;
        switch (user.rol) {
          case 'C':
            this.router.navigate(['productos']);
            break;
          case 'A':
            this.router.navigate(['clientes']);
            this.showMessage('hola')
        }
      } else {
        this.showMessage('El usuario y/o contraseña es incorrecta')
      }
      console.log(res);
    })
  }

  async showMessage(messages: string) {
    const toast = await this.toastController.create({
      message: messages,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }

  redirigir(){
    this.router.navigate(['cliente-form']);
  }
}
