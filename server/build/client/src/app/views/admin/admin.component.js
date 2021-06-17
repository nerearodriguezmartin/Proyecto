"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminComponent = void 0;
const core_1 = require("@angular/core");
const aws_amplify_1 = require("aws-amplify");
let AdminComponent = class AdminComponent {
    constructor(instalacionService, reservaService) {
        this.instalacionService = instalacionService;
        this.reservaService = reservaService;
        this.reserva = false;
    }
    ngOnInit() {
        this.getInstalaciones();
        this.getReservas();
    }
    getInstalaciones() {
        this.instalacionService.getInstalaciones().subscribe(res => {
            this.instalaciones = res;
            console.log(aws_amplify_1.Auth.currentUserInfo);
        }, err => console.log(err));
    }
    getReservas() {
        this.reservaService.getReservas().subscribe(res => {
            this.reservas = res;
        }, err => console.log(err));
    }
    deleteInstalacion(id) {
        this.instalacionService.deleteInstalacion(id).subscribe(res => {
            console.log(res);
            this.getInstalaciones();
        }, err => console.error(err));
    }
};
AdminComponent = __decorate([
    core_1.Component({
        selector: 'app-admin',
        templateUrl: './admin.component.html',
        styleUrls: ['./admin.component.scss']
    })
], AdminComponent);
exports.AdminComponent = AdminComponent;
