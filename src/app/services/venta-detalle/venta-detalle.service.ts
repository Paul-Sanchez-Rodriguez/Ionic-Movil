import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tablaTemporal } from 'src/app/dtos/producto.model';

@Injectable({
  providedIn: 'root'
})
export class VentaDetalleService {

  
  static temporal: any[] = [];
  constructor( private http: HttpClient) { }

  añadirTabla(datos:tablaTemporal){
    VentaDetalleService.temporal.push(datos);
     
  }
}
