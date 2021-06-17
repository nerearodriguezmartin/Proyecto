"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const likes_service_1 = require("./likes.service");
describe('LikesService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(likes_service_1.LikesService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
