"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthGuard = void 0;
const core_1 = require("@angular/core");
const auth_1 = __importDefault(require("@aws-amplify/auth"));
let UnauthGuard = class UnauthGuard {
    constructor(_router) {
        this._router = _router;
    }
    canActivate(next, state) {
        return auth_1.default.currentAuthenticatedUser()
            .then(() => {
            this._router.navigate(['instalaciones']);
            return false;
        })
            .catch(() => {
            return true;
        });
    }
};
UnauthGuard = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], UnauthGuard);
exports.UnauthGuard = UnauthGuard;
