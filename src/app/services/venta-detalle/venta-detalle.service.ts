import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tablaTemporal } from 'src/app/dtos/producto.model';
import { VentaDetalleModel } from 'src/app/dtos/ventaDetalle.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentaDetalleService {

  
  static temporal: any[] = [];
  constructor( private http: HttpClient) { }

  añadirTabla(datos:tablaTemporal){
    VentaDetalleService.temporal.push(datos);
     
  }

  registrarVentaDeatlle(ventadetalle:VentaDetalleModel){
    return this.http.post<VentaDetalleModel>(`${environment.apiUrl}/ventaDetalle`,ventadetalle)
  }

  ultimaVenta(){
    return this.http.get(`${environment.apiUrl}/venta/ultimaventa`)
  }
}
