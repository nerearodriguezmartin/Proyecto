"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const clientes_component_1 = require("./views/clientes/clientes.component");
const cuerpo_component_1 = require("./views/cuerpo/cuerpo.component");
const footer_component_1 = require("./views/footer/footer.component");
const login_component_1 = require("./views/login/login.component");
const nosotros_component_1 = require("./views/nosotros/nosotros.component");
const servicios_component_1 = require("./views/servicios/servicios.component");
const registro_component_1 = require("./views/registro/registro.component");
const contrasena_component_1 = require("./views/contrasena/contrasena.component");
const activacion_component_1 = require("./views/activacion/activacion.component");
const recupera_codigo_component_1 = require("./views/recupera-codigo/recupera-codigo.component");
const body_component_1 = require("./views/body/body.component");
const instalaciones_list_component_1 = require("./views/instalaciones-list/instalaciones-list.component");
const detalle_instalacion_component_1 = require("./views/detalle-instalacion/detalle-instalacion.component");
const nf_component_1 = require("./views/nf/nf.component");
const confirmacion_component_1 = require("./views/confirmacion/confirmacion.component");
const login_guard_1 = require("./guards/login.guard");
const area_personal_component_1 = require("./views/area-personal/area-personal.component");
const admin_component_1 = require("./views/admin/admin.component");
const instalaciones_form_component_1 = require("./views/instalaciones-form/instalaciones-form.component");
const unauth_guard_1 = require("./guards/unauth.guard");
const routes = [
    { path: 'cuerpo', component: cuerpo_component_1.CuerpoComponent },
    { path: 'servicios', component: servicios_component_1.ServiciosComponent },
    { path: 'nosotros', component: nosotros_component_1.NosotrosComponent },
    { path: 'clientes', component: clientes_component_1.ClientesComponent },
    { path: 'contacta', component: footer_component_1.FooterComponent },
    { path: 'login', component: login_component_1.LoginComponent, canActivate: [unauth_guard_1.UnauthGuard] },
    { path: 'registro', component: registro_component_1.RegistroComponent },
    { path: 'contraseña', component: contrasena_component_1.ContrasenaComponent },
    { path: 'activacion', component: activacion_component_1.ActivacionComponent },
    { path: 'recuperaCodigo', component: recupera_codigo_component_1.RecuperaCodigoComponent },
    { path: '', component: body_component_1.BodyComponent },
    { path: 'instalaciones', component: instalaciones_list_component_1.InstalacionesListComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: 'instalaciones/:cod_instalacion', component: detalle_instalacion_component_1.DetalleInstalacionComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: 'confirmacion/:cod_instalacion', component: confirmacion_component_1.ConfirmacionComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: 'personal', component: area_personal_component_1.AreaPersonalComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: 'instalacionesForm/:cod_instalacion', component: instalaciones_form_component_1.InstalacionesFormComponent, /*canActivate: [LoginGuard] */ },
    { path: 'admin', component: admin_component_1.AdminComponent, canActivate: [login_guard_1.LoginGuard] },
    { path: '**', component: nf_component_1.NfComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
