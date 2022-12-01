import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NumericValueAccessor } from '@ionic/angular';
import { tablaTemporal } from '../dtos/producto.model';
import { ProductoService } from '../services/productos/producto.service';
import { VentaDetalleService } from '../services/venta-detalle/venta-detalle.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {

  productoForm: FormGroup = new FormGroup({});

  imagens: string = '';
  nombre: string = '';
  descripcion: string = '';
  precio: number = 0;
  idprod: number = 0;
  vtotal: number = 0;
 
  constructor(public fb: FormBuilder,
    public productoService: ProductoService,
    private router: Router,
    public ventaDetalleService:VentaDetalleService) { }

  ngOnInit() {
    this.inicial();
  }

  inicial() {
    this.productoForm = this.fb.group({
      CANVENDET: [],
      PREPRO: [''],
      SUBTOT: [''],
      IDPROD: [],
    });;
    if (this.productoService.productoSeleccionado) {

      this.imagens = this.productoService.productoSeleccionado.imagen;
      this.nombre = this.productoService.productoSeleccionado.nombre;
      this.descripcion = this.productoService.productoSeleccionado.descripcion;
      this.precio = this.productoService.productoSeleccionado.precio;
      this.idprod = this.productoService.productoSeleccionado.id;

      console.log('si entre', this.productoService.productoSeleccionado)
    }
  }


  tablaTemporal() {
    const prueba: tablaTemporal = {
      CANVENDET: this.productoForm.controls['CANVENDET'].value,
      PREPRO: this.precio,
      IDPROD: this.idprod,
      SUBTOT: this.productoForm.controls['CANVENDET'].value * this.precio,
      NOMPRO: this.nombre,
      IMAPRO: this.imagens
    }

    //this.productoForm.patchValue(prueba);
    //console.log("prueba ", this.productoForm.value);
    this.añadirTablaTemporal(prueba);

  }


  total() {
    this.vtotal = this.productoForm.controls['CANVENDET'].value * this.precio
    }

  añadirTablaTemporal(datos: tablaTemporal) {
    this.ventaDetalleService.añadirTabla(datos)
   
    this.router.navigate(['productos'])
  }


}
