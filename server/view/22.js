(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "mwoW":
/*!************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-s3-image.entry.js ***!
  \************************************************************************************/
/*! exports provided: amplify_s3_image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_s3_image", function() { return AmplifyS3Image; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "hKmi");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-types-f257c0f2.js */ "H8iN");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "/vcS");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-amplify/storage */ "l1VB");
/* harmony import */ var _storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage-helpers-48c373a0.js */ "Y0ez");







const amplifyS3ImageCss = ":host{height:inherit;width:inherit;--height:inherit;--width:inherit}img{height:var(--height);width:var(--width)}";

const logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('S3Image');
const AmplifyS3Image = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = 'binary/octet-stream';
        /** The access level of the image */
        this.level = _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_2__["A"].Public;
    }
    async watchHandler() {
        await this.load();
    }
    async componentWillLoad() {
        await this.load();
    }
    async load() {
        const { imgKey, path, body, contentType, level, track, identityId } = this;
        if (!imgKey && !path) {
            logger.debug('empty imgKey and path');
            return;
        }
        const key = imgKey || path;
        logger.debug('loading ' + key + '...');
        try {
            if (body) {
                await Object(_storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_5__["p"])(imgKey, body, level, track, contentType, logger);
            }
            this.src = await Object(_storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_5__["g"])(key, level, track, identityId, logger);
        }
        catch (err) {
            logger.debug(err);
            throw new Error(err);
        }
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, this.src && Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.src, onLoad: this.handleOnLoad, onError: this.handleOnError })));
    }
    static get watchers() { return {
        "body": ["watchHandler"]
    }; }
};
AmplifyS3Image.style = amplifyS3ImageCss;




/***/ })

}]);
//# sourceMappingURL=22.js.map