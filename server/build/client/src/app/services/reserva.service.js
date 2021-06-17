"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservaService = void 0;
const core_1 = require("@angular/core");
let ReservaService = class ReservaService {
    constructor(http) {
        this.http = http;
        // Con output creamos el nuevo EventEmitter. De este objeto obtendremos los cambios.
        this.reservaEmitter = new core_1.EventEmitter();
        this.API_URI = 'http://localhost:3000/api';
    }
    // Cambiamos el atributo this.reserva y llamamos a cambioReserva().
    setReserva(nuevaReserva) {
        this.reserva = nuevaReserva;
        this.cambiosReserva();
    }
    obtenerReserva() {
        return this.reserva;
    }
    // Emitimos los cambio de this.reserva
    cambiosReserva() {
        this.reservaEmitter.emit(this.reserva);
    }
    getReservas() {
        return this.http.get(this.API_URI + '/instalaciones/reservas/list');
    }
    getReserva(id) {
        return this.http.get(this.API_URI + '/instalaciones/reservas' + id);
    }
    saveReserva(reserva) {
        return this.http.post(this.API_URI + '/instalaciones/reservas', reserva);
    }
    updateReserva(id, updatedReserva) {
        return this.http.put(this.API_URI + '/instalaciones/' + id, updatedReserva);
    }
};
__decorate([
    core_1.Output()
], ReservaService.prototype, "reservaEmitter", void 0);
ReservaService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], ReservaService);
exports.ReservaService = ReservaService;
