import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Instalacion } from '../models/Instalacion'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstalacionesService {

 API_URI = 'http://localhost:3000/api';

  //API_URI = 'localhost:3000/api';

  constructor(private http: HttpClient) { }

  getInstalaciones(){
    return this.http.get(this.API_URI + '/instalaciones')
  }

  getTipos(){
    return this.http.get(this.API_URI + '/instalaciones/tipo/list')
  }

  getInstalacion(id: number){
    return this.http.get(this.API_URI + '/instalaciones/'+ id);
  }

  deleteInstalacion(id: string){
    return this.http.delete(this.API_URI + '/instalaciones/'+ id);
  }

  saveInstalacion(instalacion: Instalacion){
    return this.http.post(this.API_URI + '/instalaciones', instalacion);
  }

  updateInstalacion(id: string|number|undefined, updatedInstalacion: Instalacion) {
    return this.http.put(this.API_URI + '/instalaciones/'+ id, updatedInstalacion);
  }
}
