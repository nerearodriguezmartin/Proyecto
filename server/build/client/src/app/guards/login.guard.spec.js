"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const login_guard_1 = require("./login.guard");
describe('LoginGuard', () => {
    let guard;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        guard = testing_1.TestBed.inject(login_guard_1.LoginGuard);
    });
    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
