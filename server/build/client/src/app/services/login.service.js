"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const core_1 = require("@angular/core");
const aws_amplify_1 = require("aws-amplify");
const auth_1 = require("@aws-amplify/auth");
const core_2 = require("@aws-amplify/core");
const rxjs_1 = require("rxjs");
;
let LoginService = class LoginService {
    constructor(router) {
        this.router = router;
        this._authState = new rxjs_1.Subject();
        this.authState = this._authState.asObservable();
        core_2.Hub.listen('auth', (data) => {
            const { channel, payload } = data;
            if (channel === 'auth') {
                this._authState.next(payload.event);
            }
        });
    }
    signUp(user) {
        return aws_amplify_1.Auth.signUp({
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
            aws_amplify_1.Auth.signIn(username, password)
                .then((user) => {
                this.loggedIn = true;
                resolve(user);
            }).catch((error) => reject(error));
        });
    }
    /** signout */
    signOut() {
        return aws_amplify_1.Auth.signOut()
            .then(() => this.loggedIn = false);
    }
    socialSignIn(provider) {
        return aws_amplify_1.Auth.federatedSignIn({
            'provider': provider
        });
    }
    isLogin() {
        aws_amplify_1.Auth.currentAuthenticatedUser().then(() => { return true; }).catch(() => {
            return false;
        });
    }
    getUserData() {
        if (!this.userData) {
            return aws_amplify_1.Auth.currentAuthenticatedUser()
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
};
LoginService.SIGN_IN = 'signIn';
LoginService.SIGN_OUT = 'signOut';
LoginService.FACEBOOK = auth_1.CognitoHostedUIIdentityProvider.Facebook;
LoginService.GOOGLE = auth_1.CognitoHostedUIIdentityProvider.Google;
LoginService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], LoginService);
exports.LoginService = LoginService;
