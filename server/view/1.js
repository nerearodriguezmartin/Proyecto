(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "pptk":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-amazon-button_5.entry.js ***!
  \*******************************************************************************************/
/*! exports provided: amplify_amazon_button, amplify_auth0_button, amplify_facebook_button, amplify_google_button, amplify_oauth_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_amazon_button", function() { return AmplifyAmazonButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_auth0_button", function() { return AmplifyAuth0Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_facebook_button", function() { return AmplifyFacebookButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_google_button", function() { return AmplifyGoogleButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_oauth_button", function() { return AmplifyOAuthButton; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "hKmi");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "s1tr");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "sPRy");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "/vcS");
/* harmony import */ var _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-4afef5ab.js */ "eGR6");








const logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-amazon-button');
const AmplifyAmazonButton = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        this.federatedSignIn = response => {
            const { access_token, expires_in } = response;
            if (!access_token) {
                return;
            }
            if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn !== 'function' || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser !== 'function') {
                throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
            }
            const date = new Date();
            const expires_at = expires_in * 1000 + date.getTime();
            window['amazon'].Login.retrieveProfile(async (userInfo) => {
                if (!userInfo.success) {
                    return logger.debug('Get user Info failed');
                }
                const user = {
                    name: userInfo.profile.Name,
                    email: userInfo.profile.PrimaryEmail,
                };
                await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn('amazon', { token: access_token, expires_at }, user);
                const authenticatedUser = await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser();
                this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, authenticatedUser);
            });
        };
    }
    /**
     * @see https://developer.amazon.com/docs/login-with-amazon/install-sdk-javascript.html
     */
    signInWithAmazon(event) {
        event.preventDefault();
        window['amazon'].Login.setClientId(this.clientId);
        window['amazon'].Login.authorize({ scope: 'profile' }, response => {
            if (response.error) {
                return logger.debug('Failed to login with amazon: ' + response.error);
            }
            try {
                window.localStorage.setItem(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["j"], JSON.stringify({ provider: 'amazon' }));
            }
            catch (e) {
                logger.debug('Failed to cache auth source into localStorage', e);
            }
            this.federatedSignIn(response);
        });
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in-button", { onClick: event => this.signInWithAmazon(event), provider: "amazon" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("script", { src: "https://assets.loginwithamazon.com/sdk/na/login1.js" }), _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_WITH_AMAZON)));
    }
};

const logger$1 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-auth0-button');
const AmplifyAuth0Button = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Auth state change handler for this component */
        this.handleAuthStateChange = _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        this.handleLoad = () => {
            // @ts-ignore Property 'auth0' does not exist on type '{}'.
            const { oauth = {} } = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].configure();
            // @ts-ignore Property 'auth0' does not exist on type '{}'.
            const { config = oauth.auth0 } = this;
            if (!config) {
                logger$1.debug('Auth0 is not configured');
                return;
            }
            logger$1.debug('auth0 configuration', config);
            if (!this._auth0) {
                this._auth0 = new window['auth0'].WebAuth(config);
            }
            this._auth0.parseHash((err, authResult) => {
                if (err) {
                    logger$1.debug('Failed to parse the url for Auth0', err);
                    return;
                }
                if (!authResult) {
                    logger$1.debug('Auth0 found no authResult in hash');
                    return;
                }
                const payload = {
                    provider: 'auth0',
                    opts: {
                        returnTo: config.returnTo,
                        clientID: config.clientID,
                        federated: config.federated,
                    },
                };
                try {
                    localStorage.setItem(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["j"], JSON.stringify(payload));
                }
                catch (e) {
                    logger$1.debug('Failed to cache auth source into localStorage', e);
                }
                this._auth0.client.userInfo(authResult.accessToken, async (err, user) => {
                    let username = undefined;
                    let email = undefined;
                    if (err) {
                        logger$1.debug('Failed to get the user info', err);
                    }
                    else {
                        username = user.name;
                        email = user.email;
                    }
                    await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn(config.domain, {
                        token: authResult.idToken,
                        expires_at: authResult.expiresIn * 1000 + new Date().getTime(),
                    }, { name: username, email });
                    const authenticatedUser = await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser();
                    this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, authenticatedUser);
                });
            });
        };
    }
    signInWithAuth0(event) {
        event.preventDefault();
        if (!this._auth0) {
            throw new Error('the auth0 client is not configured');
        }
        this._auth0.authorize();
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in-button", { onClick: event => this.signInWithAuth0(event), provider: "auth0" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("script", { onLoad: this.handleLoad, src: "https://cdn.auth0.com/js/auth0/9.11/auth0.min.js" }), _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_WITH_AUTH0)));
    }
};

const logger$2 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-facebook-button');
const AmplifyFacebookButton = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        this.federatedSignIn = authResponse => {
            const { accessToken, expiresIn } = authResponse;
            if (!accessToken) {
                return;
            }
            if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn !== 'function' || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser !== 'function') {
                throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
            }
            const date = new Date();
            const expires_at = expiresIn * 1000 + date.getTime();
            const fields = 'name,email';
            window['FB'].api('/me', { fields }, async (response) => {
                const user = {
                    name: response.name,
                    email: response.email,
                };
                await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn('facebook', { token: accessToken, expires_at }, user);
                const authenticatedUser = await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser();
                this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, authenticatedUser);
            });
        };
        this.getLoginStatus = () => {
            window['FB'].getLoginStatus(response => {
                try {
                    window.localStorage.setItem(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["j"], JSON.stringify({ provider: 'facebook' }));
                }
                catch (e) {
                    logger$2.debug('Failed to cache auth source into localStorage', e);
                }
                if (response.status === 'connected') {
                    return this.federatedSignIn(response.authResponse);
                }
                this.login();
            });
        };
        this.login = () => {
            const scope = 'public_profile,email';
            window['FB'].login(response => {
                if (response && response.authResponse) {
                    this.federatedSignIn(response.authResponse);
                }
            }, { scope });
        };
    }
    /**
     * @see https://developers.facebook.com/docs/javascript/reference/FB.init/v5.0
     */
    signInWithFacebook(event) {
        event.preventDefault();
        window['FB'].init({
            appId: this.appId,
            cookie: true,
            xfbml: false,
            version: 'v5.0',
        });
        this.getLoginStatus();
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in-button", { onClick: event => this.signInWithFacebook(event), provider: "facebook" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("script", { async: true, defer: true, src: "https://connect.facebook.net/en_US/sdk.js" }), _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_WITH_FACEBOOK)));
    }
};

const logger$3 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-google-button');
const AmplifyGoogleButton = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        this.handleError = error => {
            console.error(error);
        };
        /**
         * @see https://developers.google.com/identity/sign-in/web/build-button#building_a_button_with_a_custom_graphic
         */
        this.handleLoad = () => {
            window['gapi'].load('auth2');
        };
        this.handleUser = async (user) => {
            if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn !== 'function' || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser !== 'function') {
                throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
            }
            try {
                window.localStorage.setItem(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["j"], JSON.stringify({ provider: 'google' }));
            }
            catch (e) {
                logger$3.debug('Failed to cache auth source into localStorage', e);
            }
            const { id_token, expires_at } = user.getAuthResponse();
            const profile = user.getBasicProfile();
            await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn('google', { token: id_token, expires_at }, {
                email: profile.getEmail(),
                name: profile.getName(),
                picture: profile.getImageUrl(),
            });
            const authenticatedUser = await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser();
            try {
                this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, authenticatedUser);
            }
            catch (error) {
                this.handleError(error);
            }
        };
    }
    getAuthInstance() {
        if (window['gapi'] && window['gapi'].auth2) {
            return (window['gapi'].auth2.getAuthInstance() ||
                window['gapi'].auth2.init({
                    client_id: this.clientId,
                    cookiepolicy: 'single_host_origin',
                    scope: 'profile email openid',
                }));
        }
        return null;
    }
    signInWithGoogle(event) {
        event.preventDefault();
        this.getAuthInstance()
            .signIn()
            .then(this.handleUser)
            .catch(this.handleError);
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in-button", { onClick: event => this.signInWithGoogle(event), provider: "google" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("script", { onLoad: this.handleLoad, src: "https://apis.google.com/js/api:client.js" }), _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_WITH_GOOGLE)));
    }
};

const AmplifyOAuthButton = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Federated credentials & configuration. */
        this.config = {};
    }
    signInWithOAuth(event) {
        event.preventDefault();
        _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn();
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in-button", { onClick: event => this.signInWithOAuth(event), provider: "oauth" }, this.config.label || _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_IN_WITH_AWS)));
    }
};




/***/ })

}]);
//# sourceMappingURL=1.js.map