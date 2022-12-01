import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logindto } from 'src/app/dtos/login.dto';
import { clientedto } from 'src/app/dtos/login.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  


  constructor( private http: HttpClient) { }
//alt + 96
  login(cliente:logindto){
        return this.http.post<clientedto[]>(`${environment.apiUrl}/auth`, cliente);
  }

  register(cliente: clientedto){
    return this.http.post<clientedto>(`${environment.apiUrl}/clientes`,cliente);
  }

  listar(){
    return this.http.get<clientedto[]>(`${environment.apiUrl}/clientes`);
  }
}
