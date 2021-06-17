"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const unauth_guard_1 = require("./unauth.guard");
describe('UnauthGuard', () => {
    let guard;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        guard = testing_1.TestBed.inject(unauth_guard_1.UnauthGuard);
    });
    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
