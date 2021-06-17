(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "Y0ez":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/storage-helpers-48c373a0.js ***!
  \**************************************************************************************/
/*! exports provided: a, c, g, i, p */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTextSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return calcKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getStorageObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return imageFileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return putStorageObject; });
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "/vcS");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/storage */ "l1VB");



const imageFileType = new Set([
    'apng',
    'bmp',
    'gif',
    'ico',
    'cur',
    'jpg',
    'jpeg',
    'jfif',
    'pjpeg',
    'pjp',
    'png',
    'svg',
    'tif',
    'tiff',
    'webp',
]);
const calcKey = (file, fileToKey) => {
    const { name, size, type } = file;
    let key = encodeURI(name);
    if (fileToKey) {
        if (typeof fileToKey === 'string') {
            key = fileToKey;
        }
        else if (typeof fileToKey === 'function') {
            key = fileToKey({ name, size, type });
        }
        else {
            key = encodeURI(JSON.stringify(fileToKey));
        }
        if (!key) {
            key = 'empty_key';
        }
    }
    return key.replace(/\s/g, '_');
};
const getStorageObject = async (key, level, track, identityId, logger) => {
    if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].get !== 'function') {
        throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_0__["e"]);
    }
    try {
        const src = await _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].get(key, { level, track, identityId });
        logger.debug('Storage image get', src);
        return src;
    }
    catch (error) {
        throw new Error(error);
    }
};
const readFileAsync = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = () => {
            reject('Failed to read file!');
            reader.abort();
        };
        reader.readAsText(blob);
    });
};
const getTextSource = async (key, level, track, identityId, logger) => {
    if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].get !== 'function') {
        throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_0__["e"]);
    }
    try {
        const textSrc = await _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].get(key, {
            download: true,
            level,
            track,
            identityId,
        });
        logger.debug(textSrc);
        const text = (await readFileAsync(textSrc['Body']));
        return text;
    }
    catch (error) {
        throw new Error(error);
    }
};
const putStorageObject = async (key, body, level, track, contentType, logger) => {
    if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].put !== 'function') {
        throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_0__["e"]);
    }
    try {
        const data = await _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].put(key, body, {
            contentType,
            level,
            track,
        });
        logger.debug('Upload data', data);
    }
    catch (error) {
        throw new Error(error);
    }
};




/***/ }),

/***/ "gUIQ":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/auth-helpers-99c6a1db.js ***!
  \***********************************************************************************/
/*! exports provided: c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return handleSignIn; });
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "s1tr");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translations-c833f663.js */ "sPRy");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "/vcS");
/* harmony import */ var _helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers-4afef5ab.js */ "eGR6");







const logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["Logger"]('auth-helpers');
async function checkContact(user, handleAuthStateChange) {
    if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].verifiedContact !== 'function') {
        throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__["N"]);
    }
    // If `user` is a federated user, we shouldn't call `verifiedContact`
    // since `user` isn't `CognitoUser`
    if (!isCognitoUser(user)) {
        handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].SignedIn, user);
        return;
    }
    try {
        const data = await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].verifiedContact(user);
        if (!Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(data.verified) || Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(data.unverified)) {
            handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].SignedIn, user);
        }
        else {
            const newUser = Object.assign(user, data);
            handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].VerifyContact, newUser);
        }
    }
    catch (error) {
        Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_5__["a"])(error);
    }
}
const handleSignIn = async (username, password, handleAuthStateChange) => {
    if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].signIn !== 'function') {
        throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__["N"]);
    }
    try {
        const user = await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].signIn(username, password);
        logger.debug(user);
        if (user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].SMSMFA || user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].SoftwareTokenMFA) {
            logger.debug('confirm user with ' + user.challengeName);
            handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].ConfirmSignIn, user);
        }
        else if (user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].NewPasswordRequired) {
            logger.debug('require new password', user.challengeParam);
            handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].ResetPassword, user);
        }
        else if (user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].MFASetup) {
            logger.debug('TOTP setup', user.challengeParam);
            handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].TOTPSetup, user);
        }
        else if (user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["C"].CustomChallenge &&
            user.challengeParam &&
            user.challengeParam.trigger === 'true') {
            logger.debug('custom challenge', user.challengeParam);
            handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].CustomConfirmSignIn, user);
        }
        else {
            await checkContact(user, handleAuthStateChange);
        }
    }
    catch (error) {
        if (error.code === 'UserNotConfirmedException') {
            logger.debug('the user is not confirmed');
            handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].ConfirmSignUp, { username });
        }
        else if (error.code === 'PasswordResetRequiredException') {
            logger.debug('the user requires a new password');
            handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__["A"].ForgotPassword, { username });
        }
        else if (error.code === 'InvalidParameterException' && password === '') {
            logger.debug('Password cannot be empty');
            error.message = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].EMPTY_PASSWORD;
        }
        Object(_helpers_4afef5ab_js__WEBPACK_IMPORTED_MODULE_5__["a"])(error);
    }
};
const isCognitoUser = (user) => {
    return user instanceof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["CognitoUser"];
};




/***/ })

}]);
//# sourceMappingURL=common.js.map