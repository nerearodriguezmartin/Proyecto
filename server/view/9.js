(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "4pA8":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-federated-buttons_2.entry.js ***!
  \***********************************************************************************************/
/*! exports provided: amplify_federated_buttons, amplify_strike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_federated_buttons", function() { return AmplifyFederatedButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_strike", function() { return AmplifyStrike; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "hKmi");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "s1tr");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "sPRy");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "/vcS");
/* harmony import */ var _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-4afef5ab.js */ "eGR6");








const AmplifyFederatedButtons = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The current authentication state. */
        this.authState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn;
        /** Federated credentials & configuration. */
        this.federated = {};
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["d"];
    }
    componentWillLoad() {
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].configure !== 'function') {
            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
        }
        const { oauth = {} } = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].configure();
        // backward compatibility
        if (oauth['domain']) {
            this.federated.oauthConfig = Object.assign(Object.assign({}, this.federated.oauthConfig), oauth);
        }
        else if (oauth['awsCognito']) {
            this.federated.oauthConfig = Object.assign(Object.assign({}, this.federated.oauthConfig), oauth['awsCognito']);
        }
        if (oauth['auth0']) {
            this.federated.auth0Config = Object.assign(Object.assign({}, this.federated.auth0Config), oauth['auth0']);
        }
    }
    render() {
        if (!Object.values(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"]).includes(this.authState)) {
            return null;
        }
        if (Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(this.federated)) {
            return null;
        }
        const { amazonClientId, auth0Config, facebookAppId, googleClientId, oauthConfig } = this.federated;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, googleClientId && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-google-button", { clientId: googleClientId, handleAuthStateChange: this.handleAuthStateChange }))), facebookAppId && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-facebook-button", { appId: facebookAppId, handleAuthStateChange: this.handleAuthStateChange }))), amazonClientId && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-amazon-button", { clientId: amazonClientId, handleAuthStateChange: this.handleAuthStateChange }))), oauthConfig && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-oauth-button", { config: oauthConfig }))), auth0Config && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth0-button", { config: auth0Config, handleAuthStateChange: this.handleAuthStateChange })))));
    }
};

const amplifyStrikeCss = ".sc-amplify-strike-h{--color:var(--amplify-grey);--border-color:var(--amplify-light-grey);--content-background:var(--amplify-white);display:block;width:100%;text-align:center;border-bottom:1px solid var(--border-color);line-height:0.1em;margin:32px 0;color:var(--color)}.strike-content.sc-amplify-strike{background:var(--content-background);padding:0 25px;font-size:var(--amplify-text-sm);font-weight:500}";

const AmplifyStrike = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "strike-content" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
};
AmplifyStrike.style = amplifyStrikeCss;




/***/ })

}]);
//# sourceMappingURL=9.js.map