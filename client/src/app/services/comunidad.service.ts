import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunidadService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getComunidad(id: string){
    return this.http.get(this.API_URI + '/instalaciones/ubicacion/'+ id);
  }


}
