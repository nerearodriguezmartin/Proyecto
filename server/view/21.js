(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "V0P2":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-s3-image-picker.entry.js ***!
  \*******************************************************************************************/
/*! exports provided: amplify_s3_image_picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_s3_image_picker", function() { return AmplifyS3ImagePicker; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "hKmi");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-types-f257c0f2.js */ "H8iN");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "sPRy");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "/vcS");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-amplify/storage */ "l1VB");
/* harmony import */ var _storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage-helpers-48c373a0.js */ "Y0ez");









const logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('S3ImagePicker');
const AmplifyS3ImagePicker = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = 'binary/octet-stream';
        /** The access level of the image */
        this.level = _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_2__["A"].Public;
        /** Title string value */
        this.headerTitle = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].IMAGE_PICKER_TITLE;
        /** Header Hint value in string */
        this.headerHint = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].IMAGE_PICKER_HINT;
        /** Placeholder hint that goes under the placeholder image */
        this.placeholderHint = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].IMAGE_PICKER_PLACEHOLDER_HINT;
        /** Upload Button Text as string */
        this.buttonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].IMAGE_PICKER_BUTTON_TEXT;
        this.handlePick = async (file) => {
            const { path = '', level, track, identityId, fileToKey } = this;
            const key = path + Object(_storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_7__["c"])(file, fileToKey);
            try {
                await Object(_storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_7__["p"])(key, file, level, track, file['type'], logger);
                this.src = await Object(_storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_7__["g"])(key, level, track, identityId, logger);
            }
            catch (error) {
                logger.error(error);
                throw new Error(error);
            }
        };
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "photo-picker" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-photo-picker", { previewSrc: this.src, handleClick: this.handlePick, headerTitle: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerTitle), headerHint: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.headerHint), placeholderHint: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.placeholderHint), buttonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.buttonText) }))));
    }
};




/***/ })

}]);
//# sourceMappingURL=21.js.map