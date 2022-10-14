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
___CSS_LOADER_EXPORT___.push([module.id, "/* style.css */\n@font-face {\n    font-family: Matter;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  }\n\n@font-face {\n    font-family: Matter;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    font-weight: bold;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\na:hover {\n    text-decoration: underline;\n}\n\nul {\n    list-style-type: none;\n}\n\n:root {\n    --white: #fff;\n    --black: #1f2028;\n    --blue: #36a3ff;\n    --light: #a9adc1;\n    --grey: #2e3039;\n    --light-sub: #7a7c85;\n    --red: #ff4545;\n    --yellow: #ffd644;\n    --transparent: #2e303941;\n    --default-width: min(800px,100%);\n\n    font-family: \"Matter\",sans-serif;\n    font-size: 16px;\n    overflow-x: hidden;\n}\n\nbody {\n    margin: 0 auto;\n    display: flex;\n    align-items: stretch;\n    flex-direction: column;\n    min-height: 100vh;\n    background-color: var(--black);\n    color: var(--light);\n}\n\nheader {\n    font-weight: bold;\n    font-size: 1.5rem;\n    color: var(--blue);\n    padding: 10px;\n    padding-left: 50px;\n    border: 1px solid var(--grey);\n}\n\n#content {\n    padding: 20px 50px;\n    min-height: 100%;\n}\n\n#title {\n    font-size: 1.2rem;\n}\n\n#container {\n    margin-top: 10px;\n    padding: 10px 0px 20px;\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 250px;\n    align-items: flex-start;\n    gap: 15px;\n    overflow-x: auto;\n    min-height: 200px;\n}\n\n#add-list:hover {\n    background-color: var(--grey);\n    cursor: pointer;\n}\n\n#add-list-label {\n    text-align: center;\n}\n\n#add-list-input {\n    padding: inherit;\n    color: inherit;\n    font-family: inherit;\n    font-size: 1rem;\n    background: none;\n    border: none;\n}\n\n.list {\n    border: 1px solid var(--grey);\n    border-radius: 7px;\n    padding: 10px;\n    background-color: var(--transparent)\n}\n\n.list-header {\n    display: flex;\n}\n\n.list-title {\n    font-size: 1.1rem;\n    padding: 10px;\n}\n\n.list-options {\n    margin-left: auto;\n    cursor: pointer;\n    height: 100%;\n    aspect-ratio: 1 / 1;\n}\n\n.list * {\n    outline: none;\n}\n\n.anchor {\n    position: relative;\n    display: none;\n}\n\n.popover {\n    border-radius: 5px;\n    width: 100px;\n    padding: 10px;\n    position: absolute;\n    left: 25px;\n    background-color: var(--grey);\n    display: flex;\n    flex-direction: column;\n}\n\n.popover-label {\n    font-size: 0.8rem;\n    padding: 5px;\n}\n\n.popover-sort {\n    display: flex;\n    flex-direction: column;\n}\n\n.popover-sort li {\n    cursor: pointer;\n    padding: 5px;\n}\n\n.popover-options {\n    margin-top: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.popover-options li {\n    cursor: pointer;\n    padding: 5px;\n}\n\n.todo {\n    padding: 10px;\n    border-radius: 5px;\n    display: flex;\n}\n\n.todo-body {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n}\n\n.todo-desc {\n    font-size: 0.8rem;\n    color: var(--light-sub);\n    white-space: normal;\n    word-wrap: break-word;\n}\n\n.hide-overflow {\n    overflow-wrap: anywhere;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n}\n\n.todo-edit-body {\n    width: calc(100% - 60px);\n    display: none;\n    flex-direction: column;\n    padding: 10px;\n    gap: 5px;\n}\n\n.todo-edit-title {\n    margin: none;\n    color: inherit;\n    font-family: inherit;\n    font-size: 1rem;\n    background: none;\n    border: none;\n}\n\n.todo-edit-desc {\n    color: var(--light);\n    font-family: inherit;\n    font-size: 0.8rem;\n    background: none;\n    border: none;\n    height: 80px;\n    outline: none;\n    box-shadow: none;\n    resize: none;\n}\n\n.todo-mark, .todo-close, .add-todo-mark {\n    margin: auto 0;\n    height: 100%;\n    aspect-ratio: 1 / 1;\n}\n\n.todo-close {\n    margin-left: auto;\n    visibility: hidden;\n}\n\n.add-todo {\n    padding: 10px 10px 10px 7.5px;\n    display: flex;\n    border-radius: 5px;\n}\n\n.add-todo:hover:not(:focus) {\n    background-color: var(--grey);\n    cursor: pointer;\n}\n\n.add-todo-label {\n    padding: 10px;\n}\n\n.add-todo-form {\n    display: none;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.add-todo-input {\n    padding: inherit;\n    color: inherit;\n    font-family: inherit;\n    font-size: 1rem;\n    background: none;\n    border: none;\n}\n\n.add-todo-area {\n    color: inherit;\n    font-family: inherit;\n    background: none;\n    border: none;\n    overflow: auto;\n    outline: none;\n    box-shadow: none;\n    resize: none;\n}\n\n.todo:hover:not(:focus) {\n    background-color: var(--grey);\n    cursor: pointer;\n}\n\nfooter {\n    text-align: center;\n    margin-top: auto;\n    padding: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["/* style.css */\n@font-face {\n    font-family: Matter;\n    src: url(../fonts/Matter-Regular.otf);\n  }\n\n@font-face {\n    font-family: Matter;\n    src: url(../fonts/Matter-Bold.otf);\n    font-weight: bold;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\na:hover {\n    text-decoration: underline;\n}\n\nul {\n    list-style-type: none;\n}\n\n:root {\n    --white: #fff;\n    --black: #1f2028;\n    --blue: #36a3ff;\n    --light: #a9adc1;\n    --grey: #2e3039;\n    --light-sub: #7a7c85;\n    --red: #ff4545;\n    --yellow: #ffd644;\n    --transparent: #2e303941;\n    --default-width: min(800px,100%);\n\n    font-family: \"Matter\",sans-serif;\n    font-size: 16px;\n    overflow-x: hidden;\n}\n\nbody {\n    margin: 0 auto;\n    display: flex;\n    align-items: stretch;\n    flex-direction: column;\n    min-height: 100vh;\n    background-color: var(--black);\n    color: var(--light);\n}\n\nheader {\n    font-weight: bold;\n    font-size: 1.5rem;\n    color: var(--blue);\n    padding: 10px;\n    padding-left: 50px;\n    border: 1px solid var(--grey);\n}\n\n#content {\n    padding: 20px 50px;\n    min-height: 100%;\n}\n\n#title {\n    font-size: 1.2rem;\n}\n\n#container {\n    margin-top: 10px;\n    padding: 10px 0px 20px;\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 250px;\n    align-items: flex-start;\n    gap: 15px;\n    overflow-x: auto;\n    min-height: 200px;\n}\n\n#add-list:hover {\n    background-color: var(--grey);\n    cursor: pointer;\n}\n\n#add-list-label {\n    text-align: center;\n}\n\n#add-list-input {\n    padding: inherit;\n    color: inherit;\n    font-family: inherit;\n    font-size: 1rem;\n    background: none;\n    border: none;\n}\n\n.list {\n    border: 1px solid var(--grey);\n    border-radius: 7px;\n    padding: 10px;\n    background-color: var(--transparent)\n}\n\n.list-header {\n    display: flex;\n}\n\n.list-title {\n    font-size: 1.1rem;\n    padding: 10px;\n}\n\n.list-options {\n    margin-left: auto;\n    cursor: pointer;\n    height: 100%;\n    aspect-ratio: 1 / 1;\n}\n\n.list * {\n    outline: none;\n}\n\n.anchor {\n    position: relative;\n    display: none;\n}\n\n.popover {\n    border-radius: 5px;\n    width: 100px;\n    padding: 10px;\n    position: absolute;\n    left: 25px;\n    background-color: var(--grey);\n    display: flex;\n    flex-direction: column;\n}\n\n.popover-label {\n    font-size: 0.8rem;\n    padding: 5px;\n}\n\n.popover-sort {\n    display: flex;\n    flex-direction: column;\n}\n\n.popover-sort li {\n    cursor: pointer;\n    padding: 5px;\n}\n\n.popover-options {\n    margin-top: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.popover-options li {\n    cursor: pointer;\n    padding: 5px;\n}\n\n.todo {\n    padding: 10px;\n    border-radius: 5px;\n    display: flex;\n}\n\n.todo-body {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n}\n\n.todo-desc {\n    font-size: 0.8rem;\n    color: var(--light-sub);\n    white-space: normal;\n    word-wrap: break-word;\n}\n\n.hide-overflow {\n    overflow-wrap: anywhere;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n}\n\n.todo-edit-body {\n    width: calc(100% - 60px);\n    display: none;\n    flex-direction: column;\n    padding: 10px;\n    gap: 5px;\n}\n\n.todo-edit-title {\n    margin: none;\n    color: inherit;\n    font-family: inherit;\n    font-size: 1rem;\n    background: none;\n    border: none;\n}\n\n.todo-edit-desc {\n    color: var(--light);\n    font-family: inherit;\n    font-size: 0.8rem;\n    background: none;\n    border: none;\n    height: 80px;\n    outline: none;\n    box-shadow: none;\n    resize: none;\n}\n\n.todo-mark, .todo-close, .add-todo-mark {\n    margin: auto 0;\n    height: 100%;\n    aspect-ratio: 1 / 1;\n}\n\n.todo-close {\n    margin-left: auto;\n    visibility: hidden;\n}\n\n.add-todo {\n    padding: 10px 10px 10px 7.5px;\n    display: flex;\n    border-radius: 5px;\n}\n\n.add-todo:hover:not(:focus) {\n    background-color: var(--grey);\n    cursor: pointer;\n}\n\n.add-todo-label {\n    padding: 10px;\n}\n\n.add-todo-form {\n    display: none;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.add-todo-input {\n    padding: inherit;\n    color: inherit;\n    font-family: inherit;\n    font-size: 1rem;\n    background: none;\n    border: none;\n}\n\n.add-todo-area {\n    color: inherit;\n    font-family: inherit;\n    background: none;\n    border: none;\n    overflow: auto;\n    outline: none;\n    box-shadow: none;\n    resize: none;\n}\n\n.todo:hover:not(:focus) {\n    background-color: var(--grey);\n    cursor: pointer;\n}\n\nfooter {\n    text-align: center;\n    margin-top: auto;\n    padding: 10px;\n}\n"],"sourceRoot":""}]);
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
    
        title.id = 'title';
        title.innerText = "My Tasks";
    
        return title;
    };

    const createContainer = () => {
        const container = document.createElement('div');
    
        container.id = 'container';
    
        container.appendChild(createAddList());
    
        return container;
    };

    const createAddList = () => {
        const addList = document.createElement('div');
        const addListLabel = document.createElement('p');
        const addListInput = document.createElement('input');

        addList.id = 'add-list';
        addList.classList.add('list');
        addListLabel.id = 'add-list-label'
        addListInput.id = 'add-list-input'

        addListLabel.innerText = "+ Add new list";
        addListInput.placeholder = "New list";
        addListInput.style.display = 'none';

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

        addList.appendChild(addListLabel);
        addList.appendChild(addListInput);

        return addList;
    };

    const createList = (list) => {
        const divList = document.createElement('div');
        const divListHeader = document.createElement('div');
        const divListTitle = document.createElement('p');
        const divListOptions = document.createElement('img');
        const divListItems = document.createElement('ul');
        const popover = createPopover(list);

        divList.classList.add('list');
        divListHeader.classList.add('list-header');
        divListTitle.classList.add('list-title');
        divListOptions.classList.add('list-options');
        divListItems.classList.add('list-items');
        divListTitle.innerText = list.name;
        divListTitle.contentEditable = 'true';
        divListOptions.src = _images_more_svg__WEBPACK_IMPORTED_MODULE_4__;
        
        divListTitle.addEventListener('focusout', function() {
            list.name = divListTitle.innerText;
            update();
        })

        divListOptions.onclick = function(e) {
            popover.style.display = 'block';
            document.body.onclick = function(e) {
                if (!divListOptions.contains(e.target) && !popover.contains(e.target)) {
                    popover.style.display = 'none';
                }
            }
        }

        divList.appendChild(divListHeader);
        divList.appendChild(divListItems);
        list.items.forEach(function(todo) {
            divListItems.appendChild(createTodo(todo));
        });
        divListItems.appendChild(createAddTodo(list.id));
        divListHeader.appendChild(divListTitle);
        divListHeader.appendChild(divListOptions);
        divListHeader.appendChild(popover);
        
        return divList;
    };

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

        todo.classList.add('todo');
        todoMark.classList.add('todo-mark');
        todoBody.classList.add('todo-body');
        todoTitle.classList.add('todo-title');
        todoDesc.classList.add('todo-desc');
        todoDesc.classList.add('hide-overflow');
        todoEditBody.classList.add('todo-edit-body');
        todoEditTitle.classList.add('todo-edit-title');
        todoEditDesc.classList.add('todo-edit-desc');
        todoClose.classList.add('todo-close');
        todoMark.src = _images_check_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
        todoTitle.innerText = task.title;
        todoDesc.innerText = task.description;
        todoEditTitle.placeholder = 'Title';
        todoEditTitle.value = task.title;
        todoEditDesc.placeholder = 'description';
        todoEditDesc.value = task.description;
        todoClose.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_3__;
        
        todoMark.onmouseover = function() {
            todoMark.src = _images_check_svg__WEBPACK_IMPORTED_MODULE_2__;
        }
        todoMark.onmouseout = function() {
            todoMark.src = _images_check_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
        }
        todoMark.onclick = function() {
            _app__WEBPACK_IMPORTED_MODULE_0__.app.completeTodo(task);
            update();
        }

        todo.onmouseover = function() {
            todoClose.style.visibility = 'visible';
        }
        todo.onmouseout = function() {
            todoClose.style.visibility = 'hidden';
        }
        todoClose.onclick = function() {
            _app__WEBPACK_IMPORTED_MODULE_0__.app.deleteTodo(task);
            update();
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

        todo.appendChild(todoMark);
        todo.appendChild(todoBody);
        todo.appendChild(todoEditBody);
        todo.appendChild(todoClose);
        todoBody.appendChild(todoTitle);
        todoBody.appendChild(todoDesc);
        todoEditBody.appendChild(todoEditTitle);
        todoEditBody.appendChild(todoEditDesc);
        
        return todo;
    }

    const createAddTodo = (listid) => {
        const addTodo = document.createElement('div');
        const addTodoLabel = document.createElement('p');
        const addTodoForm = document.createElement('div');
        const addTodoInput = document.createElement('input');
        const addTodoArea = document.createElement('textarea');
        const addTodoMark = document.createElement('img');

        addTodo.classList.add('add-todo');
        addTodoMark.classList.add('add-todo-mark');
        addTodoLabel.classList.add('add-todo-label');
        addTodoForm.classList.add('add-todo-form');
        addTodoInput.classList.add('add-todo-input');
        addTodoArea.classList.add('add-todo-area');
        addTodoMark.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_5__;
        addTodoLabel.innerText = "Add a task";
        addTodoInput.placeholder = "Title";
        addTodoArea.placeholder = "description";
        
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

        addTodo.onkeyup = function(e) {
            if (e.key == 'Enter' && addTodoInput.value) {
                _app__WEBPACK_IMPORTED_MODULE_0__.app.addTodo(addTodoInput.value,addTodoArea.value,listid);
                addTodoLabel.style.display = 'block';
                addTodoMark.style.display = 'block';
                addTodoForm.style.display = 'none';
                addTodoInput.value = '';
                addTodoArea.value = '';
                update();
            }
        }

        addTodo.appendChild(addTodoMark);
        addTodo.appendChild(addTodoLabel);
        addTodo.appendChild(addTodoForm);
        addTodoForm.appendChild(addTodoInput);
        addTodoForm.appendChild(addTodoArea);

        return addTodo;
    }

    const createPopover = (list) => {
        const anchor = document.createElement('div');
        const popover = document.createElement('div');
        const popoverLabel = document.createElement('p');
        const popoverSort = document.createElement('ul');
        const popoverDate = document.createElement('li');
        const popoverCustom = document.createElement('li');
        const popoverOptions = document.createElement('ul');
        const popoverDelete = document.createElement('li');
        const popoverSetcolor = document.createElement('li');

        anchor.classList.add('anchor');
        popover.classList.add('popover');
        popoverLabel.classList.add('popover-label');
        popoverSort.classList.add('popover-sort');
        popoverOptions.classList.add('popover-options');
        popoverLabel.innerText = 'Sort by:'
        popoverDate.innerText = 'Date';
        popoverCustom.innerText = 'Custom';
        popoverDelete.innerText = 'Delete list';
        popoverSetcolor.innerText = 'Set color';

        popoverDelete.onclick = function(e) {
            _app__WEBPACK_IMPORTED_MODULE_0__.app.deleteList(list);
            update();
        }

        anchor.appendChild(popover);
        popover.appendChild(popoverLabel);
        popover.appendChild(popoverSort);
        popover.appendChild(popoverOptions);
        popoverSort.appendChild(popoverDate);
        popoverSort.appendChild(popoverCustom);
        popoverOptions.appendChild(popoverDelete);
        popoverOptions.appendChild(popoverSetcolor);

        return anchor;
    }

    const update = () => {
        const container = document.querySelector('#container');
        const appData = _app__WEBPACK_IMPORTED_MODULE_0__.app.getContent();

        while (container.firstChild.id !== 'add-list') {
            container.removeChild(container.firstChild);
        }

        appData.forEach(function(item) {
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
        return;
    }

    const deleteList = (list) => {
        lists = lists.filter((i) => i.id != list.id);
        return;
    }

    const addTodo = (title, description, listId) => {
        const newTodo = new _todos__WEBPACK_IMPORTED_MODULE_1__["default"](title, description, listId);
        lists.forEach(function(list) {
            if (list.id == listId) {
                list.addItem(newTodo);
                return;
            }
        })
    }

    const deleteTodo = (todo) => {
        lists.forEach(function(list) {
            if (list.id == todo.parentid) {
                list.items = list.items.filter((i) => i.id != todo.id);
                return;
            }
        })
    }

    const completeTodo = (todo) => {
        lists.forEach(function(list) {
            if (list.id == todo.parentid) {
                list.completeItem(todo);
                return;
            }
        })
    }

    const getContent = () => {
        updateContent();
        // temp
        console.log([...lists]);
        return [...lists];
    }

    const updateContent = () => {
        _storage__WEBPACK_IMPORTED_MODULE_2__.storages.storeData([...lists]);
    }

    return {addList,
            deleteList,
            addTodo,
            deleteTodo,
            completeTodo,
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
    const headerLogo = document.createElement('a');

    headerLogo.href = ".";
    headerLogo.innerText = "Todo List";
    headerLogo.id = "logo";
    
    header.appendChild(divHeader);
    divHeader.appendChild(headerLogo);

    return header;
}

function createFooter() {
    const footer = document.createElement('footer');
    const divFooter = document.createElement('div');
    const footerLink = document.createElement('a');

    footerLink.href = "https://github.com/rudnam/odin-todo-list";
    footerLink.innerText = "Github repo";
    
    footer.appendChild(divFooter);
    divFooter.appendChild(footerLink);

    return footer;
}

function initialize() {
    const content = document.createElement('div');

    content.id = 'content';

    document.body.appendChild(createHeader());
    document.body.appendChild(content);
    document.body.appendChild(createFooter());

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
        this.completed = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    completeItem(item) {
        this.items = this.items.filter((i) => i.id != item.id);
        this.completed.push(item);
    }

    recoverItem(item) {
        this.completed = this.completed.filter((i) => i.id != item.id);
        this.items.push(item);
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
        const lists = [];

        data.forEach(function(list) {
            const newList = new _lists__WEBPACK_IMPORTED_MODULE_0__["default"](list.name);

            list.items.forEach(function(task) {
                const newTodo = new _todos__WEBPACK_IMPORTED_MODULE_1__["default"](task.title,task.description,newList.id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXVCLG9CQUFvQixHQUFHLFNBQVMsNEZBQTRGLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsdURBQXVELDBCQUEwQiw0Q0FBNEMsS0FBSyxnQkFBZ0IsMEJBQTBCLHlDQUF5Qyx3QkFBd0IsR0FBRyxPQUFPLGdCQUFnQixpQkFBaUIsR0FBRyxPQUFPLDRCQUE0QixxQkFBcUIsR0FBRyxhQUFhLGlDQUFpQyxHQUFHLFFBQVEsNEJBQTRCLEdBQUcsV0FBVyxvQkFBb0IsdUJBQXVCLHNCQUFzQix1QkFBdUIsc0JBQXNCLDJCQUEyQixxQkFBcUIsd0JBQXdCLCtCQUErQix1Q0FBdUMsMkNBQTJDLHNCQUFzQix5QkFBeUIsR0FBRyxVQUFVLHFCQUFxQixvQkFBb0IsMkJBQTJCLDZCQUE2Qix3QkFBd0IscUNBQXFDLDBCQUEwQixHQUFHLFlBQVksd0JBQXdCLHdCQUF3Qix5QkFBeUIsb0JBQW9CLHlCQUF5QixvQ0FBb0MsR0FBRyxjQUFjLHlCQUF5Qix1QkFBdUIsR0FBRyxZQUFZLHdCQUF3QixHQUFHLGdCQUFnQix1QkFBdUIsNkJBQTZCLG9CQUFvQiw2QkFBNkIsK0JBQStCLDhCQUE4QixnQkFBZ0IsdUJBQXVCLHdCQUF3QixHQUFHLHFCQUFxQixvQ0FBb0Msc0JBQXNCLEdBQUcscUJBQXFCLHlCQUF5QixHQUFHLHFCQUFxQix1QkFBdUIscUJBQXFCLDJCQUEyQixzQkFBc0IsdUJBQXVCLG1CQUFtQixHQUFHLFdBQVcsb0NBQW9DLHlCQUF5QixvQkFBb0IsNkNBQTZDLGtCQUFrQixvQkFBb0IsR0FBRyxpQkFBaUIsd0JBQXdCLG9CQUFvQixHQUFHLG1CQUFtQix3QkFBd0Isc0JBQXNCLG1CQUFtQiwwQkFBMEIsR0FBRyxhQUFhLG9CQUFvQixHQUFHLGFBQWEseUJBQXlCLG9CQUFvQixHQUFHLGNBQWMseUJBQXlCLG1CQUFtQixvQkFBb0IseUJBQXlCLGlCQUFpQixvQ0FBb0Msb0JBQW9CLDZCQUE2QixHQUFHLG9CQUFvQix3QkFBd0IsbUJBQW1CLEdBQUcsbUJBQW1CLG9CQUFvQiw2QkFBNkIsR0FBRyxzQkFBc0Isc0JBQXNCLG1CQUFtQixHQUFHLHNCQUFzQix1QkFBdUIsb0JBQW9CLDZCQUE2QixHQUFHLHlCQUF5QixzQkFBc0IsbUJBQW1CLEdBQUcsV0FBVyxvQkFBb0IseUJBQXlCLG9CQUFvQixHQUFHLGdCQUFnQixvQkFBb0IsNkJBQTZCLG9CQUFvQixHQUFHLGdCQUFnQix3QkFBd0IsOEJBQThCLDBCQUEwQiw0QkFBNEIsR0FBRyxvQkFBb0IsOEJBQThCLDhCQUE4Qix1QkFBdUIsMkJBQTJCLDRCQUE0QixtQ0FBbUMsR0FBRyxxQkFBcUIsK0JBQStCLG9CQUFvQiw2QkFBNkIsb0JBQW9CLGVBQWUsR0FBRyxzQkFBc0IsbUJBQW1CLHFCQUFxQiwyQkFBMkIsc0JBQXNCLHVCQUF1QixtQkFBbUIsR0FBRyxxQkFBcUIsMEJBQTBCLDJCQUEyQix3QkFBd0IsdUJBQXVCLG1CQUFtQixtQkFBbUIsb0JBQW9CLHVCQUF1QixtQkFBbUIsR0FBRyw2Q0FBNkMscUJBQXFCLG1CQUFtQiwwQkFBMEIsR0FBRyxpQkFBaUIsd0JBQXdCLHlCQUF5QixHQUFHLGVBQWUsb0NBQW9DLG9CQUFvQix5QkFBeUIsR0FBRyxpQ0FBaUMsb0NBQW9DLHNCQUFzQixHQUFHLHFCQUFxQixvQkFBb0IsR0FBRyxvQkFBb0Isb0JBQW9CLDZCQUE2QixnQkFBZ0IsR0FBRyxxQkFBcUIsdUJBQXVCLHFCQUFxQiwyQkFBMkIsc0JBQXNCLHVCQUF1QixtQkFBbUIsR0FBRyxvQkFBb0IscUJBQXFCLDJCQUEyQix1QkFBdUIsbUJBQW1CLHFCQUFxQixvQkFBb0IsdUJBQXVCLG1CQUFtQixHQUFHLDZCQUE2QixvQ0FBb0Msc0JBQXNCLEdBQUcsWUFBWSx5QkFBeUIsdUJBQXVCLG9CQUFvQixHQUFHLHFCQUFxQjtBQUM1K1g7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNaMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0FBRTRCO0FBQzBCO0FBQ2Y7QUFDQTtBQUNGO0FBQ0Y7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkNBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0RBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhDQUFLO0FBQzdCO0FBQ0E7QUFDQSwyQkFBMkIsOENBQUs7QUFDaEM7QUFDQTtBQUNBLDJCQUEyQixzREFBWTtBQUN2QztBQUNBO0FBQ0EsWUFBWSxrREFBZ0I7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0RBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNENBQUc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksZ0RBQWM7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixnREFBYzs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQSxDQUFDOztBQUVjO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFUQTs7QUFFMkI7QUFDQTtBQUNVOztBQUU5QjtBQUNQLGdCQUFnQixzREFBZ0I7O0FBRWhDO0FBQ0EsNEJBQTRCLDhDQUFJO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qiw4Q0FBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx3REFBa0I7QUFDMUI7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakVEOztBQUUwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUksK0NBQU07O0FBRVY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7O0FBRTJCO0FBQ0E7O0FBRXBCOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyw4Q0FBSTs7QUFFcEM7QUFDQSxvQ0FBb0MsOENBQUk7QUFDeEM7QUFDQSxhQUFhOztBQUViO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsWUFBWTtBQUNaO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0Q7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3FDO0FBQ1Y7O0FBRTNCLHVEQUFVLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9saXN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL01hdHRlci1SZWd1bGFyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL01hdHRlci1Cb2xkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZS5jc3MgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IE1hdHRlcjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogTWF0dGVyO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXdoaXRlOiAjZmZmO1xcbiAgICAtLWJsYWNrOiAjMWYyMDI4O1xcbiAgICAtLWJsdWU6ICMzNmEzZmY7XFxuICAgIC0tbGlnaHQ6ICNhOWFkYzE7XFxuICAgIC0tZ3JleTogIzJlMzAzOTtcXG4gICAgLS1saWdodC1zdWI6ICM3YTdjODU7XFxuICAgIC0tcmVkOiAjZmY0NTQ1O1xcbiAgICAtLXllbGxvdzogI2ZmZDY0NDtcXG4gICAgLS10cmFuc3BhcmVudDogIzJlMzAzOTQxO1xcbiAgICAtLWRlZmF1bHQtd2lkdGg6IG1pbig4MDBweCwxMDAlKTtcXG5cXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNYXR0ZXJcXFwiLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiN0aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweCAwcHggMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDI1MHB4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuI2FkZC1saXN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC1saXN0LWxhYmVsIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYWRkLWxpc3QtaW5wdXQge1xcbiAgICBwYWRkaW5nOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KVxcbn1cXG5cXG4ubGlzdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubGlzdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubGlzdC1vcHRpb25zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4ubGlzdCAqIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmFuY2hvciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnBvcG92ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBvcG92ZXItbGFiZWwge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucG9wb3Zlci1zb3J0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBvcG92ZXItc29ydCBsaSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucG9wb3Zlci1vcHRpb25zIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBvcG92ZXItb3B0aW9ucyBsaSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvZG8tYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50b2RvLWRlc2Mge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LXN1Yik7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLmhpZGUtb3ZlcmZsb3cge1xcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxufVxcblxcbi50b2RvLWVkaXQtYm9keSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWVkaXQtdGl0bGUge1xcbiAgICBtYXJnaW46IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50b2RvLWVkaXQtZGVzYyB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnRvZG8tbWFyaywgLnRvZG8tY2xvc2UsIC5hZGQtdG9kby1tYXJrIHtcXG4gICAgbWFyZ2luOiBhdXRvIDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLnRvZG8tY2xvc2Uge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uYWRkLXRvZG8ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA3LjVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYWRkLXRvZG86aG92ZXI6bm90KDpmb2N1cykge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRvZG8tbGFiZWwge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmFkZC10b2RvLWlucHV0IHtcXG4gICAgcGFkZGluZzogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmFkZC10b2RvLWFyZWEge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnRvZG86aG92ZXI6bm90KDpmb2N1cykge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7QUFDZDtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBcUM7RUFDdkM7O0FBRUY7SUFDSSxtQkFBbUI7SUFDbkIsNENBQWtDO0lBQ2xDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGdDQUFnQzs7SUFFaEMsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNq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QUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzdHlsZS5jc3MgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IE1hdHRlcjtcXG4gICAgc3JjOiB1cmwoLi4vZm9udHMvTWF0dGVyLVJlZ3VsYXIub3RmKTtcXG4gIH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IE1hdHRlcjtcXG4gICAgc3JjOiB1cmwoLi4vZm9udHMvTWF0dGVyLUJvbGQub3RmKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0td2hpdGU6ICNmZmY7XFxuICAgIC0tYmxhY2s6ICMxZjIwMjg7XFxuICAgIC0tYmx1ZTogIzM2YTNmZjtcXG4gICAgLS1saWdodDogI2E5YWRjMTtcXG4gICAgLS1ncmV5OiAjMmUzMDM5O1xcbiAgICAtLWxpZ2h0LXN1YjogIzdhN2M4NTtcXG4gICAgLS1yZWQ6ICNmZjQ1NDU7XFxuICAgIC0teWVsbG93OiAjZmZkNjQ0O1xcbiAgICAtLXRyYW5zcGFyZW50OiAjMmUzMDM5NDE7XFxuICAgIC0tZGVmYXVsdC13aWR0aDogbWluKDgwMHB4LDEwMCUpO1xcblxcbiAgICBmb250LWZhbWlseTogXFxcIk1hdHRlclxcXCIsc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDIwcHggNTBweDtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBncmlkLWF1dG8tY29sdW1uczogMjUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4jYWRkLWxpc3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLWxpc3QtbGFiZWwge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNhZGQtbGlzdC1pbnB1dCB7XFxuICAgIHBhZGRpbmc6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5saXN0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpXFxufVxcblxcbi5saXN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5saXN0LW9wdGlvbnMge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5saXN0ICoge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYW5jaG9yIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucG9wb3ZlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucG9wb3Zlci1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wb3BvdmVyLXNvcnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucG9wb3Zlci1zb3J0IGxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wb3BvdmVyLW9wdGlvbnMge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucG9wb3Zlci1vcHRpb25zIGxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50b2RvIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9kby1ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRvZG8tZGVzYyB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtc3ViKTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uaGlkZS1vdmVyZmxvdyB7XFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG59XFxuXFxuLnRvZG8tZWRpdC1ib2R5IHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tZWRpdC10aXRsZSB7XFxuICAgIG1hcmdpbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRvZG8tZWRpdC1kZXNjIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udG9kby1tYXJrLCAudG9kby1jbG9zZSwgLmFkZC10b2RvLW1hcmsge1xcbiAgICBtYXJnaW46IGF1dG8gMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4udG9kby1jbG9zZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5hZGQtdG9kbyB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDcuNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5hZGQtdG9kbzpob3Zlcjpub3QoOmZvY3VzKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdG9kby1sYWJlbCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5hZGQtdG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8taW5wdXQge1xcbiAgICBwYWRkaW5nOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYWRkLXRvZG8tYXJlYSB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udG9kbzpob3Zlcjpub3QoOmZvY3VzKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFVJLmpzXG5cbmltcG9ydCB7IGFwcCB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IGNoZWNrT3V0bGluZSBmcm9tICcuL2ltYWdlcy9jaGVja19vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgY2hlY2sgZnJvbSAnLi9pbWFnZXMvY2hlY2suc3ZnJztcbmltcG9ydCBjbG9zZSBmcm9tICcuL2ltYWdlcy9jbG9zZS5zdmcnO1xuaW1wb3J0IG1vcmUgZnJvbSAnLi9pbWFnZXMvbW9yZS5zdmcnO1xuaW1wb3J0IGFkZCBmcm9tICcuL2ltYWdlcy9hZGQuc3ZnJztcblxuY29uc3QgRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVUaXRsZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAgICAgdGl0bGUuaWQgPSAndGl0bGUnO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBcIk15IFRhc2tzXCI7XG4gICAgXG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAgICAgY29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcic7XG4gICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBZGRMaXN0KCkpO1xuICAgIFxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVBZGRMaXN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGFkZExpc3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgYWRkTGlzdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgICAgICBhZGRMaXN0LmlkID0gJ2FkZC1saXN0JztcbiAgICAgICAgYWRkTGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG4gICAgICAgIGFkZExpc3RMYWJlbC5pZCA9ICdhZGQtbGlzdC1sYWJlbCdcbiAgICAgICAgYWRkTGlzdElucHV0LmlkID0gJ2FkZC1saXN0LWlucHV0J1xuXG4gICAgICAgIGFkZExpc3RMYWJlbC5pbm5lclRleHQgPSBcIisgQWRkIG5ldyBsaXN0XCI7XG4gICAgICAgIGFkZExpc3RJbnB1dC5wbGFjZWhvbGRlciA9IFwiTmV3IGxpc3RcIjtcbiAgICAgICAgYWRkTGlzdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgYWRkTGlzdC5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgYWRkTGlzdExhYmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBhZGRMaXN0SW5wdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBhZGRMaXN0SW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWFkZExpc3QuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RMYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWRkTGlzdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09ICdFbnRlcicgJiYgYWRkTGlzdElucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYXBwLmFkZExpc3QoYWRkTGlzdElucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBhZGRMaXN0TGFiZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgYWRkTGlzdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgYWRkTGlzdElucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgYWRkTGlzdC5hcHBlbmRDaGlsZChhZGRMaXN0TGFiZWwpO1xuICAgICAgICBhZGRMaXN0LmFwcGVuZENoaWxkKGFkZExpc3RJbnB1dCk7XG5cbiAgICAgICAgcmV0dXJuIGFkZExpc3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUxpc3QgPSAobGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBkaXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdkxpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGl2TGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBkaXZMaXN0T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCBkaXZMaXN0SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBjb25zdCBwb3BvdmVyID0gY3JlYXRlUG9wb3ZlcihsaXN0KTtcblxuICAgICAgICBkaXZMaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcbiAgICAgICAgZGl2TGlzdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdsaXN0LWhlYWRlcicpO1xuICAgICAgICBkaXZMaXN0VGl0bGUuY2xhc3NMaXN0LmFkZCgnbGlzdC10aXRsZScpO1xuICAgICAgICBkaXZMaXN0T3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdsaXN0LW9wdGlvbnMnKTtcbiAgICAgICAgZGl2TGlzdEl0ZW1zLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbXMnKTtcbiAgICAgICAgZGl2TGlzdFRpdGxlLmlubmVyVGV4dCA9IGxpc3QubmFtZTtcbiAgICAgICAgZGl2TGlzdFRpdGxlLmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcbiAgICAgICAgZGl2TGlzdE9wdGlvbnMuc3JjID0gbW9yZTtcbiAgICAgICAgXG4gICAgICAgIGRpdkxpc3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGlzdC5uYW1lID0gZGl2TGlzdFRpdGxlLmlubmVyVGV4dDtcbiAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGRpdkxpc3RPcHRpb25zLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBwb3BvdmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmICghZGl2TGlzdE9wdGlvbnMuY29udGFpbnMoZS50YXJnZXQpICYmICFwb3BvdmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBwb3BvdmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGl2TGlzdC5hcHBlbmRDaGlsZChkaXZMaXN0SGVhZGVyKTtcbiAgICAgICAgZGl2TGlzdC5hcHBlbmRDaGlsZChkaXZMaXN0SXRlbXMpO1xuICAgICAgICBsaXN0Lml0ZW1zLmZvckVhY2goZnVuY3Rpb24odG9kbykge1xuICAgICAgICAgICAgZGl2TGlzdEl0ZW1zLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG8odG9kbykpO1xuICAgICAgICB9KTtcbiAgICAgICAgZGl2TGlzdEl0ZW1zLmFwcGVuZENoaWxkKGNyZWF0ZUFkZFRvZG8obGlzdC5pZCkpO1xuICAgICAgICBkaXZMaXN0SGVhZGVyLmFwcGVuZENoaWxkKGRpdkxpc3RUaXRsZSk7XG4gICAgICAgIGRpdkxpc3RIZWFkZXIuYXBwZW5kQ2hpbGQoZGl2TGlzdE9wdGlvbnMpO1xuICAgICAgICBkaXZMaXN0SGVhZGVyLmFwcGVuZENoaWxkKHBvcG92ZXIpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRpdkxpc3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSAodGFzaykgPT4ge1xuICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9NYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IHRvZG9Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRvZG9FZGl0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0b2RvRWRpdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgdG9kb0VkaXREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgY29uc3QgdG9kb0Nsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICAgICAgIHRvZG9NYXJrLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbWFyaycpO1xuICAgICAgICB0b2RvQm9keS5jbGFzc0xpc3QuYWRkKCd0b2RvLWJvZHknKTtcbiAgICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcbiAgICAgICAgdG9kb0Rlc2MuY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjJyk7XG4gICAgICAgIHRvZG9EZXNjLmNsYXNzTGlzdC5hZGQoJ2hpZGUtb3ZlcmZsb3cnKTtcbiAgICAgICAgdG9kb0VkaXRCb2R5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWRpdC1ib2R5Jyk7XG4gICAgICAgIHRvZG9FZGl0VGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LXRpdGxlJyk7XG4gICAgICAgIHRvZG9FZGl0RGVzYy5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQtZGVzYycpO1xuICAgICAgICB0b2RvQ2xvc2UuY2xhc3NMaXN0LmFkZCgndG9kby1jbG9zZScpO1xuICAgICAgICB0b2RvTWFyay5zcmMgPSBjaGVja091dGxpbmU7XG4gICAgICAgIHRvZG9UaXRsZS5pbm5lclRleHQgPSB0YXNrLnRpdGxlO1xuICAgICAgICB0b2RvRGVzYy5pbm5lclRleHQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICB0b2RvRWRpdFRpdGxlLnBsYWNlaG9sZGVyID0gJ1RpdGxlJztcbiAgICAgICAgdG9kb0VkaXRUaXRsZS52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgICAgIHRvZG9FZGl0RGVzYy5wbGFjZWhvbGRlciA9ICdkZXNjcmlwdGlvbic7XG4gICAgICAgIHRvZG9FZGl0RGVzYy52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIHRvZG9DbG9zZS5zcmMgPSBjbG9zZTtcbiAgICAgICAgXG4gICAgICAgIHRvZG9NYXJrLm9ubW91c2VvdmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0b2RvTWFyay5zcmMgPSBjaGVjaztcbiAgICAgICAgfVxuICAgICAgICB0b2RvTWFyay5vbm1vdXNlb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0b2RvTWFyay5zcmMgPSBjaGVja091dGxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgdG9kb01hcmsub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYXBwLmNvbXBsZXRlVG9kbyh0YXNrKTtcbiAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9kby5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdG9kb0Nsb3NlLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIH1cbiAgICAgICAgdG9kby5vbm1vdXNlb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0b2RvQ2xvc2Uuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICB9XG4gICAgICAgIHRvZG9DbG9zZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhcHAuZGVsZXRlVG9kbyh0YXNrKTtcbiAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0b2RvLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRvZG9Cb2R5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB0b2RvRWRpdEJvZHkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRvZG8uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2sudGl0bGUgPSB0b2RvRWRpdFRpdGxlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gdG9kb0VkaXREZXNjLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0b2RvQm9keS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRWRpdEJvZHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvTWFyayk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0JvZHkpO1xuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9FZGl0Qm9keSk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0Nsb3NlKTtcbiAgICAgICAgdG9kb0JvZHkuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICAgICAgdG9kb0JvZHkuYXBwZW5kQ2hpbGQodG9kb0Rlc2MpO1xuICAgICAgICB0b2RvRWRpdEJvZHkuYXBwZW5kQ2hpbGQodG9kb0VkaXRUaXRsZSk7XG4gICAgICAgIHRvZG9FZGl0Qm9keS5hcHBlbmRDaGlsZCh0b2RvRWRpdERlc2MpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlQWRkVG9kbyA9IChsaXN0aWQpID0+IHtcbiAgICAgICAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBhZGRUb2RvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb01hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICBhZGRUb2RvLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvJyk7XG4gICAgICAgIGFkZFRvZG9NYXJrLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLW1hcmsnKTtcbiAgICAgICAgYWRkVG9kb0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWxhYmVsJyk7XG4gICAgICAgIGFkZFRvZG9Gb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWZvcm0nKTtcbiAgICAgICAgYWRkVG9kb0lucHV0LmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWlucHV0Jyk7XG4gICAgICAgIGFkZFRvZG9BcmVhLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWFyZWEnKTtcbiAgICAgICAgYWRkVG9kb01hcmsuc3JjID0gYWRkO1xuICAgICAgICBhZGRUb2RvTGFiZWwuaW5uZXJUZXh0ID0gXCJBZGQgYSB0YXNrXCI7XG4gICAgICAgIGFkZFRvZG9JbnB1dC5wbGFjZWhvbGRlciA9IFwiVGl0bGVcIjtcbiAgICAgICAgYWRkVG9kb0FyZWEucGxhY2Vob2xkZXIgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgICAgIFxuICAgICAgICBhZGRUb2RvLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBhZGRUb2RvTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGFkZFRvZG9NYXJrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBhZGRUb2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmICghYWRkVG9kby5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9kb0xhYmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICBhZGRUb2RvTWFyay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhZGRUb2RvLm9ua2V5dXAgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT0gJ0VudGVyJyAmJiBhZGRUb2RvSW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhcHAuYWRkVG9kbyhhZGRUb2RvSW5wdXQudmFsdWUsYWRkVG9kb0FyZWEudmFsdWUsbGlzdGlkKTtcbiAgICAgICAgICAgICAgICBhZGRUb2RvTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgYWRkVG9kb01hcmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgYWRkVG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBhZGRUb2RvSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICBhZGRUb2RvQXJlYS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWRkVG9kby5hcHBlbmRDaGlsZChhZGRUb2RvTWFyayk7XG4gICAgICAgIGFkZFRvZG8uYXBwZW5kQ2hpbGQoYWRkVG9kb0xhYmVsKTtcbiAgICAgICAgYWRkVG9kby5hcHBlbmRDaGlsZChhZGRUb2RvRm9ybSk7XG4gICAgICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGFkZFRvZG9JbnB1dCk7XG4gICAgICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGFkZFRvZG9BcmVhKTtcblxuICAgICAgICByZXR1cm4gYWRkVG9kbztcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVQb3BvdmVyID0gKGxpc3QpID0+IHtcbiAgICAgICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHBvcG92ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcG9wb3ZlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwb3BvdmVyU29ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGNvbnN0IHBvcG92ZXJEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgcG9wb3ZlckN1c3RvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IHBvcG92ZXJPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgY29uc3QgcG9wb3ZlckRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IHBvcG92ZXJTZXRjb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2FuY2hvcicpO1xuICAgICAgICBwb3BvdmVyLmNsYXNzTGlzdC5hZGQoJ3BvcG92ZXInKTtcbiAgICAgICAgcG9wb3ZlckxhYmVsLmNsYXNzTGlzdC5hZGQoJ3BvcG92ZXItbGFiZWwnKTtcbiAgICAgICAgcG9wb3ZlclNvcnQuY2xhc3NMaXN0LmFkZCgncG9wb3Zlci1zb3J0Jyk7XG4gICAgICAgIHBvcG92ZXJPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ3BvcG92ZXItb3B0aW9ucycpO1xuICAgICAgICBwb3BvdmVyTGFiZWwuaW5uZXJUZXh0ID0gJ1NvcnQgYnk6J1xuICAgICAgICBwb3BvdmVyRGF0ZS5pbm5lclRleHQgPSAnRGF0ZSc7XG4gICAgICAgIHBvcG92ZXJDdXN0b20uaW5uZXJUZXh0ID0gJ0N1c3RvbSc7XG4gICAgICAgIHBvcG92ZXJEZWxldGUuaW5uZXJUZXh0ID0gJ0RlbGV0ZSBsaXN0JztcbiAgICAgICAgcG9wb3ZlclNldGNvbG9yLmlubmVyVGV4dCA9ICdTZXQgY29sb3InO1xuXG4gICAgICAgIHBvcG92ZXJEZWxldGUub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGFwcC5kZWxldGVMaXN0KGxpc3QpO1xuICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBhbmNob3IuYXBwZW5kQ2hpbGQocG9wb3Zlcik7XG4gICAgICAgIHBvcG92ZXIuYXBwZW5kQ2hpbGQocG9wb3ZlckxhYmVsKTtcbiAgICAgICAgcG9wb3Zlci5hcHBlbmRDaGlsZChwb3BvdmVyU29ydCk7XG4gICAgICAgIHBvcG92ZXIuYXBwZW5kQ2hpbGQocG9wb3Zlck9wdGlvbnMpO1xuICAgICAgICBwb3BvdmVyU29ydC5hcHBlbmRDaGlsZChwb3BvdmVyRGF0ZSk7XG4gICAgICAgIHBvcG92ZXJTb3J0LmFwcGVuZENoaWxkKHBvcG92ZXJDdXN0b20pO1xuICAgICAgICBwb3BvdmVyT3B0aW9ucy5hcHBlbmRDaGlsZChwb3BvdmVyRGVsZXRlKTtcbiAgICAgICAgcG9wb3Zlck9wdGlvbnMuYXBwZW5kQ2hpbGQocG9wb3ZlclNldGNvbG9yKTtcblxuICAgICAgICByZXR1cm4gYW5jaG9yO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBhcHBEYXRhID0gYXBwLmdldENvbnRlbnQoKTtcblxuICAgICAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQuaWQgIT09ICdhZGQtbGlzdCcpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBhcHBEYXRhLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3QoaXRlbSkpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWxpc3QnKSlcbiAgICB9XG5cbiAgICByZXR1cm4ge2NyZWF0ZVRpdGxlLFxuICAgICAgICAgICAgY3JlYXRlQ29udGFpbmVyLFxuICAgICAgICAgICAgdXBkYXRlLH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVUkoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChET00uY3JlYXRlVGl0bGUoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChET00uY3JlYXRlQ29udGFpbmVyKCkpO1xuXG4gICAgRE9NLnVwZGF0ZSgpO1xufSIsIi8vIGFwcC5qc1xuXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0c1wiO1xuaW1wb3J0IFRvRG8gZnJvbSBcIi4vdG9kb3NcIjtcbmltcG9ydCB7IHN0b3JhZ2VzIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5leHBvcnQgY29uc3QgYXBwID0gKCgpID0+IHtcbiAgICBsZXQgbGlzdHMgPSBzdG9yYWdlcy5nZXREYXRhKCkgfHwgW107XG5cbiAgICBjb25zdCBhZGRMaXN0ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG5ldyBMaXN0KG5hbWUpO1xuICAgICAgICBsaXN0cy5wdXNoKG5ld0xpc3QpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlTGlzdCA9IChsaXN0KSA9PiB7XG4gICAgICAgIGxpc3RzID0gbGlzdHMuZmlsdGVyKChpKSA9PiBpLmlkICE9IGxpc3QuaWQpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGxpc3RJZCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBsaXN0SWQpO1xuICAgICAgICBsaXN0cy5mb3JFYWNoKGZ1bmN0aW9uKGxpc3QpIHtcbiAgICAgICAgICAgIGlmIChsaXN0LmlkID09IGxpc3RJZCkge1xuICAgICAgICAgICAgICAgIGxpc3QuYWRkSXRlbShuZXdUb2RvKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGxpc3RzLmZvckVhY2goZnVuY3Rpb24obGlzdCkge1xuICAgICAgICAgICAgaWYgKGxpc3QuaWQgPT0gdG9kby5wYXJlbnRpZCkge1xuICAgICAgICAgICAgICAgIGxpc3QuaXRlbXMgPSBsaXN0Lml0ZW1zLmZpbHRlcigoaSkgPT4gaS5pZCAhPSB0b2RvLmlkKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGVUb2RvID0gKHRvZG8pID0+IHtcbiAgICAgICAgbGlzdHMuZm9yRWFjaChmdW5jdGlvbihsaXN0KSB7XG4gICAgICAgICAgICBpZiAobGlzdC5pZCA9PSB0b2RvLnBhcmVudGlkKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5jb21wbGV0ZUl0ZW0odG9kbyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIHVwZGF0ZUNvbnRlbnQoKTtcbiAgICAgICAgLy8gdGVtcFxuICAgICAgICBjb25zb2xlLmxvZyhbLi4ubGlzdHNdKTtcbiAgICAgICAgcmV0dXJuIFsuLi5saXN0c107XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlQ29udGVudCA9ICgpID0+IHtcbiAgICAgICAgc3RvcmFnZXMuc3RvcmVEYXRhKFsuLi5saXN0c10pO1xuICAgIH1cblxuICAgIHJldHVybiB7YWRkTGlzdCxcbiAgICAgICAgICAgIGRlbGV0ZUxpc3QsXG4gICAgICAgICAgICBhZGRUb2RvLFxuICAgICAgICAgICAgZGVsZXRlVG9kbyxcbiAgICAgICAgICAgIGNvbXBsZXRlVG9kbyxcbiAgICAgICAgICAgIGdldENvbnRlbnQsfVxufSkoKTtcbiIsIi8vIGluaXRpYWxpemUuanNcblxuaW1wb3J0IGxvYWRVSSBmcm9tIFwiLi9VSVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgZGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGhlYWRlckxvZ28uaHJlZiA9IFwiLlwiO1xuICAgIGhlYWRlckxvZ28uaW5uZXJUZXh0ID0gXCJUb2RvIExpc3RcIjtcbiAgICBoZWFkZXJMb2dvLmlkID0gXCJsb2dvXCI7XG4gICAgXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdkhlYWRlcik7XG4gICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckxvZ28pO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGNvbnN0IGRpdkZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICBmb290ZXJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9ydWRuYW0vb2Rpbi10b2RvLWxpc3RcIjtcbiAgICBmb290ZXJMaW5rLmlubmVyVGV4dCA9IFwiR2l0aHViIHJlcG9cIjtcbiAgICBcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGl2Rm9vdGVyKTtcbiAgICBkaXZGb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTGluayk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnRlbnQuaWQgPSAnY29udGVudCc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gICAgbG9hZFVJKCk7XG5cbiAgICByZXR1cm47XG59IiwiLy8gbGlzdHMuanNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuaWQgPSBcImlkXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRJdGVtKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIGNvbXBsZXRlSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcigoaSkgPT4gaS5pZCAhPSBpdGVtLmlkKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICByZWNvdmVySXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gdGhpcy5jb21wbGV0ZWQuZmlsdGVyKChpKSA9PiBpLmlkICE9IGl0ZW0uaWQpO1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgfVxufSIsIi8vIHN0b3JhZ2UuanNcblxuaW1wb3J0IExpc3QgZnJvbSBcIi4vbGlzdHNcIjtcbmltcG9ydCBUb0RvIGZyb20gXCIuL3RvZG9zXCI7XG5cbmV4cG9ydCBjb25zdCBzdG9yYWdlcyA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0ZGF0YScpID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RkYXRhJykpO1xuICAgICAgICBjb25zdCBsaXN0cyA9IFtdO1xuXG4gICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbihsaXN0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdMaXN0ID0gbmV3IExpc3QobGlzdC5uYW1lKTtcblxuICAgICAgICAgICAgbGlzdC5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvRG8odGFzay50aXRsZSx0YXNrLmRlc2NyaXB0aW9uLG5ld0xpc3QuaWQpO1xuICAgICAgICAgICAgICAgIG5ld0xpc3QuYWRkSXRlbShuZXdUb2RvKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGxpc3RzLnB1c2gobmV3TGlzdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGxpc3RzO1xuICAgIH07XG5cbiAgICBjb25zdCBzdG9yZURhdGEgPSAobGlzdHMpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RkYXRhJywgSlNPTi5zdHJpbmdpZnkobGlzdHMpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHtnZXREYXRhLFxuICAgICAgICAgICAgc3RvcmVEYXRhLH07XG59KSgpOyIsIi8vIHRvZG9zLmpzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLHBhcmVudGlkKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmlkID0gXCJpZFwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMik7XG4gICAgICAgIHRoaXMucGFyZW50aWQgPSBwYXJlbnRpZDtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGluZGV4LmpzXG5pbXBvcnQgaW5pdGlhbGl6ZSBmcm9tICcuL2luaXRpYWxpemUnXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcydcblxuaW5pdGlhbGl6ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==