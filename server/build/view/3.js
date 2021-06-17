(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "HaBs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-authenticator.entry.js ***!
  \*****************************************************************************************/
/*! exports provided: amplify_authenticator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_authenticator", function() { return AmplifyAuthenticator; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "hKmi");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "s1tr");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "sPRy");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "/vcS");
/* harmony import */ var _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-4afef5ab.js */ "eGR6");
/* harmony import */ var _auth_helpers_99c6a1db_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-helpers-99c6a1db.js */ "gUIQ");









const authSlotNames = {
    [_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn]: 'sign-in',
    [_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignIn]: 'confirm-sign-in',
    [_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignUp]: 'sign-up',
    [_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignUp]: 'confirm-sign-up',
    [_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ForgotPassword]: 'forgot-password',
    [_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ResetPassword]: 'require-new-password',
    [_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].VerifyContact]: 'verify-contact',
    [_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].TOTPSetup]: 'totp-setup',
    [_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].Loading]: 'loading',
};

const amplifyAuthenticatorCss = ":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px;--container-height:100vh;--container-display:flex;--container-justify:center;--container-align:center}.auth-container{display:var(--container-display);-ms-flex-pack:var(--container-justify);justify-content:var(--container-justify);-ms-flex-align:var(--container-align);align-items:var(--container-align);min-height:var(--container-height)}";

const logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('Authenticator');
const AmplifyAuthenticator = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Initial starting state of the Authenticator component. E.g. If `signup` is passed the default component is set to AmplifySignUp */
        this.initialAuthState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn;
        /** Callback for Authenticator state machine changes */
        this.handleAuthStateChange = () => { };
        /** Hide amplify-toast for auth errors */
        this.hideToast = false;
        this.authState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].Loading;
        this.toastMessage = '';
        this.handleExternalAuthEvent = ({ payload }) => {
            switch (payload.event) {
                case 'cognitoHostedUI':
                case 'signIn':
                    Object(_auth_helpers_99c6a1db_js__WEBPACK_IMPORTED_MODULE_7__["c"])(payload.data, _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["d"]);
                    break;
                case 'cognitoHostedUI_failure':
                case 'parsingUrl_failure':
                case 'signOut':
                case 'customGreetingSignOut':
                    return Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["d"])(this.initialAuthState);
            }
        };
        this.handleToastEvent = ({ payload }) => {
            switch (payload.event) {
                case _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["T"]:
                    if (payload.message)
                        this.toastMessage = payload.message;
                    break;
            }
        };
    }
    async componentWillLoad() {
        Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["o"])((authState, authData) => {
            this.onAuthStateChange(authState, authData);
            this.toastMessage = '';
        });
        if (!this.hideToast)
            _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].listen(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["U"], this.handleToastEvent);
        _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].listen(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["A"], this.handleExternalAuthEvent);
        Object(_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["appendToCognitoUserAgent"])('amplify-authenticator');
        const byHostedUI = localStorage.getItem(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["R"]);
        localStorage.removeItem(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["R"]);
        if (byHostedUI !== 'true')
            await this.checkUser();
    }
    async checkUser() {
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser !== 'function') {
            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
        }
        return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser()
            .then(user => {
            Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["d"])(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, user);
        })
            .catch(async () => {
            let cachedAuthState = null;
            try {
                cachedAuthState = localStorage.getItem(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["c"]);
            }
            catch (error) {
                logger.debug('Failed to get the auth state from local storage', error);
            }
            try {
                if (cachedAuthState === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn) {
                    await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].signOut();
                }
                Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["d"])(this.initialAuthState);
            }
            catch (error) {
                logger.debug('Failed to sign out', error);
            }
        });
    }
    async onAuthStateChange(nextAuthState, data) {
        if (nextAuthState === undefined)
            return logger.error('nextAuthState cannot be undefined');
        logger.info('Inside onAuthStateChange Method current authState:', this.authState);
        if (nextAuthState === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedOut) {
            this.authState = this.initialAuthState;
        }
        else {
            this.authState = nextAuthState;
        }
        this.authData = data;
        if (this.authData)
            logger.log('Auth Data was set:', this.authData);
        if (this.authState === nextAuthState) {
            this.handleAuthStateChange(this.authState, this.authData);
            logger.info(`authState has been updated to ${this.authState}`);
        }
    }
    // Returns the auth component corresponding to the given authState.
    getAuthComponent(authState) {
        switch (authState) {
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn:
                return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in", { federated: this.federated, usernameAlias: this.usernameAlias });
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignIn:
                return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-confirm-sign-in", { user: this.authData });
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignUp:
                return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-up", { usernameAlias: this.usernameAlias });
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignUp:
                return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-confirm-sign-up", { user: this.authData, usernameAlias: this.usernameAlias });
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ForgotPassword:
                return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-forgot-password", { usernameAlias: this.usernameAlias });
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ResetPassword:
                return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-require-new-password", { user: this.authData });
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].VerifyContact:
                return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-verify-contact", { user: this.authData });
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].TOTPSetup:
                return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-totp-setup", { user: this.authData });
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].Loading:
                return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "Loading...");
            default:
                throw new Error(`Unhandled auth state: ${authState}`);
        }
    }
    // Returns a slot containing the Auth component corresponding to the given authState
    getSlotWithAuthComponent(authState) {
        const authComponent = this.getAuthComponent(authState);
        const slotName = authSlotNames[authState];
        const slotIsEmpty = this.el.querySelector(`[slot="${slotName}"]`) === null; // true if no element has been inserted to the slot
        /**
         * Connect the inner auth component to DOM only if the slot hasn't been overwritten. This prevents
         * the overwritten component from calling its lifecycle methods.
         */
        return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: slotName }, slotIsEmpty && authComponent);
    }
    componentWillUnload() {
        _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].remove(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["A"], this.handleExternalAuthEvent);
        if (!this.hideToast)
            _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].remove(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["U"], this.handleToastEvent);
        return _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["o"];
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, !this.hideToast && this.toastMessage && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-toast", { message: this.toastMessage, handleClose: () => {
                this.toastMessage = '';
            }, "data-test": "authenticator-error" })), this.authState === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn ? ([Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "greetings" }), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)]) : (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "auth-container" }, this.getSlotWithAuthComponent(this.authState)))));
    }
    get el() { return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
AmplifyAuthenticator.style = amplifyAuthenticatorCss;




/***/ })

}]);
//# sourceMappingURL=3.js.map