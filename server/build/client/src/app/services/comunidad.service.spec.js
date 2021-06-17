"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const comunidad_service_1 = require("./comunidad.service");
describe('ComunidadService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(comunidad_service_1.ComunidadService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
