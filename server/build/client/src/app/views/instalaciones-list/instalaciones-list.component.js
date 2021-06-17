"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstalacionesListComponent = void 0;
const core_1 = require("@angular/core");
let InstalacionesListComponent = class InstalacionesListComponent {
    constructor(instalacionService, locationService) {
        this.instalacionService = instalacionService;
        this.locationService = locationService;
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            autoplay: true,
            autoHeight: false,
            autoplayTimeout: 5000,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 1
                }
            },
            nav: true
        };
        this.instalaciones = [];
        this.instalacionesL = [];
        this.instalacionesFiltro = [];
        this.tipos = [];
        this.tipo = "";
        this.cuidad = "";
    }
    ngOnInit() {
        this.getInstalaciones();
        this.getTipos();
        this.getLocation();
    }
    getLocation() {
        this.locationService.getPosition().then(pos => {
            this.latitude = pos.lat;
            this.longitude = pos.lng;
        });
    }
    getInstalaciones() {
        this.instalacionService.getInstalaciones().subscribe(res => {
            this.instalaciones = res;
            this.instalacionesL = res;
        }, err => console.log(err));
    }
    getTipos() {
        this.instalacionService.getTipos().subscribe(res => {
            this.tipos = res;
        }, err => console.log(err));
    }
    deleteInstalacion(id) {
        this.instalacionService.deleteInstalacion(id).subscribe(res => {
            console.log(res);
            this.getInstalaciones();
        }, err => console.error(err));
    }
    filtra(tipo) {
        this.instalacionesFiltro = [];
        this.instalacionesL.forEach((instalacion) => {
            if (instalacion.tipo_instalacion == tipo) {
                this.instalacionesFiltro.push(instalacion);
            }
            this.instalaciones = this.instalacionesFiltro;
        });
    }
};
InstalacionesListComponent = __decorate([
    core_1.Component({
        selector: 'app-instalaciones-list',
        templateUrl: './instalaciones-list.component.html',
        styleUrls: ['./instalaciones-list.component.scss'],
    })
], InstalacionesListComponent);
exports.InstalacionesListComponent = InstalacionesListComponent;
