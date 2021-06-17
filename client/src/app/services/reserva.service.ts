import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from 'src/app/models/reserva';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  // Creamos la reserva
  reserva!: Reserva;

  // Con output creamos el nuevo EventEmitter. De este objeto obtendremos los cambios.
  @Output()
  reservaEmitter = new EventEmitter<Reserva>();


  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

   // Cambiamos el atributo this.reserva y llamamos a cambioReserva().
   setReserva(nuevaReserva: Reserva) {
    this.reserva = nuevaReserva;
    this.cambiosReserva();
  }

  obtenerReserva(){
    return this.reserva;
  }

  // Emitimos los cambio de this.reserva
  cambiosReserva() {
    this.reservaEmitter.emit(this.reserva);
  }
  getReservas(){
    return this.http.get(this.API_URI + '/instalaciones/reservas/list')
  }

  getReserva(id: string){
    return this.http.get(this.API_URI + '/instalaciones/reservas'+ id);
  }


  saveReserva(reserva: Reserva){
    return this.http.post(this.API_URI + '/instalaciones/reservas', reserva);
  }

  updateReserva(id: string|number|undefined, updatedReserva: Reserva) {
    return this.http.put(this.API_URI + '/instalaciones/'+ id, updatedReserva);
  }
}
