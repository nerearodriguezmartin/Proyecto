"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaPersonalComponent = void 0;
const core_1 = require("@angular/core");
const aws_amplify_1 = require("aws-amplify");
let AreaPersonalComponent = class AreaPersonalComponent {
    constructor(likeServices, loginService, instalacionesService) {
        this.likeServices = likeServices;
        this.loginService = loginService;
        this.instalacionesService = instalacionesService;
        this.likes = [];
        this.instalaciones = [];
        this.userInstalaciones = [];
        this.userName = "";
    }
    ngOnInit() {
        this.likeServices.getLikes().subscribe(res => {
            this.likes = res;
        }, err => console.log(err));
        this.getUsername();
        this.likes.forEach((like) => {
            if (like.username == this.userName)
                this.userLikes.push(like);
        });
        this.instalacionesService.getInstalaciones().subscribe(res => {
            this.instalaciones = res;
        }, err => console.log(err));
        this.instalaciones.forEach((instalacion) => {
            this.userLikes.forEach((like) => {
                if (like.cod_instalacion == instalacion.cod_instalacion) {
                    this.userInstalaciones.push(instalacion);
                }
            });
        });
    }
    getUsername() {
        aws_amplify_1.Auth.currentAuthenticatedUser()
            .then(user => {
            this.userName = user.userName;
        });
    }
    muestra() {
        console.log(this.likes);
        console.log(this.userLikes);
        console.log(this.userInstalaciones);
        console.log(this.instalaciones);
    }
};
AreaPersonalComponent = __decorate([
    core_1.Component({
        selector: 'app-area-personal',
        templateUrl: './area-personal.component.html',
        styleUrls: ['./area-personal.component.scss']
    })
], AreaPersonalComponent);
exports.AreaPersonalComponent = AreaPersonalComponent;
