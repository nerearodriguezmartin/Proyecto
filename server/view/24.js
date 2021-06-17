(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "Kukj":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-s3-text.entry.js ***!
  \***********************************************************************************/
/*! exports provided: amplify_s3_text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_s3_text", function() { return AmplifyS3Text; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "hKmi");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-types-f257c0f2.js */ "H8iN");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "sPRy");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "/vcS");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-amplify/storage */ "l1VB");
/* harmony import */ var _storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage-helpers-48c373a0.js */ "Y0ez");









const amplifyS3TextCss = ":host{--container-color:var(--amplify-smoke-white);--border-color:var(--amplify-light-grey);--font-size:var(--amplify-text-md);--text-color:var(--amplify-secondary-color)}.text-container{background-color:var(--container-color);border:1px solid var(--border-color);border-radius:5px;margin-bottom:10px}pre{display:block;margin:0.5rem 0;padding:0.5rem;line-height:1rem;max-height:50rem;font-size:var(--font-size);color:var(--text-color);word-break:break-all;overflow-y:scroll;overflow-x:auto}";

const logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('S3Text');
const AmplifyS3Text = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = 'text/*';
        /** The access level of the text file */
        this.level = _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_2__["A"].Public;
        /** Fallback content */
        this.fallbackText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].TEXT_FALLBACK_CONTENT;
    }
    async watchHandler() {
        await this.load();
    }
    async componentWillLoad() {
        await this.load();
    }
    async load() {
        const { path, textKey, body, contentType, level, track, identityId } = this;
        if (!textKey && !path) {
            logger.debug('empty textKey and path');
            return;
        }
        const key = textKey || path;
        logger.debug('loading ' + key + '...');
        if (body) {
            await Object(_storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_7__["p"])(textKey, body, level, track, contentType, logger);
        }
        try {
            this.src = await Object(_storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_7__["a"])(key, level, track, identityId, logger);
        }
        catch (err) {
            logger.debug(err);
            throw new Error(err);
        }
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "text-container" }, this.src ? Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("pre", null, this.src) : Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("pre", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.fallbackText)))));
    }
    static get watchers() { return {
        "textKey": ["watchHandler"],
        "body": ["watchHandler"]
    }; }
};
AmplifyS3Text.style = amplifyS3TextCss;




/***/ })

}]);
//# sourceMappingURL=24.js.map