import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { productodto } from '../dtos/producto.model';
import { ProductoService } from '../services/productos/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos: any;
  nombre: FormControl = new FormControl('');
  constructor(private productoservice: ProductoService,
    private route: Router) { }

  ngOnInit() {
    this.finall();
    this.buscador()
  }

  finall() {
    this.productoservice.findall().subscribe((res: any) => {
      this.productos = res;
      console.log(res);
    })
  }

  navegacion() {
    this.route.navigate(['detalle-producto'])
  }

  produc(items: productodto) {
    console.log("item elegido ", items)
    this.productoservice.productoSeleccionado = items;
    this.navegacion();
  }

 

  prueba(valor:any){
    
     this.productoservice.finByName(valor.detail.value).subscribe(res =>{
      this.productos = res;
      console.log('prodcutos ' , this.productos)
    console.log('si entre' , valor.detail.value)
    });
    
  }

  
  buscador() {
    this.nombre.valueChanges
      .pipe(
        switchMap(search=>{
          if (search){
            return this.productoservice.finByName(search);

          }
          return this.productoservice.findall();
        })
    ).subscribe((res) => {
      this.productos = res;
      console.log(res)
    })
  
  }

  redirigirCars(){
    this.route.navigate(['carrito'])
  }
}
