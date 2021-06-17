"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
const ui_components_1 = require("@aws-amplify/ui-components");
let AppComponent = class AppComponent {
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
        return ui_components_1.onAuthUIStateChange;
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
exports.AppComponent = AppComponent;
