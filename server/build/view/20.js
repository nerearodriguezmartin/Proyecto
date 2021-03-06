(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "GV60":
/*!************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-s3-album.entry.js ***!
  \************************************************************************************/
/*! exports provided: amplify_s3_album */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_s3_album", function() { return AmplifyS3Album; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "hKmi");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-types-f257c0f2.js */ "H8iN");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "sPRy");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "/vcS");
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-amplify/storage */ "l1VB");
/* harmony import */ var _storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage-helpers-48c373a0.js */ "Y0ez");









// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

const REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

const amplifyS3AlbumCss = ":host{--overlay-bg-color:rgba(0, 0, 0, 0.15)}.album-container{-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;margin:0 auto;padding:0 2rem}.grid-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-1rem -1rem;padding-bottom:3rem}.grid-item{position:relative;-ms-flex:1 0 22rem;flex:1 0 22rem;-ms-flex-positive:1;flex-grow:1;margin:1rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}amplify-s3-image{--width:22rem;--height:20rem;border-radius:5px;-o-object-fit:cover;object-fit:cover}.img-overlay{display:none;width:100%;height:21rem;position:absolute;top:0;left:0;background-color:var(--overlay-bg-color)}.grid-item:hover .img-overlay{display:block}";

const logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('S3Album');
const AmplifyS3Album = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = 'binary/octet-stream';
        /** The access level of the files */
        this.level = _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_2__["A"].Public;
        /** Boolean to enable or disable picker */
        this.picker = true;
        /** Picker button text */
        this.pickerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].PICKER_TEXT;
        this.albumItems = [];
        this.imgArr = {};
        this.list = async () => {
            const { path = '', level, track, identityId } = this;
            logger.debug('Album path: ' + path);
            if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"].list !== 'function') {
                throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["e"]);
            }
            try {
                const data = await _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"].list(path, {
                    level,
                    track,
                    identityId,
                });
                this.marshal(data);
            }
            catch (error) {
                logger.warn(error);
            }
        };
        this.marshal = (list) => {
            list.forEach((item) => {
                const name = item.key.toLowerCase();
                const ext = name.split('.')[1];
                if (_storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_7__["i"].has(ext)) {
                    if (!item.contentType || (item.contentType && item.contentType === 'binary/octet-stream')) {
                        item.contentType = this.getContentType(item);
                    }
                }
            });
            const filtered = list.filter((item) => item.contentType && item.contentType.startsWith('image/'));
            let items = this.filter ? this.filter(filtered) : filtered;
            items = this.sort ? this.sort(items) : items;
            this.albumItems = items;
            logger.debug('album items', this.albumItems);
            this.constructImgArray(this.albumItems);
        };
        this.constructImgArray = (list) => {
            list.map(item => {
                this.imgArr[`${item['key']}`] = item['key'];
            });
        };
        this.handlePick = async (event) => {
            const file = event.target.files[0];
            const { path = '', level, track, fileToKey } = this;
            const key = path + Object(_storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_7__["c"])(file, fileToKey);
            try {
                await Object(_storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_7__["p"])(key, file, level, track, file['type'], logger);
            }
            catch (error) {
                logger.error(error);
                throw new Error(error);
            }
            if (Object.keys(this.imgArr).includes(key)) {
                this.albumItems = [...this.albumItems];
                this.imgArr[key] = `${key}-${v4()}`;
            }
            else {
                const filtered = [...this.albumItems, ...(this.filter ? this.filter([{ key }]) : [{ key }])];
                this.albumItems = this.sort ? this.sort(filtered) : filtered;
            }
        };
    }
    getContentType(item) {
        return Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["filenameToContentType"])(item.key, 'image/*');
    }
    componentWillLoad() {
        this.list();
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "album-container" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "grid-row" }, this.albumItems.map(item => {
            return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "grid-item", key: `key-${item.key}` }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-s3-image", { key: this.imgArr[item.key], imgKey: item.key, level: this.level, path: this.path, identityId: this.identityId, track: this.track, handleOnError: this.handleOnError, handleOnLoad: this.handleOnLoad }), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "img-overlay" })));
        }))), this.picker && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-picker", { pickerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.pickerText), inputHandler: e => this.handlePick(e), acceptValue: "image/*" }))));
    }
};
AmplifyS3Album.style = amplifyS3AlbumCss;




/***/ })

}]);
//# sourceMappingURL=20.js.map