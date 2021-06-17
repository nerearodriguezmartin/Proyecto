"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstalacionesService = void 0;
const core_1 = require("@angular/core");
let InstalacionesService = class InstalacionesService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://localhost:3000/api';
    }
    getInstalaciones() {
        return this.http.get(this.API_URI + '/instalaciones');
    }
    getTipos() {
        return this.http.get(this.API_URI + '/instalaciones/tipo/list');
    }
    getInstalacion(id) {
        return this.http.get(this.API_URI + '/instalaciones/' + id);
    }
    deleteInstalacion(id) {
        return this.http.delete(this.API_URI + '/instalaciones/' + id);
    }
    saveInstalacion(instalacion) {
        return this.http.post(this.API_URI + '/instalaciones', instalacion);
    }
    updateInstalacion(id, updatedInstalacion) {
        return this.http.put(this.API_URI + '/instalaciones/' + id, updatedInstalacion);
    }
};
InstalacionesService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], InstalacionesService);
exports.InstalacionesService = InstalacionesService;
