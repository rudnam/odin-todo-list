/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Matter-Regular.otf */ "./src/fonts/Matter-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Matter-Bold.otf */ "./src/fonts/Matter-Bold.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* style.css */\n@font-face {\n    font-family: Matter;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  }\n\n@font-face {\n    font-family: Matter;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    font-weight: bold;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --white: #fff;\n    --black: #1f2028;\n    --blue: #36a3ff;\n    --light: #a9adc1;\n    --grey: #2e3039;\n    --light-sub: #7a7c85;\n    --red: #ff4545;\n    --yellow: #ffd644;\n    --transparent: #2e303941;\n    --default-width: min(800px,100%);\n\n    font-family: \"Matter\",sans-serif;\n    font-size: 16px;\n    overflow-x: hidden;\n}\n\nbody {\n    margin: 0 auto;\n    display: flex;\n    align-items: stretch;\n    flex-direction: column;\n    min-height: 100vh;\n    background-color: var(--black);\n    color: var(--light);\n}\n\nheader {\n    font-weight: bold;\n    font-size: 1.5rem;\n    color: var(--blue);\n    padding: 10px;\n    padding-left: 50px;\n    border: 1px solid var(--grey);\n}\n\n.header {\n    margin: auto;\n}\n\n#content {\n    padding: 20px 50px;\n    min-height: 100%;\n}\n\n#title {\n    font-size: 1.2rem;\n}\n\n#container {\n    margin-top: 10px;\n    padding: 10px 0px 20px;\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 250px;\n    align-items: flex-start;\n    gap: 15px;\n    overflow-x: auto;\n}\n\n#add-list:hover {\n    background-color: var(--grey);\n    cursor: pointer;\n}\n\n#add-list-label {\n    text-align: center;\n}\n\n#add-list-input, .add-todo-input {\n    padding: inherit;\n    color: inherit;\n    font-family: inherit;\n    font-size: 1rem;\n    background: none;\n    border: none;\n}\n\n#add-list-input:focus, .add-todo-input:focus {\n    border: none;\n    outline: none;\n}\n\n.list {\n    border: 1px solid var(--grey);\n    border-radius: 7px;\n    padding: 10px;\n    background-color: var(--transparent)\n}\n\n.list-header {\n    display: flex;\n}\n\n.list-title {\n    font-size: 1.1rem;\n    padding: 10px;\n}\n\n.list *:focus {\n    outline: none;\n}\n\n.todo {\n    padding: 10px;\n    border-radius: 5px;\n    display: flex;\n}\n\n.todo-body {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n}\n\n.todo-edit-body {\n    width: calc(100% - 60px);\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    gap: 5px;\n}\n\n.todo-edit-title {\n    margin: none;\n    color: inherit;\n    font-family: inherit;\n    font-size: 1rem;\n    background: none;\n    border: none;\n}\n\n.todo-desc {\n    font-size: 0.8rem;\n    color: var(--light-sub);\n    white-space: normal;\n    word-wrap: break-word;\n}\n\n.todo-edit-desc {\n    color: var(--light);\n    font-family: inherit;\n    font-size: 0.8rem;\n    background: none;\n    border: none;\n    height: 80px;\n    outline: none;\n    box-shadow: none;\n    resize: none;\n}\n\n.hide-overflow {\n    overflow-wrap: anywhere;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n}\n\n.todo-mark, .todo-close, .list-options, .add-todo-mark {\n    margin: auto 0;\n    height: 100%;\n    aspect-ratio: 1 / 1;\n}\n\n.list-options {\n    margin-left: auto;\n    cursor: pointer;\n}\n\n.todo-close {\n    margin-left: auto;\n}\n\n.add-todo {\n    padding: 10px 10px 10px 7.5px;\n    display: flex;\n}\n\n.add-todo-label {\n    padding: 10px;\n}\n\n.add-todo-form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.add-todo-area {\n    color: inherit;\n    font-family: inherit;\n    background: none;\n    border: none;\n    overflow: auto;\n    outline: none;\n    box-shadow: none;\n    resize: none;\n}\n\n.todo:hover:not(:focus) {\n    background-color: var(--grey);\n    cursor: pointer;\n}\n\n\n#clear {\n    align-self: center;\n}\n\nfooter {\n    text-align: center;\n    margin-top: auto;\n    padding: 10px;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\na:hover {\n    text-decoration: underline;\n}\n\nul {\n    list-style-type: none;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA,cAAc;AACd;IACI,mBAAmB;IACnB,4CAAqC;EACvC;;AAEF;IACI,mBAAmB;IACnB,4CAAkC;IAClC,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,eAAe;IACf,oBAAoB;IACpB,cAAc;IACd,iBAAiB;IACjB,wBAAwB;IACxB,gCAAgC;;IAEhC,gCAAgC;IAChC,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,oBAAoB;IACpB,sBAAsB;IACtB,iBAAiB;IACjB,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,wBAAwB;IACxB,uBAAuB;IACvB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,6BAA6B;IAC7B,kBAAkB;IAClB,aAAa;IACb;AACJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;IACvB,gBAAgB;IAChB,oBAAoB;IACpB,qBAAqB;IACrB,4BAA4B;AAChC;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,6BAA6B;IAC7B,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,gBAAgB;IAChB,YAAY;IACZ,cAAc;IACd,aAAa;IACb,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,eAAe;AACnB;;;AAGA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["/* style.css */\n@font-face {\n    font-family: Matter;\n    src: url(../fonts/Matter-Regular.otf);\n  }\n\n@font-face {\n    font-family: Matter;\n    src: url(../fonts/Matter-Bold.otf);\n    font-weight: bold;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --white: #fff;\n    --black: #1f2028;\n    --blue: #36a3ff;\n    --light: #a9adc1;\n    --grey: #2e3039;\n    --light-sub: #7a7c85;\n    --red: #ff4545;\n    --yellow: #ffd644;\n    --transparent: #2e303941;\n    --default-width: min(800px,100%);\n\n    font-family: \"Matter\",sans-serif;\n    font-size: 16px;\n    overflow-x: hidden;\n}\n\nbody {\n    margin: 0 auto;\n    display: flex;\n    align-items: stretch;\n    flex-direction: column;\n    min-height: 100vh;\n    background-color: var(--black);\n    color: var(--light);\n}\n\nheader {\n    font-weight: bold;\n    font-size: 1.5rem;\n    color: var(--blue);\n    padding: 10px;\n    padding-left: 50px;\n    border: 1px solid var(--grey);\n}\n\n.header {\n    margin: auto;\n}\n\n#content {\n    padding: 20px 50px;\n    min-height: 100%;\n}\n\n#title {\n    font-size: 1.2rem;\n}\n\n#container {\n    margin-top: 10px;\n    padding: 10px 0px 20px;\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 250px;\n    align-items: flex-start;\n    gap: 15px;\n    overflow-x: auto;\n}\n\n#add-list:hover {\n    background-color: var(--grey);\n    cursor: pointer;\n}\n\n#add-list-label {\n    text-align: center;\n}\n\n#add-list-input, .add-todo-input {\n    padding: inherit;\n    color: inherit;\n    font-family: inherit;\n    font-size: 1rem;\n    background: none;\n    border: none;\n}\n\n#add-list-input:focus, .add-todo-input:focus {\n    border: none;\n    outline: none;\n}\n\n.list {\n    border: 1px solid var(--grey);\n    border-radius: 7px;\n    padding: 10px;\n    background-color: var(--transparent)\n}\n\n.list-header {\n    display: flex;\n}\n\n.list-title {\n    font-size: 1.1rem;\n    padding: 10px;\n}\n\n.list *:focus {\n    outline: none;\n}\n\n.todo {\n    padding: 10px;\n    border-radius: 5px;\n    display: flex;\n}\n\n.todo-body {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n}\n\n.todo-edit-body {\n    width: calc(100% - 60px);\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    gap: 5px;\n}\n\n.todo-edit-title {\n    margin: none;\n    color: inherit;\n    font-family: inherit;\n    font-size: 1rem;\n    background: none;\n    border: none;\n}\n\n.todo-desc {\n    font-size: 0.8rem;\n    color: var(--light-sub);\n    white-space: normal;\n    word-wrap: break-word;\n}\n\n.todo-edit-desc {\n    color: var(--light);\n    font-family: inherit;\n    font-size: 0.8rem;\n    background: none;\n    border: none;\n    height: 80px;\n    outline: none;\n    box-shadow: none;\n    resize: none;\n}\n\n.hide-overflow {\n    overflow-wrap: anywhere;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n}\n\n.todo-mark, .todo-close, .list-options, .add-todo-mark {\n    margin: auto 0;\n    height: 100%;\n    aspect-ratio: 1 / 1;\n}\n\n.list-options {\n    margin-left: auto;\n    cursor: pointer;\n}\n\n.todo-close {\n    margin-left: auto;\n}\n\n.add-todo {\n    padding: 10px 10px 10px 7.5px;\n    display: flex;\n}\n\n.add-todo-label {\n    padding: 10px;\n}\n\n.add-todo-form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.add-todo-area {\n    color: inherit;\n    font-family: inherit;\n    background: none;\n    border: none;\n    overflow: auto;\n    outline: none;\n    box-shadow: none;\n    resize: none;\n}\n\n.todo:hover:not(:focus) {\n    background-color: var(--grey);\n    cursor: pointer;\n}\n\n\n#clear {\n    align-self: center;\n}\n\nfooter {\n    text-align: center;\n    margin-top: auto;\n    padding: 10px;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\na:hover {\n    text-decoration: underline;\n}\n\nul {\n    list-style-type: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadUI)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _images_check_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/check_outline.svg */ "./src/images/check_outline.svg");
/* harmony import */ var _images_check_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/check.svg */ "./src/images/check.svg");
/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/close.svg */ "./src/images/close.svg");
/* harmony import */ var _images_more_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/more.svg */ "./src/images/more.svg");
/* harmony import */ var _images_add_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/add.svg */ "./src/images/add.svg");
// UI.js








const DOM = (() => {
    const createTitle = () => {
        const title = document.createElement('div');
        const addListLabel = document.createElement('addListLabel');
    
        title.appendChild(addListLabel);
    
        title.id = 'title';
        addListLabel.innerText = "My Tasks";
    
        return title;
    }
    const createContainer = () => {
        const container = document.createElement('div');
    
        container.id = 'container';
    
        container.appendChild(createAddList());
    
        return container;
    }

    const createTodo = (task) => {
        const todo = document.createElement('div');
        const todoMark = document.createElement('img');
        const todoBody = document.createElement('div');
        const todoTitle = document.createElement('p');
        const todoDesc = document.createElement('p');
        const todoEditBody = document.createElement('div');
        const todoEditTitle = document.createElement('input');
        const todoEditDesc = document.createElement('textarea');
        const todoClose = document.createElement('img');

        
        todoMark.onmouseover = function() {
            todoMark.src = _images_check_svg__WEBPACK_IMPORTED_MODULE_2__;
        }
        todoMark.onmouseout = function() {
            todoMark.src = _images_check_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
        }
        
        todoClose.addEventListener('click', function () {
            _app__WEBPACK_IMPORTED_MODULE_0__.app.removeTodo(task);
            update();
        })

        todo.onmouseover = function() {
            todoClose.style.visibility = 'visible';
        }
        todo.onmouseout = function() {
            todoClose.style.visibility = 'hidden';
        }

        todo.onclick = function() {
            todoBody.style.display = 'none';
            todoEditBody.style.display = 'flex';

            document.body.onclick = function(e) {
                if (!todo.contains(e.target)) {
                    task.title = todoEditTitle.value;
                    task.description = todoEditDesc.value;
                    todoBody.style.display = 'flex';
                    todoEditBody.style.display = 'none';
                    
                    update();
                }
            }
        }

        todoEditBody.classList.add('todo-edit-body');
        todoEditTitle.classList.add('todo-edit-title');
        todoEditDesc.classList.add('todo-edit-desc');
        

        todoEditBody.style.display = 'none';
        todoEditTitle.placeholder = 'Title';
        todoEditTitle.value = task.title;
        todoEditDesc.placeholder = 'description';
        todoEditDesc.value = task.description;

        todoClose.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_3__;
        todoClose.style.visibility = 'hidden';
        todoClose.classList.add('todo-close');
        todoMark.src = _images_check_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
        todoMark.classList.add('todo-mark');
        todoTitle.innerText = task.title;
        todoTitle.classList.add('todo-title');
        todoDesc.classList.add('todo-desc');
        todoDesc.classList.add('hide-overflow');
        todoDesc.innerText = task.description;
        todoBody.classList.add('todo-body');

        todoEditBody.appendChild(todoEditTitle);
        todoEditBody.appendChild(todoEditDesc);
        todoBody.appendChild(todoTitle);
        todoBody.appendChild(todoDesc);
        todo.appendChild(todoMark);
        todo.appendChild(todoBody);
        todo.appendChild(todoEditBody);
        todo.appendChild(todoClose);

        todo.classList.add('todo');
        return todo;
    }

    const createAddTodo = (listid) => {
        const addTodo = document.createElement('div');
        const addTodoLabel = document.createElement('p');
        const addTodoForm = document.createElement('div');
        const addTodoInput = document.createElement('input');
        const addTodoArea = document.createElement('textarea');
        const addTodoMark = document.createElement('img');

        addTodoMark.classList.add('add-todo-mark');
        addTodoMark.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_5__;
        addTodo.appendChild(addTodoMark);
        addTodoLabel.innerText = "Add a task";
        addTodoLabel.classList.add('add-todo-label');
        addTodoInput.classList.add('add-todo-input');
        addTodoInput.placeholder = "Title";
        addTodoArea.classList.add('add-todo-area');
        addTodoArea.placeholder = "description";
        addTodoForm.style.display = 'none';
        addTodoForm.appendChild(addTodoInput);
        addTodoForm.appendChild(addTodoArea);
        addTodoForm.classList.add('add-todo-form');
        addTodo.appendChild(addTodoLabel);
        addTodo.appendChild(addTodoForm);
        addTodo.classList.add('todo');
        addTodo.classList.add('add-todo');

        addTodo.onclick = function(e) {
            addTodoLabel.style.display = 'none';
            addTodoMark.style.display = 'none';
            addTodoForm.style.display = 'flex';

            document.body.onclick = function(e) {
                if (!addTodo.contains(e.target)) {
                    addTodoLabel.style.display = 'block';
                    addTodoMark.style.display = 'block';
                    addTodoForm.style.display = 'none';
                }
            }
        }

        addTodoForm.addEventListener('keyup', function(e) {
            if (e.key == 'Enter' && addTodoInput.value) {
                _app__WEBPACK_IMPORTED_MODULE_0__.app.addTodo(addTodoInput.value,addTodoArea.value,listid);
                addTodoLabel.style.display = 'block';
                addTodoMark.style.display = 'block';
                addTodoForm.style.display = 'none';
                addTodoInput.value = '';
                addTodoArea.value = '';
                update();
            }
        })
        

        return addTodo;
        
    }

    const createList = (list) => {
        const divList = document.createElement('div');
        const divListHeader = document.createElement('div');
        const divListTitle = document.createElement('p');
        const divListOptions = document.createElement('img');
        const divListItems = document.createElement('ul');


        divListOptions.classList.add('list-options');
        divListOptions.src = _images_more_svg__WEBPACK_IMPORTED_MODULE_4__;
        divListTitle.innerText = list.name;
        divListTitle.contentEditable = 'true';
        divListTitle.classList.add('list-title');
        divList.classList.add('list');
        divListHeader.classList.add('list-header');
        divListHeader.appendChild(divListTitle);
        divListHeader.appendChild(divListOptions);
        divList.appendChild(divListHeader);
        divList.appendChild(divListItems);
        list.getItems().forEach(function(todo) {
            divListItems.appendChild(createTodo(todo));
        })
        divListItems.appendChild(createAddTodo(list.id));

        divListTitle.addEventListener('focusout', function() {
            list.name = divListTitle.innerText;
            update();
        })

        return divList;
    }

    const createAddList = () => {
        const addList = document.createElement('div');
        const addListLabel = document.createElement('p');
        const addListInput = document.createElement('input');

        addListLabel.innerText = "+ Add new list";
        addListLabel.id = 'add-list-label'
        addListInput.id = 'add-list-input'
        addListInput.placeholder = "New list";
        addListInput.style.display = 'none';
        addList.appendChild(addListLabel);
        addList.appendChild(addListInput);
        addList.classList.add('list');
        addList.id = 'add-list';


        addList.onclick = function(e) {
            addListLabel.style.display = 'none';
            addListInput.style.display = 'block';
            addListInput.focus();

            document.body.onclick = function(e) {
                if (!addList.contains(e.target)) {
                    addListLabel.style.display = 'block';
                    addListInput.style.display = 'none';
                }
            }
        }

        addListInput.addEventListener('keyup', function(e) {
            if (e.key == 'Enter' && addListInput.value) {
                
                _app__WEBPACK_IMPORTED_MODULE_0__.app.addList(addListInput.value);
                addListLabel.style.display = 'block';
                addListInput.style.display = 'none';
                addListInput.value = '';
                update();
            }
        })

        return addList;
    }

    const update = () => {
        const container = document.querySelector('#container');
        const data = _app__WEBPACK_IMPORTED_MODULE_0__.app.getContent();

        while (container.firstChild.id !== 'add-list') {
            container.removeChild(container.firstChild);
        }

        data.forEach(function(item) {
            container.appendChild(createList(item));
        })
        container.appendChild(document.querySelector('#add-list'))
    }

    return {createTitle,
            createContainer,
            update,};
})();

function loadUI() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    content.appendChild(DOM.createTitle());
    content.appendChild(DOM.createContainer());
    DOM.update();
}

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists */ "./src/lists.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
// app.js





const app = (() => {
    let lists = _storage__WEBPACK_IMPORTED_MODULE_2__.storages.getData() || [];

    const addList = (name) => {
        const newList = new _lists__WEBPACK_IMPORTED_MODULE_0__["default"](name);
        lists.push(newList);
    }

    const addTodo = (title, description, listId) => {
        const newTodo = new _todos__WEBPACK_IMPORTED_MODULE_1__["default"](title, description, listId);
        lists.forEach(function(list) {
            if (list.id == listId) {
                list.addItem(newTodo);
            }
        })
    }

    const removeTodo = (todo) => {
        lists.forEach(function(list) {
            if (list.id == todo.parentid) {
                list.items = list.items.filter((item) => item.id != todo.id);
            }
        })

    }

    const getContent = () => {
        updateContent();
        console.log([...lists]);
        return [...lists];
    }

    const updateContent = () => {
        _storage__WEBPACK_IMPORTED_MODULE_2__.storages.storeData([...lists]);
    }

    return {addList,
            addTodo,
            removeTodo,
            getContent,}
})();


/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
// initialize.js



function createHeader() {
    const header = document.createElement('header');
    const divHeader = document.createElement('div');
    const a = document.createElement('a');

    header.appendChild(divHeader);
    divHeader.appendChild(a);

    a.href = ".";
    a.innerText = "Todo List";
    a.id = "logo";
    divHeader.classList.add('header');

    return header;
}

function createFooter() {
    const footer = document.createElement('footer');
    const divFooter = document.createElement('div');
    const a = document.createElement('a');

    footer.appendChild(divFooter);
    divFooter.appendChild(a);

    a.href = "https://github.com/rudnam/odin-todo-list";
    a.innerText = "Github repo"

    return footer;
}

function initialize() {
    const content = document.createElement('div');

    document.body.appendChild(createHeader());
    document.body.appendChild(content);
    document.body.appendChild(createFooter());

    content.id = 'content';
    (0,_UI__WEBPACK_IMPORTED_MODULE_0__["default"])();

    return;
}

/***/ }),

/***/ "./src/lists.js":
/*!**********************!*\
  !*** ./src/lists.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
// lists.js

class List {
    constructor(name) {
        this.name = name;
        this.items = [];
        this.id = "id" + Math.random().toString(16).slice(2);
    }
    getItems() {
        return [...this.items]
    }
    addItem(item) {
        this.items.push(item);
    }
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
}

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storages": () => (/* binding */ storages)
/* harmony export */ });
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists */ "./src/lists.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
// storage.js




const storages = (() => {

    const getData = () => {
        
        if (localStorage.getItem('listdata') == null) {
            return null;
        }

        const data = JSON.parse(localStorage.getItem('listdata'));
        console.log(JSON.parse(localStorage.getItem('listdata')));

        const lists = [];

        data.forEach(function(list) {
            const newList = new _lists__WEBPACK_IMPORTED_MODULE_0__["default"](list._name);

            list.items.forEach(function(task) {
                const newTodo = new _todos__WEBPACK_IMPORTED_MODULE_1__["default"](task._title,task._description,newList.id);
                newList.addItem(newTodo);
            })

            lists.push(newList);
        });
        return lists;
    };

    const storeData = (lists) => {
        localStorage.setItem('listdata', JSON.stringify(lists));
        return;
    }


    return {getData,
            storeData,};
})();

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
// todos.js

class ToDo {
    constructor(title,description,parentid) {
        this.title = title;
        this.description = description;
        this.id = "id" + Math.random().toString(16).slice(2);
        this.parentid = parentid;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get parentid() {
        return this._parentid;
    }
    set parentid(value) {
        this._parentid = value;
    }
}

/***/ }),

/***/ "./src/fonts/Matter-Bold.otf":
/*!***********************************!*\
  !*** ./src/fonts/Matter-Bold.otf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c583de1b2ee05e9564dd.otf";

/***/ }),

/***/ "./src/fonts/Matter-Regular.otf":
/*!**************************************!*\
  !*** ./src/fonts/Matter-Regular.otf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6bda6f04a1f81e7be9f7.otf";

/***/ }),

/***/ "./src/images/add.svg":
/*!****************************!*\
  !*** ./src/images/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "281dbeca9c21987cb9ce.svg";

/***/ }),

/***/ "./src/images/check.svg":
/*!******************************!*\
  !*** ./src/images/check.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f120398de0b0feaa7b73.svg";

/***/ }),

/***/ "./src/images/check_outline.svg":
/*!**************************************!*\
  !*** ./src/images/check_outline.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9523830e9f646d5ce529.svg";

/***/ }),

/***/ "./src/images/close.svg":
/*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eaa7cf158b1b88eb7f6b.svg";

/***/ }),

/***/ "./src/images/more.svg":
/*!*****************************!*\
  !*** ./src/images/more.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d01c6aa4dae88b31ed3.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize */ "./src/initialize.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
// index.js



(0,_initialize__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3FDO0FBQ1Y7O0FBRTNCLHVEQUFVLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9saXN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL01hdHRlci1SZWd1bGFyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL01hdHRlci1Cb2xkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZS5jc3MgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IE1hdHRlcjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogTWF0dGVyO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0td2hpdGU6ICNmZmY7XFxuICAgIC0tYmxhY2s6ICMxZjIwMjg7XFxuICAgIC0tYmx1ZTogIzM2YTNmZjtcXG4gICAgLS1saWdodDogI2E5YWRjMTtcXG4gICAgLS1ncmV5OiAjMmUzMDM5O1xcbiAgICAtLWxpZ2h0LXN1YjogIzdhN2M4NTtcXG4gICAgLS1yZWQ6ICNmZjQ1NDU7XFxuICAgIC0teWVsbG93OiAjZmZkNjQ0O1xcbiAgICAtLXRyYW5zcGFyZW50OiAjMmUzMDM5NDE7XFxuICAgIC0tZGVmYXVsdC13aWR0aDogbWluKDgwMHB4LDEwMCUpO1xcblxcbiAgICBmb250LWZhbWlseTogXFxcIk1hdHRlclxcXCIsc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDIwcHggNTBweDtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLWF1dG8tY29sdW1uczogMjUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxufVxcblxcbiNhZGQtbGlzdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtbGlzdC1sYWJlbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2FkZC1saXN0LWlucHV0LCAuYWRkLXRvZG8taW5wdXQge1xcbiAgICBwYWRkaW5nOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jYWRkLWxpc3QtaW5wdXQ6Zm9jdXMsIC5hZGQtdG9kby1pbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudClcXG59XFxuXFxuLmxpc3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmxpc3QgKjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50b2RvIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9kby1ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRvZG8tZWRpdC1ib2R5IHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tZWRpdC10aXRsZSB7XFxuICAgIG1hcmdpbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRvZG8tZGVzYyB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtc3ViKTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4udG9kby1lZGl0LWRlc2Mge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5oaWRlLW92ZXJmbG93IHtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbn1cXG5cXG4udG9kby1tYXJrLCAudG9kby1jbG9zZSwgLmxpc3Qtb3B0aW9ucywgLmFkZC10b2RvLW1hcmsge1xcbiAgICBtYXJnaW46IGF1dG8gMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4ubGlzdC1vcHRpb25zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tY2xvc2Uge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmFkZC10b2RvIHtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNy41cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5hZGQtdG9kby1sYWJlbCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5hZGQtdG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tYXJlYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udG9kbzpob3Zlcjpub3QoOmZvY3VzKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbiNjbGVhciB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYztBQUNkO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUFxQztFQUN2Qzs7QUFFRjtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBa0M7SUFDbEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGdDQUFnQzs7SUFFaEMsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogc3R5bGUuY3NzICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBNYXR0ZXI7XFxuICAgIHNyYzogdXJsKC4uL2ZvbnRzL01hdHRlci1SZWd1bGFyLm90Zik7XFxuICB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBNYXR0ZXI7XFxuICAgIHNyYzogdXJsKC4uL2ZvbnRzL01hdHRlci1Cb2xkLm90Zik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0td2hpdGU6ICNmZmY7XFxuICAgIC0tYmxhY2s6ICMxZjIwMjg7XFxuICAgIC0tYmx1ZTogIzM2YTNmZjtcXG4gICAgLS1saWdodDogI2E5YWRjMTtcXG4gICAgLS1ncmV5OiAjMmUzMDM5O1xcbiAgICAtLWxpZ2h0LXN1YjogIzdhN2M4NTtcXG4gICAgLS1yZWQ6ICNmZjQ1NDU7XFxuICAgIC0teWVsbG93OiAjZmZkNjQ0O1xcbiAgICAtLXRyYW5zcGFyZW50OiAjMmUzMDM5NDE7XFxuICAgIC0tZGVmYXVsdC13aWR0aDogbWluKDgwMHB4LDEwMCUpO1xcblxcbiAgICBmb250LWZhbWlseTogXFxcIk1hdHRlclxcXCIsc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDIwcHggNTBweDtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLWF1dG8tY29sdW1uczogMjUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxufVxcblxcbiNhZGQtbGlzdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtbGlzdC1sYWJlbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2FkZC1saXN0LWlucHV0LCAuYWRkLXRvZG8taW5wdXQge1xcbiAgICBwYWRkaW5nOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jYWRkLWxpc3QtaW5wdXQ6Zm9jdXMsIC5hZGQtdG9kby1pbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudClcXG59XFxuXFxuLmxpc3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmxpc3QgKjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50b2RvIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9kby1ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRvZG8tZWRpdC1ib2R5IHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tZWRpdC10aXRsZSB7XFxuICAgIG1hcmdpbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRvZG8tZGVzYyB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtc3ViKTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4udG9kby1lZGl0LWRlc2Mge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5oaWRlLW92ZXJmbG93IHtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbn1cXG5cXG4udG9kby1tYXJrLCAudG9kby1jbG9zZSwgLmxpc3Qtb3B0aW9ucywgLmFkZC10b2RvLW1hcmsge1xcbiAgICBtYXJnaW46IGF1dG8gMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4ubGlzdC1vcHRpb25zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tY2xvc2Uge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmFkZC10b2RvIHtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNy41cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5hZGQtdG9kby1sYWJlbCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5hZGQtdG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tYXJlYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udG9kbzpob3Zlcjpub3QoOmZvY3VzKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbiNjbGVhciB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFVJLmpzXG5cbmltcG9ydCB7IGFwcCB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IGNoZWNrT3V0bGluZSBmcm9tICcuL2ltYWdlcy9jaGVja19vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgY2hlY2sgZnJvbSAnLi9pbWFnZXMvY2hlY2suc3ZnJztcbmltcG9ydCBjbG9zZSBmcm9tICcuL2ltYWdlcy9jbG9zZS5zdmcnO1xuaW1wb3J0IG1vcmUgZnJvbSAnLi9pbWFnZXMvbW9yZS5zdmcnO1xuaW1wb3J0IGFkZCBmcm9tICcuL2ltYWdlcy9hZGQuc3ZnJztcblxuY29uc3QgRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVUaXRsZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYWRkTGlzdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYWRkTGlzdExhYmVsJyk7XG4gICAgXG4gICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKGFkZExpc3RMYWJlbCk7XG4gICAgXG4gICAgICAgIHRpdGxlLmlkID0gJ3RpdGxlJztcbiAgICAgICAgYWRkTGlzdExhYmVsLmlubmVyVGV4dCA9IFwiTXkgVGFza3NcIjtcbiAgICBcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgICAgICBjb250YWluZXIuaWQgPSAnY29udGFpbmVyJztcbiAgICBcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUFkZExpc3QoKSk7XG4gICAgXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdG9kb01hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgdG9kb0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdG9kb0VkaXRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9FZGl0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0b2RvRWRpdERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBjb25zdCB0b2RvQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICBcbiAgICAgICAgdG9kb01hcmsub25tb3VzZW92ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRvZG9NYXJrLnNyYyA9IGNoZWNrO1xuICAgICAgICB9XG4gICAgICAgIHRvZG9NYXJrLm9ubW91c2VvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRvZG9NYXJrLnNyYyA9IGNoZWNrT3V0bGluZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdG9kb0Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXBwLnJlbW92ZVRvZG8odGFzayk7XG4gICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0b2RvLm9ubW91c2VvdmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0b2RvQ2xvc2Uuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgfVxuICAgICAgICB0b2RvLm9ubW91c2VvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRvZG9DbG9zZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIH1cblxuICAgICAgICB0b2RvLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRvZG9Cb2R5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB0b2RvRWRpdEJvZHkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmICghdG9kby5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay50aXRsZSA9IHRvZG9FZGl0VGl0bGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSB0b2RvRWRpdERlc2MudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Cb2R5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9FZGl0Qm9keS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdG9kb0VkaXRCb2R5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWRpdC1ib2R5Jyk7XG4gICAgICAgIHRvZG9FZGl0VGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LXRpdGxlJyk7XG4gICAgICAgIHRvZG9FZGl0RGVzYy5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQtZGVzYycpO1xuICAgICAgICBcblxuICAgICAgICB0b2RvRWRpdEJvZHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdG9kb0VkaXRUaXRsZS5wbGFjZWhvbGRlciA9ICdUaXRsZSc7XG4gICAgICAgIHRvZG9FZGl0VGl0bGUudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgICAgICB0b2RvRWRpdERlc2MucGxhY2Vob2xkZXIgPSAnZGVzY3JpcHRpb24nO1xuICAgICAgICB0b2RvRWRpdERlc2MudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIHRvZG9DbG9zZS5zcmMgPSBjbG9zZTtcbiAgICAgICAgdG9kb0Nsb3NlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgdG9kb0Nsb3NlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2xvc2UnKTtcbiAgICAgICAgdG9kb01hcmsuc3JjID0gY2hlY2tPdXRsaW5lO1xuICAgICAgICB0b2RvTWFyay5jbGFzc0xpc3QuYWRkKCd0b2RvLW1hcmsnKTtcbiAgICAgICAgdG9kb1RpdGxlLmlubmVyVGV4dCA9IHRhc2sudGl0bGU7XG4gICAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XG4gICAgICAgIHRvZG9EZXNjLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGVzYycpO1xuICAgICAgICB0b2RvRGVzYy5jbGFzc0xpc3QuYWRkKCdoaWRlLW92ZXJmbG93Jyk7XG4gICAgICAgIHRvZG9EZXNjLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIHRvZG9Cb2R5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tYm9keScpO1xuXG4gICAgICAgIHRvZG9FZGl0Qm9keS5hcHBlbmRDaGlsZCh0b2RvRWRpdFRpdGxlKTtcbiAgICAgICAgdG9kb0VkaXRCb2R5LmFwcGVuZENoaWxkKHRvZG9FZGl0RGVzYyk7XG4gICAgICAgIHRvZG9Cb2R5LmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgICAgIHRvZG9Cb2R5LmFwcGVuZENoaWxkKHRvZG9EZXNjKTtcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvTWFyayk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0JvZHkpO1xuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9FZGl0Qm9keSk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0Nsb3NlKTtcblxuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQWRkVG9kbyA9IChsaXN0aWQpID0+IHtcbiAgICAgICAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBhZGRUb2RvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb01hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICBhZGRUb2RvTWFyay5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1tYXJrJyk7XG4gICAgICAgIGFkZFRvZG9NYXJrLnNyYyA9IGFkZDtcbiAgICAgICAgYWRkVG9kby5hcHBlbmRDaGlsZChhZGRUb2RvTWFyayk7XG4gICAgICAgIGFkZFRvZG9MYWJlbC5pbm5lclRleHQgPSBcIkFkZCBhIHRhc2tcIjtcbiAgICAgICAgYWRkVG9kb0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWxhYmVsJyk7XG4gICAgICAgIGFkZFRvZG9JbnB1dC5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1pbnB1dCcpO1xuICAgICAgICBhZGRUb2RvSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCI7XG4gICAgICAgIGFkZFRvZG9BcmVhLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWFyZWEnKTtcbiAgICAgICAgYWRkVG9kb0FyZWEucGxhY2Vob2xkZXIgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgICAgIGFkZFRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGFkZFRvZG9JbnB1dCk7XG4gICAgICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGFkZFRvZG9BcmVhKTtcbiAgICAgICAgYWRkVG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tZm9ybScpO1xuICAgICAgICBhZGRUb2RvLmFwcGVuZENoaWxkKGFkZFRvZG9MYWJlbCk7XG4gICAgICAgIGFkZFRvZG8uYXBwZW5kQ2hpbGQoYWRkVG9kb0Zvcm0pO1xuICAgICAgICBhZGRUb2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICAgICAgYWRkVG9kby5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kbycpO1xuXG4gICAgICAgIGFkZFRvZG8ub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGFkZFRvZG9MYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgYWRkVG9kb01hcmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGFkZFRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFkZFRvZG8uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRvZG9MYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9kb01hcmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWRkVG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT0gJ0VudGVyJyAmJiBhZGRUb2RvSW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhcHAuYWRkVG9kbyhhZGRUb2RvSW5wdXQudmFsdWUsYWRkVG9kb0FyZWEudmFsdWUsbGlzdGlkKTtcbiAgICAgICAgICAgICAgICBhZGRUb2RvTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgYWRkVG9kb01hcmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgYWRkVG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBhZGRUb2RvSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICBhZGRUb2RvQXJlYS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcblxuICAgICAgICByZXR1cm4gYWRkVG9kbztcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTGlzdCA9IChsaXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGl2TGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkaXZMaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGRpdkxpc3RPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IGRpdkxpc3RJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cblxuICAgICAgICBkaXZMaXN0T3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdsaXN0LW9wdGlvbnMnKTtcbiAgICAgICAgZGl2TGlzdE9wdGlvbnMuc3JjID0gbW9yZTtcbiAgICAgICAgZGl2TGlzdFRpdGxlLmlubmVyVGV4dCA9IGxpc3QubmFtZTtcbiAgICAgICAgZGl2TGlzdFRpdGxlLmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcbiAgICAgICAgZGl2TGlzdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2xpc3QtdGl0bGUnKTtcbiAgICAgICAgZGl2TGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG4gICAgICAgIGRpdkxpc3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbGlzdC1oZWFkZXInKTtcbiAgICAgICAgZGl2TGlzdEhlYWRlci5hcHBlbmRDaGlsZChkaXZMaXN0VGl0bGUpO1xuICAgICAgICBkaXZMaXN0SGVhZGVyLmFwcGVuZENoaWxkKGRpdkxpc3RPcHRpb25zKTtcbiAgICAgICAgZGl2TGlzdC5hcHBlbmRDaGlsZChkaXZMaXN0SGVhZGVyKTtcbiAgICAgICAgZGl2TGlzdC5hcHBlbmRDaGlsZChkaXZMaXN0SXRlbXMpO1xuICAgICAgICBsaXN0LmdldEl0ZW1zKCkuZm9yRWFjaChmdW5jdGlvbih0b2RvKSB7XG4gICAgICAgICAgICBkaXZMaXN0SXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kbyh0b2RvKSk7XG4gICAgICAgIH0pXG4gICAgICAgIGRpdkxpc3RJdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVBZGRUb2RvKGxpc3QuaWQpKTtcblxuICAgICAgICBkaXZMaXN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxpc3QubmFtZSA9IGRpdkxpc3RUaXRsZS5pbm5lclRleHQ7XG4gICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gZGl2TGlzdDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVBZGRMaXN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGFkZExpc3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgYWRkTGlzdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICBhZGRMaXN0TGFiZWwuaW5uZXJUZXh0ID0gXCIrIEFkZCBuZXcgbGlzdFwiO1xuICAgICAgICBhZGRMaXN0TGFiZWwuaWQgPSAnYWRkLWxpc3QtbGFiZWwnXG4gICAgICAgIGFkZExpc3RJbnB1dC5pZCA9ICdhZGQtbGlzdC1pbnB1dCdcbiAgICAgICAgYWRkTGlzdElucHV0LnBsYWNlaG9sZGVyID0gXCJOZXcgbGlzdFwiO1xuICAgICAgICBhZGRMaXN0SW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgYWRkTGlzdC5hcHBlbmRDaGlsZChhZGRMaXN0TGFiZWwpO1xuICAgICAgICBhZGRMaXN0LmFwcGVuZENoaWxkKGFkZExpc3RJbnB1dCk7XG4gICAgICAgIGFkZExpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xuICAgICAgICBhZGRMaXN0LmlkID0gJ2FkZC1saXN0JztcblxuXG4gICAgICAgIGFkZExpc3Qub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGFkZExpc3RMYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgYWRkTGlzdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgYWRkTGlzdElucHV0LmZvY3VzKCk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFkZExpc3QuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RMYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWRkTGlzdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09ICdFbnRlcicgJiYgYWRkTGlzdElucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYXBwLmFkZExpc3QoYWRkTGlzdElucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBhZGRMaXN0TGFiZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgYWRkTGlzdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgYWRkTGlzdElucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGFkZExpc3Q7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhcHAuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZC5pZCAhPT0gJ2FkZC1saXN0Jykge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdChpdGVtKSk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWxpc3QnKSlcbiAgICB9XG5cbiAgICByZXR1cm4ge2NyZWF0ZVRpdGxlLFxuICAgICAgICAgICAgY3JlYXRlQ29udGFpbmVyLFxuICAgICAgICAgICAgdXBkYXRlLH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVUkoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRE9NLmNyZWF0ZVRpdGxlKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRE9NLmNyZWF0ZUNvbnRhaW5lcigpKTtcbiAgICBET00udXBkYXRlKCk7XG59IiwiLy8gYXBwLmpzXG5cbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RzXCI7XG5pbXBvcnQgVG9EbyBmcm9tIFwiLi90b2Rvc1wiO1xuaW1wb3J0IHsgc3RvcmFnZXMgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBhcHAgPSAoKCkgPT4ge1xuICAgIGxldCBsaXN0cyA9IHN0b3JhZ2VzLmdldERhdGEoKSB8fCBbXTtcblxuICAgIGNvbnN0IGFkZExpc3QgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gbmV3IExpc3QobmFtZSk7XG4gICAgICAgIGxpc3RzLnB1c2gobmV3TGlzdCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGxpc3RJZCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBsaXN0SWQpO1xuICAgICAgICBsaXN0cy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3QpIHtcbiAgICAgICAgICAgIGlmIChsaXN0LmlkID09IGxpc3RJZCkge1xuICAgICAgICAgICAgICAgIGxpc3QuYWRkSXRlbShuZXdUb2RvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICAgICAgbGlzdHMuZm9yRWFjaChmdW5jdGlvbihsaXN0KSB7XG4gICAgICAgICAgICBpZiAobGlzdC5pZCA9PSB0b2RvLnBhcmVudGlkKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5pdGVtcyA9IGxpc3QuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9IHRvZG8uaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgdXBkYXRlQ29udGVudCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhbLi4ubGlzdHNdKTtcbiAgICAgICAgcmV0dXJuIFsuLi5saXN0c107XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlQ29udGVudCA9ICgpID0+IHtcbiAgICAgICAgc3RvcmFnZXMuc3RvcmVEYXRhKFsuLi5saXN0c10pO1xuICAgIH1cblxuICAgIHJldHVybiB7YWRkTGlzdCxcbiAgICAgICAgICAgIGFkZFRvZG8sXG4gICAgICAgICAgICByZW1vdmVUb2RvLFxuICAgICAgICAgICAgZ2V0Q29udGVudCx9XG59KSgpO1xuIiwiLy8gaW5pdGlhbGl6ZS5qc1xuXG5pbXBvcnQgbG9hZFVJIGZyb20gXCIuL1VJXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBkaXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdkhlYWRlcik7XG4gICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKGEpO1xuXG4gICAgYS5ocmVmID0gXCIuXCI7XG4gICAgYS5pbm5lclRleHQgPSBcIlRvZG8gTGlzdFwiO1xuICAgIGEuaWQgPSBcImxvZ29cIjtcbiAgICBkaXZIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZGl2Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChkaXZGb290ZXIpO1xuICAgIGRpdkZvb3Rlci5hcHBlbmRDaGlsZChhKTtcblxuICAgIGEuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL3J1ZG5hbS9vZGluLXRvZG8tbGlzdFwiO1xuICAgIGEuaW5uZXJUZXh0ID0gXCJHaXRodWIgcmVwb1wiXG5cbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgICBjb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuICAgIGxvYWRVSSgpO1xuXG4gICAgcmV0dXJuO1xufSIsIi8vIGxpc3RzLmpzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmlkID0gXCJpZFwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMik7XG4gICAgfVxuICAgIGdldEl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMuaXRlbXNdXG4gICAgfVxuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHNldCBuYW1lKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cbn0iLCIvLyBzdG9yYWdlLmpzXG5cbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RzXCI7XG5pbXBvcnQgVG9EbyBmcm9tIFwiLi90b2Rvc1wiO1xuXG5leHBvcnQgY29uc3Qgc3RvcmFnZXMgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdGRhdGEnKSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0ZGF0YScpKTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdGRhdGEnKSkpO1xuXG4gICAgICAgIGNvbnN0IGxpc3RzID0gW107XG5cbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgTGlzdChsaXN0Ll9uYW1lKTtcblxuICAgICAgICAgICAgbGlzdC5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvRG8odGFzay5fdGl0bGUsdGFzay5fZGVzY3JpcHRpb24sbmV3TGlzdC5pZCk7XG4gICAgICAgICAgICAgICAgbmV3TGlzdC5hZGRJdGVtKG5ld1RvZG8pO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGlzdHMucHVzaChuZXdMaXN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBsaXN0cztcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RvcmVEYXRhID0gKGxpc3RzKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0ZGF0YScsIEpTT04uc3RyaW5naWZ5KGxpc3RzKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIHJldHVybiB7Z2V0RGF0YSxcbiAgICAgICAgICAgIHN0b3JlRGF0YSx9O1xufSkoKTsiLCIvLyB0b2Rvcy5qc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixwYXJlbnRpZCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5pZCA9IFwiaWRcIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpO1xuICAgICAgICB0aGlzLnBhcmVudGlkID0gcGFyZW50aWQ7XG4gICAgfVxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cbiAgICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgcGFyZW50aWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnRpZDtcbiAgICB9XG4gICAgc2V0IHBhcmVudGlkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudGlkID0gdmFsdWU7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbmRleC5qc1xuaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi9pbml0aWFsaXplJ1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnXG5cbmluaXRpYWxpemUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=