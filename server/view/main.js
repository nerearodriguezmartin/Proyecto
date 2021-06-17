(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+MPo":
/*!******************************************************!*\
  !*** ./src/app/views/registro/registro.component.ts ***!
  \******************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _aws_amplify_ui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-amplify/ui-angular */ "Z63c");





class RegistroComponent {
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
}
RegistroComponent.ɵfac = function RegistroComponent_Factory(t) { return new (t || RegistroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"])); };
RegistroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistroComponent, selectors: [["app-registro"]], decls: 2, vars: 1, consts: [[1, "container"], ["header-text", "Registro de Sobway", "submitButtonText", "REGISTRO", "slot", "sign-up", "usernameAlias", "email", "haveAccountText", "\u00BFYa tienes una cuenta de Sobway?", "signInText", "\u00A1Accede aqu\u00ED!", 3, "formFields"]], template: function RegistroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "amplify-sign-up", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formFields", ctx.formFieldsSingUp);
    } }, directives: [_aws_amplify_ui_angular__WEBPACK_IMPORTED_MODULE_4__["AmplifySignUp"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Ryby5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "+XmF":
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class LoginGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_0__["Auth"].currentAuthenticatedUser().then(() => { return true; })
            .catch(() => {
            this.router.navigate(['login']);
            return false;
        });
    }
}
LoginGuard.ɵfac = function LoginGuard_Factory(t) { return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginGuard, factory: LoginGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "+uQQ":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./amplify-amazon-button_5.entry.js": [
		"pptk",
		1
	],
	"./amplify-auth-fields_9.entry.js": [
		"5Azo",
		2
	],
	"./amplify-authenticator.entry.js": [
		"HaBs",
		"common",
		3
	],
	"./amplify-button_3.entry.js": [
		"W1Jz",
		4
	],
	"./amplify-chatbot.entry.js": [
		"OkRK",
		5
	],
	"./amplify-checkbox.entry.js": [
		"jZr9",
		6
	],
	"./amplify-confirm-sign-in_7.entry.js": [
		"VFVT",
		"common",
		7
	],
	"./amplify-container.entry.js": [
		"l2YT",
		8
	],
	"./amplify-federated-buttons_2.entry.js": [
		"4pA8",
		9
	],
	"./amplify-federated-sign-in.entry.js": [
		"GWfx",
		10
	],
	"./amplify-form-field_4.entry.js": [
		"svTr",
		11
	],
	"./amplify-greetings.entry.js": [
		"2uVw",
		12
	],
	"./amplify-icon-button.entry.js": [
		"5+i5",
		13
	],
	"./amplify-icon.entry.js": [
		"ATNG",
		0,
		14
	],
	"./amplify-link.entry.js": [
		"CLig",
		15
	],
	"./amplify-nav_2.entry.js": [
		"29kL",
		16
	],
	"./amplify-photo-picker.entry.js": [
		"fEjz",
		17
	],
	"./amplify-picker.entry.js": [
		"TkC1",
		18
	],
	"./amplify-radio-button_2.entry.js": [
		"bVH+",
		"common",
		19
	],
	"./amplify-s3-album.entry.js": [
		"GV60",
		"common",
		20
	],
	"./amplify-s3-image-picker.entry.js": [
		"V0P2",
		"common",
		21
	],
	"./amplify-s3-image.entry.js": [
		"mwoW",
		"common",
		22
	],
	"./amplify-s3-text-picker.entry.js": [
		"/MiJ",
		"common",
		23
	],
	"./amplify-s3-text.entry.js": [
		"Kukj",
		"common",
		24
	],
	"./amplify-select-mfa-type.entry.js": [
		"oogQ",
		25
	],
	"./amplify-sign-in-button.entry.js": [
		"DW50",
		0,
		26
	],
	"./amplify-toast.entry.js": [
		"QOpS",
		27
	],
	"./amplify-tooltip.entry.js": [
		"vSUa",
		28
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "+uQQ";
module.exports = webpackAsyncContext;

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Usuario\Desktop\proyecto\client\src\main.ts */"zUnb");


/***/ }),

/***/ "0vzq":
/*!**********************************************!*\
  !*** ./src/app/views/body/body.component.ts ***!
  \**********************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cuerpo_cuerpo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cuerpo/cuerpo.component */ "V3fk");
/* harmony import */ var _servicios_servicios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/servicios.component */ "Crce");
/* harmony import */ var _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nosotros/nosotros.component */ "uqfX");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clientes/clientes.component */ "D15x");





//declare var jQuery: any;
class BodyComponent {
    constructor() { }
    ngOnInit() {
    }
}
BodyComponent.ɵfac = function BodyComponent_Factory(t) { return new (t || BodyComponent)(); };
BodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BodyComponent, selectors: [["app-body"]], decls: 9, vars: 0, consts: [[1, "section", "section1"], ["id", "introduction"], [1, "section", "section2"], ["id", "servicios"], [1, "section", "section3"], ["id", "nosotros"], [1, "section", "section4"], ["id", "clientes"]], template: function BodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-cuerpo", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-servicios", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-nosotros", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-clientes", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_cuerpo_cuerpo_component__WEBPACK_IMPORTED_MODULE_1__["CuerpoComponent"], _servicios_servicios_component__WEBPACK_IMPORTED_MODULE_2__["ServiciosComponent"], _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_3__["NosotrosComponent"], _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_4__["ClientesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib2R5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1GCp":
/*!****************************************!*\
  !*** ./src/app/guards/unauth.guard.ts ***!
  \****************************************/
/*! exports provided: UnauthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthGuard", function() { return UnauthGuard; });
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class UnauthGuard {
    constructor(_router) {
        this._router = _router;
    }
    canActivate(next, state) {
        return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_0__["default"].currentAuthenticatedUser()
            .then(() => {
            this._router.navigate(['instalaciones']);
            return false;
        })
            .catch(() => {
            return true;
        });
    }
}
UnauthGuard.ɵfac = function UnauthGuard_Factory(t) { return new (t || UnauthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UnauthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UnauthGuard, factory: UnauthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "2+Lm":
/*!**************************************************************************!*\
  !*** ./src/app/views/instalaciones-list/instalaciones-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: InstalacionesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstalacionesListComponent", function() { return InstalacionesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_instalaciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/instalaciones.service */ "MZ9l");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/location.service */ "yHma");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







function InstalacionesListComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} }
function InstalacionesListComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} }
function InstalacionesListComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} }
function InstalacionesListComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipo_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tipo_r6.tipo_instalacion);
} }
const _c0 = function (a1) { return ["/instalaciones/", a1]; };
function InstalacionesListComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Mostrar M\u00E1s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instalacion_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", instalacion_r7.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](instalacion_r7.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](instalacion_r7.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, instalacion_r7.cod_instalacion));
} }
class InstalacionesListComponent {
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
}
InstalacionesListComponent.ɵfac = function InstalacionesListComponent_Factory(t) { return new (t || InstalacionesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_instalaciones_service__WEBPACK_IMPORTED_MODULE_1__["InstalacionesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"])); };
InstalacionesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstalacionesListComponent, selectors: [["app-instalaciones-list"]], decls: 22, vars: 4, consts: [[1, "container", "instalaciones"], [1, "red-text"], [1, "carousel"], [3, "options"], ["carouselSlide", "", "id", "1"], ["carouselSlide", "", "id", "2"], ["carouselSlide", "", "id", "3"], [1, "form-control", 3, "ngModel", "ngModelChange"], ["item", ""], [4, "ngFor", "ngForOf"], [1, "text-center", 3, "click"], [1, "text-center", "instalacion", "row"], ["class", "col-6 col-xs-12  col-xl-4", 4, "ngFor", "ngForOf"], ["src", "https://sobway.s3.eu-west-3.amazonaws.com/CarInstalaciones/element5-digital-7QYd1VxLRbM-unsplash.jpg", "title", ""], ["src", "https://sobway.s3.eu-west-3.amazonaws.com/CarInstalaciones/jonathan-borba--oXy4uljsPo-unsplash.jpg", "title", ""], ["src", "https://sobway.s3.eu-west-3.amazonaws.com/CarInstalaciones/manuel-pappacena-zTwzxr4BbTA-unsplash.jpg", "title", ""], [1, "col-6", "col-xs-12", "col-xl-4"], [1, "card"], [1, "card-image"], [1, "card-img-top", 3, "src"], [1, "card-title"], [1, "card-content"], [1, "card-action"], [1, "waves-effect", "waves-light", "btn", "red", 3, "routerLink"]], template: function InstalacionesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Instalaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "owl-carousel-o", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InstalacionesListComponent_ng_template_7_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "` ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InstalacionesListComponent_ng_template_9_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InstalacionesListComponent_ng_template_10_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstalacionesListComponent_Template_select_ngModelChange_12_listener($event) { return ctx.tipo = $event; })("ngModelChange", function InstalacionesListComponent_Template_select_ngModelChange_12_listener($event) { return ctx.filtra($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Filtra por el tipo de instalaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InstalacionesListComponent_option_16_Template, 2, 1, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstalacionesListComponent_Template_a_click_17_listener() { return ctx.getInstalaciones(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mostrar todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, InstalacionesListComponent_div_21_Template, 12, 6, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tipo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tipos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.instalaciones);
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselSlideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".instalaciones[_ngcontent-%COMP%] {\n  width: 100vw;\n  background-color: #fff9f4;\n  margin-top: 3rem;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  height: 25vh;\n}\n\n.instalacion[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 30px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbnN0YWxhY2lvbmVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBQ0U7RUFDRSxpQkFBQTtBQUNKIiwiZmlsZSI6Imluc3RhbGFjaW9uZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnN0YWxhY2lvbmVze1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDksIDI0NCk7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxuXHJcbn1cclxuXHJcbi5jYXJvdXNlbCB7XHJcbiAgaGVpZ2h0OiAyNXZoO1xyXG59XHJcblxyXG4uaW5zdGFsYWNpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgJi10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "8ANO":
/*!************************************************!*\
  !*** ./src/app/views/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_instalaciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/instalaciones.service */ "MZ9l");
/* harmony import */ var src_app_services_reserva_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/reserva.service */ "QzLQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a1) { return ["/instalacionesForm/", a1]; };
function AdminComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_div_9_div_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const instalacion_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.deleteInstalacion(instalacion_r3.cod_instalacion); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_div_9_div_3_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const instalacion_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.deleteInstalacion(instalacion_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instalacion_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", instalacion_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](instalacion_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](instalacion_r3.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, instalacion_r3.cod_instalacion));
} }
function AdminComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Instalaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminComponent_div_9_div_3_Template, 13, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.instalaciones);
} }
function AdminComponent_div_10_div_3_i_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 27);
} }
function AdminComponent_div_10_div_3_i_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 28);
} }
function AdminComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "PAGADO: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AdminComponent_div_10_div_3_i_18_Template, 1, 0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AdminComponent_div_10_div_3_i_19_Template, 1, 0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reserva_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", reserva_r8.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](reserva_r8.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("FECHA: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 9, reserva_r8.fecha, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("TURNO: ", reserva_r8.turno, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("PASES: ", reserva_r8.num_pases, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("TOTAL: ", reserva_r8.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", reserva_r8.pagado);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !reserva_r8.pagado);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", reserva_r8.usuario, " ");
} }
function AdminComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Reservas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminComponent_div_10_div_3_Template, 23, 12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.reservas);
} }
class AdminComponent {
    constructor(instalacionService, reservaService) {
        this.instalacionService = instalacionService;
        this.reservaService = reservaService;
        this.reserva = false;
    }
    ngOnInit() {
        this.getInstalaciones();
        this.getReservas();
        this.añadirCampos();
    }
    getInstalaciones() {
        this.instalacionService.getInstalaciones().subscribe(res => {
            this.instalaciones = res;
            console.log(aws_amplify__WEBPACK_IMPORTED_MODULE_0__["Auth"].currentUserInfo);
        }, err => console.log(err));
    }
    getReservas() {
        this.reservaService.getReservas().subscribe(res => {
            this.reservas = res;
        }, err => console.log(err));
    }
    añadirCampos() {
        this.reservas.forEach((reserva) => {
            var img = this.obtenerImagen(reserva.cod_instalacion);
            var nombre = this.obtenerTitulo(reserva.cod_instalacion);
            var newValue = "nombre";
            var newValue2 = "img";
            this.reservas.reserva[newValue] = img;
            this.reservas.reserva[newValue2] = nombre;
        });
    }
    deleteInstalacion(id) {
        this.instalacionService.deleteInstalacion(id).subscribe(res => {
            console.log(res);
            this.getInstalaciones();
        }, err => console.error(err));
    }
    obtenerImagen(cod_instalacion) {
        let instalacion;
        this.instalacionService.getInstalacion(cod_instalacion).subscribe(res => {
            return instalacion.img;
        }, err => console.log(err));
    }
    obtenerTitulo(cod_instalacion) {
        let instalacion;
        this.instalacionService.getInstalacion(cod_instalacion).subscribe(res => {
            instalacion = res;
            return instalacion.nombre;
        }, err => console.log(err));
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_instalaciones_service__WEBPACK_IMPORTED_MODULE_2__["InstalacionesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_reserva_service__WEBPACK_IMPORTED_MODULE_3__["ReservaService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 11, vars: 2, consts: [[1, "admin"], [1, "red-text"], [1, "navbar", "navbar-light", "bg-light"], [1, "form-inline"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["class", "text-center instalacion row", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "instalacion", "row"], ["class", "col-6 col-xs-12  col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-6", "col-xs-12", "col-xl-4"], [1, "card"], [1, "card-image"], [1, "card-img-top", 3, "src"], [1, "card-title"], [1, "card-content"], [1, "btn", "btn-danger", 3, "click"], [1, "far", "fa-trash-alt"], [1, "btn", "btn-info", 3, "routerLink", "click"], [1, "fas", "fa-edit"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-sm-4"], [1, "reserva-img", 3, "src"], [1, "col-sm-8"], ["class", "far fa-check-circle green-text", 4, "ngIf"], ["class", "far fa-times-circle red-text", 4, "ngIf"], [1, "fas", "fa-user"], [1, "far", "fa-check-circle", "green-text"], [1, "far", "fa-times-circle", "red-text"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00C1REA DE ADMINISTRACI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_5_listener() { return ctx.reserva = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Editar Instalaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_7_listener() { return ctx.reserva = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Reservas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AdminComponent_div_9_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AdminComponent_div_10_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.reserva);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.reserva);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".admin[_ngcontent-%COMP%] {\n  width: 100vw;\n  background-color: #fff9f4;\n  margin-top: 3rem;\n}\n\n.reserva-img[_ngcontent-%COMP%] {\n  height: 15rem;\n  width: 15rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUFKIiwiZmlsZSI6ImFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWlue1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDksIDI0NCk7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG5cclxuLnJlc2VydmEge1xyXG4gICYtaW1ne1xyXG4gICAgaGVpZ2h0OiAxNXJlbTtcclxuICAgIHdpZHRoOiAxNXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "90IN":
/*!**********************************************************!*\
  !*** ./src/app/views/contrasena/contrasena.component.ts ***!
  \**********************************************************/
/*! exports provided: ContrasenaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContrasenaComponent", function() { return ContrasenaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ContrasenaComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContrasenaComponent.ɵfac = function ContrasenaComponent_Factory(t) { return new (t || ContrasenaComponent)(); };
ContrasenaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContrasenaComponent, selectors: [["app-contrasena"]], decls: 24, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col", "s8", "offset-s2"], [1, "card"], [1, "card-content"], [1, "red-text"], [1, "col", "s12"], [1, "input-field", "col", "s12"], [1, "material-icons", "prefix", "red-text"], ["id", "icon_prefix", "type", "text", 1, "validate"], ["for", "icon_prefix"], [1, "col", "s4", "offset-s4"], ["type", "submit", "name", "action", 1, "btn", "waves-effect", "waves-light", "red"], [1, "material-icons", "right"], [1, "col", "s12", "center-align"], ["routerLink", "/login"]], template: function ContrasenaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No recuerdo mi contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ENVIAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u00A1Ya me he acordado de la contrase\u00F1a!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cmFzZW5hLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "AJQ0":
/*!*********************************************!*\
  !*** ./src/app/services/horario.service.ts ***!
  \*********************************************/
/*! exports provided: HorarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorarioService", function() { return HorarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class HorarioService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://proyecto-env.eba-mvdmwcbb.eu-west-3.elasticbeanstalk.com/api';
    }
    getHorario(id) {
        return this.http.get(this.API_URI + '/instalaciones/horario/' + id);
    }
}
HorarioService.ɵfac = function HorarioService_Factory(t) { return new (t || HorarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HorarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HorarioService, factory: HorarioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "xxxxxxxx-xxxxxxxx",
        authDomain: "xxxxxxxxxxxxxxxxxxxxxxxx",
        databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxx",
        projectId: "xxxxxxxx",
        storageBucket: "xxxxxxxx",
        messagingSenderId: "xxxxxx",
        appId: "xxxxx",
        measurementId: "xxxxxxxxxxxxxxxx"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C4ut":
/*!****************************************************************************!*\
  !*** ./src/app/views/detalle-instalacion/detalle-instalacion.component.ts ***!
  \****************************************************************************/
/*! exports provided: DetalleInstalacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleInstalacionComponent", function() { return DetalleInstalacionComponent; });
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_instalaciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/instalaciones.service */ "MZ9l");
/* harmony import */ var src_app_services_horario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/horario.service */ "AJQ0");
/* harmony import */ var src_app_services_comunidad_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/comunidad.service */ "tW/v");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ "VO+5");
/* harmony import */ var src_app_services_reserva_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/reserva.service */ "QzLQ");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var src_app_services_likes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/likes.service */ "PDvO");










function DetalleInstalacionComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetalleInstalacionComponent_i_4_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.guardaLike(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DetalleInstalacionComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetalleInstalacionComponent_i_5_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.borraLike(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DetalleInstalacionComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 42);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r2.instalacion.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function DetalleInstalacionComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 42);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.instalacion.img2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function DetalleInstalacionComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 42);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r4.instalacion.img3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function DetalleInstalacionComponent_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const turno_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](turno_r10.tramo_horario);
} }
class DetalleInstalacionComponent {
    constructor(instalacionesService, horarioService, comunidadService, router, activatedRoute, notifierService, serviceReserva, loginService, likeService) {
        this.instalacionesService = instalacionesService;
        this.horarioService = horarioService;
        this.comunidadService = comunidadService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.serviceReserva = serviceReserva;
        this.loginService = loginService;
        this.likeService = likeService;
        this.likes = [];
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
        this.selected = "";
        this.pases = 1;
        this.guarda = false;
        this.horario = [];
        this.comunidad = {
            cod_comunidad: 0,
            nombre: "",
            ubicacion: "",
            mapa: ""
        };
        this.like = {
            id: 0,
            cod_instalacion: 0,
            username: "",
            created_at: new Date()
        };
        this.muestra = false;
        this.hoy = new Date();
        this.notifier = notifierService;
    }
    ngOnInit() {
        this.getUsername;
        const params = this.activatedRoute.snapshot.params;
        if (params.cod_instalacion) {
            this.instalacionesService.getInstalacion(params.cod_instalacion)
                .subscribe(res => {
                console.log(res);
                this.instalacion = res;
                //this.edit = true;
            }, err => console.error(err));
            this.horarioService.getHorario(params.cod_instalacion).subscribe(res => {
                this.horario = res;
                console.log(res);
            }, err => console.log(err));
            this.comunidadService.getComunidad(params.cod_instalacion).subscribe(res => {
                this.comunidad = res;
                console.log(res);
            }, err => console.log(err));
            this.likeService.getLikes().subscribe(res => {
                this.likes = res;
            }, err => console.log(err));
            this.likes.forEach((like) => {
                if (like.username == this.loginService.userData.username && like.cod_instalacion == this.instalacion.cod_instalacion)
                    this.guarda = true;
            });
            console.log(this.guarda);
            console.log(this.likes);
        }
        this.reserva = {
            turno: "",
            cod_instalacion: 0,
            cod_reserva: 0,
            usuario: "",
            total: 0,
            num_pases: 0,
            fecha: new Date(0)
        };
        /*const chatbotElement = document.querySelector('amplify-chatbot');
        chatbotElement.addEventListener('chatCompleted', handleChatComplete);
    */
    }
    /*selectOption(id: number) {
      //getted from event
      console.log(id);
      //getted from binding
      console.log(this.selected)
    }*/
    ngOnDestroy() {
        /*const chatbotElement = document.querySelector('amplify-chatbot');
        chatbotElement.removeEventListener('chatCompleted', handleChatComplete);
      */ 
    }
    getUsername() {
        aws_amplify__WEBPACK_IMPORTED_MODULE_0__["Auth"].currentAuthenticatedUser()
            .then(user => {
            this.userName = user.username;
        });
    }
    guardarReserva() {
        this.reserva = {
            turno: this.selected.toString(),
            cod_instalacion: this.instalacion.cod_instalacion,
            cod_reserva: 0,
            usuario: this.loginService.userData.username,
            total: 0,
            num_pases: this.pases,
            fecha: this.fecha
        };
        console.log(this.reserva);
        this.serviceReserva.setReserva(this.reserva);
        if (this.fecha != null && this.selected != null && this.pases != null)
            this.router.navigate(['confirmacion', this.instalacion.cod_instalacion]);
        else {
            this.notifier.show({
                type: 'error',
                message: 'Compruba que has rellenado todos los campos!',
                id: 'THAT_NOTIFICATION_ID',
            });
        }
    }
    guardaLike() {
        this.guarda = true;
        this.like.username = this.loginService.userData.username;
        this.like.cod_instalacion = this.instalacion.cod_instalacion;
        delete this.like.created_at;
        this.likeService.saveLike(this.like)
            .subscribe(res => {
            console.log(res);
        }, err => console.error(err));
    }
    borraLike() {
        this.guarda = false;
        let mg = {};
        console.log(this.likes);
        this.likes.forEach((like) => {
            if (like.username == this.userName && like.cod_instalacion == this.instalacion.cod_instalacion)
                mg = like;
        });
        this.likeService.deleteLike(mg.id).subscribe(res => {
            console.log(res);
        }, err => console.error(err));
    }
}
DetalleInstalacionComponent.ɵfac = function DetalleInstalacionComponent_Factory(t) { return new (t || DetalleInstalacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_instalaciones_service__WEBPACK_IMPORTED_MODULE_2__["InstalacionesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_horario_service__WEBPACK_IMPORTED_MODULE_3__["HorarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_comunidad_service__WEBPACK_IMPORTED_MODULE_4__["ComunidadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_reserva_service__WEBPACK_IMPORTED_MODULE_7__["ReservaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_likes_service__WEBPACK_IMPORTED_MODULE_9__["LikesService"])); };
DetalleInstalacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetalleInstalacionComponent, selectors: [["app-detalle-instalacion"]], decls: 127, vars: 35, consts: [[1, "container", "instalacion"], [1, "red-text", "instalacion-title", "title"], ["class", "far fa-heart fa-2x right pill red-text", 3, "click", 4, "ngIf"], ["class", "fas fa-heart fa-2x right pill red-text", 3, "click", 4, "ngIf"], [1, "row", "d-flex", "justify-content-center"], [1, "col-sm-12", "col-lg-6"], [3, "options"], ["carouselSlide", "", "id", "1"], ["carouselSlide", "", "id", "2"], ["carouselSlide", "", "id", "3"], [1, "row"], [1, "col", "s8", "offset-s1"], [1, "far", "fa-clock", "fa-2x", "icon", "red-text"], [1, "title", "red-text"], [1, "fas", "fa-door-open", "fa-2x"], [1, "col-sm-6"], [1, "fas", "fa-door-closed", "fa-2x"], [1, "col", "s4"], [1, "col", "s12", "m6"], [1, "card"], [1, "card-content"], [1, "card-title", "red-text"], ["type", "date", 3, "ngModel", "min", "ngModelChange"], [1, "form-control", 3, "ngModel", "ngModelChange"], ["selected", ""], [4, "ngFor", "ngForOf"], [1, "center-align"], [1, "pase"], [1, "card-action"], [1, "waves-effect", "waves-light", "btn", "red", "white-text", "card-btn", 3, "click"], [1, "col", "s6"], [1, "col-sm-4"], [1, "black-text"], [1, "col-sm-8"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "10", 1, "progress-bar", "bg-dark"], [1, "black-text", "bold"], [1, "instalacion-title"], [1, "col-sm-10", "offset-sm-1"], ["width", "600", "height", "450", "allowfullscreen", "", "loading", "lazy", 2, "border", "0"], [1, "far", "fa-heart", "fa-2x", "right", "pill", "red-text", 3, "click"], [1, "fas", "fa-heart", "fa-2x", "right", "pill", "red-text", 3, "click"], ["title", "", 3, "src"]], template: function DetalleInstalacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DetalleInstalacionComponent_i_4_Template, 1, 0, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DetalleInstalacionComponent_i_5_Template, 1, 0, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "owl-carousel-o", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DetalleInstalacionComponent_ng_template_11_Template, 1, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "` ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, DetalleInstalacionComponent_ng_template_13_Template, 1, 1, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DetalleInstalacionComponent_ng_template_14_Template, 1, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " HORARIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Hora de apertura");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Hora de cierre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "A\u00F1ade la fecha y el turno");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DetalleInstalacionComponent_Template_input_ngModelChange_52_listener($event) { return ctx.fecha = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DetalleInstalacionComponent_Template_select_ngModelChange_54_listener($event) { return ctx.selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Selecciona el turno");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, DetalleInstalacionComponent_option_57_Template, 2, 1, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DetalleInstalacionComponent_Template_select_ngModelChange_58_listener($event) { return ctx.pases = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "N\u00FAmero de pases");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "/pase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetalleInstalacionComponent_Template_a_click_77_listener() { return ctx.guardarReserva(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "COMPROBAR DISPONIBILIDAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Limpieza");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Ubicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Comunicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Calidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "h3", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Ubicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "iframe", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](125, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "notifier-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.instalacion.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.guarda);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.guarda);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.instalacion.descripcion, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.instalacion.hora_apertura);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.instalacion.hora_cierre);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.fecha)("min", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](53, 30, ctx.hoy, "yyyy-MM-dd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.horario);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.pases);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.instalacion.precio, " \u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.instalacion.limpieza + "0%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-valuenow", ctx.instalacion.limpieza);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.instalacion.limpieza);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.instalacion.ubicacion + "0%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-valuenow", ctx.instalacion.ubicacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.instalacion.ubicacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.instalacion.comunicacion + "0%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-valuenow", ctx.instalacion.comunicacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.instalacion.comunicacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.instalacion.calidad + "0%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-valuenow", ctx.instalacion.calidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.instalacion.calidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](125, 33, ctx.comunidad.mapa), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
    } }, styles: ["@charset \"UTF-8\";\n.instalacion[_ngcontent-%COMP%] {\n  background-color: white;\n  margin-top: 3rem;\n}\n.instalacion-img[_ngcontent-%COMP%] {\n  height: 20rem;\n  width: 100%;\n  border-radius: 15px;\n  margin-top: 2rem;\n  margin-left: 2rem;\n}\n.instalacion-title[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-left: 2rem;\n}\n.instalacion-collage[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  height: 20rem;\n}\n.img[_ngcontent-%COMP%] {\n  height: 9.25rem;\n  border-radius: 15px;\n  width: 100%;\n}\n.card-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.pase[_ngcontent-%COMP%] {\n  font-size: medium;\n}\n.title[_ngcontent-%COMP%] {\n  display: inline;\n}\n.icon[_ngcontent-%COMP%] {\n  display: inline;\n}\n.btn-flotante[_ngcontent-%COMP%] {\n  font-size: 16px;\n  \n  text-transform: uppercase;\n  \n  font-weight: bold;\n  \n  color: #ffffff;\n  \n  border-radius: 5px;\n  \n  letter-spacing: 2px;\n  \n  background-color: #E91E63;\n  \n  padding: 18px 30px;\n  \n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  transition: all 300ms ease 0ms;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n  z-index: 99;\n}\n.btn-flotante[_ngcontent-%COMP%]:hover {\n  background-color: #2c2fa5;\n  \n  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);\n  transform: translateY(-7px);\n}\n@media only screen and (max-width: 600px) {\n  .btn-flotante[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 12px 20px;\n    bottom: 20px;\n    right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZXRhbGxlLWluc3RhbGFjaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFBSjtBQUlBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQURGO0FBSUE7RUFDRSxXQUFBO0FBREY7QUFJQTtFQUNFLGlCQUFBO0FBREY7QUFJQTtFQUNFLGVBQUE7QUFERjtBQUlBO0VBQ0UsZUFBQTtBQURGO0FBT0E7RUFDQyxlQUFBO0VBQWlCLHVDQUFBO0VBQ2pCLHlCQUFBO0VBQTJCLHdCQUFBO0VBQzNCLGlCQUFBO0VBQW1CLDZCQUFBO0VBQ25CLGNBQUE7RUFBZ0Isb0JBQUE7RUFDaEIsa0JBQUE7RUFBb0Isb0JBQUE7RUFDcEIsbUJBQUE7RUFBcUIseUJBQUE7RUFDckIseUJBQUE7RUFBMkIsbUJBQUE7RUFDM0Isa0JBQUE7RUFBb0Isc0JBQUE7RUFDcEIsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtFQUNBLFdBQUE7QUFJRDtBQUZBO0VBQ0MseUJBQUE7RUFBMkIsc0NBQUE7RUFDM0IsNENBQUE7RUFDQSwyQkFBQTtBQU1EO0FBSkE7RUFDRTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VBT0E7QUFDRiIsImZpbGUiOiJkZXRhbGxlLWluc3RhbGFjaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmluc3RhbGFjaW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG4uaW5zdGFsYWNpb24taW1nIHtcbiAgaGVpZ2h0OiAyMHJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuLmluc3RhbGFjaW9uLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG4uaW5zdGFsYWNpb24tY29sbGFnZSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGhlaWdodDogMjByZW07XG59XG5cbi5pbWcge1xuICBoZWlnaHQ6IDkuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZC1idG4ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhc2Uge1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLnRpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmJ0bi1mbG90YW50ZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLyogQ2FtYmlhciBlbCB0YW1hw7FvIGRlIGxhIHRpcG9ncmFmaWEgKi9cbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLyogVGV4dG8gZW4gbWF5dXNjdWxhcyAqL1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLyogRnVlbnRlIGVuIG5lZ3JpdGEgbyBib2xkICovXG4gIGNvbG9yOiAjZmZmZmZmO1xuICAvKiBDb2xvciBkZWwgdGV4dG8gKi9cbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAvKiBCb3JkZSBkZWwgYm90b24gKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgLyogRXNwYWNpbyBlbnRyZSBsZXRyYXMgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5MUU2MztcbiAgLyogQ29sb3IgZGUgZm9uZG8gKi9cbiAgcGFkZGluZzogMThweCAzMHB4O1xuICAvKiBSZWxsZW5vIGRlbCBib3RvbiAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNDBweDtcbiAgcmlnaHQ6IDQwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBtcztcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgei1pbmRleDogOTk7XG59XG5cbi5idG4tZmxvdGFudGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyZmE1O1xuICAvKiBDb2xvciBkZSBmb25kbyBhbCBwYXNhciBlbCBjdXJzb3IgKi9cbiAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYnRuLWZsb3RhbnRlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIGJvdHRvbTogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "Crce":
/*!********************************************************!*\
  !*** ./src/app/views/servicios/servicios.component.ts ***!
  \********************************************************/
/*! exports provided: ServiciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosComponent", function() { return ServiciosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ServiciosComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServiciosComponent.ɵfac = function ServiciosComponent_Factory(t) { return new (t || ServiciosComponent)(); };
ServiciosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiciosComponent, selectors: [["app-servicios"]], decls: 29, vars: 0, consts: [["data-section-name", "servicios", 1, "servicios", "section-class-name", "valign-wrapper", "section", "scrollspy"], ["src", "./../../assets/img/edificio.jpg", 1, "responsive-img", "fondo"], [1, "row", "container-fluid", "center"], [1, "col", "l2", "m3", "s5", "waves-effect", "waves-light", "btn-large"], [1, "fas", "fa-shield-alt"], [1, "far", "fa-check-circle"], [1, "fas", "fa-cloud-upload-alt"], [1, "col", "l2", "m11", "s5", "waves-effect", "waves-light", "btn-large"], [1, "fas", "fa-network-wired"], [1, "large", "material-icons"], [1, "fas", "fa-hand-holding-usd"], [1, "fas", "fa-tasks"]], template: function ServiciosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seguridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Confort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Conexi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Integraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "headset_mic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " A. cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ahorro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Gesti\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "build");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "S. t\u00E9cnico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".servicios[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #302d2d;\n}\n.servicios[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  z-index: 2 !important;\n  margin: 4vw;\n  height: 18vh;\n  background-color: #302d2d;\n}\n.servicios[_ngcontent-%COMP%]   .fondo[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100vw;\n  height: 50vh;\n  z-index: 1 !important;\n}\n.servicios[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .servicios[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%], .servicios[_ngcontent-%COMP%]   .far[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 4rem;\n  color: #9c47fc;\n  display: block;\n  background: -webkit-linear-gradient(#9c47fc, #356ad2);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXJ2aWNpb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUNJO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ1I7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUFSO0FBR0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHFEQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBQUROIiwiZmlsZSI6InNlcnZpY2lvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJ2aWNpb3N7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA0NSwgNDUpO1xyXG5cclxuICAgIGF7XHJcbiAgICAgICAgei1pbmRleDogMiAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogNHZ3O1xyXG4gICAgICAgIGhlaWdodDogMTh2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDQ1LCA0NSk7O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb25kb3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGhlaWdodDogNTB2aDtcclxuICAgICAgICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaSwgLmZhcywgLmZhciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgY29sb3I6ICM5YzQ3ZmM7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjOWM0N2ZjLCAjMzU2YWQyKTtcclxuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "D15x":
/*!******************************************************!*\
  !*** ./src/app/views/clientes/clientes.component.ts ***!
  \******************************************************/
/*! exports provided: ClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesComponent", function() { return ClientesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ClientesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ClientesComponent.ɵfac = function ClientesComponent_Factory(t) { return new (t || ClientesComponent)(); };
ClientesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientesComponent, selectors: [["app-clientes"]], decls: 33, vars: 0, consts: [["data-section-name", "clientes", 1, "clientes", "section-class-name", "scrollspy"], [1, "container", "container-fluid"], [1, "row"], [1, "col", "s5", "right-align", "z-depth-3", "empresa"], [1, "medium", "material-icons", 2, "color", "white"], [1, "red-text"], [1, "white-text"], [1, "col", "s5", "offset-s1", "left-align", "z-depth-3", "propietario"], [2, "background-color", "rgb(0, 0, 0)", "position", "absolute", "z-index", "-1", "opacity", "0.2"], [1, "col", "s5", "right-align", "property", "z-depth-3"], [1, "col", "s5", "offset-s1", "left-align", "promotores", "z-depth-3"]], template: function ClientesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "card_travel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Empresas y administradores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Llevar la gesti\u00F3n f\u00E1cil y c\u00F3moda de todo un edificio d\u00E1ndole lo mejor a tus clientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "people_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Propietarios e inquilinos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Una soluci\u00F3n especialmente dise\u00F1ada para edificios residenciales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "vpn_key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Property management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Las soluciones permiten gestionar de modo integral los apartamentos y alquiler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Promotores inmobiliarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Incrementa la calidad de la promoci\u00F3n incluyendo la soluci\u00F3n SmartBuilding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".clientes[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #302d2d;\n}\n\n.empresa[_ngcontent-%COMP%] {\n  background: url('empresas.jpg');\n  background-size: cover;\n  opacity: 0.6;\n}\n\n.propietario[_ngcontent-%COMP%] {\n  background: url('inquilino.jpg');\n  background-size: cover;\n  opacity: 0.6;\n}\n\n.property[_ngcontent-%COMP%] {\n  background: url('property-management.jpg');\n  background-size: cover;\n  opacity: 0.6;\n}\n\n.promotores[_ngcontent-%COMP%] {\n  background: url('promotores.jpg');\n  background-size: cover;\n  z-index: 1;\n  opacity: 0.6;\n}\n\n.col[_ngcontent-%COMP%] {\n  height: 18rem;\n  width: 18rem;\n  padding: 2rem;\n}\n\n.row[_ngcontent-%COMP%] {\n  height: 20rem;\n}\n\nh4[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjbGllbnRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUlBO0VBQ0UsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFLQTtFQUNFLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSwwQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUtBO0VBQ0UsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRkY7O0FBeUNBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBdENGOztBQXlDQTtFQUNFLGFBQUE7QUF0Q0Y7O0FBeUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBdENGIiwiZmlsZSI6ImNsaWVudGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWVudGVze1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDUsIDQ1KTtcclxufVxyXG5cclxuXHJcblxyXG4uZW1wcmVzYXtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9lbXByZXNhcy5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG5cclxuLnByb3BpZXRhcmlve1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2lucXVpbGluby5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4ucHJvcGVydHl7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvcHJvcGVydHktbWFuYWdlbWVudC5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgb3BhY2l0eTouNjtcclxufVxyXG5cclxuLnByb21vdG9yZXN7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvcHJvbW90b3Jlcy5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgei1pbmRleDogMTtcclxuICBvcGFjaXR5OiAuNjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLmNvbHtcclxuICBoZWlnaHQ6IDE4cmVtO1xyXG4gIHdpZHRoOiAxOHJlbTtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4ucm93e1xyXG4gIGhlaWdodDogMjByZW07XHJcbn1cclxuXHJcbmg0LCBwe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "EFyh":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






;
class LoginService {
    constructor(router) {
        this.router = router;
        this._authState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.authState = this._authState.asObservable();
        _aws_amplify_core__WEBPACK_IMPORTED_MODULE_2__["Hub"].listen('auth', (data) => {
            const { channel, payload } = data;
            if (channel === 'auth') {
                this._authState.next(payload.event);
            }
        });
    }
    signUp(user) {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_0__["Auth"].signUp({
            "username": user.email,
            "password": user.password,
            "attributes": {
                "email": user.email,
                "given_name": user.firstName,
                "family_name": user.lastName,
                "phone_number": user.phone
            }
        });
    }
    signIn(username, password) {
        return new Promise((resolve, reject) => {
            aws_amplify__WEBPACK_IMPORTED_MODULE_0__["Auth"].signIn(username, password)
                .then((user) => {
                this.loggedIn = true;
                resolve(user);
            }).catch((error) => reject(error));
        });
    }
    /** signout */
    signOut() {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_0__["Auth"].signOut()
            .then(() => {
            this.loggedIn = false;
        });
    }
    socialSignIn(provider) {
        return aws_amplify__WEBPACK_IMPORTED_MODULE_0__["Auth"].federatedSignIn({
            'provider': provider
        });
    }
    isLogin() {
        aws_amplify__WEBPACK_IMPORTED_MODULE_0__["Auth"].currentAuthenticatedUser().then(() => { return true; }).catch(() => {
            return false;
        });
    }
    getUserData() {
        if (!this.userData) {
            return aws_amplify__WEBPACK_IMPORTED_MODULE_0__["Auth"].currentAuthenticatedUser()
                .then(user => {
                this.userData = JSON.parse(localStorage[user.userDataKey]);
                this.userData.grupo = user.signInUserSession.idToken.payload['cognito:groups'];
                return this.userData;
            })
                .catch(err => { console.log('ERROR', err); return {}; });
        }
        else {
            return this.userData;
        }
    }
}
LoginService.SIGN_IN = 'signIn';
LoginService.SIGN_OUT = 'signOut';
LoginService.FACEBOOK = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__["CognitoHostedUIIdentityProvider"].Facebook;
LoginService.GOOGLE = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__["CognitoHostedUIIdentityProvider"].Google;
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "FPq/":
/*!**************************************************!*\
  !*** ./src/app/views/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 51, vars: 0, consts: [["data-section-name", "contacta", 1, "page-footer", "section", "section-class-name", "scrollspy"], [1, "container"], [1, "row"], [1, "col", "s12", "center"], ["src", "../../../assets/img/iconoTransparente.png", 1, "responsive-img"], [1, "col", "s3", "red"], [1, "col", "s3"], [1, "row", "center"], [1, "col", "s6"], [1, "fab", "fa-linkedin", "rs", "fa-3x"], [1, "fab", "fa-facebook-square", "rs", "fa-3x"], [1, "fab", "fa-twitter", "rs", "fa-3x"], [1, "fab", "fa-youtube", "rs", "fa-3x"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "REGISTRARSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "EMPRESA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Soporte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "RECURSOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "T\u00E9rminos de empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ayuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "LEGAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Protecci\u00F3n de datos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Normativa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Pol\u00EDtica de cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " info@sobway.es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \u00A9 2021 Copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #302d2d;\n}\n\n.rs[_ngcontent-%COMP%] {\n  margin-right: 10%;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFHQTtFQUNJLGlCQUFBO0FBQUo7O0FBSUE7RUFDRSxZQUFBO0FBREYiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVye1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDUsIDQ1KTtcclxuXHJcbn1cclxuXHJcbi5yc3tcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG5cclxufVxyXG5cclxuaW1ne1xyXG4gIHdpZHRoOiAyNXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "FqpF":
/*!**********************************************************!*\
  !*** ./src/app/views/activacion/activacion.component.ts ***!
  \**********************************************************/
/*! exports provided: ActivacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivacionComponent", function() { return ActivacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ActivacionComponent {
    constructor() { }
    ngOnInit() {
    }
}
ActivacionComponent.ɵfac = function ActivacionComponent_Factory(t) { return new (t || ActivacionComponent)(); };
ActivacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivacionComponent, selectors: [["app-activacion"]], decls: 30, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col", "s8", "offset-s2"], [1, "card"], [1, "card-content"], [1, "red-text"], [1, "col", "s12"], [1, "input-field", "col", "s12"], [1, "material-icons", "prefix", "red-text"], ["id", "email", "type", "text", 1, "validate"], ["for", "email"], ["id", "cActivacion", "type", "text", 1, "validate"], ["for", "cActivacion"], [1, "col", "s4", "offset-s4"], ["type", "submit", "name", "action", 1, "btn", "waves-effect", "waves-light", "red"], [1, "material-icons", "right"], [1, "col", "s12", "center-align"], ["routerLink", "/registro"]], template: function ActivacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Activar cuenta Sobway");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "C\u00F3digo de activaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ACTIVAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Volver al registro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3RpdmFjaW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Kso6":
/*!******************************************!*\
  !*** ./src/app/views/nf/nf.component.ts ***!
  \******************************************/
/*! exports provided: NfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NfComponent", function() { return NfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/"]; };
class NfComponent {
    constructor() { }
    ngOnInit() {
    }
}
NfComponent.ɵfac = function NfComponent_Factory(t) { return new (t || NfComponent)(); };
NfComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NfComponent, selectors: [["app-nf"]], decls: 5, vars: 2, consts: [[1, "container"], [1, "red-text"], [1, "waves-effect", "waves-light", "btn", "red", 3, "routerLink"]], template: function NfComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "P\u00E1gina no encontrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Vuelve al Inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJuZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "MZ9l":
/*!***************************************************!*\
  !*** ./src/app/services/instalaciones.service.ts ***!
  \***************************************************/
/*! exports provided: InstalacionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstalacionesService", function() { return InstalacionesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class InstalacionesService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://proyecto-env.eba-mvdmwcbb.eu-west-3.elasticbeanstalk.com/api';
    }
    getInstalaciones() {
        return this.http.get(this.API_URI + '/instalaciones');
    }
    getTipos() {
        return this.http.get(this.API_URI + '/instalaciones/tipo/list');
    }
    getInstalacion(id) {
        return this.http.get(this.API_URI + '/instalaciones/' + id);
    }
    deleteInstalacion(id) {
        return this.http.delete(this.API_URI + '/instalaciones/' + id);
    }
    saveInstalacion(instalacion) {
        return this.http.post(this.API_URI + '/instalaciones', instalacion);
    }
    updateInstalacion(id, updatedInstalacion) {
        return this.http.put(this.API_URI + '/instalaciones/' + id, updatedInstalacion);
    }
}
InstalacionesService.ɵfac = function InstalacionesService_Factory(t) { return new (t || InstalacionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
InstalacionesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InstalacionesService, factory: InstalacionesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "NlQe":
/*!****************************************************!*\
  !*** ./src/app/views/cabecer/cabecer.component.ts ***!
  \****************************************************/
/*! exports provided: CabecerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabecerComponent", function() { return CabecerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CabecerComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "INSTALACIONES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CabecerComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "REGISTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CabecerComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00C1REA PERSONAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "location_city");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ADMINISTRACI\u00D3N");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CabecerComponent_div_25_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "CERRAR SESI\u00D3N");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.user.Username);
} }
class CabecerComponent {
    constructor(ref, loginservice, router, zone) {
        this.ref = ref;
        this.loginservice = loginservice;
        this.router = router;
        this.zone = zone;
        this.login = false;
    }
    ngOnInit() {
        this.loginservice.getUserData();
        this.user = this.loginservice.userData;
        console.log(this.user);
        if (!this.loginservice.isLogin) {
            this.login = false;
        }
        else {
            this.login = true;
        }
    }
    logout() {
        this.loginservice.signOut();
        console.log(this.loginservice.getUserData());
        this.login = false;
        this.zone.run(() => {
            this.router.navigate(['/']);
        });
    }
}
CabecerComponent.ɵfac = function CabecerComponent_Factory(t) { return new (t || CabecerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
CabecerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CabecerComponent, selectors: [["app-cabecer"]], decls: 26, vars: 3, consts: [[1, "navbar-fixed"], [1, "header", "hide-on-small-only", "transparent", "z-depth-0"], [1, "header", "nav-wrapper", "valign-wrapper"], [1, "section", "table-of-contents", "tabs", "menu", "row"], [1, "col-sm-8"], [1, "tab"], ["href", "#introduction", 1, "white-text"], ["src", "../../../assets/img/icon blanco.png"], ["href", "#servicios", 1, "white-text"], ["href", "#nosotros", 1, "white-text"], ["href", "#clientes", 1, "white-text"], ["href", "#contacta", 1, "white-text"], ["class", "tab", 4, "ngIf"], ["class", "col-sm-4", 4, "ngIf"], ["class", "dropdown user", 4, "ngIf"], ["routerLink", "instalaciones", 1, "white-text"], [1, "col-sm-4"], ["routerLink", "/registro", 1, "login", "right", "pill", "red-text"], ["routerLink", "/login", 1, "login", "right", "pill"], [1, "dropdown", "user"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["routerLink", "/personal", 1, "dropdown-item"], [1, "large", "material-icons"], ["routerLink", "/admin", 1, "dropdown-item"], [1, "dropdown-item", 3, "click"]], template: function CabecerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "INICIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SERVICIOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "NOSOTROS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "CLIENTES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "CONTACTA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CabecerComponent_li_23_Template, 3, 0, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CabecerComponent_div_24_Template, 5, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CabecerComponent_div_25_Template, 17, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginservice.userData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginservice.userData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".login[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-radius: 20px;\n  text-align: center;\n  padding: 0;\n}\n\n.header[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%] {\n  height: 14vh;\n  z-index: 9999;\n  background-color: black;\n  opacity: 0.7;\n}\n\n.menu[_ngcontent-%COMP%] {\n  background-color: black;\n  opacity: 0.7;\n}\n\n.pill[_ngcontent-%COMP%] {\n  width: 80px;\n  margin-right: 10px;\n  z-index: 999999;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\ni[_ngcontent-%COMP%] {\n  width: 5px;\n}\n\n.user[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n  width: 8rem;\n  height: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYWJlY2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUNBO0VBQ0UsVUFBQTtBQUVGOztBQUNBO0VBQ0UsNkJBQUE7QUFFRjs7QUFDQTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFRiIsImZpbGUiOiJjYWJlY2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmhlYWRlciwgLm5hdmJhcntcclxuICAgIGhlaWdodDogMTR2aDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLm1lbnV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG4ucGlsbHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgei1pbmRleDogOTk5OTk5O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG5pe1xyXG4gIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbi51c2Vye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogOHJlbTtcclxuICBoZWlnaHQ6IDNyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "PDvO":
/*!*******************************************!*\
  !*** ./src/app/services/likes.service.ts ***!
  \*******************************************/
/*! exports provided: LikesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesService", function() { return LikesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class LikesService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://proyecto-env.eba-mvdmwcbb.eu-west-3.elasticbeanstalk.com/api';
    }
    getLikes() {
        return this.http.get(this.API_URI + '/instalaciones/likes/list');
    }
    deleteLike(id) {
        return this.http.delete(this.API_URI + '/instalaciones/likes/' + id);
    }
    saveLike(like) {
        return this.http.post(this.API_URI + '/instalaciones/likes', like);
    }
}
LikesService.ɵfac = function LikesService_Factory(t) { return new (t || LikesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LikesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LikesService, factory: LikesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QB/w":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _aws_amplify_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/ui-components */ "Yg+Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _aws_amplify_ui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-amplify/ui-angular */ "Z63c");





class LoginComponent {
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
        Object(_aws_amplify_ui_components__WEBPACK_IMPORTED_MODULE_0__["onAuthUIStateChange"])((authState, authData) => {
            this.authState = authState;
            this.user = authData;
            console.log(this.user);
            this.loginService.getUserData();
            this.ref.detectChanges();
            this.zone.run(() => {
                this.router.navigate(['/instalaciones']);
            });
        });
    }
    ngOnDestroy() {
        return _aws_amplify_ui_components__WEBPACK_IMPORTED_MODULE_0__["onAuthUIStateChange"];
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 1, vars: 1, consts: [["slot", "sign-in", "usernameAlias", "email", "header-text", "Accede a tu cuenta", "primary-footer-content", "\u00BFHas olvidado tu contrase\u00F1a?", "submitButtonText", "ACCEDER", "signUpText", "\u00A1Crea tu cuenta aqu\u00ED!", 3, "formFields"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "amplify-sign-in", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formFields", ctx.formFields);
    } }, directives: [_aws_amplify_ui_angular__WEBPACK_IMPORTED_MODULE_4__["AmplifySignIn"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: #302d2d;\n  height: 100vh;\n  width: 100vw;\n}\n\namplify-authenticator[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  height: 100vh;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  height: 100vh;\n  weight: 100vw;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxnQ0FBQTtBQUFGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDUsIDQ1KTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbmFtcGxpZnktYXV0aGVudGljYXRvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDE7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3ZWlnaHQ6IDEwMHZ3O1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "QzLQ":
/*!*********************************************!*\
  !*** ./src/app/services/reserva.service.ts ***!
  \*********************************************/
/*! exports provided: ReservaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservaService", function() { return ReservaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ReservaService {
    constructor(http) {
        this.http = http;
        // Con output creamos el nuevo EventEmitter. De este objeto obtendremos los cambios.
        this.reservaEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.API_URI = 'http://proyecto-env.eba-mvdmwcbb.eu-west-3.elasticbeanstalk.com/api';
    }
    // Cambiamos el atributo this.reserva y llamamos a cambioReserva().
    setReserva(nuevaReserva) {
        this.reserva = nuevaReserva;
        this.cambiosReserva();
    }
    obtenerReserva() {
        return this.reserva;
    }
    // Emitimos los cambio de this.reserva
    cambiosReserva() {
        this.reservaEmitter.emit(this.reserva);
    }
    getReservas() {
        return this.http.get(this.API_URI + '/instalaciones/reservas/list');
    }
    getReserva(id) {
        return this.http.get(this.API_URI + '/instalaciones/reservas' + id);
    }
    saveReserva(reserva) {
        return this.http.post(this.API_URI + '/instalaciones/reservas', reserva);
    }
    updateReserva(id, updatedReserva) {
        return this.http.put(this.API_URI + '/instalaciones/' + id, updatedReserva);
    }
}
ReservaService.ɵfac = function ReservaService_Factory(t) { return new (t || ReservaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ReservaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReservaService, factory: ReservaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RbLQ":
/*!**************************************************************!*\
  !*** ./src/app/views/confirmacion/confirmacion.component.ts ***!
  \**************************************************************/
/*! exports provided: ConfirmacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmacionComponent", function() { return ConfirmacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_reserva_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/reserva.service */ "QzLQ");
/* harmony import */ var src_app_services_instalaciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/instalaciones.service */ "MZ9l");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-paypal */ "ejwX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







class ConfirmacionComponent {
    constructor(servicio, instalacionesService, activatedRoute, loginService) {
        this.servicio = servicio;
        this.instalacionesService = instalacionesService;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
    }
    ngOnInit() {
        /* this.servicio.reservaEmitter.subscribe(
           data => {
             this.reserva = data;
             console.log(this.reserva);
           }
         );
         console.log(this.reserva);*/
        this.reserva = this.servicio.obtenerReserva();
        const params = this.activatedRoute.snapshot.params;
        if (params.cod_instalacion) {
            this.instalacionesService.getInstalacion(params.cod_instalacion)
                .subscribe(res => {
                console.log(res);
                this.instalacion = res;
                //this.edit = true;
            }, err => console.error(err));
        }
        this.payPalConfig = {
            currency: "EUR",
            clientId: "AZXY4K0dUBazE1OTSNMJdP2Zpmg9k0WbOUcWRwebrjR9RyJTWBS3ULUhQKFfnwOOa4oc9NilhV4iXlzD",
            createOrder: (data) => ({
                intent: "CAPTURE",
                purchase_units: [
                    {
                        amount: {
                            currency_code: "EUR",
                            value: "0.01",
                            breakdown: {
                                item_total: {
                                    currency_code: "EUR",
                                    value: "0.01"
                                }
                            }
                        },
                        items: [
                            {
                                name: "Enterprise Subscription",
                                quantity: "1",
                                category: "DIGITAL_GOODS",
                                unit_amount: {
                                    currency_code: "EUR",
                                    value: "0.01"
                                }
                            }
                        ]
                    }
                ]
            }),
            advanced: {
                commit: "true"
            },
            style: {
                label: "paypal",
                layout: "vertical"
            },
            onApprove: (data, actions) => {
                console.log("onApprove - transaction was approved, but not authorized", data, actions);
                actions.order.get().then(details => {
                    console.log("onApprove - you can get full order details inside onApprove: ", details);
                });
            },
            onClientAuthorization: (data) => {
                console.log("onClientAuthorization - you should probably inform your server about completed transaction at this point", data);
            },
            onCancel: (data, actions) => {
                console.log("OnCancel", data, actions);
            },
            onError: (err) => {
                console.log("OnError", err);
            },
            onClick: (data, actions) => {
                console.log("onClick", data, actions);
            }
        };
    }
    pase() {
        if (this.reserva.num_pases > 1) {
            return 'pases';
        }
        else {
            return 'pase';
        }
    }
    guardarReserva() {
        this.reserva.usuario = this.loginService.userData.username;
        this.reserva.cod_instalacion = this.instalacion.cod_instalacion;
        this.servicio.saveReserva(this.reserva)
            .subscribe(res => {
            console.log(res);
            console.log('Reserva Efectuda');
        }, err => console.error(err));
    }
}
ConfirmacionComponent.ɵfac = function ConfirmacionComponent_Factory(t) { return new (t || ConfirmacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_reserva_service__WEBPACK_IMPORTED_MODULE_1__["ReservaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_instalaciones_service__WEBPACK_IMPORTED_MODULE_2__["InstalacionesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"])); };
ConfirmacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmacionComponent, selectors: [["app-confirmacion"]], decls: 65, vars: 12, consts: [[1, "container", "confirmacion"], [1, "red-text"], [1, "row"], [1, "col-sm-6"], [1, "fas", "fa-calendar-day"], [1, "fas", "fa-clock"], [1, "card"], [1, "card-image"], [3, "src"], [1, "card-stacked"], [1, "card-content"], [1, "card-action"], [1, "h"], [1, "inline", "pill", "rigth"], ["type", "checkbox", "id", "cbox1", "value", "first_checkbox"], [3, "config"], ["type", "checkbox", "id", "cbox2", "value", "second_checkbox"], ["for", "cbox2"], [3, "click"]], template: function ConfirmacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirmar y pagar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tu reserva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Turno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Detalles de la reserva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u20AC/pase * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Total: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Elige c\u00F3mo pagar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Pagar con PayPal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "ngx-paypal", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Pagar en el establecimiento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmacionComponent_Template_button_click_63_listener() { return ctx.guardarReserva(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "CONFIRMAR LA RESERVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 9, ctx.reserva.fecha, "dd/MM/yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.reserva.turno, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.instalacion.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.instalacion.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.instalacion.precio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reserva.num_pases);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pase(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.instalacion.precio * ctx.reserva.num_pases, " \u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.payPalConfig);
    } }, directives: [ngx_paypal__WEBPACK_IMPORTED_MODULE_5__["NgxPaypalComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".confirmacion[_ngcontent-%COMP%] {\n  background-color: white;\n  margin-top: 3rem;\n}\n\n.h[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb25maXJtYWNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoiY29uZmlybWFjaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm1hY2lvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG5cclxuLmh7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _aws_amplify_ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/ui-components */ "Yg+Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _views_cabecer_cabecer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/cabecer/cabecer.component */ "NlQe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/footer/footer.component */ "FPq/");






class AppComponent {
    constructor(ref, loginService) {
        this.ref = ref;
        this.loginService = loginService;
        this.title = 'proyecto';
        this.active = true;
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
            },
            {
                type: "phone_number",
                label: "Custom Phone Label",
                placeholder: "custom Phone placeholder",
                required: false,
            }
        ];
    }
    ngOnInit() {
        /*$.scrollify({
          section: '.container-fluid',
          sectionName: 'section-name',
          easing: 'easeOutExpo',
          scrollSpeed: 1000,
          offset: 0,
          scrollbars: false,
          standardScrollElements: '',
          setHeights: true,
          overflowScroll: true,
          updateHash: true,
          touchScroll: true,
          before:function() {},
          after:function() {},
          afterResize:function() {},
          afterRender:function() {}
        });*/
    }
    ngOnDestroy() {
        return _aws_amplify_ui_components__WEBPACK_IMPORTED_MODULE_0__["onAuthUIStateChange"];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-cabecer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_views_cabecer_cabecer_component__WEBPACK_IMPORTED_MODULE_3__["CabecerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "V3fk":
/*!**************************************************!*\
  !*** ./src/app/views/cuerpo/cuerpo.component.ts ***!
  \**************************************************/
/*! exports provided: CuerpoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuerpoComponent", function() { return CuerpoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CuerpoComponent {
    constructor() { }
    ngOnInit() {
    }
}
CuerpoComponent.ɵfac = function CuerpoComponent_Factory(t) { return new (t || CuerpoComponent)(); };
CuerpoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CuerpoComponent, selectors: [["app-cuerpo"]], decls: 12, vars: 0, consts: [["data-section-name", "inicio", 1, "cuerpo", "section-class-name", "container"], [1, "row"], [1, "col-8", "text"], [1, "red-text"], [1, "waves-effect", "waves-light", "btn-large", "red"]], template: function CuerpoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Descubre con ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sobway");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " el Smart Building Concept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Explora todo lo que un edifico conectado puede hacer por ti. Cambia el modo en el que ves e interact\u00FAas con el entorno en el que vives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contacta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".text[_ngcontent-%COMP%] {\n  padding: 10%;\n  color: white;\n}\n\n.cuerpo[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjdWVycG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6ImN1ZXJwby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY3VlcnBve1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: SafePipe, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _node_modules_materialize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/materialize-css */ "TVxV");
/* harmony import */ var _node_modules_materialize_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_materialize_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "VO+5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _views_cabecer_cabecer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/cabecer/cabecer.component */ "NlQe");
/* harmony import */ var _views_cuerpo_cuerpo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/cuerpo/cuerpo.component */ "V3fk");
/* harmony import */ var _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/footer/footer.component */ "FPq/");
/* harmony import */ var _views_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/servicios/servicios.component */ "Crce");
/* harmony import */ var _views_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/nosotros/nosotros.component */ "uqfX");
/* harmony import */ var _views_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/clientes/clientes.component */ "D15x");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_registro_registro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/registro/registro.component */ "+MPo");
/* harmony import */ var _views_contrasena_contrasena_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/contrasena/contrasena.component */ "90IN");
/* harmony import */ var _views_activacion_activacion_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/activacion/activacion.component */ "FqpF");
/* harmony import */ var _views_recupera_codigo_recupera_codigo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/recupera-codigo/recupera-codigo.component */ "tpE9");
/* harmony import */ var _views_body_body_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/body/body.component */ "0vzq");
/* harmony import */ var _services_instalaciones_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/instalaciones.service */ "MZ9l");
/* harmony import */ var _aws_amplify_ui_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @aws-amplify/ui-angular */ "Z63c");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var _views_instalaciones_list_instalaciones_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/instalaciones-list/instalaciones-list.component */ "2+Lm");
/* harmony import */ var _views_detalle_instalacion_detalle_instalacion_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/detalle-instalacion/detalle-instalacion.component */ "C4ut");
/* harmony import */ var _views_nf_nf_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/nf/nf.component */ "Kso6");
/* harmony import */ var _views_area_personal_area_personal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./views/area-personal/area-personal.component */ "pnXa");
/* harmony import */ var _views_confirmacion_confirmacion_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/confirmacion/confirmacion.component */ "RbLQ");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-paypal */ "ejwX");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _views_admin_admin_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./views/admin/admin.component */ "8ANO");
/* harmony import */ var _views_instalaciones_form_instalaciones_form_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./views/instalaciones-form/instalaciones-form.component */ "dOvm");
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../aws-exports */ "ixnO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common */ "ofXK");






















/* Add Amplify imports */
/* Add Amplify imports */



















class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
/* Configure Amplify resources */
aws_amplify__WEBPACK_IMPORTED_MODULE_23__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_34__["default"]);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _views_instalaciones_list_instalaciones_list_component__WEBPACK_IMPORTED_MODULE_24__["InstalacionesListComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineInjector"]({ providers: [
        _services_instalaciones_service__WEBPACK_IMPORTED_MODULE_21__["InstalacionesService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _aws_amplify_ui_angular__WEBPACK_IMPORTED_MODULE_22__["AmplifyUIAngularModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierModule"],
            ngx_paypal__WEBPACK_IMPORTED_MODULE_29__["NgxPayPalModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_30__["CarouselModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _views_cabecer_cabecer_component__WEBPACK_IMPORTED_MODULE_9__["CabecerComponent"],
        _views_cuerpo_cuerpo_component__WEBPACK_IMPORTED_MODULE_10__["CuerpoComponent"],
        _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
        _views_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_12__["ServiciosComponent"],
        _views_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_13__["NosotrosComponent"],
        _views_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_14__["ClientesComponent"],
        _views_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
        _views_registro_registro_component__WEBPACK_IMPORTED_MODULE_16__["RegistroComponent"],
        _views_contrasena_contrasena_component__WEBPACK_IMPORTED_MODULE_17__["ContrasenaComponent"],
        _views_activacion_activacion_component__WEBPACK_IMPORTED_MODULE_18__["ActivacionComponent"],
        _views_recupera_codigo_recupera_codigo_component__WEBPACK_IMPORTED_MODULE_19__["RecuperaCodigoComponent"],
        _views_body_body_component__WEBPACK_IMPORTED_MODULE_20__["BodyComponent"],
        _views_instalaciones_list_instalaciones_list_component__WEBPACK_IMPORTED_MODULE_24__["InstalacionesListComponent"],
        _views_detalle_instalacion_detalle_instalacion_component__WEBPACK_IMPORTED_MODULE_25__["DetalleInstalacionComponent"],
        _views_nf_nf_component__WEBPACK_IMPORTED_MODULE_26__["NfComponent"],
        _views_area_personal_area_personal_component__WEBPACK_IMPORTED_MODULE_27__["AreaPersonalComponent"],
        _views_confirmacion_confirmacion_component__WEBPACK_IMPORTED_MODULE_28__["ConfirmacionComponent"], SafePipe, _views_admin_admin_component__WEBPACK_IMPORTED_MODULE_32__["AdminComponent"],
        _views_instalaciones_form_instalaciones_form_component__WEBPACK_IMPORTED_MODULE_33__["InstalacionesFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _aws_amplify_ui_angular__WEBPACK_IMPORTED_MODULE_22__["AmplifyUIAngularModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierModule"],
        ngx_paypal__WEBPACK_IMPORTED_MODULE_29__["NgxPayPalModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_30__["CarouselModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵsetComponentScope"](_views_detalle_instalacion_detalle_instalacion_component__WEBPACK_IMPORTED_MODULE_25__["DetalleInstalacionComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_36__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_30__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_30__["CarouselSlideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_36__["NgForOf"], angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierContainerComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_36__["DatePipe"], SafePipe]);


/***/ }),

/***/ "dOvm":
/*!**************************************************************************!*\
  !*** ./src/app/views/instalaciones-form/instalaciones-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: InstalacionesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstalacionesFormComponent", function() { return InstalacionesFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_instalaciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/instalaciones.service */ "MZ9l");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class InstalacionesFormComponent {
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
}
InstalacionesFormComponent.ɵfac = function InstalacionesFormComponent_Factory(t) { return new (t || InstalacionesFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_instalaciones_service__WEBPACK_IMPORTED_MODULE_1__["InstalacionesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
InstalacionesFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstalacionesFormComponent, selectors: [["app-instalaciones-form"]], decls: 49, vars: 14, consts: [[1, "col-md-4", "offset-md-2"], [1, "card"], [1, "card-body"], [1, "form-group"], ["type", "text", "name", "title", "placeholder", "Nombre", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "comunidad", "placeholder", "Precio", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "limpieza", "placeholder", "Image", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "image", "placeholder", "Image", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "image", "placeholder", "Valoraci\u00F3n de la ubicaci\u00F3n", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "valoracion", "placeholder", "Valoraci\u00F3n de la calidad", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "url", "name", "image", "placeholder", "Image", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "url", "name", "image2", "placeholder", "Image", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "url", "name", "image3", "placeholder", "Image", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "url", "name", "descripcion", "placeholder", "Descripci\u00F3n", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "cc", "placeholder", "Comunidad", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "ha", "placeholder", "Hora de apertura", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "hc", "placeholder", "Comunidad", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", "btn-block", 3, "click"]], template: function InstalacionesFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstalacionesFormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.instalacion.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Precio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstalacionesFormComponent_Template_input_ngModelChange_10_listener($event) { return ctx.instalacion.precio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Valoraci\u00F3n de la limpieza:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstalacionesFormComponent_Template_input_ngModelChange_13_listener($event) { return ctx.instalacion.limpieza = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Valoraci\u00F3n de la comunicaci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstalacionesFormComponent_Template_input_ngModelChange_16_listener($event) { return ctx.instalacion.comunicacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Valoraci\u00F3n de la ubicaci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstalacionesFormComponent_Template_input_ngModelChange_19_listener($event) { return ctx.instalacion.ubicacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Valoraci\u00F3n de la calidad de la instalaci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstalacionesFormComponent_Template_input_ngModelChange_22_listener($event) { return ctx.instalacion.calidad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Imagen 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstalacionesFormComponent_Template_input_ngModelChange_25_listener($event) { return ctx.instalacion.img = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Imagen 2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstalacionesFormComponent_Template_input_ngModelChange_28_listener($event) { return ctx.instalacion.img2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Imagen 3:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstalacionesFormComponent_Template_input_ngModelChange_31_listener($event) { return ctx.instalacion.img3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Descripci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstalacionesFormComponent_Template_textarea_ngModelChange_34_listener($event) { return ctx.instalacion.descripcion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Codigo de la comunidad:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstalacionesFormComponent_Template_input_ngModelChange_37_listener($event) { return ctx.instalacion.cod_comunidad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Hora de apertura:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstalacionesFormComponent_Template_input_ngModelChange_40_listener($event) { return ctx.instalacion.hora_apertura = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Hora de cierre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstalacionesFormComponent_Template_input_ngModelChange_43_listener($event) { return ctx.instalacion.cod_comunidad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Hora de apertura:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstalacionesFormComponent_Template_input_ngModelChange_46_listener($event) { return ctx.instalacion.hora_apertura = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstalacionesFormComponent_Template_button_click_47_listener() { return ctx.edit ? ctx.updateInstalacion() : ctx.saveNewInstalacion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " SAVE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.instalacion.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.instalacion.precio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.instalacion.limpieza);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.instalacion.comunicacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.instalacion.ubicacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.instalacion.calidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.instalacion.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.instalacion.img2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.instalacion.img3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.instalacion.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.instalacion.cod_comunidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.instalacion.hora_apertura);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.instalacion.cod_comunidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.instalacion.hora_apertura);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0YWxhY2lvbmVzLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ixnO":
/*!****************************!*\
  !*** ./src/aws-exports.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.
const awsmobile = {
    "aws_project_region": "eu-west-2",
    "aws_cognito_identity_pool_id": "eu-west-2:0abcf9e9-4e05-4dad-98dc-ded4693af756",
    "aws_cognito_region": "eu-west-2",
    "aws_user_pools_id": "eu-west-2_Hr9WbF3Y2",
    "aws_user_pools_web_client_id": "2n8l2q67aghrr2fhgautcph5v6",
    "oauth": {
        "domain": "sobway-dev.auth.eu-west-2.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:4200/login/",
        "redirectSignOut": "http://localhost:4200/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_AND_IDENTITY_POOLS",
    "aws_cloud_logic_custom": [
        {
            "name": "AdminQueries",
            "endpoint": "https://u9pd1iaxbk.execute-api.eu-west-2.amazonaws.com/dev",
            "region": "eu-west-2"
        }
    ],
    "aws_bots": "enable",
    "aws_bots_config": [
        {
            "name": "BookTrip_dev",
            "alias": "$LATEST",
            "region": "eu-west-2"
        }
    ]
};
/* harmony default export */ __webpack_exports__["default"] = (awsmobile);


/***/ }),

/***/ "pnXa":
/*!****************************************************************!*\
  !*** ./src/app/views/area-personal/area-personal.component.ts ***!
  \****************************************************************/
/*! exports provided: AreaPersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaPersonalComponent", function() { return AreaPersonalComponent; });
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_likes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/likes.service */ "PDvO");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var src_app_services_instalaciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/instalaciones.service */ "MZ9l");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AreaPersonalComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instalacion_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", instalacion_r1.nombre, " ");
} }
class AreaPersonalComponent {
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
        aws_amplify__WEBPACK_IMPORTED_MODULE_0__["Auth"].currentAuthenticatedUser()
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
}
AreaPersonalComponent.ɵfac = function AreaPersonalComponent_Factory(t) { return new (t || AreaPersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_likes_service__WEBPACK_IMPORTED_MODULE_2__["LikesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_instalaciones_service__WEBPACK_IMPORTED_MODULE_4__["InstalacionesService"])); };
AreaPersonalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AreaPersonalComponent, selectors: [["app-area-personal"]], decls: 6, vars: 1, consts: [[1, "container", "personal"], [1, "red-text"], [4, "ngFor", "ngForOf"]], template: function AreaPersonalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00C1REA PERSONAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Tus favoritos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AreaPersonalComponent_div_5_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.userInstalaciones);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".personal[_ngcontent-%COMP%] {\n  width: 100vw;\n  background-color: #fff9f4;\n  margin-top: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcmVhLXBlcnNvbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJhcmVhLXBlcnNvbmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcnNvbmFse1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDksIDI0NCk7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "tW/v":
/*!***********************************************!*\
  !*** ./src/app/services/comunidad.service.ts ***!
  \***********************************************/
/*! exports provided: ComunidadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComunidadService", function() { return ComunidadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ComunidadService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://proyecto-env.eba-mvdmwcbb.eu-west-3.elasticbeanstalk.com/api';
    }
    getComunidad(id) {
        return this.http.get(this.API_URI + '/instalaciones/ubicacion/' + id);
    }
}
ComunidadService.ɵfac = function ComunidadService_Factory(t) { return new (t || ComunidadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ComunidadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ComunidadService, factory: ComunidadService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tpE9":
/*!********************************************************************!*\
  !*** ./src/app/views/recupera-codigo/recupera-codigo.component.ts ***!
  \********************************************************************/
/*! exports provided: RecuperaCodigoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperaCodigoComponent", function() { return RecuperaCodigoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class RecuperaCodigoComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecuperaCodigoComponent.ɵfac = function RecuperaCodigoComponent_Factory(t) { return new (t || RecuperaCodigoComponent)(); };
RecuperaCodigoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecuperaCodigoComponent, selectors: [["app-recupera-codigo"]], decls: 24, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col", "s8", "offset-s2"], [1, "card"], [1, "card-content"], [1, "red-text"], [1, "col", "s12"], [1, "input-field", "col", "s12"], [1, "material-icons", "prefix", "red-text"], ["id", "email", "type", "text", 1, "validate"], ["for", "email"], [1, "col", "s4", "offset-s4"], ["type", "submit", "name", "action", 1, "btn", "waves-effect", "waves-light", "red"], [1, "material-icons", "right"], [1, "col", "s12", "center-align"], ["routerLink", "/registro"]], template: function RecuperaCodigoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reenviar c\u00F3digo de activaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "REENVIAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Volver al registro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWN1cGVyYS1jb2RpZ28uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "uqfX":
/*!******************************************************!*\
  !*** ./src/app/views/nosotros/nosotros.component.ts ***!
  \******************************************************/
/*! exports provided: NosotrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NosotrosComponent", function() { return NosotrosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NosotrosComponent {
    constructor() { }
    ngOnInit() {
    }
}
NosotrosComponent.ɵfac = function NosotrosComponent_Factory(t) { return new (t || NosotrosComponent)(); };
NosotrosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NosotrosComponent, selectors: [["app-nosotros"]], decls: 22, vars: 0, consts: [["data-section-name", "nosotros", 1, "nosotros", "section-class-name", "valign-wrapper", "section", "scrollspy"], [1, "container"], [1, "row"], [1, "col", "s5", "img"], ["src", "../../../assets/img/equipo-gesti\u00F3n-proyectos.jpg", 1, "z-depth-3"], [1, "col", "s7", "text", "z-depth-3"], [1, "red-text"], [1, "col", "s5", "s", "img"], ["src", "../../../assets/img/soluciones.jpg", 1, "right", "z-depth-3"]], template: function NosotrosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Equipo consultor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Somos un grupo de profesionales del sector de la tecnolog\u00EDa de comunicaciones y automatizaci\u00F3n con amplia experiencia en ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Real Estate y Property Managment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Soluciones a medida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Realizamos un diagn\u00F3stico de las posibilidades de domotizaci\u00F3n que posee la edificaci\u00F3n, y aportamos la soluci\u00F3n a medida y personalizada que convertir\u00E1 su residencial en ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "SmartBuilding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".nosotros[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #302d2d;\n}\n.nosotros[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  background-color: #5e5656;\n  color: white;\n  height: 20rem;\n  font-size: large;\n}\n.nosotros[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18rem;\n  height: 20rem;\n}\n.nosotros[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3NvdHJvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQUNKO0FBQ0k7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUdJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFETjtBQUtJO0VBQ0UsYUFBQTtBQUhOIiwiZmlsZSI6Im5vc290cm9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vc290cm9ze1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDUsIDQ1KTtcclxuXHJcbiAgICAudGV4dHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTQsIDg2LCA4Nik7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGhlaWdodDogMjByZW07XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICB3aWR0aDogMThyZW07XHJcbiAgICAgIGhlaWdodDogMjByZW07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/clientes/clientes.component */ "D15x");
/* harmony import */ var _views_cuerpo_cuerpo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/cuerpo/cuerpo.component */ "V3fk");
/* harmony import */ var _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/footer/footer.component */ "FPq/");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/nosotros/nosotros.component */ "uqfX");
/* harmony import */ var _views_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/servicios/servicios.component */ "Crce");
/* harmony import */ var _views_registro_registro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/registro/registro.component */ "+MPo");
/* harmony import */ var _views_contrasena_contrasena_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/contrasena/contrasena.component */ "90IN");
/* harmony import */ var _views_activacion_activacion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/activacion/activacion.component */ "FqpF");
/* harmony import */ var _views_recupera_codigo_recupera_codigo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/recupera-codigo/recupera-codigo.component */ "tpE9");
/* harmony import */ var _views_body_body_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/body/body.component */ "0vzq");
/* harmony import */ var _views_instalaciones_list_instalaciones_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/instalaciones-list/instalaciones-list.component */ "2+Lm");
/* harmony import */ var _views_detalle_instalacion_detalle_instalacion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/detalle-instalacion/detalle-instalacion.component */ "C4ut");
/* harmony import */ var _views_nf_nf_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/nf/nf.component */ "Kso6");
/* harmony import */ var _views_confirmacion_confirmacion_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/confirmacion/confirmacion.component */ "RbLQ");
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/login.guard */ "+XmF");
/* harmony import */ var _views_area_personal_area_personal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/area-personal/area-personal.component */ "pnXa");
/* harmony import */ var _views_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/admin/admin.component */ "8ANO");
/* harmony import */ var _views_instalaciones_form_instalaciones_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/instalaciones-form/instalaciones-form.component */ "dOvm");
/* harmony import */ var _guards_unauth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guards/unauth.guard */ "1GCp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");























const routes = [
    { path: 'cuerpo', component: _views_cuerpo_cuerpo_component__WEBPACK_IMPORTED_MODULE_2__["CuerpoComponent"] },
    { path: 'servicios', component: _views_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_6__["ServiciosComponent"] },
    { path: 'nosotros', component: _views_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_5__["NosotrosComponent"] },
    { path: 'clientes', component: _views_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_1__["ClientesComponent"] },
    { path: 'contacta', component: _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"] },
    { path: 'login', component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_guards_unauth_guard__WEBPACK_IMPORTED_MODULE_20__["UnauthGuard"]] },
    { path: 'registro', component: _views_registro_registro_component__WEBPACK_IMPORTED_MODULE_7__["RegistroComponent"] },
    { path: 'contraseña', component: _views_contrasena_contrasena_component__WEBPACK_IMPORTED_MODULE_8__["ContrasenaComponent"] },
    { path: 'activacion', component: _views_activacion_activacion_component__WEBPACK_IMPORTED_MODULE_9__["ActivacionComponent"] },
    { path: 'recuperaCodigo', component: _views_recupera_codigo_recupera_codigo_component__WEBPACK_IMPORTED_MODULE_10__["RecuperaCodigoComponent"] },
    { path: '', component: _views_body_body_component__WEBPACK_IMPORTED_MODULE_11__["BodyComponent"] },
    { path: 'instalaciones', component: _views_instalaciones_list_instalaciones_list_component__WEBPACK_IMPORTED_MODULE_12__["InstalacionesListComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_16__["LoginGuard"]] },
    { path: 'instalaciones/:cod_instalacion', component: _views_detalle_instalacion_detalle_instalacion_component__WEBPACK_IMPORTED_MODULE_13__["DetalleInstalacionComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_16__["LoginGuard"]] },
    { path: 'confirmacion/:cod_instalacion', component: _views_confirmacion_confirmacion_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmacionComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_16__["LoginGuard"]] },
    { path: 'personal', component: _views_area_personal_area_personal_component__WEBPACK_IMPORTED_MODULE_17__["AreaPersonalComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_16__["LoginGuard"]] },
    { path: 'instalacionesForm/:cod_instalacion', component: _views_instalaciones_form_instalaciones_form_component__WEBPACK_IMPORTED_MODULE_19__["InstalacionesFormComponent"], },
    { path: 'admin', component: _views_admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_16__["LoginGuard"]] },
    { path: '**', component: _views_nf_nf_component__WEBPACK_IMPORTED_MODULE_14__["NfComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yHma":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LocationService {
    constructor() { }
    getPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resp => {
                resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
            }, err => {
                reject(err);
            });
        });
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(); };
LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-amplify/storage */ "l1VB");
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aws-exports */ "ixnO");








_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_7__["default"]);
_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_5__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_7__["default"]);
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map