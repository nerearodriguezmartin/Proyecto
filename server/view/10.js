(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "GWfx":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-federated-sign-in.entry.js ***!
  \*********************************************************************************************/
/*! exports provided: amplify_federated_sign_in */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_federated_sign_in", function() { return AmplifyFederatedSignIn; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "hKmi");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "s1tr");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "/vcS");






const logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-federated-sign-in');
const AmplifyFederatedSignIn = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The current authentication state. */
        this.authState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn;
        /** Federated credentials & configuration. */
        this.federated = {};
    }
    componentWillLoad() {
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].configure !== 'function') {
            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__["N"]);
        }
        const { oauth = {} } = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].configure();
        // backward compatibility
        if (oauth['domain']) {
            this.federated.oauth_config = Object.assign(Object.assign({}, this.federated.oauth_config), oauth);
        }
        else if (oauth['awsCognito']) {
            this.federated.oauth_config = Object.assign(Object.assign({}, this.federated.oauth_config), oauth['awsCognito']);
        }
        if (oauth['auth0']) {
            this.federated.auth0 = Object.assign(Object.assign({}, this.federated.auth0), oauth['auth0']);
        }
    }
    render() {
        if (!this.federated) {
            logger.debug('federated prop is empty. show nothing');
            logger.debug('federated={google_client_id: , facebook_app_id: , amazon_client_id}');
            return null;
        }
        if (!Object.values(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"]).includes(this.authState)) {
            return null;
        }
        logger.debug('federated Config is', this.federated);
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { "data-test": "federated-sign-in-section" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-section", { "data-test": "federated-sign-in-body-section" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-federated-buttons", { authState: this.authState, "data-test": "federated-sign-in-buttons", federated: this.federated }))));
    }
};




/***/ })

}]);
//# sourceMappingURL=10.js.map