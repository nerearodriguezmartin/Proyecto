(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "/MiJ":
/*!******************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-s3-text-picker.entry.js ***!
  \******************************************************************************************/
/*! exports provided: amplify_s3_text_picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_s3_text_picker", function() { return AmplifyS3TextPicker; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "hKmi");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-types-f257c0f2.js */ "H8iN");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "sPRy");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "/vcS");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-amplify/storage */ "l1VB");
/* harmony import */ var _storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage-helpers-48c373a0.js */ "Y0ez");









const logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('S3TextPicker');
const AmplifyS3TextPicker = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = 'text/*';
        /** The access level of the text file */
        this.level = _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_2__["A"].Public;
        /** Fallback content for aplify-s3-text */
        this.fallbackText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].PICKER_TEXT;
    }
    async handleInput(event) {
        const file = event.target.files[0];
        const { path = '', level, fileToKey, track } = this;
        const key = path + Object(_storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_7__["c"])(file, fileToKey);
        if (!file) {
            throw new Error('No file was selected');
        }
        try {
            await Object(_storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_7__["p"])(key, file, level, track, file['type'], logger);
            this.src = key;
        }
        catch (error) {
            logger.debug(error);
            throw new Error(error);
        }
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-s3-text", { textKey: this.src, path: this.path, level: this.level, track: this.track, identityId: this.identityId, contentType: this.contentType, fallbackText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.fallbackText) }), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-picker", { inputHandler: e => this.handleInput(e), acceptValue: 'text/*' })));
    }
};




/***/ })

}]);
//# sourceMappingURL=23.js.map