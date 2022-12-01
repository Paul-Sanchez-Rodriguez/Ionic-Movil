import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  constructor(private http:HttpClient) { }

  finAll(){
    return this.http.get(`${environment.apiUrl}/ubigeos`)
  }
}
