"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const reserva_service_1 = require("./reserva.service");
describe('ReservaService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(reserva_service_1.ReservaService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
