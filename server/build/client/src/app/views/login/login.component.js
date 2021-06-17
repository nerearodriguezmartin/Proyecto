"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
const core_1 = require("@angular/core");
const ui_components_1 = require("@aws-amplify/ui-components");
let LoginComponent = class LoginComponent {
    constructor(ref, router, loginService, zone) {
        this.ref = ref;
        this.router = router;
        this.loginService = loginService;
        this.zone = zone;
        this.formFields = [
            {
                type: "email",
                label: "Email",
                placeholder: "Introduce tu email",
                required: true,
            },
            {
                type: "password",
                label: "Contraseña",
                placeholder: "Introduce tu contraseña",
                required: true,
            }
        ];
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
        ui_components_1.onAuthUIStateChange((authState, authData) => {
            this.authState = authState;
            this.user = authData;
            this.loginService.getUserData();
            this.ref.detectChanges();
            this.zone.run(() => {
                this.router.navigate(['/instalaciones']);
            });
        });
    }
    ngOnDestroy() {
        return ui_components_1.onAuthUIStateChange;
    }
};
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
exports.LoginComponent = LoginComponent;
