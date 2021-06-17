import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Horario } from '../models/horario'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }


  getHorario(id: string){
    return this.http.get(this.API_URI + '/instalaciones/horario/'+ id);
  }
}
