"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroComponent = void 0;
const core_1 = require("@angular/core");
let RegistroComponent = class RegistroComponent {
    constructor(fb, router, auth) {
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.formFieldsSingUp = [
            {
                type: "email",
                label: "Email",
                placeholder: "Introduce tu email",
                required: true,
            },
            {
                type: "name",
                label: "Nombre y apellidos",
                placeholder: "Introduce tu nombre y apellidos",
                required: true,
            },
            {
                type: "phone_number",
                label: "Número de teléfono",
                placeholder: "Introduce tu número de teléfono",
                required: false,
            },
            {
                type: "password",
                label: "Contraseña",
                placeholder: "Introduce tu contraseña",
                required: true,
            },
        ];
    }
    ngOnInit() {
        //this.initForm();
    }
};
RegistroComponent = __decorate([
    core_1.Component({
        selector: 'app-registro',
        templateUrl: './registro.component.html',
        styleUrls: ['./registro.component.scss']
    })
], RegistroComponent);
exports.RegistroComponent = RegistroComponent;
