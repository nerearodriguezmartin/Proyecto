"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstalacionesFormComponent = void 0;
const core_1 = require("@angular/core");
let InstalacionesFormComponent = class InstalacionesFormComponent {
    constructor(instalacionesService, router, activatedRoute) {
        this.instalacionesService = instalacionesService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.instalacion = {
            cod_instalacion: 0,
            cod_comunidad: 0,
            hora_apertura: '',
            hora_cierre: '',
            aforo: 0,
            descripcion: '',
            tipo_instalacion: '',
            nombre: '',
            precio: 0,
            persona_ajeno: false,
            limpieza: 0,
            comunicacion: 0,
            ubicacion: 0,
            calidad: 0,
            img: '',
            img2: '',
            img3: '',
            reserva_maxima: 0
        };
        this.edit = false;
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params;
        if (params.id) {
            this.instalacionesService.getInstalacion(params.id)
                .subscribe(res => {
                console.log(res);
                this.instalacion = res;
                this.edit = true;
            }, err => console.error(err));
        }
    }
    saveNewInstalacion() {
        this.instalacionesService.saveInstalacion(this.instalacion)
            .subscribe(res => {
            console.log(res);
            this.router.navigate(['/admin']);
        }, err => console.error(err));
    }
    updateInstalacion() {
        this.instalacionesService.updateInstalacion(this.instalacion.cod_instalacion, this.instalacion)
            .subscribe(res => {
            console.log(res);
            this.router.navigate(['/admin']);
        }, err => console.error(err));
    }
};
InstalacionesFormComponent = __decorate([
    core_1.Component({
        selector: 'app-instalaciones-form',
        templateUrl: './instalaciones-form.component.html',
        styleUrls: ['./instalaciones-form.component.scss']
    })
], InstalacionesFormComponent);
exports.InstalacionesFormComponent = InstalacionesFormComponent;
