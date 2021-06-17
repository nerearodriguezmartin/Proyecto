(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "oogQ":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-select-mfa-type.entry.js ***!
  \*******************************************************************************************/
/*! exports provided: amplify_select_mfa_type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_select_mfa_type", function() { return AmplifySelectMFAType; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "hKmi");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "s1tr");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "sPRy");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "/vcS");







const logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('SelectMFAType');
const AmplifySelectMFAType = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Fires when Verify is clicked */
        this.handleSubmit = event => this.verify(event);
        this.TOTPSetup = false;
        this.selectMessage = null;
        this.MFAMethod = null;
        this.isTOTP = false;
        this.isNoMFA = false;
        this.isSMS = false;
        this.loading = false;
    }
    handleRadioButtonChange(event) {
        this.TOTPSetup = false;
        this.selectMessage = null;
        // Reseting state values to default
        this.isNoMFA = false;
        this.isTOTP = false;
        this.isSMS = false;
        const { value, type, checked } = event.target;
        const checkType = ['radio', 'checkbox'].includes(type);
        if (value === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].SMS && checkType) {
            this.isSMS = checked;
        }
        if (value === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].TOTP && checkType) {
            this.isTOTP = checked;
        }
        if (value === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].NOMFA && checkType) {
            this.isNoMFA = checked;
        }
    }
    async verify(event) {
        // avoid submitting the form
        if (event) {
            event.preventDefault();
        }
        logger.debug('MFA Type Values', { TOTP: this.isTOTP, SMS: this.isSMS, 'No MFA': this.isNoMFA });
        if (this.isTOTP) {
            this.MFAMethod = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].TOTP;
        }
        else if (this.isSMS) {
            this.MFAMethod = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].SMS;
        }
        else if (this.isNoMFA) {
            this.MFAMethod = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].NOMFA;
        }
        const user = this.authData;
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].setPreferredMFA !== 'function') {
            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
        }
        this.loading = true;
        try {
            const preferredMFAData = await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].setPreferredMFA(user, this.MFAMethod);
            logger.debug('Set Preferred MFA Succeeded', preferredMFAData);
            this.selectMessage = `${_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SUCCESS_MFA_TYPE)} ${this.MFAMethod}`;
            // 	TODO Add Toast = showToast: true,
        }
        catch (error) {
            const { message } = error;
            if (message === _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["f"] || message === _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["g"]) {
                this.TOTPSetup = true;
                this.selectMessage = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SETUP_TOTP_REQUIRED);
                // 	TODO Add Toast = showToast: true,
            }
            else {
                logger.debug('Set Preferred MFA failed', error);
                this.selectMessage = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].UNABLE_TO_SETUP_MFA_AT_THIS_TIME);
                // 	TODO Add Toast = showToast: true,
            }
        }
        finally {
            this.loading = false;
        }
    }
    contentBuilder() {
        if (!this.MFATypes || Object.keys(this.MFATypes).length < 2) {
            logger.debug(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].LESS_THAN_TWO_MFA_VALUES_MESSAGE));
            return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].LESS_THAN_TWO_MFA_VALUES_MESSAGE))));
        }
        const { SMS, TOTP, Optional } = this.MFATypes;
        return (
        // TODO: Add Toast messages
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT), headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SELECT_MFA_TYPE_HEADER_TEXT), handleSubmit: event => this.handleSubmit(event), loading: this.loading }, SMS ? (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-radio-button", { key: "sms", name: "MFAType", value: "SMS", label: "SMS", handleInputChange: event => this.handleRadioButtonChange(event) })) : null, TOTP ? (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-radio-button", { key: "totp", name: "MFAType", value: "TOTP", label: "TOTP", handleInputChange: event => this.handleRadioButtonChange(event) })) : null, Optional ? (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-radio-button", { key: "noMFA", name: "MFAType", value: "NOMFA", label: "No MFA", handleInputChange: event => this.handleRadioButtonChange(event) })) : null));
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.contentBuilder(), this.TOTPSetup ? Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-totp-setup", { user: this.authData }) : null));
    }
};




/***/ })

}]);
//# sourceMappingURL=25.js.map