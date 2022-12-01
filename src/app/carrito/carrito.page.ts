import { Component, OnInit } from '@angular/core';
import { VentaDetalleService } from '../services/venta-detalle/venta-detalle.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  constructor(public ventaDetalleService:VentaDetalleService) { }

  public temporal: any;
  ngOnInit() {
    this.finallCars();
  }

  finallCars(){
    this.temporal=VentaDetalleService.temporal

    console.log('carrito ' , )
  }
}
