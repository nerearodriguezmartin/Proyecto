(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "TkC1":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-picker.entry.js ***!
  \**********************************************************************************/
/*! exports provided: amplify_picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_picker", function() { return AmplifyPicker; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "hKmi");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "GOuw");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "AO/9");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translations-c833f663.js */ "sPRy");





const amplifyPickerCss = ".picker{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}";

const AmplifyPicker = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Picker button text */
        this.pickerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].PICKER_TEXT;
        /** File input accept value */
        this.acceptValue = '*/*';
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "picker" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.pickerText))), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { title: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.pickerText), type: "file", accept: this.acceptValue, onChange: e => this.inputHandler(e) })));
    }
};
AmplifyPicker.style = amplifyPickerCss;




/***/ })

}]);
//# sourceMappingURL=18.js.map