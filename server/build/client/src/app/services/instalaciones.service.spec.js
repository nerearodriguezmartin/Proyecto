"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const instalaciones_service_1 = require("./instalaciones.service");
describe('InstalacionesService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(instalaciones_service_1.InstalacionesService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
