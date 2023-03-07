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
___CSS_LOADER_EXPORT___.push([module.id, "/* style.css */\n@font-face {\n  font-family: Matter;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: Matter;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: bold;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nul {\n  list-style-type: none;\n}\n\n:root {\n  --white: #fff;\n  --black: #1f2028;\n  --blue: #36a3ff;\n  --light: #a9adc1;\n  --grey: #2e3039;\n  --light-sub: #7a7c85;\n  --red: #ff4545;\n  --yellow: #ffd644;\n  --transparent: #2e303941;\n  --default-width: min(800px, 100%);\n\n  font-family: \"Matter\", sans-serif;\n  font-size: 16px;\n  overflow-x: hidden;\n}\n\nbody {\n  margin: 0 auto;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: var(--black);\n  color: var(--light);\n}\n\nheader {\n  font-weight: bold;\n  font-size: 1.5rem;\n  color: var(--blue);\n  padding: 10px;\n  padding-left: 50px;\n  border: 1px solid var(--grey);\n}\n\n#content {\n  padding: 20px 50px;\n  min-height: 100%;\n}\n\n#title {\n  font-size: 1.2rem;\n}\n\n#container {\n  margin-top: 10px;\n  padding: 10px 0px 20px;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 300px;\n  align-items: flex-start;\n  gap: 15px;\n  overflow-x: auto;\n  min-height: 200px;\n}\n\n#add-list:hover {\n  background-color: var(--grey);\n  cursor: pointer;\n}\n\n#add-list-label {\n  text-align: center;\n}\n\n#add-list-input {\n  padding: inherit;\n  color: inherit;\n  font-family: inherit;\n  font-size: 1rem;\n  background: none;\n  border: none;\n}\n\n.list {\n  border: 1px solid var(--grey);\n  border-radius: 7px;\n  padding: 10px;\n  background-color: var(--transparent);\n}\n\n.list-header {\n  display: flex;\n}\n\n.list-title {\n  font-size: 1.1rem;\n  padding: 10px;\n  margin: none;\n  color: inherit;\n  font-family: inherit;\n  background: none;\n  border: none;\n}\n\n.list-options {\n  margin: auto;\n  margin-right: 0px;\n  cursor: pointer;\n  height: 100%;\n  aspect-ratio: 1 / 1;\n}\n\n.list * {\n  outline: none;\n}\n\n.anchor {\n  position: relative;\n  display: none;\n}\n\n.popover {\n  border-radius: 5px;\n  width: 100px;\n  padding: 10px;\n  position: absolute;\n  left: 25px;\n  background-color: var(--grey);\n  display: flex;\n  flex-direction: column;\n}\n\n.popover-label {\n  font-size: 0.8rem;\n  padding: 5px;\n}\n\n.popover-sort {\n  display: flex;\n  flex-direction: column;\n}\n\n.popover-sort li {\n  cursor: pointer;\n  padding: 5px;\n}\n\n.popover-options {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.popover-options li {\n  cursor: pointer;\n  padding: 5px;\n}\n\n.popover-delete {\n  color: var(--red);\n}\n\n.popover-delete:hover {\n  color: red !important;\n}\n\n.todo {\n  padding: 10px;\n  border-radius: 5px;\n  display: flex;\n}\n\n.todo-body {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n\n.todo-desc {\n  font-size: 0.8rem;\n  color: var(--light-sub);\n  white-space: normal;\n  word-wrap: break-word;\n}\n\n.hide-overflow {\n  overflow-wrap: anywhere;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.todo-edit-body {\n  width: calc(100% - 60px);\n  display: none;\n  flex-direction: column;\n  padding: 10px;\n  gap: 5px;\n}\n\n.todo-edit-title {\n  margin: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: 1rem;\n  background: none;\n  border: none;\n}\n\n.todo-edit-desc {\n  color: var(--light);\n  font-family: inherit;\n  font-size: 0.8rem;\n  background: none;\n  border: none;\n  height: 80px;\n  outline: none;\n  box-shadow: none;\n  resize: none;\n}\n\n.todo-mark,\n.todo-close,\n.add-todo-mark,\n.todo-edit-color-reset {\n  margin: auto 0;\n  height: 100%;\n  aspect-ratio: 1 / 1;\n}\n\n.todo-edit-date {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.todo-edit-date-input {\n  width: 110px;\n}\n\n.todo-edit-priority {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.todo-edit-priority-input {\n  width: 50px; \n}\n\n.todo-edit-color {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.todo-edit-color-input {\n  height: 1.3rem;\n}\n\n.todo-edit-color-reset:hover {\n  src: local('./images/reset_white.svg');\n}\n\n.todo-close {\n  margin-left: auto;\n  visibility: hidden;\n}\n\n.add-todo {\n  padding: 10px 10px 10px 7.5px;\n  display: flex;\n  border-radius: 5px;\n}\n\n.add-todo:hover:not(:focus) {\n  background-color: var(--grey);\n  cursor: pointer;\n}\n\n.add-todo-label {\n  padding: 10px;\n}\n\n.add-todo-form {\n  display: none;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.add-todo-input {\n  padding: inherit;\n  color: inherit;\n  font-family: inherit;\n  font-size: 1rem;\n  background: none;\n  border: none;\n}\n\n.add-todo-area {\n  color: inherit;\n  font-family: inherit;\n  background: none;\n  border: none;\n  overflow: auto;\n  outline: none;\n  box-shadow: none;\n  resize: none;\n}\n\n.add-todo-date {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.add-todo-date-input {\n  width: 110px;\n}\n\n.add-todo-priority {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.add-todo-priority-input {\n  width: 50px;\n}\n\n.add-todo-color {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.add-todo-color-input {\n  height: 1.3rem;\n}\n\n.todo:hover:not(:focus) {\n  background-color: var(--grey);\n  cursor: pointer;\n}\n\nfooter {\n  text-align: center;\n  margin-top: auto;\n  padding: 10px;\n}\n\n.popover li:hover {\n  color: var(--white);\n  cursor: pointer;\n}\n\n.enabled {\n  text-decoration: underline;\n  font-weight: 600;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["/* style.css */\n@font-face {\n  font-family: Matter;\n  src: url(../fonts/Matter-Regular.otf);\n}\n\n@font-face {\n  font-family: Matter;\n  src: url(../fonts/Matter-Bold.otf);\n  font-weight: bold;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nul {\n  list-style-type: none;\n}\n\n:root {\n  --white: #fff;\n  --black: #1f2028;\n  --blue: #36a3ff;\n  --light: #a9adc1;\n  --grey: #2e3039;\n  --light-sub: #7a7c85;\n  --red: #ff4545;\n  --yellow: #ffd644;\n  --transparent: #2e303941;\n  --default-width: min(800px, 100%);\n\n  font-family: \"Matter\", sans-serif;\n  font-size: 16px;\n  overflow-x: hidden;\n}\n\nbody {\n  margin: 0 auto;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: var(--black);\n  color: var(--light);\n}\n\nheader {\n  font-weight: bold;\n  font-size: 1.5rem;\n  color: var(--blue);\n  padding: 10px;\n  padding-left: 50px;\n  border: 1px solid var(--grey);\n}\n\n#content {\n  padding: 20px 50px;\n  min-height: 100%;\n}\n\n#title {\n  font-size: 1.2rem;\n}\n\n#container {\n  margin-top: 10px;\n  padding: 10px 0px 20px;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 300px;\n  align-items: flex-start;\n  gap: 15px;\n  overflow-x: auto;\n  min-height: 200px;\n}\n\n#add-list:hover {\n  background-color: var(--grey);\n  cursor: pointer;\n}\n\n#add-list-label {\n  text-align: center;\n}\n\n#add-list-input {\n  padding: inherit;\n  color: inherit;\n  font-family: inherit;\n  font-size: 1rem;\n  background: none;\n  border: none;\n}\n\n.list {\n  border: 1px solid var(--grey);\n  border-radius: 7px;\n  padding: 10px;\n  background-color: var(--transparent);\n}\n\n.list-header {\n  display: flex;\n}\n\n.list-title {\n  font-size: 1.1rem;\n  padding: 10px;\n  margin: none;\n  color: inherit;\n  font-family: inherit;\n  background: none;\n  border: none;\n}\n\n.list-options {\n  margin: auto;\n  margin-right: 0px;\n  cursor: pointer;\n  height: 100%;\n  aspect-ratio: 1 / 1;\n}\n\n.list * {\n  outline: none;\n}\n\n.anchor {\n  position: relative;\n  display: none;\n}\n\n.popover {\n  border-radius: 5px;\n  width: 100px;\n  padding: 10px;\n  position: absolute;\n  left: 25px;\n  background-color: var(--grey);\n  display: flex;\n  flex-direction: column;\n}\n\n.popover-label {\n  font-size: 0.8rem;\n  padding: 5px;\n}\n\n.popover-sort {\n  display: flex;\n  flex-direction: column;\n}\n\n.popover-sort li {\n  cursor: pointer;\n  padding: 5px;\n}\n\n.popover-options {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.popover-options li {\n  cursor: pointer;\n  padding: 5px;\n}\n\n.popover-delete {\n  color: var(--red);\n}\n\n.popover-delete:hover {\n  color: red !important;\n}\n\n.todo {\n  padding: 10px;\n  border-radius: 5px;\n  display: flex;\n}\n\n.todo-body {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n\n.todo-desc {\n  font-size: 0.8rem;\n  color: var(--light-sub);\n  white-space: normal;\n  word-wrap: break-word;\n}\n\n.hide-overflow {\n  overflow-wrap: anywhere;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.todo-edit-body {\n  width: calc(100% - 60px);\n  display: none;\n  flex-direction: column;\n  padding: 10px;\n  gap: 5px;\n}\n\n.todo-edit-title {\n  margin: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: 1rem;\n  background: none;\n  border: none;\n}\n\n.todo-edit-desc {\n  color: var(--light);\n  font-family: inherit;\n  font-size: 0.8rem;\n  background: none;\n  border: none;\n  height: 80px;\n  outline: none;\n  box-shadow: none;\n  resize: none;\n}\n\n.todo-mark,\n.todo-close,\n.add-todo-mark,\n.todo-edit-color-reset {\n  margin: auto 0;\n  height: 100%;\n  aspect-ratio: 1 / 1;\n}\n\n.todo-edit-date {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.todo-edit-date-input {\n  width: 110px;\n}\n\n.todo-edit-priority {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.todo-edit-priority-input {\n  width: 50px; \n}\n\n.todo-edit-color {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.todo-edit-color-input {\n  height: 1.3rem;\n}\n\n.todo-edit-color-reset:hover {\n  src: local('./images/reset_white.svg');\n}\n\n.todo-close {\n  margin-left: auto;\n  visibility: hidden;\n}\n\n.add-todo {\n  padding: 10px 10px 10px 7.5px;\n  display: flex;\n  border-radius: 5px;\n}\n\n.add-todo:hover:not(:focus) {\n  background-color: var(--grey);\n  cursor: pointer;\n}\n\n.add-todo-label {\n  padding: 10px;\n}\n\n.add-todo-form {\n  display: none;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.add-todo-input {\n  padding: inherit;\n  color: inherit;\n  font-family: inherit;\n  font-size: 1rem;\n  background: none;\n  border: none;\n}\n\n.add-todo-area {\n  color: inherit;\n  font-family: inherit;\n  background: none;\n  border: none;\n  overflow: auto;\n  outline: none;\n  box-shadow: none;\n  resize: none;\n}\n\n.add-todo-date {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.add-todo-date-input {\n  width: 110px;\n}\n\n.add-todo-priority {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.add-todo-priority-input {\n  width: 50px;\n}\n\n.add-todo-color {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.add-todo-color-input {\n  height: 1.3rem;\n}\n\n.todo:hover:not(:focus) {\n  background-color: var(--grey);\n  cursor: pointer;\n}\n\nfooter {\n  text-align: center;\n  margin-top: auto;\n  padding: 10px;\n}\n\n.popover li:hover {\n  color: var(--white);\n  cursor: pointer;\n}\n\n.enabled {\n  text-decoration: underline;\n  font-weight: 600;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _images_close_white_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/close_white.svg */ "./src/images/close_white.svg");
/* harmony import */ var _images_more_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/more.svg */ "./src/images/more.svg");
/* harmony import */ var _images_add_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/add.svg */ "./src/images/add.svg");
/* harmony import */ var _images_reset_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/reset.svg */ "./src/images/reset.svg");
/* harmony import */ var _images_reset_white_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/reset_white.svg */ "./src/images/reset_white.svg");
/* eslint-disable no-use-before-define */
// UI.js











const DOM = (() => {

    const update = () => {
        const container = document.querySelector('#container');
        const appData = _app__WEBPACK_IMPORTED_MODULE_0__["default"].getContent();

        while (container.firstChild.id !== 'add-list') {
            container.removeChild(container.firstChild);
        }

        appData.forEach((item) => {
            container.appendChild(createList(item));
        });

        container.appendChild(document.querySelector('#add-list'));
    };

    const createTitle = () => {
        const title = document.createElement('div');

        title.id = 'title';
        title.innerText = 'My Tasks';

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
        addListLabel.id = 'add-list-label';
        addListInput.id = 'add-list-input';

        addListLabel.innerText = '+ Add new list';
        addListInput.placeholder = 'New list';
        addListInput.style.display = 'none';

        addList.onclick = () => {
            addListLabel.style.display = 'none';
            addListInput.style.display = 'block';
            addListInput.focus();
            document.body.onclick = (e) => {
                if (!addList.contains(e.target)) {
                    addListLabel.style.display = 'block';
                    addListInput.style.display = 'none';
                }
            };
        };

        addListInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter' && addListInput.value) {
                _app__WEBPACK_IMPORTED_MODULE_0__["default"].addList(addListInput.value);
                addListLabel.style.display = 'block';
                addListInput.style.display = 'none';
                addListInput.value = '';
                update();
            }
        });

        addList.appendChild(addListLabel);
        addList.appendChild(addListInput);

        return addList;
    };

    const createList = (list) => {
        const divList = document.createElement('div');
        const divListHeader = document.createElement('div');
        const divListTitle = document.createElement('input');
        const divListOptions = document.createElement('img');
        const divListItems = document.createElement('ul');
        const popover = createPopover(list);

        divList.classList.add('list');
        divListHeader.classList.add('list-header');
        divListTitle.classList.add('list-title');
        divListOptions.classList.add('list-options');
        divListItems.classList.add('list-items');
        divListTitle.value = list.name;
        divListTitle.placeholder = 'Untitled';
        divListOptions.src = _images_more_svg__WEBPACK_IMPORTED_MODULE_5__;

        divListTitle.addEventListener('focusout', () => {
            const listObj = list;
            listObj.name = divListTitle.value;
            update();
        });

        divListOptions.onclick = () => {
            popover.style.display = 'block';
            document.body.onclick = (e) => {
                if (!divListOptions.contains(e.target) && !popover.contains(e.target)) {
                    popover.style.display = 'none';
                }
            };
        };

        divList.appendChild(divListHeader);
        divList.appendChild(divListItems);
        list.items.forEach((todo) => {
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
        const todoDate = document.createElement('p');
        const todoEditBody = document.createElement('div');
        const todoEditTitle = document.createElement('input');
        const todoEditDesc = document.createElement('textarea');
        const todoEditDate = document.createElement('div');
        const todoEditDateLabel = document.createElement('p');
        const todoEditDateInput = document.createElement('input');
        const todoEditPriority = document.createElement('div');
        const todoEditPriorityLabel = document.createElement('p');
        const todoEditPriorityInput = document.createElement('input');
        const todoEditColor = document.createElement('div');
        const todoEditColorLabel = document.createElement('p');
        const todoEditColorInput = document.createElement('input');
        const todoEditColorReset = document.createElement('img');
        const todoClose = document.createElement('img');

        todo.classList.add('todo');
        todoMark.classList.add('todo-mark');
        todoBody.classList.add('todo-body');
        todoTitle.classList.add('todo-title');
        todoDesc.classList.add('todo-desc');
        todoDesc.classList.add('hide-overflow');
        todoDate.classList.add('todo-date');
        todoEditBody.classList.add('todo-edit-body');
        todoEditTitle.classList.add('todo-edit-title');
        todoEditDesc.classList.add('todo-edit-desc');
        todoEditDate.classList.add('todo-edit-date');
        todoEditDateLabel.classList.add('todo-edit-date-label');
        todoEditDateInput.classList.add('todo-edit-date-input');
        todoEditPriority.classList.add('todo-edit-priority');
        todoEditPriorityLabel.classList.add('todo-edit-priority-label');
        todoEditPriorityInput.classList.add('todo-edit-priority-input');
        todoEditColor.classList.add('todo-edit-color');
        todoEditColorLabel.classList.add('todo-edit-color-label');
        todoEditColorInput.classList.add('todo-edit-color-input');
        todoEditColorReset.classList.add('todo-edit-color-reset');
        todoClose.classList.add('todo-close');
        todoMark.src = _images_check_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
        todoTitle.innerText = task.title;
        todoTitle.style.color = task.color;
        todoDesc.innerText = task.description;
        todoDate.innerHTML = task.dueDate ? `Due: <i>${task.dueDate}</i>` : '';
        todoEditTitle.placeholder = 'Title';
        todoEditTitle.value = task.title;
        todoEditTitle.style.color = task.color;
        todoEditDesc.placeholder = 'description';
        todoEditDesc.value = task.description;
        todoEditDateLabel.innerText = 'Date: ';
        todoEditDateInput.type = 'date';
        todoEditDateInput.value = task.dueDate;
        todoEditPriorityLabel.innerText = 'Priority: ';
        todoEditPriorityInput.type = 'number';
        todoEditPriorityInput.value = task.priority || 0;
        todoEditColorLabel.innerText = 'Color: ';
        todoEditColorInput.type = 'color';
        todoEditColorInput.value = task.color || '#a9adc1';
        todoEditColorReset.src = _images_reset_svg__WEBPACK_IMPORTED_MODULE_7__
        todoEditColorReset.style.display = task.color === '#a9adc1' ? 'none' : 'block';
        todoClose.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_3__;

        todoMark.onmouseover = () => {
            todoMark.src = _images_check_svg__WEBPACK_IMPORTED_MODULE_2__;
        };
        todoMark.onmouseout = () => {
            todoMark.src = _images_check_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
        };
        todoMark.onclick = () => {
            _app__WEBPACK_IMPORTED_MODULE_0__["default"].completeTodo(task);
            update();
        };

        todoEditColorInput.onchange = () => {
            if (todoEditColorInput.value === '#a9adc1') {
                todoEditColorReset.style.display = 'none';
            } else {
                todoEditColorReset.style.display = 'block';
            }
            todoEditTitle.style.color = todoEditColorInput.value;
        }

        todoEditColorReset.onmouseover = () => {
            todoEditColorReset.src = _images_reset_white_svg__WEBPACK_IMPORTED_MODULE_8__;
        };
        todoEditColorReset.onmouseout = () => {
            todoEditColorReset.src = _images_reset_svg__WEBPACK_IMPORTED_MODULE_7__;
        };
        todoEditColorReset.onclick = () => {
            todoEditColorInput.value = '#a9adc1';
            todoEditTitle.style.color = todoEditColorInput.value;
            todoEditColorReset.style.display = 'none';
        };


        todo.onmouseover = () => {
            todoClose.style.visibility = 'visible';
        };
        todo.onmouseout = () => {
            todoClose.style.visibility = 'hidden';
        };

        todoClose.onmouseover = () => {
            todoClose.src = _images_close_white_svg__WEBPACK_IMPORTED_MODULE_4__;
        };
        todoClose.onmouseout = () => {
            todoClose.src = _images_close_svg__WEBPACK_IMPORTED_MODULE_3__;
        };
        todoClose.onclick = () => {
            _app__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodo(task);
            update();
        };

        todo.onclick = () => {
            todoBody.style.display = 'none';
            todoEditBody.style.display = 'flex';
            document.body.onclick = (e) => {
                if (!todo.contains(e.target)) {
                    _app__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(
                        task,
                        todoEditTitle.value,
                        todoEditDesc.value,
                        todoEditDateInput.value,
                        todoEditPriorityInput.value,
                        todoEditColorInput.value
                    );
                    todoBody.style.display = 'flex';
                    todoEditBody.style.display = 'none';
                    update();
                }
            };
        };

        todo.appendChild(todoMark);
        todo.appendChild(todoBody);
        todo.appendChild(todoEditBody);
        todo.appendChild(todoClose);
        todoBody.appendChild(todoTitle);
        todoBody.appendChild(todoDesc);
        todoBody.appendChild(todoDate);
        todoEditBody.appendChild(todoEditTitle);
        todoEditBody.appendChild(todoEditDesc);
        todoEditBody.appendChild(todoEditDate);
        todoEditBody.appendChild(todoEditPriority);
        todoEditBody.appendChild(todoEditColor);
        todoEditDate.appendChild(todoEditDateLabel);
        todoEditDate.appendChild(todoEditDateInput);
        todoEditPriority.appendChild(todoEditPriorityLabel);
        todoEditPriority.appendChild(todoEditPriorityInput);
        todoEditColor.appendChild(todoEditColorLabel);
        todoEditColor.appendChild(todoEditColorInput);
        todoEditColor.appendChild(todoEditColorReset);

        return todo;
    };

    const createAddTodo = (listid) => {
        const addTodo = document.createElement('div');
        const addTodoLabel = document.createElement('p');
        const addTodoForm = document.createElement('div');
        const addTodoInput = document.createElement('input');
        const addTodoArea = document.createElement('textarea');
        const addTodoDate = document.createElement('div');
        const addTodoDateLabel = document.createElement('p');
        const addTodoDateInput = document.createElement('input');
        const addTodoPriority = document.createElement('div');
        const addTodoPriorityLabel = document.createElement('p');
        const addTodoPriorityInput = document.createElement('input');
        const addTodoColor = document.createElement('div');
        const addTodoColorLabel = document.createElement('p');
        const addTodoColorInput = document.createElement('input');
        const addTodoMark = document.createElement('img');

        addTodo.classList.add('add-todo');
        addTodoMark.classList.add('add-todo-mark');
        addTodoLabel.classList.add('add-todo-label');
        addTodoForm.classList.add('add-todo-form');
        addTodoInput.classList.add('add-todo-input');
        addTodoArea.classList.add('add-todo-area');
        addTodoDate.classList.add('add-todo-date');
        addTodoDateLabel.classList.add('add-todo-date-label');
        addTodoDateInput.classList.add('add-todo-date-input');
        addTodoPriority.classList.add('add-todo-priority');
        addTodoPriorityLabel.classList.add('add-todo-priority-label');
        addTodoPriorityInput.classList.add('add-todo-priority-input');
        addTodoColor.classList.add('add-todo-color');
        addTodoColorLabel.classList.add('add-todo-color-label');
        addTodoColorInput.classList.add('add-todo-color-input');
        addTodoDateInput.type = 'date';
        addTodoMark.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_6__;
        addTodoLabel.innerText = 'Add a task';
        addTodoDateLabel.innerText = 'Date: ';
        addTodoPriorityLabel.innerText = 'Priority: ';
        addTodoPriorityInput.type = 'number';
        addTodoPriorityInput.value = 0;
        addTodoColorLabel.innerText = 'Color: ';
        addTodoColorInput.type = 'color';
        addTodoColorInput.value = '#a9adc1';
        addTodoInput.placeholder = 'Title';
        addTodoArea.placeholder = 'description';

        addTodo.onclick = () => {
            addTodoLabel.style.display = 'none';
            addTodoMark.style.display = 'none';
            addTodoForm.style.display = 'flex';
            document.body.onclick = (e) => {
                if (!addTodo.contains(e.target)) {
                    addTodoLabel.style.display = 'block';
                    addTodoMark.style.display = 'block';
                    addTodoForm.style.display = 'none';
                }
            };
        };

        addTodo.onkeyup = (e) => {
            if (e.key === 'Enter' && addTodoInput.value) {
                _app__WEBPACK_IMPORTED_MODULE_0__["default"].addTodo(
                    addTodoInput.value,
                    addTodoArea.value,
                    listid,
                    addTodoDateInput.value,
                    addTodoPriorityInput.value,
                    addTodoColorInput.value
                );
                addTodoLabel.style.display = 'block';
                addTodoMark.style.display = 'block';
                addTodoForm.style.display = 'none';
                addTodoInput.value = '';
                addTodoArea.value = '';
                addTodoDateInput.value = '';
                addTodoPriorityInput.value = 0;
                addTodoColorInput.value = '#a9adc1';
                update();
            }
        };

        addTodo.appendChild(addTodoMark);
        addTodo.appendChild(addTodoLabel);
        addTodo.appendChild(addTodoForm);
        addTodoForm.appendChild(addTodoInput);
        addTodoForm.appendChild(addTodoArea);
        addTodoForm.appendChild(addTodoDate);
        addTodoForm.appendChild(addTodoPriority);
        addTodoForm.appendChild(addTodoColor);
        addTodoDate.appendChild(addTodoDateLabel);
        addTodoDate.appendChild(addTodoDateInput);
        addTodoPriority.appendChild(addTodoPriorityLabel);
        addTodoPriority.appendChild(addTodoPriorityInput);
        addTodoColor.appendChild(addTodoColorLabel);
        addTodoColor.appendChild(addTodoColorInput);

        return addTodo;
    };

    const createPopover = (list) => {
        const anchor = document.createElement('div');
        const popover = document.createElement('div');
        const popoverLabel = document.createElement('p');
        const popoverSort = document.createElement('ul');
        const popoverDate = document.createElement('li');
        const popoverPriority = document.createElement('li');
        const popoverOptions = document.createElement('ul');
        const popoverDelete = document.createElement('li');

        anchor.classList.add('anchor');
        popover.classList.add('popover');
        popoverLabel.classList.add('popover-label');
        popoverSort.classList.add('popover-sort');
        popoverOptions.classList.add('popover-options');
        popoverDelete.classList.add('popover-delete');
        popoverLabel.innerText = 'Sort by:';
        popoverDate.innerText = 'Date';
        popoverPriority.innerText = 'Priority';
        popoverDelete.innerText = 'Delete list';

        switch (list.sortType) {
        case 1:
            popoverDate.classList.add('enabled');
            break;
        case 2:
            popoverPriority.classList.add('enabled');
            break;
        default:
            break;
        }

        popoverDelete.onclick = () => {
            _app__WEBPACK_IMPORTED_MODULE_0__["default"].deleteList(list);
            update();
        };

        popoverDate.onclick = () => {
            _app__WEBPACK_IMPORTED_MODULE_0__["default"].sortList(list, 1);
            update();
        };

        popoverPriority.onclick = () => {
            _app__WEBPACK_IMPORTED_MODULE_0__["default"].sortList(list, 2);
            update();
        };

        anchor.appendChild(popover);
        popover.appendChild(popoverLabel);
        popover.appendChild(popoverSort);
        popover.appendChild(popoverOptions);
        popoverSort.appendChild(popoverDate);
        popoverSort.appendChild(popoverPriority);
        popoverOptions.appendChild(popoverDelete);

        return anchor;
    };

    return { createTitle, createContainer, update };
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists */ "./src/lists.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
// app.js





const app = (() => {
    let lists = _storage__WEBPACK_IMPORTED_MODULE_2__["default"].getData();

    const addList = (name) => {
        const newList = new _lists__WEBPACK_IMPORTED_MODULE_0__["default"](name);
        lists.push(newList);
    
    };

    const sortList = (list, sortType=list.sortType) => {

        const listObj = list;
        switch (sortType) {
        case 1:
        // sort by date
            list.items.sort((a, b) => {
                if (a.dueDate < b.dueDate) {
                    return -1;
                }
                if (a.dueDate > b.dueDate) {
                    return 1;
                }
                return 0;
            });
            listObj.sortType = 1;
            break;

        case 2:
        // sort by priority (greater is higher)
            list.items.sort((a, b) => {
                if (Number(a.priority) > Number(b.priority)) {
                    return -1;
                }
                if (Number(a.priority) < Number(b.priority)) {
                    return 1;
                }
                return 0;
            });
            listObj.sortType = 2;
            break;

        default:
        // wont run
            break;
        }
    };

    const deleteList = (list) => {
        lists = lists.filter((i) => i.id !== list.id);
    
    };

    const addTodo = (title, description, listId, dueDate, priority, color) => {
        const newTodo = new _todos__WEBPACK_IMPORTED_MODULE_1__["default"](title, description, listId, dueDate, priority, color);
        lists.forEach((list) => {
            if (list.id === listId) {
                list.addItem(newTodo);
                sortList(list);
        
            }
        });
    };

    const updateTodo = (
        task,
        title = task.title,
        description = task.description,
        dueDate = task.dueDate,
        priority = task.priority,
        color = task.color
    ) => {
        const taskObj = task;
        taskObj.title = title;
        taskObj.description = description;
        taskObj.dueDate = dueDate;
        taskObj.priority = priority;
        taskObj.color = color;
        lists.forEach((list) => {
            if (list.id === task.parentid) {
                sortList(list);
        
            }
        });
    };

    const deleteTodo = (todo) => {
        lists.forEach((list) => {
            if (list.id === todo.parentid) {
                const listObj = list;
                listObj.items = list.items.filter((i) => i.id !== todo.id);
        
            }
        });
    };

    const completeTodo = (todo) => {
        lists.forEach((list) => {
            if (list.id === todo.parentid) {
                list.completeItem(todo);
        
            }
        });
    };

    const updateContent = () => {
        _storage__WEBPACK_IMPORTED_MODULE_2__["default"].storeData([...lists]);
    };

    const getContent = () => {
        updateContent();
        // temp
        console.log([...lists]);
        return [...lists];
    };

    return {
        addList,
        sortList,
        deleteList,
        addTodo,
        updateTodo,
        deleteTodo,
        completeTodo,
        getContent,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

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

    headerLogo.href = '.';
    headerLogo.innerText = 'Todo List';
    headerLogo.id = 'logo';

    header.appendChild(divHeader);
    divHeader.appendChild(headerLogo);

    return header;
}

function createFooter() {
    const footer = document.createElement('footer');
    const divFooter = document.createElement('div');
    const footerLink = document.createElement('a');

    footerLink.href = 'https://github.com/rudnam/odin-todo-list';
    footerLink.innerText = 'Github repo';

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
    constructor(name,sortType=1) {
        this.name = name;
        this.items = [];
        this.id = `id${Math.random().toString(16).slice(2)}`;
        this.completed = [];
        this.sortType = sortType;
    }

    addItem(item) {
        this.items.push(item);
    }

    completeItem(item) {
        this.items = this.items.filter((i) => i.id !== item.id);
        this.completed.push(item);
    }

    recoverItem(item) {
        this.completed = this.completed.filter((i) => i.id !== item.id);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists */ "./src/lists.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
// storage.js




const storage = (() => {
    const getData = () => {
        if (localStorage.getItem('listdata') == null) {
            return null;
        }

        const data = JSON.parse(localStorage.getItem('listdata'));
        const lists = [];

        data.forEach((list) => {
            const newList = new _lists__WEBPACK_IMPORTED_MODULE_0__["default"](list.name,list.sortType);

            list.items.forEach((task) => {
                const newTodo = new _todos__WEBPACK_IMPORTED_MODULE_1__["default"](
                    task.title,
                    task.description,
                    newList.id,
                    task.dueDate,
                    task.priority,
                    task.color
                );
                newList.addItem(newTodo);
            });

            lists.push(newList);
        });

        return lists;
    };

    const storeData = (lists) => {
        localStorage.setItem('listdata', JSON.stringify(lists));
    
    };

    return { getData, storeData };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);

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
    constructor(title, description, parentid, dueDate, priority, color) {
        this.title = title;
        this.description = description;
        this.id = `id${Math.random().toString(16).slice(2)}`;
        this.parentid = parentid;
        this.priority = priority || 0;
        this.dueDate = dueDate;
        this.color = color || '#a9adc1';
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

/***/ "./src/images/close_white.svg":
/*!************************************!*\
  !*** ./src/images/close_white.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "973df9856b366c5ae05d.svg";

/***/ }),

/***/ "./src/images/more.svg":
/*!*****************************!*\
  !*** ./src/images/more.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d01c6aa4dae88b31ed3.svg";

/***/ }),

/***/ "./src/images/reset.svg":
/*!******************************!*\
  !*** ./src/images/reset.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "807986ea7bc4ab6470e2.svg";

/***/ }),

/***/ "./src/images/reset_white.svg":
/*!************************************!*\
  !*** ./src/images/reset_white.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2113d1f9928832276e4d.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLFFBQVEsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0Q0FBRztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixvREFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksdURBQWM7QUFDMUI7QUFDQTs7QUFFQTtBQUNBLFlBQVkscURBQVk7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLFlBQVkscURBQVk7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFD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V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRXNDO0FBQ1Y7O0FBRTVCLHVEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9NYXR0ZXItUmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9NYXR0ZXItQm9sZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGUuY3NzICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTWF0dGVyO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBNYXR0ZXI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbjpyb290IHtcXG4gIC0td2hpdGU6ICNmZmY7XFxuICAtLWJsYWNrOiAjMWYyMDI4O1xcbiAgLS1ibHVlOiAjMzZhM2ZmO1xcbiAgLS1saWdodDogI2E5YWRjMTtcXG4gIC0tZ3JleTogIzJlMzAzOTtcXG4gIC0tbGlnaHQtc3ViOiAjN2E3Yzg1O1xcbiAgLS1yZWQ6ICNmZjQ1NDU7XFxuICAtLXllbGxvdzogI2ZmZDY0NDtcXG4gIC0tdHJhbnNwYXJlbnQ6ICMyZTMwMzk0MTtcXG4gIC0tZGVmYXVsdC13aWR0aDogbWluKDgwMHB4LCAxMDAlKTtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0dGVyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbmhlYWRlciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMHB4IDIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAzMDBweDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxNXB4O1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4jYWRkLWxpc3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtbGlzdC1sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNhZGQtbGlzdC1pbnB1dCB7XFxuICBwYWRkaW5nOiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5saXN0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcXG59XFxuXFxuLmxpc3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubGlzdC1vcHRpb25zIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLmxpc3QgKiB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYW5jaG9yIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wb3BvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBvcG92ZXItbGFiZWwge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wb3BvdmVyLXNvcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wb3BvdmVyLXNvcnQgbGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucG9wb3Zlci1vcHRpb25zIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBvcG92ZXItb3B0aW9ucyBsaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wb3BvdmVyLWRlbGV0ZSB7XFxuICBjb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLnBvcG92ZXItZGVsZXRlOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcXG59XFxuXFxuLnRvZG8ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50b2RvLWJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udG9kby1kZXNjIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXN1Yik7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uaGlkZS1vdmVyZmxvdyB7XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG59XFxuXFxuLnRvZG8tZWRpdC1ib2R5IHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kby1lZGl0LXRpdGxlIHtcXG4gIG1hcmdpbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udG9kby1lZGl0LWRlc2Mge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi50b2RvLW1hcmssXFxuLnRvZG8tY2xvc2UsXFxuLmFkZC10b2RvLW1hcmssXFxuLnRvZG8tZWRpdC1jb2xvci1yZXNldCB7XFxuICBtYXJnaW46IGF1dG8gMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi50b2RvLWVkaXQtZGF0ZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWVkaXQtZGF0ZS1pbnB1dCB7XFxuICB3aWR0aDogMTEwcHg7XFxufVxcblxcbi50b2RvLWVkaXQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kby1lZGl0LXByaW9yaXR5LWlucHV0IHtcXG4gIHdpZHRoOiA1MHB4OyBcXG59XFxuXFxuLnRvZG8tZWRpdC1jb2xvciB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWVkaXQtY29sb3ItaW5wdXQge1xcbiAgaGVpZ2h0OiAxLjNyZW07XFxufVxcblxcbi50b2RvLWVkaXQtY29sb3ItcmVzZXQ6aG92ZXIge1xcbiAgc3JjOiBsb2NhbCgnLi9pbWFnZXMvcmVzZXRfd2hpdGUuc3ZnJyk7XFxufVxcblxcbi50b2RvLWNsb3NlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uYWRkLXRvZG8ge1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNy41cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYWRkLXRvZG86aG92ZXI6bm90KDpmb2N1cykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdG9kby1sYWJlbCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmFkZC10b2RvLWlucHV0IHtcXG4gIHBhZGRpbmc6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmFkZC10b2RvLWFyZWEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uYWRkLXRvZG8tZGF0ZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5hZGQtdG9kby1kYXRlLWlucHV0IHtcXG4gIHdpZHRoOiAxMTBweDtcXG59XFxuXFxuLmFkZC10b2RvLXByaW9yaXR5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmFkZC10b2RvLXByaW9yaXR5LWlucHV0IHtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tY29sb3Ige1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tY29sb3ItaW5wdXQge1xcbiAgaGVpZ2h0OiAxLjNyZW07XFxufVxcblxcbi50b2RvOmhvdmVyOm5vdCg6Zm9jdXMpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wb3BvdmVyIGxpOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lbmFibGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYztBQUNkO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBa0M7RUFDbEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsaUNBQWlDOztFQUVqQyxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFD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LGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHN0eWxlLmNzcyAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE1hdHRlcjtcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL01hdHRlci1SZWd1bGFyLm90Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE1hdHRlcjtcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL01hdHRlci1Cb2xkLm90Zik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbjpyb290IHtcXG4gIC0td2hpdGU6ICNmZmY7XFxuICAtLWJsYWNrOiAjMWYyMDI4O1xcbiAgLS1ibHVlOiAjMzZhM2ZmO1xcbiAgLS1saWdodDogI2E5YWRjMTtcXG4gIC0tZ3JleTogIzJlMzAzOTtcXG4gIC0tbGlnaHQtc3ViOiAjN2E3Yzg1O1xcbiAgLS1yZWQ6ICNmZjQ1NDU7XFxuICAtLXllbGxvdzogI2ZmZDY0NDtcXG4gIC0tdHJhbnNwYXJlbnQ6ICMyZTMwMzk0MTtcXG4gIC0tZGVmYXVsdC13aWR0aDogbWluKDgwMHB4LCAxMDAlKTtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0dGVyXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbmhlYWRlciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMHB4IDIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAzMDBweDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxNXB4O1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4jYWRkLWxpc3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtbGlzdC1sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNhZGQtbGlzdC1pbnB1dCB7XFxuICBwYWRkaW5nOiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5saXN0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcXG59XFxuXFxuLmxpc3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubGlzdC1vcHRpb25zIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLmxpc3QgKiB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYW5jaG9yIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wb3BvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBvcG92ZXItbGFiZWwge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wb3BvdmVyLXNvcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wb3BvdmVyLXNvcnQgbGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucG9wb3Zlci1vcHRpb25zIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBvcG92ZXItb3B0aW9ucyBsaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wb3BvdmVyLWRlbGV0ZSB7XFxuICBjb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLnBvcG92ZXItZGVsZXRlOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcXG59XFxuXFxuLnRvZG8ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50b2RvLWJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udG9kby1kZXNjIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXN1Yik7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uaGlkZS1vdmVyZmxvdyB7XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG59XFxuXFxuLnRvZG8tZWRpdC1ib2R5IHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kby1lZGl0LXRpdGxlIHtcXG4gIG1hcmdpbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udG9kby1lZGl0LWRlc2Mge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi50b2RvLW1hcmssXFxuLnRvZG8tY2xvc2UsXFxuLmFkZC10b2RvLW1hcmssXFxuLnRvZG8tZWRpdC1jb2xvci1yZXNldCB7XFxuICBtYXJnaW46IGF1dG8gMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi50b2RvLWVkaXQtZGF0ZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWVkaXQtZGF0ZS1pbnB1dCB7XFxuICB3aWR0aDogMTEwcHg7XFxufVxcblxcbi50b2RvLWVkaXQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kby1lZGl0LXByaW9yaXR5LWlucHV0IHtcXG4gIHdpZHRoOiA1MHB4OyBcXG59XFxuXFxuLnRvZG8tZWRpdC1jb2xvciB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWVkaXQtY29sb3ItaW5wdXQge1xcbiAgaGVpZ2h0OiAxLjNyZW07XFxufVxcblxcbi50b2RvLWVkaXQtY29sb3ItcmVzZXQ6aG92ZXIge1xcbiAgc3JjOiBsb2NhbCgnLi9pbWFnZXMvcmVzZXRfd2hpdGUuc3ZnJyk7XFxufVxcblxcbi50b2RvLWNsb3NlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uYWRkLXRvZG8ge1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNy41cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYWRkLXRvZG86aG92ZXI6bm90KDpmb2N1cykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdG9kby1sYWJlbCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmFkZC10b2RvLWlucHV0IHtcXG4gIHBhZGRpbmc6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmFkZC10b2RvLWFyZWEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uYWRkLXRvZG8tZGF0ZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5hZGQtdG9kby1kYXRlLWlucHV0IHtcXG4gIHdpZHRoOiAxMTBweDtcXG59XFxuXFxuLmFkZC10b2RvLXByaW9yaXR5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmFkZC10b2RvLXByaW9yaXR5LWlucHV0IHtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tY29sb3Ige1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tY29sb3ItaW5wdXQge1xcbiAgaGVpZ2h0OiAxLjNyZW07XFxufVxcblxcbi50b2RvOmhvdmVyOm5vdCg6Zm9jdXMpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wb3BvdmVyIGxpOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lbmFibGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vLyBVSS5qc1xuXG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJztcbmltcG9ydCBjaGVja091dGxpbmUgZnJvbSAnLi9pbWFnZXMvY2hlY2tfb3V0bGluZS5zdmcnO1xuaW1wb3J0IGNoZWNrIGZyb20gJy4vaW1hZ2VzL2NoZWNrLnN2Zyc7XG5pbXBvcnQgY2xvc2UgZnJvbSAnLi9pbWFnZXMvY2xvc2Uuc3ZnJztcbmltcG9ydCBjbG9zZVdoaXRlIGZyb20gJy4vaW1hZ2VzL2Nsb3NlX3doaXRlLnN2ZydcbmltcG9ydCBtb3JlIGZyb20gJy4vaW1hZ2VzL21vcmUuc3ZnJztcbmltcG9ydCBhZGQgZnJvbSAnLi9pbWFnZXMvYWRkLnN2Zyc7XG5pbXBvcnQgcmVzZXQgZnJvbSAnLi9pbWFnZXMvcmVzZXQuc3ZnJ1xuaW1wb3J0IHJlc2V0V2hpdGUgZnJvbSAnLi9pbWFnZXMvcmVzZXRfd2hpdGUuc3ZnJ1xuXG5jb25zdCBET00gPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGFwcERhdGEgPSBhcHAuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZC5pZCAhPT0gJ2FkZC1saXN0Jykge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcERhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3QoaXRlbSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1saXN0JykpO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVUaXRsZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0aXRsZS5pZCA9ICd0aXRsZSc7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9ICdNeSBUYXNrcyc7XG5cbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnRhaW5lci5pZCA9ICdjb250YWluZXInO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBZGRMaXN0KCkpO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUFkZExpc3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYWRkTGlzdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBhZGRMaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgIGFkZExpc3QuaWQgPSAnYWRkLWxpc3QnO1xuICAgICAgICBhZGRMaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcbiAgICAgICAgYWRkTGlzdExhYmVsLmlkID0gJ2FkZC1saXN0LWxhYmVsJztcbiAgICAgICAgYWRkTGlzdElucHV0LmlkID0gJ2FkZC1saXN0LWlucHV0JztcblxuICAgICAgICBhZGRMaXN0TGFiZWwuaW5uZXJUZXh0ID0gJysgQWRkIG5ldyBsaXN0JztcbiAgICAgICAgYWRkTGlzdElucHV0LnBsYWNlaG9sZGVyID0gJ05ldyBsaXN0JztcbiAgICAgICAgYWRkTGlzdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgYWRkTGlzdC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgYWRkTGlzdExhYmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBhZGRMaXN0SW5wdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBhZGRMaXN0SW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFhZGRMaXN0LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0TGFiZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgYWRkTGlzdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiBhZGRMaXN0SW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhcHAuYWRkTGlzdChhZGRMaXN0SW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIGFkZExpc3RMYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBhZGRMaXN0SW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBhZGRMaXN0SW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWRkTGlzdC5hcHBlbmRDaGlsZChhZGRMaXN0TGFiZWwpO1xuICAgICAgICBhZGRMaXN0LmFwcGVuZENoaWxkKGFkZExpc3RJbnB1dCk7XG5cbiAgICAgICAgcmV0dXJuIGFkZExpc3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUxpc3QgPSAobGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBkaXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdkxpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGl2TGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgZGl2TGlzdE9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgZGl2TGlzdEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgY29uc3QgcG9wb3ZlciA9IGNyZWF0ZVBvcG92ZXIobGlzdCk7XG5cbiAgICAgICAgZGl2TGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG4gICAgICAgIGRpdkxpc3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbGlzdC1oZWFkZXInKTtcbiAgICAgICAgZGl2TGlzdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2xpc3QtdGl0bGUnKTtcbiAgICAgICAgZGl2TGlzdE9wdGlvbnMuY2xhc3NMaXN0LmFkZCgnbGlzdC1vcHRpb25zJyk7XG4gICAgICAgIGRpdkxpc3RJdGVtcy5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW1zJyk7XG4gICAgICAgIGRpdkxpc3RUaXRsZS52YWx1ZSA9IGxpc3QubmFtZTtcbiAgICAgICAgZGl2TGlzdFRpdGxlLnBsYWNlaG9sZGVyID0gJ1VudGl0bGVkJztcbiAgICAgICAgZGl2TGlzdE9wdGlvbnMuc3JjID0gbW9yZTtcblxuICAgICAgICBkaXZMaXN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0T2JqID0gbGlzdDtcbiAgICAgICAgICAgIGxpc3RPYmoubmFtZSA9IGRpdkxpc3RUaXRsZS52YWx1ZTtcbiAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXZMaXN0T3B0aW9ucy5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgcG9wb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFkaXZMaXN0T3B0aW9ucy5jb250YWlucyhlLnRhcmdldCkgJiYgIXBvcG92ZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcG92ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGRpdkxpc3QuYXBwZW5kQ2hpbGQoZGl2TGlzdEhlYWRlcik7XG4gICAgICAgIGRpdkxpc3QuYXBwZW5kQ2hpbGQoZGl2TGlzdEl0ZW1zKTtcbiAgICAgICAgbGlzdC5pdGVtcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBkaXZMaXN0SXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kbyh0b2RvKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXZMaXN0SXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkVG9kbyhsaXN0LmlkKSk7XG4gICAgICAgIGRpdkxpc3RIZWFkZXIuYXBwZW5kQ2hpbGQoZGl2TGlzdFRpdGxlKTtcbiAgICAgICAgZGl2TGlzdEhlYWRlci5hcHBlbmRDaGlsZChkaXZMaXN0T3B0aW9ucyk7XG4gICAgICAgIGRpdkxpc3RIZWFkZXIuYXBwZW5kQ2hpbGQocG9wb3Zlcik7XG5cbiAgICAgICAgcmV0dXJuIGRpdkxpc3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSAodGFzaykgPT4ge1xuICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9NYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IHRvZG9Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0b2RvRWRpdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdG9kb0VkaXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9FZGl0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGNvbnN0IHRvZG9FZGl0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0b2RvRWRpdERhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdG9kb0VkaXREYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0b2RvRWRpdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9FZGl0UHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdG9kb0VkaXRQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgdG9kb0VkaXRDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0b2RvRWRpdENvbG9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRvZG9FZGl0Q29sb3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9FZGl0Q29sb3JSZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCB0b2RvQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICAgICAgdG9kb01hcmsuY2xhc3NMaXN0LmFkZCgndG9kby1tYXJrJyk7XG4gICAgICAgIHRvZG9Cb2R5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tYm9keScpO1xuICAgICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpO1xuICAgICAgICB0b2RvRGVzYy5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2MnKTtcbiAgICAgICAgdG9kb0Rlc2MuY2xhc3NMaXN0LmFkZCgnaGlkZS1vdmVyZmxvdycpO1xuICAgICAgICB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWRhdGUnKTtcbiAgICAgICAgdG9kb0VkaXRCb2R5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWRpdC1ib2R5Jyk7XG4gICAgICAgIHRvZG9FZGl0VGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LXRpdGxlJyk7XG4gICAgICAgIHRvZG9FZGl0RGVzYy5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQtZGVzYycpO1xuICAgICAgICB0b2RvRWRpdERhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LWRhdGUnKTtcbiAgICAgICAgdG9kb0VkaXREYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LWRhdGUtbGFiZWwnKTtcbiAgICAgICAgdG9kb0VkaXREYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LWRhdGUtaW5wdXQnKTtcbiAgICAgICAgdG9kb0VkaXRQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQtcHJpb3JpdHknKTtcbiAgICAgICAgdG9kb0VkaXRQcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWRpdC1wcmlvcml0eS1sYWJlbCcpO1xuICAgICAgICB0b2RvRWRpdFByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LXByaW9yaXR5LWlucHV0Jyk7XG4gICAgICAgIHRvZG9FZGl0Q29sb3IuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LWNvbG9yJyk7XG4gICAgICAgIHRvZG9FZGl0Q29sb3JMYWJlbC5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQtY29sb3ItbGFiZWwnKTtcbiAgICAgICAgdG9kb0VkaXRDb2xvcklucHV0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWRpdC1jb2xvci1pbnB1dCcpO1xuICAgICAgICB0b2RvRWRpdENvbG9yUmVzZXQuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LWNvbG9yLXJlc2V0Jyk7XG4gICAgICAgIHRvZG9DbG9zZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWNsb3NlJyk7XG4gICAgICAgIHRvZG9NYXJrLnNyYyA9IGNoZWNrT3V0bGluZTtcbiAgICAgICAgdG9kb1RpdGxlLmlubmVyVGV4dCA9IHRhc2sudGl0bGU7XG4gICAgICAgIHRvZG9UaXRsZS5zdHlsZS5jb2xvciA9IHRhc2suY29sb3I7XG4gICAgICAgIHRvZG9EZXNjLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIHRvZG9EYXRlLmlubmVySFRNTCA9IHRhc2suZHVlRGF0ZSA/IGBEdWU6IDxpPiR7dGFzay5kdWVEYXRlfTwvaT5gIDogJyc7XG4gICAgICAgIHRvZG9FZGl0VGl0bGUucGxhY2Vob2xkZXIgPSAnVGl0bGUnO1xuICAgICAgICB0b2RvRWRpdFRpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICAgICAgdG9kb0VkaXRUaXRsZS5zdHlsZS5jb2xvciA9IHRhc2suY29sb3I7XG4gICAgICAgIHRvZG9FZGl0RGVzYy5wbGFjZWhvbGRlciA9ICdkZXNjcmlwdGlvbic7XG4gICAgICAgIHRvZG9FZGl0RGVzYy52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIHRvZG9FZGl0RGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdEYXRlOiAnO1xuICAgICAgICB0b2RvRWRpdERhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgICB0b2RvRWRpdERhdGVJbnB1dC52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgdG9kb0VkaXRQcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdQcmlvcml0eTogJztcbiAgICAgICAgdG9kb0VkaXRQcmlvcml0eUlucHV0LnR5cGUgPSAnbnVtYmVyJztcbiAgICAgICAgdG9kb0VkaXRQcmlvcml0eUlucHV0LnZhbHVlID0gdGFzay5wcmlvcml0eSB8fCAwO1xuICAgICAgICB0b2RvRWRpdENvbG9yTGFiZWwuaW5uZXJUZXh0ID0gJ0NvbG9yOiAnO1xuICAgICAgICB0b2RvRWRpdENvbG9ySW5wdXQudHlwZSA9ICdjb2xvcic7XG4gICAgICAgIHRvZG9FZGl0Q29sb3JJbnB1dC52YWx1ZSA9IHRhc2suY29sb3IgfHwgJyNhOWFkYzEnO1xuICAgICAgICB0b2RvRWRpdENvbG9yUmVzZXQuc3JjID0gcmVzZXRcbiAgICAgICAgdG9kb0VkaXRDb2xvclJlc2V0LnN0eWxlLmRpc3BsYXkgPSB0YXNrLmNvbG9yID09PSAnI2E5YWRjMScgPyAnbm9uZScgOiAnYmxvY2snO1xuICAgICAgICB0b2RvQ2xvc2Uuc3JjID0gY2xvc2U7XG5cbiAgICAgICAgdG9kb01hcmsub25tb3VzZW92ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvTWFyay5zcmMgPSBjaGVjaztcbiAgICAgICAgfTtcbiAgICAgICAgdG9kb01hcmsub25tb3VzZW91dCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRvZG9NYXJrLnNyYyA9IGNoZWNrT3V0bGluZTtcbiAgICAgICAgfTtcbiAgICAgICAgdG9kb01hcmsub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGFwcC5jb21wbGV0ZVRvZG8odGFzayk7XG4gICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0b2RvRWRpdENvbG9ySW5wdXQub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodG9kb0VkaXRDb2xvcklucHV0LnZhbHVlID09PSAnI2E5YWRjMScpIHtcbiAgICAgICAgICAgICAgICB0b2RvRWRpdENvbG9yUmVzZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9kb0VkaXRDb2xvclJlc2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9kb0VkaXRUaXRsZS5zdHlsZS5jb2xvciA9IHRvZG9FZGl0Q29sb3JJbnB1dC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZG9FZGl0Q29sb3JSZXNldC5vbm1vdXNlb3ZlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRvZG9FZGl0Q29sb3JSZXNldC5zcmMgPSByZXNldFdoaXRlO1xuICAgICAgICB9O1xuICAgICAgICB0b2RvRWRpdENvbG9yUmVzZXQub25tb3VzZW91dCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRvZG9FZGl0Q29sb3JSZXNldC5zcmMgPSByZXNldDtcbiAgICAgICAgfTtcbiAgICAgICAgdG9kb0VkaXRDb2xvclJlc2V0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvRWRpdENvbG9ySW5wdXQudmFsdWUgPSAnI2E5YWRjMSc7XG4gICAgICAgICAgICB0b2RvRWRpdFRpdGxlLnN0eWxlLmNvbG9yID0gdG9kb0VkaXRDb2xvcklucHV0LnZhbHVlO1xuICAgICAgICAgICAgdG9kb0VkaXRDb2xvclJlc2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH07XG5cblxuICAgICAgICB0b2RvLm9ubW91c2VvdmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0Nsb3NlLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIH07XG4gICAgICAgIHRvZG8ub25tb3VzZW91dCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRvZG9DbG9zZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIH07XG5cbiAgICAgICAgdG9kb0Nsb3NlLm9ubW91c2VvdmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0Nsb3NlLnNyYyA9IGNsb3NlV2hpdGU7XG4gICAgICAgIH07XG4gICAgICAgIHRvZG9DbG9zZS5vbm1vdXNlb3V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0Nsb3NlLnNyYyA9IGNsb3NlO1xuICAgICAgICB9O1xuICAgICAgICB0b2RvQ2xvc2Uub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGFwcC5kZWxldGVUb2RvKHRhc2spO1xuICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdG9kby5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0JvZHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHRvZG9FZGl0Qm9keS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRvZG8uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcC51cGRhdGVUb2RvKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFzayxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9FZGl0VGl0bGUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvRWRpdERlc2MudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvRWRpdERhdGVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9FZGl0UHJpb3JpdHlJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9FZGl0Q29sb3JJbnB1dC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0b2RvQm9keS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRWRpdEJvZHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9NYXJrKTtcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvQm9keSk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0VkaXRCb2R5KTtcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvQ2xvc2UpO1xuICAgICAgICB0b2RvQm9keS5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgICAgICB0b2RvQm9keS5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XG4gICAgICAgIHRvZG9Cb2R5LmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcbiAgICAgICAgdG9kb0VkaXRCb2R5LmFwcGVuZENoaWxkKHRvZG9FZGl0VGl0bGUpO1xuICAgICAgICB0b2RvRWRpdEJvZHkuYXBwZW5kQ2hpbGQodG9kb0VkaXREZXNjKTtcbiAgICAgICAgdG9kb0VkaXRCb2R5LmFwcGVuZENoaWxkKHRvZG9FZGl0RGF0ZSk7XG4gICAgICAgIHRvZG9FZGl0Qm9keS5hcHBlbmRDaGlsZCh0b2RvRWRpdFByaW9yaXR5KTtcbiAgICAgICAgdG9kb0VkaXRCb2R5LmFwcGVuZENoaWxkKHRvZG9FZGl0Q29sb3IpO1xuICAgICAgICB0b2RvRWRpdERhdGUuYXBwZW5kQ2hpbGQodG9kb0VkaXREYXRlTGFiZWwpO1xuICAgICAgICB0b2RvRWRpdERhdGUuYXBwZW5kQ2hpbGQodG9kb0VkaXREYXRlSW5wdXQpO1xuICAgICAgICB0b2RvRWRpdFByaW9yaXR5LmFwcGVuZENoaWxkKHRvZG9FZGl0UHJpb3JpdHlMYWJlbCk7XG4gICAgICAgIHRvZG9FZGl0UHJpb3JpdHkuYXBwZW5kQ2hpbGQodG9kb0VkaXRQcmlvcml0eUlucHV0KTtcbiAgICAgICAgdG9kb0VkaXRDb2xvci5hcHBlbmRDaGlsZCh0b2RvRWRpdENvbG9yTGFiZWwpO1xuICAgICAgICB0b2RvRWRpdENvbG9yLmFwcGVuZENoaWxkKHRvZG9FZGl0Q29sb3JJbnB1dCk7XG4gICAgICAgIHRvZG9FZGl0Q29sb3IuYXBwZW5kQ2hpbGQodG9kb0VkaXRDb2xvclJlc2V0KTtcblxuICAgICAgICByZXR1cm4gdG9kbztcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlQWRkVG9kbyA9IChsaXN0aWQpID0+IHtcbiAgICAgICAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBhZGRUb2RvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb0RhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb0RhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBhZGRUb2RvUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBhZGRUb2RvQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb0NvbG9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9Db2xvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb01hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICBhZGRUb2RvLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvJyk7XG4gICAgICAgIGFkZFRvZG9NYXJrLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLW1hcmsnKTtcbiAgICAgICAgYWRkVG9kb0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWxhYmVsJyk7XG4gICAgICAgIGFkZFRvZG9Gb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWZvcm0nKTtcbiAgICAgICAgYWRkVG9kb0lucHV0LmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWlucHV0Jyk7XG4gICAgICAgIGFkZFRvZG9BcmVhLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWFyZWEnKTtcbiAgICAgICAgYWRkVG9kb0RhdGUuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tZGF0ZScpO1xuICAgICAgICBhZGRUb2RvRGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWRhdGUtbGFiZWwnKTtcbiAgICAgICAgYWRkVG9kb0RhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1kYXRlLWlucHV0Jyk7XG4gICAgICAgIGFkZFRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1wcmlvcml0eScpO1xuICAgICAgICBhZGRUb2RvUHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1wcmlvcml0eS1sYWJlbCcpO1xuICAgICAgICBhZGRUb2RvUHJpb3JpdHlJbnB1dC5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1wcmlvcml0eS1pbnB1dCcpO1xuICAgICAgICBhZGRUb2RvQ29sb3IuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tY29sb3InKTtcbiAgICAgICAgYWRkVG9kb0NvbG9yTGFiZWwuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tY29sb3ItbGFiZWwnKTtcbiAgICAgICAgYWRkVG9kb0NvbG9ySW5wdXQuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tY29sb3ItaW5wdXQnKTtcbiAgICAgICAgYWRkVG9kb0RhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgICBhZGRUb2RvTWFyay5zcmMgPSBhZGQ7XG4gICAgICAgIGFkZFRvZG9MYWJlbC5pbm5lclRleHQgPSAnQWRkIGEgdGFzayc7XG4gICAgICAgIGFkZFRvZG9EYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0RhdGU6ICc7XG4gICAgICAgIGFkZFRvZG9Qcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdQcmlvcml0eTogJztcbiAgICAgICAgYWRkVG9kb1ByaW9yaXR5SW5wdXQudHlwZSA9ICdudW1iZXInO1xuICAgICAgICBhZGRUb2RvUHJpb3JpdHlJbnB1dC52YWx1ZSA9IDA7XG4gICAgICAgIGFkZFRvZG9Db2xvckxhYmVsLmlubmVyVGV4dCA9ICdDb2xvcjogJztcbiAgICAgICAgYWRkVG9kb0NvbG9ySW5wdXQudHlwZSA9ICdjb2xvcic7XG4gICAgICAgIGFkZFRvZG9Db2xvcklucHV0LnZhbHVlID0gJyNhOWFkYzEnO1xuICAgICAgICBhZGRUb2RvSW5wdXQucGxhY2Vob2xkZXIgPSAnVGl0bGUnO1xuICAgICAgICBhZGRUb2RvQXJlYS5wbGFjZWhvbGRlciA9ICdkZXNjcmlwdGlvbic7XG5cbiAgICAgICAgYWRkVG9kby5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgYWRkVG9kb0xhYmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBhZGRUb2RvTWFyay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgYWRkVG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFhZGRUb2RvLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRUb2RvTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRvZG9NYXJrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICBhZGRUb2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgYWRkVG9kby5vbmtleXVwID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiBhZGRUb2RvSW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhcHAuYWRkVG9kbyhcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9kb0lucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRUb2RvQXJlYS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbGlzdGlkLFxuICAgICAgICAgICAgICAgICAgICBhZGRUb2RvRGF0ZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRUb2RvUHJpb3JpdHlJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9kb0NvbG9ySW5wdXQudmFsdWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGFkZFRvZG9MYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBhZGRUb2RvTWFyay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBhZGRUb2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGFkZFRvZG9JbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIGFkZFRvZG9BcmVhLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgYWRkVG9kb0RhdGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIGFkZFRvZG9Qcmlvcml0eUlucHV0LnZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICBhZGRUb2RvQ29sb3JJbnB1dC52YWx1ZSA9ICcjYTlhZGMxJztcbiAgICAgICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBhZGRUb2RvLmFwcGVuZENoaWxkKGFkZFRvZG9NYXJrKTtcbiAgICAgICAgYWRkVG9kby5hcHBlbmRDaGlsZChhZGRUb2RvTGFiZWwpO1xuICAgICAgICBhZGRUb2RvLmFwcGVuZENoaWxkKGFkZFRvZG9Gb3JtKTtcbiAgICAgICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVG9kb0lucHV0KTtcbiAgICAgICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVG9kb0FyZWEpO1xuICAgICAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZChhZGRUb2RvRGF0ZSk7XG4gICAgICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGFkZFRvZG9Qcmlvcml0eSk7XG4gICAgICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGFkZFRvZG9Db2xvcik7XG4gICAgICAgIGFkZFRvZG9EYXRlLmFwcGVuZENoaWxkKGFkZFRvZG9EYXRlTGFiZWwpO1xuICAgICAgICBhZGRUb2RvRGF0ZS5hcHBlbmRDaGlsZChhZGRUb2RvRGF0ZUlucHV0KTtcbiAgICAgICAgYWRkVG9kb1ByaW9yaXR5LmFwcGVuZENoaWxkKGFkZFRvZG9Qcmlvcml0eUxhYmVsKTtcbiAgICAgICAgYWRkVG9kb1ByaW9yaXR5LmFwcGVuZENoaWxkKGFkZFRvZG9Qcmlvcml0eUlucHV0KTtcbiAgICAgICAgYWRkVG9kb0NvbG9yLmFwcGVuZENoaWxkKGFkZFRvZG9Db2xvckxhYmVsKTtcbiAgICAgICAgYWRkVG9kb0NvbG9yLmFwcGVuZENoaWxkKGFkZFRvZG9Db2xvcklucHV0KTtcblxuICAgICAgICByZXR1cm4gYWRkVG9kbztcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlUG9wb3ZlciA9IChsaXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwb3BvdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHBvcG92ZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcG9wb3ZlclNvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBjb25zdCBwb3BvdmVyRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IHBvcG92ZXJQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IHBvcG92ZXJPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgY29uc3QgcG9wb3ZlckRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2FuY2hvcicpO1xuICAgICAgICBwb3BvdmVyLmNsYXNzTGlzdC5hZGQoJ3BvcG92ZXInKTtcbiAgICAgICAgcG9wb3ZlckxhYmVsLmNsYXNzTGlzdC5hZGQoJ3BvcG92ZXItbGFiZWwnKTtcbiAgICAgICAgcG9wb3ZlclNvcnQuY2xhc3NMaXN0LmFkZCgncG9wb3Zlci1zb3J0Jyk7XG4gICAgICAgIHBvcG92ZXJPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ3BvcG92ZXItb3B0aW9ucycpO1xuICAgICAgICBwb3BvdmVyRGVsZXRlLmNsYXNzTGlzdC5hZGQoJ3BvcG92ZXItZGVsZXRlJyk7XG4gICAgICAgIHBvcG92ZXJMYWJlbC5pbm5lclRleHQgPSAnU29ydCBieTonO1xuICAgICAgICBwb3BvdmVyRGF0ZS5pbm5lclRleHQgPSAnRGF0ZSc7XG4gICAgICAgIHBvcG92ZXJQcmlvcml0eS5pbm5lclRleHQgPSAnUHJpb3JpdHknO1xuICAgICAgICBwb3BvdmVyRGVsZXRlLmlubmVyVGV4dCA9ICdEZWxldGUgbGlzdCc7XG5cbiAgICAgICAgc3dpdGNoIChsaXN0LnNvcnRUeXBlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHBvcG92ZXJEYXRlLmNsYXNzTGlzdC5hZGQoJ2VuYWJsZWQnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBwb3BvdmVyUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnZW5hYmxlZCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHBvcG92ZXJEZWxldGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGFwcC5kZWxldGVMaXN0KGxpc3QpO1xuICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcG9wb3ZlckRhdGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGFwcC5zb3J0TGlzdChsaXN0LCAxKTtcbiAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHBvcG92ZXJQcmlvcml0eS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgYXBwLnNvcnRMaXN0KGxpc3QsIDIpO1xuICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgYW5jaG9yLmFwcGVuZENoaWxkKHBvcG92ZXIpO1xuICAgICAgICBwb3BvdmVyLmFwcGVuZENoaWxkKHBvcG92ZXJMYWJlbCk7XG4gICAgICAgIHBvcG92ZXIuYXBwZW5kQ2hpbGQocG9wb3ZlclNvcnQpO1xuICAgICAgICBwb3BvdmVyLmFwcGVuZENoaWxkKHBvcG92ZXJPcHRpb25zKTtcbiAgICAgICAgcG9wb3ZlclNvcnQuYXBwZW5kQ2hpbGQocG9wb3ZlckRhdGUpO1xuICAgICAgICBwb3BvdmVyU29ydC5hcHBlbmRDaGlsZChwb3BvdmVyUHJpb3JpdHkpO1xuICAgICAgICBwb3BvdmVyT3B0aW9ucy5hcHBlbmRDaGlsZChwb3BvdmVyRGVsZXRlKTtcblxuICAgICAgICByZXR1cm4gYW5jaG9yO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBjcmVhdGVUaXRsZSwgY3JlYXRlQ29udGFpbmVyLCB1cGRhdGUgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRVSSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKERPTS5jcmVhdGVUaXRsZSgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKERPTS5jcmVhdGVDb250YWluZXIoKSk7XG5cbiAgICBET00udXBkYXRlKCk7XG59IiwiLy8gYXBwLmpzXG5cbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdHMnO1xuaW1wb3J0IFRvRG8gZnJvbSAnLi90b2Rvcyc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5jb25zdCBhcHAgPSAoKCkgPT4ge1xuICAgIGxldCBsaXN0cyA9IHN0b3JhZ2UuZ2V0RGF0YSgpO1xuXG4gICAgY29uc3QgYWRkTGlzdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgTGlzdChuYW1lKTtcbiAgICAgICAgbGlzdHMucHVzaChuZXdMaXN0KTtcbiAgICBcbiAgICB9O1xuXG4gICAgY29uc3Qgc29ydExpc3QgPSAobGlzdCwgc29ydFR5cGU9bGlzdC5zb3J0VHlwZSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGxpc3RPYmogPSBsaXN0O1xuICAgICAgICBzd2l0Y2ggKHNvcnRUeXBlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgLy8gc29ydCBieSBkYXRlXG4gICAgICAgICAgICBsaXN0Lml0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYS5kdWVEYXRlIDwgYi5kdWVEYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGEuZHVlRGF0ZSA+IGIuZHVlRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxpc3RPYmouc29ydFR5cGUgPSAxO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAvLyBzb3J0IGJ5IHByaW9yaXR5IChncmVhdGVyIGlzIGhpZ2hlcilcbiAgICAgICAgICAgIGxpc3QuaXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoYS5wcmlvcml0eSkgPiBOdW1iZXIoYi5wcmlvcml0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGEucHJpb3JpdHkpIDwgTnVtYmVyKGIucHJpb3JpdHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGlzdE9iai5zb3J0VHlwZSA9IDI7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAvLyB3b250IHJ1blxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlTGlzdCA9IChsaXN0KSA9PiB7XG4gICAgICAgIGxpc3RzID0gbGlzdHMuZmlsdGVyKChpKSA9PiBpLmlkICE9PSBsaXN0LmlkKTtcbiAgICBcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGxpc3RJZCwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbG9yKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGxpc3RJZCwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbG9yKTtcbiAgICAgICAgbGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGxpc3QuaWQgPT09IGxpc3RJZCkge1xuICAgICAgICAgICAgICAgIGxpc3QuYWRkSXRlbShuZXdUb2RvKTtcbiAgICAgICAgICAgICAgICBzb3J0TGlzdChsaXN0KTtcbiAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVUb2RvID0gKFxuICAgICAgICB0YXNrLFxuICAgICAgICB0aXRsZSA9IHRhc2sudGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gdGFzay5kZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSA9IHRhc2suZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHkgPSB0YXNrLnByaW9yaXR5LFxuICAgICAgICBjb2xvciA9IHRhc2suY29sb3JcbiAgICApID0+IHtcbiAgICAgICAgY29uc3QgdGFza09iaiA9IHRhc2s7XG4gICAgICAgIHRhc2tPYmoudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGFza09iai5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0YXNrT2JqLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0YXNrT2JqLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRhc2tPYmouY29sb3IgPSBjb2xvcjtcbiAgICAgICAgbGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGxpc3QuaWQgPT09IHRhc2sucGFyZW50aWQpIHtcbiAgICAgICAgICAgICAgICBzb3J0TGlzdChsaXN0KTtcbiAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVUb2RvID0gKHRvZG8pID0+IHtcbiAgICAgICAgbGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGxpc3QuaWQgPT09IHRvZG8ucGFyZW50aWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0T2JqID0gbGlzdDtcbiAgICAgICAgICAgICAgICBsaXN0T2JqLml0ZW1zID0gbGlzdC5pdGVtcy5maWx0ZXIoKGkpID0+IGkuaWQgIT09IHRvZG8uaWQpO1xuICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNvbXBsZXRlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICAgIGlmIChsaXN0LmlkID09PSB0b2RvLnBhcmVudGlkKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5jb21wbGV0ZUl0ZW0odG9kbyk7XG4gICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlQ29udGVudCA9ICgpID0+IHtcbiAgICAgICAgc3RvcmFnZS5zdG9yZURhdGEoWy4uLmxpc3RzXSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIHVwZGF0ZUNvbnRlbnQoKTtcbiAgICAgICAgLy8gdGVtcFxuICAgICAgICBjb25zb2xlLmxvZyhbLi4ubGlzdHNdKTtcbiAgICAgICAgcmV0dXJuIFsuLi5saXN0c107XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZExpc3QsXG4gICAgICAgIHNvcnRMaXN0LFxuICAgICAgICBkZWxldGVMaXN0LFxuICAgICAgICBhZGRUb2RvLFxuICAgICAgICB1cGRhdGVUb2RvLFxuICAgICAgICBkZWxldGVUb2RvLFxuICAgICAgICBjb21wbGV0ZVRvZG8sXG4gICAgICAgIGdldENvbnRlbnQsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDsiLCIvLyBpbml0aWFsaXplLmpzXG5cbmltcG9ydCBsb2FkVUkgZnJvbSAnLi9VSSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBkaXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgaGVhZGVyTG9nby5ocmVmID0gJy4nO1xuICAgIGhlYWRlckxvZ28uaW5uZXJUZXh0ID0gJ1RvZG8gTGlzdCc7XG4gICAgaGVhZGVyTG9nby5pZCA9ICdsb2dvJztcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkaXZIZWFkZXIpO1xuICAgIGRpdkhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBjb25zdCBkaXZGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgZm9vdGVyTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9ydWRuYW0vb2Rpbi10b2RvLWxpc3QnO1xuICAgIGZvb3RlckxpbmsuaW5uZXJUZXh0ID0gJ0dpdGh1YiByZXBvJztcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChkaXZGb290ZXIpO1xuICAgIGRpdkZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJMaW5rKTtcblxuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29udGVudC5pZCA9ICdjb250ZW50JztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgICBsb2FkVUkoKTtcbn0iLCIvLyBsaXN0cy5qc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLHNvcnRUeXBlPTEpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmlkID0gYGlkJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyKX1gO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IFtdO1xuICAgICAgICB0aGlzLnNvcnRUeXBlID0gc29ydFR5cGU7XG4gICAgfVxuXG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZUl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoKGkpID0+IGkuaWQgIT09IGl0ZW0uaWQpO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZC5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIHJlY292ZXJJdGVtKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0aGlzLmNvbXBsZXRlZC5maWx0ZXIoKGkpID0+IGkuaWQgIT09IGl0ZW0uaWQpO1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgfVxufVxuIiwiLy8gc3RvcmFnZS5qc1xuXG5pbXBvcnQgTGlzdCBmcm9tICcuL2xpc3RzJztcbmltcG9ydCBUb0RvIGZyb20gJy4vdG9kb3MnO1xuXG5jb25zdCBzdG9yYWdlID0gKCgpID0+IHtcbiAgICBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RkYXRhJykgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdGRhdGEnKSk7XG4gICAgICAgIGNvbnN0IGxpc3RzID0gW107XG5cbiAgICAgICAgZGF0YS5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdMaXN0ID0gbmV3IExpc3QobGlzdC5uYW1lLGxpc3Quc29ydFR5cGUpO1xuXG4gICAgICAgICAgICBsaXN0Lml0ZW1zLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvRG8oXG4gICAgICAgICAgICAgICAgICAgIHRhc2sudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIG5ld0xpc3QuaWQsXG4gICAgICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgdGFzay5jb2xvclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbmV3TGlzdC5hZGRJdGVtKG5ld1RvZG8pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxpc3RzLnB1c2gobmV3TGlzdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBsaXN0cztcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RvcmVEYXRhID0gKGxpc3RzKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0ZGF0YScsIEpTT04uc3RyaW5naWZ5KGxpc3RzKSk7XG4gICAgXG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldERhdGEsIHN0b3JlRGF0YSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTsiLCIvLyB0b2Rvcy5qc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHBhcmVudGlkLCBkdWVEYXRlLCBwcmlvcml0eSwgY29sb3IpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuaWQgPSBgaWQke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpfWA7XG4gICAgICAgIHRoaXMucGFyZW50aWQgPSBwYXJlbnRpZDtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvciB8fCAnI2E5YWRjMSc7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbmRleC5qc1xuXG5pbXBvcnQgaW5pdGlhbGl6ZSBmcm9tICcuL2luaXRpYWxpemUnO1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuXG5pbml0aWFsaXplKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=