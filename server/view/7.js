(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "VFVT":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-confirm-sign-in_7.entry.js ***!
  \*********************************************************************************************/
/*! exports provided: amplify_confirm_sign_in, amplify_confirm_sign_up, amplify_forgot_password, amplify_require_new_password, amplify_sign_in, amplify_sign_up, amplify_verify_contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_confirm_sign_in", function() { return AmplifyConfirmSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_confirm_sign_up", function() { return AmplifyConfirmSignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_forgot_password", function() { return AmplifyForgotPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_require_new_password", function() { return AmplifyRequireNewPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_sign_in", function() { return AmplifySignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_sign_up", function() { return AmplifySignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_verify_contact", function() { return AmplifyVerifyContact; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "hKmi");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "s1tr");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "sPRy");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "/vcS");
/* harmony import */ var _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-4afef5ab.js */ "eGR6");
/* harmony import */ var _auth_helpers_99c6a1db_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-helpers-99c6a1db.js */ "gUIQ");









const AmplifyConfirmSignIn = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Fires when confirm sign in form is submitted */
        this.handleSubmit = event => this.confirm(event);
        /** Used for header text in confirm sign in component */
        this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SMS_CODE;
        /** Used for the submit button text in confirm sign in component */
        this.submitButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM;
        /** Auth state change handler for this component */
        this.handleAuthStateChange = _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /**
         * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
         * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
         * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
         * ```
         * [
         *  {
         *    type: string,
         *    label: string,
         *    placeholder: string,
         *    hint: string | Functional Component | null,
         *    required: boolean
         *  }
         * ]
         * ```
         */
        this.formFields = [
            {
                type: 'code',
                required: true,
                handleInputChange: event => this.handleCodeChange(event),
            },
        ];
        /** The MFA option to confirm with */
        this.mfaOption = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].SMS;
        /* Whether or not the confirm-sign-in component is loading */
        this.loading = false;
    }
    componentWillLoad() {
        this.setup();
    }
    userHandler() {
        this.setup();
    }
    setup() {
        if (this.user && this.user['challengeName'] === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["C"].SoftwareTokenMFA) {
            this.mfaOption = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["M"].TOTP;
            // If header text is using default use TOTP string
            if (this.headerText === _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SMS_CODE) {
                this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_TOTP_CODE;
            }
        }
    }
    handleCodeChange(event) {
        this.code = event.target.value;
    }
    async confirm(event) {
        if (event) {
            event.preventDefault();
        }
        const mfaType = this.user['challengeName'] === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["C"].SoftwareTokenMFA ? _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["C"].SoftwareTokenMFA : null;
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignIn !== 'function') {
            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
        }
        this.loading = true;
        try {
            await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignIn(this.user, this.code, mfaType);
            await Object(_auth_helpers_99c6a1db_js__WEBPACK_IMPORTED_MODULE_7__["c"])(this.user, this.handleAuthStateChange);
        }
        catch (error) {
            Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
        }
        finally {
            this.loading = false;
        }
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), handleSubmit: this.handleSubmit, submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText), loading: this.loading, secondaryFooterContent: Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn) }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].BACK_TO_SIGN_IN))) }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", { formFields: this.formFields }))));
    }
    static get watchers() { return {
        "user": ["userHandler"]
    }; }
};

const AmplifyConfirmSignUp = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Fires when sign up form is submitted */
        this.handleSubmit = event => this.confirmSignUp(event);
        /** Used for header text in confirm sign up component */
        this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_HEADER_TEXT;
        /** Used for the submit button text in confirm sign up component */
        this.submitButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT;
        /**
         * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
         * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
         * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
         * ```
         * [
         *  {
         *    type: string,
         *    label: string,
         *    placeholder: string,
         *    hint: string | Functional Component | null,
         *    required: boolean
         *  }
         * ]
         * ```
         */
        this.formFields = [];
        /** Auth state change handler for this components
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = 'username';
        this.loading = false;
        this.newFormFields = [];
        this.phoneNumber = {
            countryDialCodeValue: _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["h"],
            phoneNumberValue: null,
        };
    }
    componentWillLoad() {
        this.setup();
    }
    formFieldsHandler() {
        this.buildFormFields();
    }
    userHandler() {
        this.setup();
    }
    setup() {
        // TODO: Use optional chaining instead
        this.userInput = this.user && this.user.username;
        this._signUpAttrs = this.user && this.user.signUpAttrs;
        Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.usernameAlias);
        this.buildFormFields();
    }
    buildDefaultFormFields() {
        this.newFormFields = [
            {
                type: `${this.usernameAlias}`,
                required: true,
                handleInputChange: this.handleFormFieldInputChange(`${this.usernameAlias}`),
                value: this.userInput,
                disabled: this.userInput ? true : false,
            },
            {
                type: 'code',
                label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_CODE_LABEL),
                placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_CODE_PLACEHOLDER),
                required: true,
                hint: (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_LOST_CODE), ' ', Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: () => this.resendConfirmCode() }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_RESEND_CODE)))),
                handleInputChange: this.handleFormFieldInputChange('code'),
            },
        ];
    }
    buildFormFields() {
        if (this.formFields.length === 0) {
            this.buildDefaultFormFields();
        }
        else {
            const newFields = [];
            this.formFields.forEach(field => {
                const newField = Object.assign({}, field);
                if (newField.type === 'code') {
                    newField['hint'] = Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["i"])(newField) ? (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_LOST_CODE), ' ', Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: () => this.resendConfirmCode() }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_RESEND_CODE)))) : (newField['hint']);
                }
                newField['handleInputChange'] = event => this.handleFormFieldInputWithCallback(event, field);
                newFields.push(newField);
            });
            this.newFormFields = newFields;
        }
    }
    handleFormFieldInputChange(fieldType) {
        switch (fieldType) {
            case 'username':
            case 'email':
                return event => (this.userInput = event.target.value);
            case 'phone_number':
                return event => Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["h"])(event, this.phoneNumber);
            case 'code':
                return event => (this.code = event.target.value);
            default:
                return;
        }
    }
    setFieldValue(field) {
        switch (field.type) {
            case 'username':
            case 'email':
                if (field.value === undefined) {
                    this.userInput = '';
                }
                else {
                    this.userInput = field.value;
                }
                break;
            case 'phone_number':
                if (field.dialCode) {
                    this.phoneNumber.countryDialCodeValue = field.dialCode;
                }
                this.phoneNumber.phoneNumberValue = field.value;
                break;
        }
    }
    handleFormFieldInputWithCallback(event, field) {
        const fnToCall = field['handleInputChange']
            ? field['handleInputChange']
            : (event, cb) => {
                cb(event);
            };
        const callback = this.handleFormFieldInputChange(field.type);
        fnToCall(event, callback.bind(this));
    }
    async resendConfirmCode() {
        if (event) {
            event.preventDefault();
        }
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].resendSignUp !== 'function') {
            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
        }
        try {
            if (!this.userInput)
                throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].EMPTY_USERNAME);
            this.userInput = this.userInput.trim();
            await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].resendSignUp(this.userInput);
            this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignUp);
        }
        catch (error) {
            Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
        }
    }
    // TODO: Add validation
    // TODO: Prefix
    async confirmSignUp(event) {
        if (event) {
            event.preventDefault();
        }
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignUp !== 'function') {
            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
        }
        this.loading = true;
        switch (this.usernameAlias) {
            case 'phone_number':
                try {
                    this.userInput = Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this.phoneNumber);
                }
                catch (error) {
                    Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
                }
        }
        try {
            if (!this.userInput)
                throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].EMPTY_USERNAME);
            this.userInput = this.userInput.trim();
            const confirmSignUpResult = await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignUp(this.userInput, this.code);
            if (!confirmSignUpResult) {
                throw new Error(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CONFIRM_SIGN_UP_FAILED));
            }
            if (this._signUpAttrs && this._signUpAttrs.password && this._signUpAttrs.password !== '') {
                // Auto sign in user if password is available from previous workflow
                await Object(_auth_helpers_99c6a1db_js__WEBPACK_IMPORTED_MODULE_7__["h"])(this.userInput, this._signUpAttrs.password, this.handleAuthStateChange);
            }
            else {
                this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn);
            }
        }
        catch (error) {
            Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
        }
        finally {
            this.loading = false;
        }
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText), handleSubmit: this.handleSubmit, loading: this.loading, secondaryFooterContent: Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn) }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].BACK_TO_SIGN_IN)))) }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", { formFields: this.newFormFields }))));
    }
    static get watchers() { return {
        "formFields": ["formFieldsHandler"],
        "user": ["userHandler"]
    }; }
};

const logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('ForgotPassword');
const AmplifyForgotPassword = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The header text of the forgot password section */
        this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].RESET_YOUR_PASSWORD;
        /** The text displayed inside of the send code button for the form */
        this.sendButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SEND_CODE;
        /** The text displayed inside of the submit button for the form */
        this.submitButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SUBMIT;
        /** The form fields displayed inside of the forgot password form */
        this.formFields = [];
        /** The function called when making a request to reset password */
        this.handleSend = event => this.send(event);
        /** The function called when submitting a new password */
        this.handleSubmit = event => this.submit(event);
        /** Auth state change handler for this component */
        this.handleAuthStateChange = _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = 'username';
        this.delivery = null;
        this.loading = false;
        this.phoneNumber = {
            countryDialCodeValue: _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["h"],
            phoneNumberValue: null,
        };
        this.newFormFields = [];
        this.forgotPasswordAttrs = {
            userInput: '',
            password: '',
            code: '',
        };
    }
    componentWillLoad() {
        Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.usernameAlias);
        this.buildFormFields();
    }
    formFieldsHandler() {
        this.buildFormFields();
    }
    buildFormFields() {
        if (this.formFields.length === 0) {
            this.buildDefaultFormFields();
        }
        else {
            this.formFields.forEach(field => {
                const newField = Object.assign({}, field);
                newField['handleInputChange'] = event => this.handleFormFieldInputWithCallback(event, field);
                this.newFormFields.push(newField);
            });
        }
    }
    buildDefaultFormFields() {
        switch (this.usernameAlias) {
            case 'email':
                this.newFormFields = [
                    {
                        type: 'email',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('email'),
                        inputProps: {
                            'data-test': 'forgot-password-email-input',
                        },
                    },
                ];
                break;
            case 'phone_number':
                this.newFormFields = [
                    {
                        type: 'phone_number',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('phone_number'),
                        inputProps: {
                            'data-test': 'forgot-password-phone-number-input',
                        },
                    },
                ];
                break;
            case 'username':
            default:
                this.newFormFields = [
                    {
                        type: 'username',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('username'),
                        inputProps: {
                            'data-test': 'forgot-password-username-input',
                        },
                    },
                ];
                break;
        }
    }
    handleFormFieldInputChange(fieldType) {
        switch (fieldType) {
            case 'username':
            case 'email':
                return event => (this.forgotPasswordAttrs.userInput = event.target.value);
            case 'phone_number':
                return event => Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["h"])(event, this.phoneNumber);
            case 'password':
            case 'code':
                return event => (this.forgotPasswordAttrs[fieldType] = event.target.value);
            default:
                return;
        }
    }
    setFieldValue(field, formAttributes) {
        switch (field.type) {
            case 'username':
            case 'email':
                if (field.value === undefined) {
                    formAttributes.userInput = '';
                }
                else {
                    formAttributes.userInput = field.value;
                }
                break;
            case 'phone_number':
                if (field.dialCode) {
                    this.phoneNumber.countryDialCodeValue = field.dialCode;
                }
                this.phoneNumber.phoneNumberValue = field.value;
                break;
            case 'password':
            case 'code':
                if (field.value === undefined) {
                    formAttributes[field.type] = '';
                }
                else {
                    formAttributes[field.type] = field.value;
                }
                break;
        }
    }
    handleFormFieldInputWithCallback(event, field) {
        const fnToCall = field['handleInputChange']
            ? field['handleInputChange']
            : (event, cb) => {
                cb(event);
            };
        const callback = this.handleFormFieldInputChange(field.type);
        fnToCall(event, callback.bind(this));
    }
    async send(event) {
        if (event) {
            event.preventDefault();
        }
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPassword !== 'function') {
            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
        }
        this.loading = true;
        switch (this.usernameAlias) {
            case 'phone_number':
                try {
                    this.forgotPasswordAttrs.userInput = Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this.phoneNumber);
                }
                catch (error) {
                    Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
                }
                break;
        }
        try {
            const data = await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPassword(this.forgotPasswordAttrs.userInput.trim());
            logger.debug(data);
            this.newFormFields = [
                {
                    type: 'code',
                    required: true,
                    handleInputChange: this.handleFormFieldInputChange('code'),
                    inputProps: {
                        'data-test': 'forgot-password-code-input',
                    },
                },
                {
                    type: 'password',
                    required: true,
                    handleInputChange: this.handleFormFieldInputChange('password'),
                    label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].NEW_PASSWORD_LABEL),
                    placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].NEW_PASSWORD_PLACEHOLDER),
                },
            ];
            this.delivery = data.CodeDeliveryDetails;
        }
        catch (error) {
            Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
        }
        finally {
            this.loading = false;
        }
    }
    async submit(event) {
        if (event) {
            event.preventDefault();
        }
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPasswordSubmit !== 'function') {
            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
        }
        this.loading = true;
        try {
            const { userInput, code, password } = this.forgotPasswordAttrs;
            const data = await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].forgotPasswordSubmit(userInput, code, password);
            logger.debug(data);
            this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn);
            this.delivery = null;
        }
        catch (error) {
            Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
        }
        finally {
            this.loading = false;
        }
    }
    render() {
        const submitFn = this.delivery ? event => this.handleSubmit(event) : event => this.handleSend(event);
        const submitButtonText = this.delivery ? this.submitButtonText : this.sendButtonText;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), handleSubmit: submitFn, loading: this.loading, secondaryFooterContent: Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn), "data-test": "forgot-password-back-to-sign-in-link" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].BACK_TO_SIGN_IN)), testDataPrefix: 'forgot-password', submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(submitButtonText) }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", { formFields: this.newFormFields }))));
    }
    static get watchers() { return {
        "formFields": ["formFieldsHandler"]
    }; }
};

const logger$1 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-require-new-password');
const AmplifyRequireNewPassword = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The header text of the forgot password section */
        this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CHANGE_PASSWORD;
        /** The text displayed inside of the submit button for the form */
        this.submitButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CHANGE_PASSWORD_ACTION;
        /** The function called when submitting a new password */
        this.handleSubmit = event => this.completeNewPassword(event);
        /** Auth state change handler for this component */
        this.handleAuthStateChange = _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /** The form fields displayed inside of the forgot password form */
        this.formFields = [
            {
                type: _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["a"].Password,
                required: true,
                handleInputChange: event => this.handlePasswordChange(event),
                label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].NEW_PASSWORD_LABEL),
                placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].NEW_PASSWORD_PLACEHOLDER),
                inputProps: {
                    'data-test': 'require-new-password-password-input',
                },
            },
        ];
        this.loading = false;
        this.requiredAttributes = {};
        this.newFormFields = this.formFields;
    }
    userHandler() {
        this.setCurrentUser();
    }
    handleRequiredAttributeInputChange(attribute, event) {
        this.requiredAttributes[attribute] = event.target.value;
    }
    async setCurrentUser() {
        if (!this.user) {
            // Check for authenticated user
            try {
                const user = await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser();
                if (user)
                    this.currentUser = user;
            }
            catch (error) {
                Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
            }
        }
        else {
            this.currentUser = this.user;
        }
        if (this.currentUser && this.currentUser.challengeParam && this.currentUser.challengeParam.requiredAttributes) {
            const userRequiredAttributes = this.currentUser.challengeParam.requiredAttributes;
            const requiredAttributesMap = Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["g"])();
            userRequiredAttributes.forEach((attribute) => {
                const formField = {
                    type: attribute,
                    required: true,
                    label: requiredAttributesMap[attribute].label,
                    placeholder: requiredAttributesMap[attribute].placeholder,
                    handleInputChange: event => this.handleRequiredAttributeInputChange(attribute, event),
                    inputProps: {
                        'data-test': `require-new-password-${attribute}-input`,
                    },
                };
                this.newFormFields = [...this.newFormFields, formField];
            });
        }
    }
    componentWillLoad() {
        return this.setCurrentUser();
    }
    handlePasswordChange(event) {
        this.password = event.target.value;
    }
    async completeNewPassword(event) {
        if (event) {
            event.preventDefault();
        }
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].completeNewPassword !== 'function') {
            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
        }
        this.loading = true;
        try {
            const user = await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].completeNewPassword(this.currentUser, this.password, this.requiredAttributes);
            logger$1.debug('complete new password', user);
            switch (user.challengeName) {
                case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["C"].SMSMFA:
                    this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignIn, user);
                    break;
                case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["C"].MFASetup:
                    logger$1.debug('TOTP setup', user.challengeParam);
                    this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].TOTPSetup, user);
                    break;
                default:
                    await Object(_auth_helpers_99c6a1db_js__WEBPACK_IMPORTED_MODULE_7__["c"])(user, this.handleAuthStateChange);
            }
        }
        catch (error) {
            Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
        }
        finally {
            this.loading = false;
        }
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), handleSubmit: this.handleSubmit, loading: this.loading, secondaryFooterContent: Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn) }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].BACK_TO_SIGN_IN)), submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText) }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", { formFields: this.newFormFields }))));
    }
    static get watchers() { return {
        "user": ["userHandler"]
    }; }
};

const amplifySignInCss = ":host{--footer-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--footer-font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.sign-in-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-in-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-in-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-in-form-footer amplify-button{margin-bottom:0}}.sign-in-form-footer *+*{margin-bottom:15px}";

const AmplifySignIn = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Fires when sign in form is submitted */
        this.handleSubmit = event => this.signIn(event);
        /** Used for header text in sign in component */
        this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_HEADER_TEXT;
        /** Used for the submit button text in sign in component */
        this.submitButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_ACTION;
        /** Auth state change handler for this component */
        this.handleAuthStateChange = _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = 'username';
        /**
         * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
         * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
         * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
         * ```
         * [
         *  {
         *    type: string,
         *    label: string,
         *    placeholder: string,
         *    hint: string | Functional Component | null,
         *    required: boolean
         *  }
         * ]
         * ```
         */
        this.formFields = [];
        /** Hides the sign up link */
        this.hideSignUp = false;
        this.newFormFields = [];
        /* Whether or not the sign-in component is loading */
        this.loading = false;
        this.phoneNumber = {
            countryDialCodeValue: _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["h"],
            phoneNumberValue: null,
        };
        this.signInAttributes = {
            userInput: '',
            password: '',
        };
    }
    componentWillLoad() {
        Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.usernameAlias);
        this.buildFormFields();
    }
    formFieldsHandler() {
        this.buildFormFields();
    }
    handleFormFieldInputChange(fieldType) {
        switch (fieldType) {
            case 'username':
            case 'email':
                return event => (this.signInAttributes.userInput = event.target.value);
            case 'phone_number':
                return event => Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["h"])(event, this.phoneNumber);
            case 'password':
                return event => (this.signInAttributes.password = event.target.value);
        }
    }
    handleFormFieldInputWithCallback(event, field) {
        const fnToCall = field['handleInputChange']
            ? field['handleInputChange']
            : (event, cb) => {
                cb(event);
            };
        const callback = this.handleFormFieldInputChange(field.type);
        fnToCall(event, callback.bind(this));
    }
    async signIn(event) {
        // avoid submitting the form
        if (event) {
            event.preventDefault();
        }
        this.loading = true;
        switch (this.usernameAlias) {
            case 'phone_number':
                try {
                    this.signInAttributes.userInput = Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this.phoneNumber);
                }
                catch (error) {
                    Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
                }
        }
        const username = this.signInAttributes.userInput.trim();
        await Object(_auth_helpers_99c6a1db_js__WEBPACK_IMPORTED_MODULE_7__["h"])(username, this.signInAttributes.password, this.handleAuthStateChange);
        this.loading = false;
    }
    buildDefaultFormFields() {
        const formFieldInputs = [];
        switch (this.usernameAlias) {
            case 'email':
                formFieldInputs.push({
                    type: 'email',
                    required: true,
                    handleInputChange: this.handleFormFieldInputChange('email'),
                    inputProps: {
                        'data-test': 'sign-in-email-input',
                    },
                });
                break;
            case 'phone_number':
                formFieldInputs.push({
                    type: 'phone_number',
                    required: true,
                    handleInputChange: this.handleFormFieldInputChange('phone_number'),
                    inputProps: {
                        'data-test': 'sign-in-phone-number-input',
                    },
                });
                break;
            case 'username':
            default:
                formFieldInputs.push({
                    type: 'username',
                    required: true,
                    handleInputChange: this.handleFormFieldInputChange('username'),
                    inputProps: {
                        'data-test': 'sign-in-username-input',
                    },
                });
                break;
        }
        formFieldInputs.push({
            type: 'password',
            hint: (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].FORGOT_PASSWORD_TEXT), ' ', Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ForgotPassword), "data-test": "sign-in-forgot-password-link" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].RESET_PASSWORD_TEXT)))),
            required: true,
            handleInputChange: this.handleFormFieldInputChange('password'),
            inputProps: {
                'data-test': 'sign-in-password-input',
            },
        });
        this.newFormFields = [...formFieldInputs];
    }
    buildFormFields() {
        if (this.formFields.length === 0) {
            this.buildDefaultFormFields();
        }
        else {
            const newFields = [];
            this.formFields.forEach(field => {
                const newField = Object.assign({}, field);
                // TODO: handle hint better
                if (newField.type === 'password') {
                    newField['hint'] = Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["i"])(newField) ? (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].FORGOT_PASSWORD_TEXT), ' ', Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ForgotPassword), "data-test": "sign-in-forgot-password-link" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].RESET_PASSWORD_TEXT)))) : (newField['hint']);
                }
                newField['handleInputChange'] = event => this.handleFormFieldInputWithCallback(event, field);
                this.setFieldValue(newField, this.signInAttributes);
                newFields.push(newField);
            });
            this.newFormFields = newFields;
        }
    }
    setFieldValue(field, formAttributes) {
        switch (field.type) {
            case 'username':
            case 'email':
                if (field.value === undefined) {
                    formAttributes.userInput = '';
                }
                else {
                    formAttributes.userInput = field.value;
                }
                break;
            case 'phone_number':
                if (field.dialCode) {
                    this.phoneNumber.countryDialCodeValue = field.dialCode;
                }
                this.phoneNumber.phoneNumberValue = field.value;
                break;
            case 'password':
                if (field.value === undefined) {
                    formAttributes.password = '';
                }
                else {
                    formAttributes.password = field.value;
                }
                break;
        }
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), handleSubmit: this.handleSubmit, testDataPrefix: 'sign-in' }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { slot: "subtitle" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "header-subtitle" })), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "federated-buttons" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-federated-buttons", { handleAuthStateChange: this.handleAuthStateChange, federated: this.federated })), !Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(this.federated) && Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-strike", null, "or"), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", { formFields: this.newFormFields }), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { slot: "amplify-form-section-footer", class: "sign-in-form-footer" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "footer" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "secondary-footer-content" }, !this.hideSignUp ? (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].NO_ACCOUNT_TEXT), ' ', Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignUp), "data-test": "sign-in-create-account-link" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CREATE_ACCOUNT_TEXT)))) : (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null))), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "primary-footer-content" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { type: "submit", disabled: this.loading, "data-test": "sign-in-sign-in-button" }, this.loading ? Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-loading-spinner", null) : Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText)))))))));
    }
    static get watchers() { return {
        "formFields": ["formFieldsHandler"]
    }; }
};
AmplifySignIn.style = amplifySignInCss;

const amplifySignUpCss = ":host{--footer-font-family:var(--amplify-font-family);--footer-font-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--font-weight:var(--amplify-font-weight)}.sign-up-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-font-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-up-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-up-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-up-form-footer amplify-button{margin-bottom:0}}.sign-up-form-footer *+*{margin-bottom:15px}";

const AmplifySignUp = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Fires when sign up form is submitted */
        this.handleSubmit = event => this.signUp(event);
        /** Used for header text in sign up component */
        this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_HEADER_TEXT;
        /** Used for the submit button text in sign up component */
        this.submitButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_SUBMIT_BUTTON_TEXT;
        /** Used for the submit button text in sign up component */
        this.haveAccountText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_HAVE_ACCOUNT_TEXT;
        /** Text used for the sign in hyperlink */
        this.signInText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_TEXT;
        /**
         * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
         * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
         * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
         * ```
         * [
         *  {
         *    type: string,
         *    label: string,
         *    placeholder: string,
         *    hint: string | Functional Component | null,
         *    required: boolean
         *  }
         * ]
         * ```
         */
        this.formFields = [];
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = 'username';
        // private userInput: string | PhoneNumberInterface;
        this.newFormFields = [];
        this.phoneNumber = {
            countryDialCodeValue: _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["h"],
            phoneNumberValue: null,
        };
        this.loading = false;
        this.signUpAttributes = {
            username: '',
            password: '',
            attributes: {},
        };
    }
    handleFormFieldInputChange(fieldType) {
        switch (fieldType) {
            case 'username':
                return event => (this.signUpAttributes.username = event.target.value);
            case 'password':
                return event => (this.signUpAttributes.password = event.target.value);
            case 'email':
                return event => (this.signUpAttributes.attributes.email = event.target.value);
            case 'phone_number':
                return event => Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["h"])(event, this.phoneNumber);
            default:
                return event => (this.signUpAttributes.attributes[fieldType] = event.target.value);
        }
    }
    handleFormFieldInputWithCallback(event, field) {
        const fnToCall = field['handleInputChange']
            ? field['handleInputChange']
            : (event, cb) => {
                cb(event);
            };
        const callback = this.handleFormFieldInputChange(field.type);
        fnToCall(event, callback.bind(this));
    }
    // TODO: Add validation
    // TODO: Prefix
    async signUp(event) {
        if (event) {
            event.preventDefault();
        }
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].signUp !== 'function') {
            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
        }
        this.loading = true;
        if (this.phoneNumber.phoneNumberValue) {
            try {
                this.signUpAttributes.attributes.phone_number = Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this.phoneNumber);
            }
            catch (error) {
                Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
            }
        }
        switch (this.usernameAlias) {
            case 'email':
            case 'phone_number':
                this.signUpAttributes.username = this.signUpAttributes.attributes[this.usernameAlias];
                break;
        }
        try {
            if (!this.signUpAttributes.username) {
                throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].EMPTY_USERNAME);
            }
            if (this.signUpAttributes.username.indexOf(' ') >= 0) {
                throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].USERNAME_REMOVE_WHITESPACE);
            }
            if (this.signUpAttributes.password !== this.signUpAttributes.password.trim()) {
                throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].PASSWORD_REMOVE_WHITESPACE);
            }
            const data = await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].signUp(this.signUpAttributes);
            if (!data) {
                throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_FAILED);
            }
            if (data.userConfirmed) {
                await Object(_auth_helpers_99c6a1db_js__WEBPACK_IMPORTED_MODULE_7__["h"])(this.signUpAttributes.username, this.signUpAttributes.password, this.handleAuthStateChange);
            }
            else {
                const signUpAttrs = Object.assign({}, this.signUpAttributes);
                this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignUp, Object.assign(Object.assign({}, data.user), { signUpAttrs }));
            }
        }
        catch (error) {
            Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
        }
        finally {
            this.loading = false;
        }
    }
    buildDefaultFormFields() {
        switch (this.usernameAlias) {
            case 'email':
                this.newFormFields = [
                    {
                        type: 'email',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_EMAIL_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('email'),
                        inputProps: {
                            'data-test': 'sign-up-email-input',
                        },
                    },
                    {
                        type: 'password',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_PASSWORD_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('password'),
                        inputProps: {
                            'data-test': 'sign-up-password-input',
                        },
                    },
                    {
                        type: 'phone_number',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('phone_number'),
                        inputProps: {
                            'data-test': 'sign-up-phone-number-input',
                        },
                    },
                ];
                break;
            case 'phone_number':
                this.newFormFields = [
                    {
                        type: 'phone_number',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('phone_number'),
                        inputProps: {
                            'data-test': 'sign-up-phone-number-input',
                        },
                    },
                    {
                        type: 'password',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_PASSWORD_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('password'),
                        inputProps: {
                            'data-test': 'sign-up-password-input',
                        },
                    },
                    {
                        type: 'email',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_EMAIL_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('email'),
                        inputProps: {
                            'data-test': 'sign-up-email-input',
                        },
                    },
                ];
                break;
            case 'username':
            default:
                this.newFormFields = [
                    {
                        type: 'username',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_USERNAME_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('username'),
                        inputProps: {
                            'data-test': 'sign-up-username-input',
                        },
                    },
                    {
                        type: 'password',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_PASSWORD_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('password'),
                        inputProps: {
                            'data-test': 'sign-up-password-input',
                        },
                    },
                    {
                        type: 'email',
                        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_UP_EMAIL_PLACEHOLDER),
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('email'),
                        inputProps: {
                            'data-test': 'sign-up-email-input',
                        },
                    },
                    {
                        type: 'phone_number',
                        required: true,
                        handleInputChange: this.handleFormFieldInputChange('phone_number'),
                        inputProps: {
                            'data-test': 'sign-up-phone-number-input',
                        },
                    },
                ];
                break;
        }
    }
    buildFormFields() {
        if (this.formFields.length === 0) {
            this.buildDefaultFormFields();
        }
        else {
            const newFields = [];
            this.formFields.forEach(field => {
                const newField = Object.assign({}, field);
                newField['handleInputChange'] = event => this.handleFormFieldInputWithCallback(event, field);
                this.setFieldValue(field, this.signUpAttributes);
                newFields.push(newField);
            });
            this.newFormFields = newFields;
        }
    }
    setFieldValue(field, formAttributes) {
        switch (field.type) {
            case 'username':
                if (field.value === undefined) {
                    formAttributes.username = '';
                }
                else {
                    formAttributes.username = field.value;
                }
                break;
            case 'password':
                if (field.value === undefined) {
                    formAttributes.password = '';
                }
                else {
                    formAttributes.password = field.value;
                }
                break;
            case 'email':
                formAttributes.attributes.email = field.value;
                break;
            case 'phone_number':
                if (field.dialCode) {
                    this.phoneNumber.countryDialCodeValue = field.dialCode;
                }
                this.phoneNumber.phoneNumberValue = field.value;
                break;
            default:
                formAttributes.attributes[field.type] = field.value;
                break;
        }
    }
    componentWillLoad() {
        Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["c"])(this.usernameAlias);
        this.buildFormFields();
    }
    formFieldsHandler() {
        this.buildFormFields();
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerText), handleSubmit: this.handleSubmit, testDataPrefix: 'sign-up' }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { slot: "subtitle" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "header-subtitle" })), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-auth-fields", { formFields: this.newFormFields }), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "sign-up-form-footer", slot: "amplify-form-section-footer" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "footer" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "secondary-footer-content" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.haveAccountText), ' ', Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn), "data-test": "sign-up-sign-in-link" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.signInText)))), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "primary-footer-content" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { type: "submit", "data-test": "sign-up-create-account-button" }, this.loading ? Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-loading-spinner", null) : Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.submitButtonText)))))))));
    }
    static get watchers() { return {
        "formFields": ["formFieldsHandler"]
    }; }
};
AmplifySignUp.style = amplifySignUpCss;

const logger$2 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('AmplifyVerifyContact');
const AmplifyVerifyContact = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Authentication state handler */
        this.handleAuthStateChange = _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        this.loading = false;
    }
    handleSubmit(event) {
        event.preventDefault();
        this.verifyAttr ? this.submit(this.code) : this.verify(this.contact);
    }
    async submit(code) {
        const attr = this.verifyAttr;
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyCurrentUserAttributeSubmit !== 'function') {
            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
        }
        this.loading = true;
        try {
            const data = await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyCurrentUserAttributeSubmit(attr, code);
            logger$2.debug(data);
            this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, this.user);
            this.verifyAttr = null;
        }
        catch (error) {
            Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
            logger$2.error(error);
        }
        finally {
            this.loading = false;
        }
    }
    async verify(contact) {
        if (!contact) {
            logger$2.error('Neither Email nor Phone Number selected');
            return;
        }
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyCurrentUserAttribute !== 'function') {
            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
        }
        this.loading = true;
        try {
            const data = await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].verifyCurrentUserAttribute(contact);
            logger$2.debug(data);
            this.verifyAttr = contact;
        }
        catch (error) {
            Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
            logger$2.error(error);
        }
        finally {
            this.loading = false;
        }
    }
    handleInputChange(event) {
        const inputName = event.target.name;
        if (inputName === 'code') {
            this.code = event.target.value;
        }
        else if (inputName === 'contact') {
            this.contact = event.target.value;
        }
    }
    renderSubmit() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-input", { inputProps: {
                autocomplete: 'off',
                'data-test': 'verify-contact-code-input',
            }, name: "code", placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].CODE_PLACEHOLDER), handleInputChange: event => this.handleInputChange(event) })));
    }
    renderVerify() {
        const user = this.user;
        if (!user) {
            logger$2.debug('No user to verify');
            return null;
        }
        const { unverified } = user;
        if (!unverified) {
            logger$2.debug('Unverified variable does not exist on user');
            return null;
        }
        const { email, phone_number } = unverified;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, email && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-radio-button", { label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_EMAIL_LABEL), key: "email", name: "contact", value: "email", handleInputChange: event => this.handleInputChange(event), inputProps: {
                'data-test': 'verify-contact-email-radio',
            } })), phone_number && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-radio-button", { label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_PHONE_LABEL), key: "phone_number", name: "contact", value: "phone_number", handleInputChange: event => this.handleInputChange(event), inputProps: {
                'data-test': 'verify-contact-phone-number-radio',
            } }))));
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { handleSubmit: event => this.handleSubmit(event), headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_HEADER_TEXT), loading: this.loading, secondaryFooterContent: Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { variant: "anchor", onClick: () => this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, this.user), "data-test": "verify-contact-skip-link" }, "Skip")), submitButtonText: this.verifyAttr
                ? _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_SUBMIT_LABEL)
                : _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].VERIFY_CONTACT_VERIFY_LABEL) }, this.verifyAttr ? this.renderSubmit() : this.renderVerify())));
    }
};




/***/ })

}]);
//# sourceMappingURL=7.js.map