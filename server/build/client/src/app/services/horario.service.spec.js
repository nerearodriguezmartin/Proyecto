"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const horario_service_1 = require("./horario.service");
describe('HorarioService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(horario_service_1.HorarioService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
