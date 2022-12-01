import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ClienteService } from '../services/clientes/cliente.service';
import { UbigeoService } from '../services/ubigeo/ubigeo.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.page.html',
  styleUrls: ['./cliente-form.page.scss'],
})
export class ClienteFormPage implements OnInit {

  ClienteForm: FormGroup = new FormGroup<any>({});
  ubigeo :any;
  constructor(private fb: FormBuilder,
              private clienteService:ClienteService,
              private toastController: ToastController,
              public ubigeoService:UbigeoService,
              private router:Router) { }

  ngOnInit() {
    this.inicializar();
    this.listarUbigeo();
  }

  inicializar() {
    this.ClienteForm = this.fb.group({
      id: [],
      nombre: ['', Validators.required],
      apellidoPat: ['', Validators.required],
      apellidoMat: ['', Validators.required],
      dni: ['', Validators.required],
      celular: ['', Validators.required],
      direccion: ['', Validators.required],
      rol: ['C', Validators.required],
      estado: ['A', Validators.required],
      ubigeo:['',Validators.required],
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required],
    })
  }

  register(){
    this.clienteService.register(this.ClienteForm.value).subscribe(res =>{
      console.log('res ' ,res)
      
      this.showMessage(`Hola  has sido registrado con exito`)
      this.ClienteForm.reset();
      this.router.navigate(['login']);
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

  listarUbigeo(){
    return this.ubigeoService.finAll().subscribe(res =>{
      this.ubigeo = res;
    })
  }
}
