import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/clientes/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  cliente: any;
  constructor(public clienteService:ClienteService,) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    return this.clienteService.listar().subscribe(res =>{
      this.cliente = res;
    })
  }
}
