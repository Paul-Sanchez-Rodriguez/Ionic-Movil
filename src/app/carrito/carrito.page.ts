import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentaDetalleModel } from '../dtos/ventaDetalle.model';
import { VentaDetalleService } from '../services/venta-detalle/venta-detalle.service';
import { VentaService } from '../services/venta/venta.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  constructor(public ventaDetalleService: VentaDetalleService,
    public ventaService: VentaService,
    private router: Router) { }

  public temporal: any;
  nroVenta: any;
  ngOnInit() {
    this.finallCars();
  }

  finallCars() {
    this.temporal = VentaDetalleService.temporal
  }

  registrar() {

    this.asincrona()

    setTimeout(() => {
      for (let i = 0; i <= VentaDetalleService.temporal.length - 1; i++) {

        let ventaDetalle: VentaDetalleModel = {
          cantidad: VentaDetalleService.temporal[i].CANVENDET,
          precio: VentaDetalleService.temporal[i].PREPRO,
          subtotal: VentaDetalleService.temporal[i].SUBTOT,
          Idventa: this.nroVenta[0].NROVENTA,
          Idproducto: VentaDetalleService.temporal[i].IDPROD
        }
        this.ventaDetalleService.registrarVentaDeatlle(ventaDetalle).subscribe(res => {
          console.log('res ', res)
        })

      }

      VentaDetalleService.temporal = [];
      this.router.navigate(['productos']);
    }, 3000);
  }

  asincrona() {

    this.ventaDetalleService.ultimaVenta().subscribe(res => {
      this.nroVenta = res;
    })

  }


  registrarVenta() {
    let Objecfecha = new Date()
    let fechaActual = `${Objecfecha.getDate()}/${Objecfecha.getMonth() + 1}/${Objecfecha.getFullYear()}`
    let venta: any = {
      fecha: fechaActual,
      pago: 'T',
      cliente: VentaService.idcli,
      vendedor: VentaService.idcli
    }
    this.ventaService.registraVenta(venta).subscribe(res => {
      console.log('venta registrada ', res)
    })

    this.registrar();
  }
}
