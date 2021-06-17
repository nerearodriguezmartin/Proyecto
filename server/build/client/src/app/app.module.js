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
exports.AppModule = exports.SafePipe = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const http_1 = require("@angular/common/http");
require("../../node_modules/materialize-css");
const angular_notifier_1 = require("angular-notifier");
const forms_1 = require("@angular/forms");
const fire_1 = require("@angular/fire");
const auth_1 = require("@angular/fire/auth");
const firestore_1 = require("@angular/fire/firestore");
const environment_1 = require("../environments/environment");
const cabecer_component_1 = require("./views/cabecer/cabecer.component");
const cuerpo_component_1 = require("./views/cuerpo/cuerpo.component");
const footer_component_1 = require("./views/footer/footer.component");
const servicios_component_1 = require("./views/servicios/servicios.component");
const nosotros_component_1 = require("./views/nosotros/nosotros.component");
const clientes_component_1 = require("./views/clientes/clientes.component");
const login_component_1 = require("./views/login/login.component");
const registro_component_1 = require("./views/registro/registro.component");
const contrasena_component_1 = require("./views/contrasena/contrasena.component");
const activacion_component_1 = require("./views/activacion/activacion.component");
const recupera_codigo_component_1 = require("./views/recupera-codigo/recupera-codigo.component");
const body_component_1 = require("./views/body/body.component");
const instalaciones_service_1 = require("./services/instalaciones.service");
/* Add Amplify imports */
/* Add Amplify imports */
const ui_angular_1 = require("@aws-amplify/ui-angular");
const aws_amplify_1 = __importDefault(require("aws-amplify"));
const instalaciones_list_component_1 = require("./views/instalaciones-list/instalaciones-list.component");
const detalle_instalacion_component_1 = require("./views/detalle-instalacion/detalle-instalacion.component");
const nf_component_1 = require("./views/nf/nf.component");
const area_personal_component_1 = require("./views/area-personal/area-personal.component");
const confirmacion_component_1 = require("./views/confirmacion/confirmacion.component");
const ngx_paypal_1 = require("ngx-paypal");
const ngx_owl_carousel_o_1 = require("ngx-owl-carousel-o");
const animations_1 = require("@angular/platform-browser/animations");
const core_2 = require("@angular/core");
const admin_component_1 = require("./views/admin/admin.component");
const instalaciones_form_component_1 = require("./views/instalaciones-form/instalaciones-form.component");
let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafePipe = __decorate([
    core_2.Pipe({
        name: 'safe'
    })
], SafePipe);
exports.SafePipe = SafePipe;
const awsconfig = {
    "aws_project_region": "eu-west-2",
    "aws_cognito_identity_pool_id": "eu-west-2:0abcf9e9-4e05-4dad-98dc-ded4693af756",
    "aws_cognito_region": "eu-west-2",
    "aws_user_pools_id": "eu-west-2_Hr9WbF3Y2",
    "aws_user_pools_web_client_id": "2n8l2q67aghrr2fhgautcph5v6",
    "oauth": {}
};
/* Configure Amplify resources */
aws_amplify_1.default.configure(awsconfig);
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            cabecer_component_1.CabecerComponent,
            cuerpo_component_1.CuerpoComponent,
            footer_component_1.FooterComponent,
            servicios_component_1.ServiciosComponent,
            nosotros_component_1.NosotrosComponent,
            clientes_component_1.ClientesComponent,
            login_component_1.LoginComponent,
            registro_component_1.RegistroComponent,
            contrasena_component_1.ContrasenaComponent,
            activacion_component_1.ActivacionComponent,
            recupera_codigo_component_1.RecuperaCodigoComponent,
            body_component_1.BodyComponent,
            instalaciones_list_component_1.InstalacionesListComponent,
            detalle_instalacion_component_1.DetalleInstalacionComponent,
            nf_component_1.NfComponent,
            area_personal_component_1.AreaPersonalComponent,
            confirmacion_component_1.ConfirmacionComponent,
            SafePipe,
            admin_component_1.AdminComponent,
            instalaciones_form_component_1.InstalacionesFormComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpClientModule,
            ui_angular_1.AmplifyUIAngularModule,
            forms_1.FormsModule,
            angular_notifier_1.NotifierModule,
            ngx_paypal_1.NgxPayPalModule,
            ngx_owl_carousel_o_1.CarouselModule,
            animations_1.BrowserAnimationsModule,
            forms_1.ReactiveFormsModule,
            fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
            auth_1.AngularFireAuthModule,
            firestore_1.AngularFirestoreModule
        ],
        providers: [
            instalaciones_service_1.InstalacionesService
        ],
        bootstrap: [app_component_1.AppComponent,
            instalaciones_list_component_1.InstalacionesListComponent]
    })
], AppModule);
exports.AppModule = AppModule;
