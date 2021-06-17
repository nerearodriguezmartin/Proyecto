"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CabecerComponent = void 0;
const core_1 = require("@angular/core");
let CabecerComponent = class CabecerComponent {
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
        this.loginservice.signOut;
        console.log(this.loginservice.getUserData());
        this.login = false;
        this.zone.run(() => {
            this.router.navigate(['/']);
        });
    }
};
CabecerComponent = __decorate([
    core_1.Component({
        selector: 'app-cabecer',
        templateUrl: './cabecer.component.html',
        styleUrls: ['./cabecer.component.scss']
    })
], CabecerComponent);
exports.CabecerComponent = CabecerComponent;
