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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Hiragino-Kaku-Gothic-Pro-W3.otf */ "./src/fonts/Hiragino-Kaku-Gothic-Pro-W3.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* style.css */\n@font-face {\n  font-family: Matter;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: Matter;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: bold;\n}\n\n@font-face {\n  font-family: 'Hiragino Kaku Gothic Pro';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nul {\n  list-style-type: none;\n}\n\n:root {\n  --white: #fff;\n  --black: #1f2028;\n  --blue: #36a3ff;\n  --light: #a9adc1;\n  --grey: #2e3039;\n  --light-sub: #7a7c85;\n  --red: #ff4545;\n  --yellow: #ffd644;\n  --transparent: #2e303941;\n  --default-width: min(800px, 100%);\n\n  font-family: \"Matter\", 'Hiragino Kaku Gothic Pro', sans-serif;\n  font-size: 16px;\n  overflow-x: hidden;\n}\n\nbody {\n  margin: 0 auto;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: var(--black);\n  color: var(--light);\n}\n\nheader {\n  font-weight: bold;\n  font-size: 1.5rem;\n  color: var(--blue);\n  padding: 10px;\n  padding-left: 50px;\n  border: 1px solid var(--grey);\n}\n\n#content {\n  padding: 20px 50px;\n  min-height: 100%;\n}\n\n#title {\n  font-size: 1.2rem;\n}\n\n#container {\n  margin-top: 10px;\n  padding: 10px 0px 20px;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 300px;\n  align-items: flex-start;\n  gap: 15px;\n  overflow-x: auto;\n  min-height: 200px;\n}\n\n#add-list:hover {\n  background-color: var(--grey);\n  cursor: pointer;\n}\n\n#add-list-label {\n  text-align: center;\n}\n\n#add-list-input {\n  padding: inherit;\n  color: inherit;\n  font-family: inherit;\n  font-size: 1rem;\n  background: none;\n  border: none;\n}\n\n.list {\n  border: 1px solid var(--grey);\n  border-radius: 7px;\n  padding: 10px;\n  background-color: var(--transparent);\n}\n\n.list-header {\n  display: flex;\n}\n\n.list-title {\n  font-size: 1.1rem;\n  padding: 10px;\n  margin: none;\n  color: inherit;\n  font-family: inherit;\n  background: none;\n  border: none;\n}\n\n.list-options {\n  margin: auto;\n  margin-right: 0px;\n  cursor: pointer;\n  height: 100%;\n  aspect-ratio: 1 / 1;\n}\n\n.list * {\n  outline: none;\n}\n\n.anchor {\n  position: relative;\n  display: none;\n}\n\n.popover {\n  border-radius: 5px;\n  width: 100px;\n  padding: 10px;\n  position: absolute;\n  left: 25px;\n  background-color: var(--grey);\n  display: flex;\n  flex-direction: column;\n}\n\n.popover-label {\n  font-size: 0.8rem;\n  padding: 5px;\n}\n\n.popover-sort {\n  display: flex;\n  flex-direction: column;\n}\n\n.popover-sort li {\n  cursor: pointer;\n  padding: 5px;\n}\n\n.popover-options {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.popover-options li {\n  cursor: pointer;\n  padding: 5px;\n}\n\n.popover-delete {\n  color: var(--red);\n}\n\n.popover-delete:hover {\n  color: red !important;\n}\n\n.todo {\n  padding: 10px;\n  border-radius: 5px;\n  display: flex;\n}\n\n.todo-body {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n\n.todo-title {\n  margin: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: 1rem;\n  background: none;\n  border: none;\n}\n\n.todo-desc {\n  font-size: 0.8rem;\n  color: var(--light-sub);\n  white-space: normal;\n  word-wrap: break-word;\n}\n\n.hide-overflow {\n  overflow-wrap: anywhere;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.todo-edit-body {\n  width: calc(100% - 60px);\n  display: none;\n  flex-direction: column;\n  padding: 10px;\n  gap: 5px;\n}\n\n.todo-edit-title {\n  margin: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: 1rem;\n  background: none;\n  border: none;\n}\n\n.todo-edit-desc {\n  color: var(--light);\n  font-family: inherit;\n  font-size: 0.8rem;\n  background: none;\n  border: none;\n  height: 80px;\n  outline: none;\n  box-shadow: none;\n  resize: none;\n}\n\n.todo-mark,\n.todo-close,\n.add-todo-mark,\n.todo-edit-color-reset {\n  margin: auto 0;\n  height: 100%;\n  aspect-ratio: 1 / 1;\n}\n\n.todo-edit-date {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.todo-edit-date-input {\n  width: 110px;\n  height: 1.1rem;\n}\n\n.todo-edit-priority {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.todo-edit-priority-input {\n  width: 50px; \n  height: 1.1rem;\n  padding-left: 3px;\n}\n\n.todo-edit-color {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.todo-edit-color-input {\n  height: 1.3rem;\n}\n\n.todo-edit-color-reset:hover {\n  src: local('./images/reset_white.svg');\n}\n\n.todo-close {\n  margin-left: auto;\n  visibility: hidden;\n}\n\n.add-todo {\n  padding: 10px 10px 10px 7.5px;\n  display: flex;\n  border-radius: 5px;\n}\n\n.add-todo:hover:not(:focus) {\n  background-color: var(--grey);\n  cursor: pointer;\n}\n\n.add-todo-label {\n  padding: 10px;\n}\n\n.add-todo-form {\n  display: none;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.add-todo-input {\n  padding: inherit;\n  color: inherit;\n  font-family: inherit;\n  font-size: 1rem;\n  background: none;\n  border: none;\n}\n\n.add-todo-area {\n  color: inherit;\n  font-family: inherit;\n  background: none;\n  border: none;\n  overflow: auto;\n  outline: none;\n  box-shadow: none;\n  resize: none;\n}\n\n.add-todo-date {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.add-todo-date-input {\n  width: 110px;\n  height: 1.1rem;\n  padding-left: 3px;\n}\n\n::-webkit-datetime-edit {\n  padding-left: 3px;\n}\n\n.add-todo-priority {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.add-todo-priority-input {\n  width: 50px;\n  height: 1.1rem;\n  padding-left: 3px;\n}\n\n.add-todo-color {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.add-todo-color-input {\n  height: 1.3rem;\n}\n\n.todo:hover:not(:focus) {\n  background-color: var(--grey);\n  cursor: pointer;\n}\n\nfooter {\n  text-align: center;\n  margin-top: auto;\n  padding: 10px;\n}\n\n.popover li:hover {\n  color: var(--white);\n  cursor: pointer;\n}\n\n.enabled {\n  text-decoration: underline;\n  font-weight: 600;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["/* style.css */\n@font-face {\n  font-family: Matter;\n  src: url(../fonts/Matter-Regular.otf);\n}\n\n@font-face {\n  font-family: Matter;\n  src: url(../fonts/Matter-Bold.otf);\n  font-weight: bold;\n}\n\n@font-face {\n  font-family: 'Hiragino Kaku Gothic Pro';\n  src: url(../fonts/Hiragino-Kaku-Gothic-Pro-W3.otf);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nul {\n  list-style-type: none;\n}\n\n:root {\n  --white: #fff;\n  --black: #1f2028;\n  --blue: #36a3ff;\n  --light: #a9adc1;\n  --grey: #2e3039;\n  --light-sub: #7a7c85;\n  --red: #ff4545;\n  --yellow: #ffd644;\n  --transparent: #2e303941;\n  --default-width: min(800px, 100%);\n\n  font-family: \"Matter\", 'Hiragino Kaku Gothic Pro', sans-serif;\n  font-size: 16px;\n  overflow-x: hidden;\n}\n\nbody {\n  margin: 0 auto;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  min-height: 100vh;\n  background-color: var(--black);\n  color: var(--light);\n}\n\nheader {\n  font-weight: bold;\n  font-size: 1.5rem;\n  color: var(--blue);\n  padding: 10px;\n  padding-left: 50px;\n  border: 1px solid var(--grey);\n}\n\n#content {\n  padding: 20px 50px;\n  min-height: 100%;\n}\n\n#title {\n  font-size: 1.2rem;\n}\n\n#container {\n  margin-top: 10px;\n  padding: 10px 0px 20px;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 300px;\n  align-items: flex-start;\n  gap: 15px;\n  overflow-x: auto;\n  min-height: 200px;\n}\n\n#add-list:hover {\n  background-color: var(--grey);\n  cursor: pointer;\n}\n\n#add-list-label {\n  text-align: center;\n}\n\n#add-list-input {\n  padding: inherit;\n  color: inherit;\n  font-family: inherit;\n  font-size: 1rem;\n  background: none;\n  border: none;\n}\n\n.list {\n  border: 1px solid var(--grey);\n  border-radius: 7px;\n  padding: 10px;\n  background-color: var(--transparent);\n}\n\n.list-header {\n  display: flex;\n}\n\n.list-title {\n  font-size: 1.1rem;\n  padding: 10px;\n  margin: none;\n  color: inherit;\n  font-family: inherit;\n  background: none;\n  border: none;\n}\n\n.list-options {\n  margin: auto;\n  margin-right: 0px;\n  cursor: pointer;\n  height: 100%;\n  aspect-ratio: 1 / 1;\n}\n\n.list * {\n  outline: none;\n}\n\n.anchor {\n  position: relative;\n  display: none;\n}\n\n.popover {\n  border-radius: 5px;\n  width: 100px;\n  padding: 10px;\n  position: absolute;\n  left: 25px;\n  background-color: var(--grey);\n  display: flex;\n  flex-direction: column;\n}\n\n.popover-label {\n  font-size: 0.8rem;\n  padding: 5px;\n}\n\n.popover-sort {\n  display: flex;\n  flex-direction: column;\n}\n\n.popover-sort li {\n  cursor: pointer;\n  padding: 5px;\n}\n\n.popover-options {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.popover-options li {\n  cursor: pointer;\n  padding: 5px;\n}\n\n.popover-delete {\n  color: var(--red);\n}\n\n.popover-delete:hover {\n  color: red !important;\n}\n\n.todo {\n  padding: 10px;\n  border-radius: 5px;\n  display: flex;\n}\n\n.todo-body {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n\n.todo-title {\n  margin: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: 1rem;\n  background: none;\n  border: none;\n}\n\n.todo-desc {\n  font-size: 0.8rem;\n  color: var(--light-sub);\n  white-space: normal;\n  word-wrap: break-word;\n}\n\n.hide-overflow {\n  overflow-wrap: anywhere;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.todo-edit-body {\n  width: calc(100% - 60px);\n  display: none;\n  flex-direction: column;\n  padding: 10px;\n  gap: 5px;\n}\n\n.todo-edit-title {\n  margin: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: 1rem;\n  background: none;\n  border: none;\n}\n\n.todo-edit-desc {\n  color: var(--light);\n  font-family: inherit;\n  font-size: 0.8rem;\n  background: none;\n  border: none;\n  height: 80px;\n  outline: none;\n  box-shadow: none;\n  resize: none;\n}\n\n.todo-mark,\n.todo-close,\n.add-todo-mark,\n.todo-edit-color-reset {\n  margin: auto 0;\n  height: 100%;\n  aspect-ratio: 1 / 1;\n}\n\n.todo-edit-date {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.todo-edit-date-input {\n  width: 110px;\n  height: 1.1rem;\n}\n\n.todo-edit-priority {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.todo-edit-priority-input {\n  width: 50px; \n  height: 1.1rem;\n  padding-left: 3px;\n}\n\n.todo-edit-color {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.todo-edit-color-input {\n  height: 1.3rem;\n}\n\n.todo-edit-color-reset:hover {\n  src: local('./images/reset_white.svg');\n}\n\n.todo-close {\n  margin-left: auto;\n  visibility: hidden;\n}\n\n.add-todo {\n  padding: 10px 10px 10px 7.5px;\n  display: flex;\n  border-radius: 5px;\n}\n\n.add-todo:hover:not(:focus) {\n  background-color: var(--grey);\n  cursor: pointer;\n}\n\n.add-todo-label {\n  padding: 10px;\n}\n\n.add-todo-form {\n  display: none;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.add-todo-input {\n  padding: inherit;\n  color: inherit;\n  font-family: inherit;\n  font-size: 1rem;\n  background: none;\n  border: none;\n}\n\n.add-todo-area {\n  color: inherit;\n  font-family: inherit;\n  background: none;\n  border: none;\n  overflow: auto;\n  outline: none;\n  box-shadow: none;\n  resize: none;\n}\n\n.add-todo-date {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.add-todo-date-input {\n  width: 110px;\n  height: 1.1rem;\n  padding-left: 3px;\n}\n\n::-webkit-datetime-edit {\n  padding-left: 3px;\n}\n\n.add-todo-priority {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.add-todo-priority-input {\n  width: 50px;\n  height: 1.1rem;\n  padding-left: 3px;\n}\n\n.add-todo-color {\n  font-size: 16px;\n  display: flex;\n  gap: 5px;\n}\n\n.add-todo-color-input {\n  height: 1.3rem;\n}\n\n.todo:hover:not(:focus) {\n  background-color: var(--grey);\n  cursor: pointer;\n}\n\nfooter {\n  text-align: center;\n  margin-top: auto;\n  padding: 10px;\n}\n\n.popover li:hover {\n  color: var(--white);\n  cursor: pointer;\n}\n\n.enabled {\n  text-decoration: underline;\n  font-weight: 600;\n}"],"sourceRoot":""}]);
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
        const todoTitle = document.createElement('input');
        const todoDesc = document.createElement('p');
        const todoDate = document.createElement('p');
        const todoEditBody = document.createElement('div');
        const todoEditTitle = document.createElement('input');
        const todoEditDesc = document.createElement('textarea');
        const todoEditDate = document.createElement('div');
        const todoEditDateLabel = document.createElement('p');
        const todoEditDateInput = document.createElement('input');
        const todoEditDateReset = document.createElement('img');
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
        todoEditDateReset.classList.add('todo-edit-date-reset');
        todoEditPriority.classList.add('todo-edit-priority');
        todoEditPriorityLabel.classList.add('todo-edit-priority-label');
        todoEditPriorityInput.classList.add('todo-edit-priority-input');
        todoEditColor.classList.add('todo-edit-color');
        todoEditColorLabel.classList.add('todo-edit-color-label');
        todoEditColorInput.classList.add('todo-edit-color-input');
        todoEditColorReset.classList.add('todo-edit-color-reset');
        todoClose.classList.add('todo-close');
        todoMark.src = _images_check_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
        todoTitle.value = task.title;
        todoTitle.placeholder = 'Untitled';
        todoTitle.style.color = task.color;
        todoDesc.innerText = task.description;
        todoDate.innerHTML = task.dueDate ? `Due: <i>${task.dueDate}</i>` : '';
        todoEditTitle.placeholder = 'Untitled';
        todoEditTitle.value = task.title;
        todoEditTitle.style.color = task.color;
        todoEditDesc.placeholder = 'description';
        todoEditDesc.value = task.description;
        todoEditDateLabel.innerText = 'Date: ';
        todoEditDateInput.type = 'date';
        todoEditDateInput.value = task.dueDate;
        todoEditDateReset.src = _images_reset_svg__WEBPACK_IMPORTED_MODULE_7__
        todoEditDateReset.style.display = task.dueDate === '' ? 'none' : 'block';
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

        todoEditDateReset.onmouseover = () => {
            todoEditDateReset.src = _images_reset_white_svg__WEBPACK_IMPORTED_MODULE_8__;
        };
        todoEditDateReset.onmouseout = () => {
            todoEditDateReset.src = _images_reset_svg__WEBPACK_IMPORTED_MODULE_7__;
        };
        todoEditDateReset.onclick = () => {
            todoEditDateInput.value = '';
            todoEditDateReset.style.display = 'none';
        };

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
        todoEditDate.appendChild(todoEditDateReset);
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

/***/ "./src/fonts/Hiragino-Kaku-Gothic-Pro-W3.otf":
/*!***************************************************!*\
  !*** ./src/fonts/Hiragino-Kaku-Gothic-Pro-W3.otf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4d568250dbb87e23fbb.otf";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sUUFBUSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUs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O0FBRTVCLHVEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9NYXR0ZXItUmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9NYXR0ZXItQm9sZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9IaXJhZ2luby1LYWt1LUdvdGhpYy1Qcm8tVzMub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZS5jc3MgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBNYXR0ZXI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE1hdHRlcjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbjpyb290IHtcXG4gIC0td2hpdGU6ICNmZmY7XFxuICAtLWJsYWNrOiAjMWYyMDI4O1xcbiAgLS1ibHVlOiAjMzZhM2ZmO1xcbiAgLS1saWdodDogI2E5YWRjMTtcXG4gIC0tZ3JleTogIzJlMzAzOTtcXG4gIC0tbGlnaHQtc3ViOiAjN2E3Yzg1O1xcbiAgLS1yZWQ6ICNmZjQ1NDU7XFxuICAtLXllbGxvdzogI2ZmZDY0NDtcXG4gIC0tdHJhbnNwYXJlbnQ6ICMyZTMwMzk0MTtcXG4gIC0tZGVmYXVsdC13aWR0aDogbWluKDgwMHB4LCAxMDAlKTtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0dGVyXFxcIiwgJ0hpcmFnaW5vIEtha3UgR290aGljIFBybycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgcGFkZGluZzogMjBweCA1MHB4O1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDBweCAyMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWF1dG8tY29sdW1uczogMzAwcHg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMTVweDtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuI2FkZC1saXN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLWxpc3QtbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYWRkLWxpc3QtaW5wdXQge1xcbiAgcGFkZGluZzogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubGlzdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XFxufVxcblxcbi5saXN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubGlzdC10aXRsZSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmxpc3Qtb3B0aW9ucyB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5saXN0ICoge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmFuY2hvciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucG9wb3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wb3BvdmVyLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucG9wb3Zlci1zb3J0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucG9wb3Zlci1zb3J0IGxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnBvcG92ZXItb3B0aW9ucyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wb3BvdmVyLW9wdGlvbnMgbGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucG9wb3Zlci1kZWxldGUge1xcbiAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi5wb3BvdmVyLWRlbGV0ZTpob3ZlciB7XFxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XFxufVxcblxcbi50b2RvIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9kby1ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgbWFyZ2luOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50b2RvLWRlc2Mge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtc3ViKTtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5oaWRlLW92ZXJmbG93IHtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbn1cXG5cXG4udG9kby1lZGl0LWJvZHkge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWVkaXQtdGl0bGUge1xcbiAgbWFyZ2luOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50b2RvLWVkaXQtZGVzYyB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnRvZG8tbWFyayxcXG4udG9kby1jbG9zZSxcXG4uYWRkLXRvZG8tbWFyayxcXG4udG9kby1lZGl0LWNvbG9yLXJlc2V0IHtcXG4gIG1hcmdpbjogYXV0byAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLnRvZG8tZWRpdC1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tZWRpdC1kYXRlLWlucHV0IHtcXG4gIHdpZHRoOiAxMTBweDtcXG4gIGhlaWdodDogMS4xcmVtO1xcbn1cXG5cXG4udG9kby1lZGl0LXByaW9yaXR5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tZWRpdC1wcmlvcml0eS1pbnB1dCB7XFxuICB3aWR0aDogNTBweDsgXFxuICBoZWlnaHQ6IDEuMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogM3B4O1xcbn1cXG5cXG4udG9kby1lZGl0LWNvbG9yIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tZWRpdC1jb2xvci1pbnB1dCB7XFxuICBoZWlnaHQ6IDEuM3JlbTtcXG59XFxuXFxuLnRvZG8tZWRpdC1jb2xvci1yZXNldDpob3ZlciB7XFxuICBzcmM6IGxvY2FsKCcuL2ltYWdlcy9yZXNldF93aGl0ZS5zdmcnKTtcXG59XFxuXFxuLnRvZG8tY2xvc2Uge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5hZGQtdG9kbyB7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA3LjVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5hZGQtdG9kbzpob3Zlcjpub3QoOmZvY3VzKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvLWxhYmVsIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5hZGQtdG9kby1mb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8taW5wdXQge1xcbiAgcGFkZGluZzogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYWRkLXRvZG8tYXJlYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5hZGQtdG9kby1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmFkZC10b2RvLWRhdGUtaW5wdXQge1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgaGVpZ2h0OiAxLjFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDNweDtcXG59XFxuXFxuOjotd2Via2l0LWRhdGV0aW1lLWVkaXQge1xcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XFxufVxcblxcbi5hZGQtdG9kby1wcmlvcml0eSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5hZGQtdG9kby1wcmlvcml0eS1pbnB1dCB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogMS4xcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XFxufVxcblxcbi5hZGQtdG9kby1jb2xvciB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5hZGQtdG9kby1jb2xvci1pbnB1dCB7XFxuICBoZWlnaHQ6IDEuM3JlbTtcXG59XFxuXFxuLnRvZG86aG92ZXI6bm90KDpmb2N1cykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnBvcG92ZXIgbGk6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVuYWJsZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjO0FBQ2Q7RUFDRSxtQkFBbUI7RUFDbkIsNENBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUFrQztFQUNsQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsNENBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFl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LGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzdHlsZS5jc3MgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBNYXR0ZXI7XFxuICBzcmM6IHVybCguLi9mb250cy9NYXR0ZXItUmVndWxhci5vdGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBNYXR0ZXI7XFxuICBzcmM6IHVybCguLi9mb250cy9NYXR0ZXItQm9sZC5vdGYpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm8nO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvSGlyYWdpbm8tS2FrdS1Hb3RoaWMtUHJvLVczLm90Zik7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXdoaXRlOiAjZmZmO1xcbiAgLS1ibGFjazogIzFmMjAyODtcXG4gIC0tYmx1ZTogIzM2YTNmZjtcXG4gIC0tbGlnaHQ6ICNhOWFkYzE7XFxuICAtLWdyZXk6ICMyZTMwMzk7XFxuICAtLWxpZ2h0LXN1YjogIzdhN2M4NTtcXG4gIC0tcmVkOiAjZmY0NTQ1O1xcbiAgLS15ZWxsb3c6ICNmZmQ2NDQ7XFxuICAtLXRyYW5zcGFyZW50OiAjMmUzMDM5NDE7XFxuICAtLWRlZmF1bHQtd2lkdGg6IG1pbig4MDBweCwgMTAwJSk7XFxuXFxuICBmb250LWZhbWlseTogXFxcIk1hdHRlclxcXCIsICdIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIHBhZGRpbmc6IDIwcHggNTBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiN0aXRsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweCAwcHggMjBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDMwMHB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDE1cHg7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgbWluLWhlaWdodDogMjAwcHg7XFxufVxcblxcbiNhZGQtbGlzdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZC1saXN0LWxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2FkZC1saXN0LWlucHV0IHtcXG4gIHBhZGRpbmc6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmxpc3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xcbn1cXG5cXG4ubGlzdC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5saXN0LW9wdGlvbnMge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4ubGlzdCAqIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5hbmNob3Ige1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnBvcG92ZXIge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucG9wb3Zlci1sYWJlbCB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnBvcG92ZXItc29ydCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBvcG92ZXItc29ydCBsaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wb3BvdmVyLW9wdGlvbnMge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucG9wb3Zlci1vcHRpb25zIGxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnBvcG92ZXItZGVsZXRlIHtcXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4ucG9wb3Zlci1kZWxldGU6aG92ZXIge1xcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xcbn1cXG5cXG4udG9kbyB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvZG8tYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gIG1hcmdpbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udG9kby1kZXNjIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXN1Yik7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uaGlkZS1vdmVyZmxvdyB7XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG59XFxuXFxuLnRvZG8tZWRpdC1ib2R5IHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kby1lZGl0LXRpdGxlIHtcXG4gIG1hcmdpbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udG9kby1lZGl0LWRlc2Mge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi50b2RvLW1hcmssXFxuLnRvZG8tY2xvc2UsXFxuLmFkZC10b2RvLW1hcmssXFxuLnRvZG8tZWRpdC1jb2xvci1yZXNldCB7XFxuICBtYXJnaW46IGF1dG8gMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi50b2RvLWVkaXQtZGF0ZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWVkaXQtZGF0ZS1pbnB1dCB7XFxuICB3aWR0aDogMTEwcHg7XFxuICBoZWlnaHQ6IDEuMXJlbTtcXG59XFxuXFxuLnRvZG8tZWRpdC1wcmlvcml0eSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWVkaXQtcHJpb3JpdHktaW5wdXQge1xcbiAgd2lkdGg6IDUwcHg7IFxcbiAgaGVpZ2h0OiAxLjFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDNweDtcXG59XFxuXFxuLnRvZG8tZWRpdC1jb2xvciB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWVkaXQtY29sb3ItaW5wdXQge1xcbiAgaGVpZ2h0OiAxLjNyZW07XFxufVxcblxcbi50b2RvLWVkaXQtY29sb3ItcmVzZXQ6aG92ZXIge1xcbiAgc3JjOiBsb2NhbCgnLi9pbWFnZXMvcmVzZXRfd2hpdGUuc3ZnJyk7XFxufVxcblxcbi50b2RvLWNsb3NlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uYWRkLXRvZG8ge1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNy41cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYWRkLXRvZG86aG92ZXI6bm90KDpmb2N1cykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdG9kby1sYWJlbCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmFkZC10b2RvLWlucHV0IHtcXG4gIHBhZGRpbmc6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmFkZC10b2RvLWFyZWEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uYWRkLXRvZG8tZGF0ZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5hZGQtdG9kby1kYXRlLWlucHV0IHtcXG4gIHdpZHRoOiAxMTBweDtcXG4gIGhlaWdodDogMS4xcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XFxufVxcblxcbjo6LXdlYmtpdC1kYXRldGltZS1lZGl0IHtcXG4gIHBhZGRpbmctbGVmdDogM3B4O1xcbn1cXG5cXG4uYWRkLXRvZG8tcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tcHJpb3JpdHktaW5wdXQge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDEuMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogM3B4O1xcbn1cXG5cXG4uYWRkLXRvZG8tY29sb3Ige1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tY29sb3ItaW5wdXQge1xcbiAgaGVpZ2h0OiAxLjNyZW07XFxufVxcblxcbi50b2RvOmhvdmVyOm5vdCg6Zm9jdXMpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wb3BvdmVyIGxpOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lbmFibGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vLyBVSS5qc1xuXG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJztcbmltcG9ydCBjaGVja091dGxpbmUgZnJvbSAnLi9pbWFnZXMvY2hlY2tfb3V0bGluZS5zdmcnO1xuaW1wb3J0IGNoZWNrIGZyb20gJy4vaW1hZ2VzL2NoZWNrLnN2Zyc7XG5pbXBvcnQgY2xvc2UgZnJvbSAnLi9pbWFnZXMvY2xvc2Uuc3ZnJztcbmltcG9ydCBjbG9zZVdoaXRlIGZyb20gJy4vaW1hZ2VzL2Nsb3NlX3doaXRlLnN2ZydcbmltcG9ydCBtb3JlIGZyb20gJy4vaW1hZ2VzL21vcmUuc3ZnJztcbmltcG9ydCBhZGQgZnJvbSAnLi9pbWFnZXMvYWRkLnN2Zyc7XG5pbXBvcnQgcmVzZXQgZnJvbSAnLi9pbWFnZXMvcmVzZXQuc3ZnJ1xuaW1wb3J0IHJlc2V0V2hpdGUgZnJvbSAnLi9pbWFnZXMvcmVzZXRfd2hpdGUuc3ZnJ1xuXG5jb25zdCBET00gPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGFwcERhdGEgPSBhcHAuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZC5pZCAhPT0gJ2FkZC1saXN0Jykge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcERhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3QoaXRlbSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1saXN0JykpO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVUaXRsZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0aXRsZS5pZCA9ICd0aXRsZSc7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9ICdNeSBUYXNrcyc7XG5cbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnRhaW5lci5pZCA9ICdjb250YWluZXInO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBZGRMaXN0KCkpO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUFkZExpc3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYWRkTGlzdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBhZGRMaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgIGFkZExpc3QuaWQgPSAnYWRkLWxpc3QnO1xuICAgICAgICBhZGRMaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcbiAgICAgICAgYWRkTGlzdExhYmVsLmlkID0gJ2FkZC1saXN0LWxhYmVsJztcbiAgICAgICAgYWRkTGlzdElucHV0LmlkID0gJ2FkZC1saXN0LWlucHV0JztcblxuICAgICAgICBhZGRMaXN0TGFiZWwuaW5uZXJUZXh0ID0gJysgQWRkIG5ldyBsaXN0JztcbiAgICAgICAgYWRkTGlzdElucHV0LnBsYWNlaG9sZGVyID0gJ05ldyBsaXN0JztcbiAgICAgICAgYWRkTGlzdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgYWRkTGlzdC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgYWRkTGlzdExhYmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBhZGRMaXN0SW5wdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBhZGRMaXN0SW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFhZGRMaXN0LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0TGFiZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgYWRkTGlzdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiBhZGRMaXN0SW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhcHAuYWRkTGlzdChhZGRMaXN0SW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIGFkZExpc3RMYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBhZGRMaXN0SW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBhZGRMaXN0SW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWRkTGlzdC5hcHBlbmRDaGlsZChhZGRMaXN0TGFiZWwpO1xuICAgICAgICBhZGRMaXN0LmFwcGVuZENoaWxkKGFkZExpc3RJbnB1dCk7XG5cbiAgICAgICAgcmV0dXJuIGFkZExpc3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUxpc3QgPSAobGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBkaXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdkxpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGl2TGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgZGl2TGlzdE9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgZGl2TGlzdEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgY29uc3QgcG9wb3ZlciA9IGNyZWF0ZVBvcG92ZXIobGlzdCk7XG5cbiAgICAgICAgZGl2TGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG4gICAgICAgIGRpdkxpc3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbGlzdC1oZWFkZXInKTtcbiAgICAgICAgZGl2TGlzdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2xpc3QtdGl0bGUnKTtcbiAgICAgICAgZGl2TGlzdE9wdGlvbnMuY2xhc3NMaXN0LmFkZCgnbGlzdC1vcHRpb25zJyk7XG4gICAgICAgIGRpdkxpc3RJdGVtcy5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW1zJyk7XG4gICAgICAgIGRpdkxpc3RUaXRsZS52YWx1ZSA9IGxpc3QubmFtZTtcbiAgICAgICAgZGl2TGlzdFRpdGxlLnBsYWNlaG9sZGVyID0gJ1VudGl0bGVkJztcbiAgICAgICAgZGl2TGlzdE9wdGlvbnMuc3JjID0gbW9yZTtcblxuICAgICAgICBkaXZMaXN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0T2JqID0gbGlzdDtcbiAgICAgICAgICAgIGxpc3RPYmoubmFtZSA9IGRpdkxpc3RUaXRsZS52YWx1ZTtcbiAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXZMaXN0T3B0aW9ucy5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgcG9wb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFkaXZMaXN0T3B0aW9ucy5jb250YWlucyhlLnRhcmdldCkgJiYgIXBvcG92ZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcG92ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGRpdkxpc3QuYXBwZW5kQ2hpbGQoZGl2TGlzdEhlYWRlcik7XG4gICAgICAgIGRpdkxpc3QuYXBwZW5kQ2hpbGQoZGl2TGlzdEl0ZW1zKTtcbiAgICAgICAgbGlzdC5pdGVtcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBkaXZMaXN0SXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kbyh0b2RvKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXZMaXN0SXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkVG9kbyhsaXN0LmlkKSk7XG4gICAgICAgIGRpdkxpc3RIZWFkZXIuYXBwZW5kQ2hpbGQoZGl2TGlzdFRpdGxlKTtcbiAgICAgICAgZGl2TGlzdEhlYWRlci5hcHBlbmRDaGlsZChkaXZMaXN0T3B0aW9ucyk7XG4gICAgICAgIGRpdkxpc3RIZWFkZXIuYXBwZW5kQ2hpbGQocG9wb3Zlcik7XG5cbiAgICAgICAgcmV0dXJuIGRpdkxpc3Q7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSAodGFzaykgPT4ge1xuICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9NYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IHRvZG9Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdG9kb0VkaXRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9FZGl0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0b2RvRWRpdERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBjb25zdCB0b2RvRWRpdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdG9kb0VkaXREYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRvZG9FZGl0RGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgdG9kb0VkaXREYXRlUmVzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgdG9kb0VkaXRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0b2RvRWRpdFByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRvZG9FZGl0UHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9FZGl0Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdG9kb0VkaXRDb2xvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0b2RvRWRpdENvbG9ySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0b2RvRWRpdENvbG9yUmVzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgdG9kb0Nsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICAgICAgIHRvZG9NYXJrLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbWFyaycpO1xuICAgICAgICB0b2RvQm9keS5jbGFzc0xpc3QuYWRkKCd0b2RvLWJvZHknKTtcbiAgICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcbiAgICAgICAgdG9kb0Rlc2MuY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjJyk7XG4gICAgICAgIHRvZG9EZXNjLmNsYXNzTGlzdC5hZGQoJ2hpZGUtb3ZlcmZsb3cnKTtcbiAgICAgICAgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1kYXRlJyk7XG4gICAgICAgIHRvZG9FZGl0Qm9keS5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQtYm9keScpO1xuICAgICAgICB0b2RvRWRpdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWRpdC10aXRsZScpO1xuICAgICAgICB0b2RvRWRpdERlc2MuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LWRlc2MnKTtcbiAgICAgICAgdG9kb0VkaXREYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWRpdC1kYXRlJyk7XG4gICAgICAgIHRvZG9FZGl0RGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWRpdC1kYXRlLWxhYmVsJyk7XG4gICAgICAgIHRvZG9FZGl0RGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWRpdC1kYXRlLWlucHV0Jyk7XG4gICAgICAgIHRvZG9FZGl0RGF0ZVJlc2V0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWRpdC1kYXRlLXJlc2V0Jyk7XG4gICAgICAgIHRvZG9FZGl0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LXByaW9yaXR5Jyk7XG4gICAgICAgIHRvZG9FZGl0UHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQtcHJpb3JpdHktbGFiZWwnKTtcbiAgICAgICAgdG9kb0VkaXRQcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWRpdC1wcmlvcml0eS1pbnB1dCcpO1xuICAgICAgICB0b2RvRWRpdENvbG9yLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWRpdC1jb2xvcicpO1xuICAgICAgICB0b2RvRWRpdENvbG9yTGFiZWwuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LWNvbG9yLWxhYmVsJyk7XG4gICAgICAgIHRvZG9FZGl0Q29sb3JJbnB1dC5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQtY29sb3ItaW5wdXQnKTtcbiAgICAgICAgdG9kb0VkaXRDb2xvclJlc2V0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWRpdC1jb2xvci1yZXNldCcpO1xuICAgICAgICB0b2RvQ2xvc2UuY2xhc3NMaXN0LmFkZCgndG9kby1jbG9zZScpO1xuICAgICAgICB0b2RvTWFyay5zcmMgPSBjaGVja091dGxpbmU7XG4gICAgICAgIHRvZG9UaXRsZS52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgICAgIHRvZG9UaXRsZS5wbGFjZWhvbGRlciA9ICdVbnRpdGxlZCc7XG4gICAgICAgIHRvZG9UaXRsZS5zdHlsZS5jb2xvciA9IHRhc2suY29sb3I7XG4gICAgICAgIHRvZG9EZXNjLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIHRvZG9EYXRlLmlubmVySFRNTCA9IHRhc2suZHVlRGF0ZSA/IGBEdWU6IDxpPiR7dGFzay5kdWVEYXRlfTwvaT5gIDogJyc7XG4gICAgICAgIHRvZG9FZGl0VGl0bGUucGxhY2Vob2xkZXIgPSAnVW50aXRsZWQnO1xuICAgICAgICB0b2RvRWRpdFRpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICAgICAgdG9kb0VkaXRUaXRsZS5zdHlsZS5jb2xvciA9IHRhc2suY29sb3I7XG4gICAgICAgIHRvZG9FZGl0RGVzYy5wbGFjZWhvbGRlciA9ICdkZXNjcmlwdGlvbic7XG4gICAgICAgIHRvZG9FZGl0RGVzYy52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIHRvZG9FZGl0RGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdEYXRlOiAnO1xuICAgICAgICB0b2RvRWRpdERhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgICB0b2RvRWRpdERhdGVJbnB1dC52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgdG9kb0VkaXREYXRlUmVzZXQuc3JjID0gcmVzZXRcbiAgICAgICAgdG9kb0VkaXREYXRlUmVzZXQuc3R5bGUuZGlzcGxheSA9IHRhc2suZHVlRGF0ZSA9PT0gJycgPyAnbm9uZScgOiAnYmxvY2snO1xuICAgICAgICB0b2RvRWRpdFByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5OiAnO1xuICAgICAgICB0b2RvRWRpdFByaW9yaXR5SW5wdXQudHlwZSA9ICdudW1iZXInO1xuICAgICAgICB0b2RvRWRpdFByaW9yaXR5SW5wdXQudmFsdWUgPSB0YXNrLnByaW9yaXR5IHx8IDA7XG4gICAgICAgIHRvZG9FZGl0Q29sb3JMYWJlbC5pbm5lclRleHQgPSAnQ29sb3I6ICc7XG4gICAgICAgIHRvZG9FZGl0Q29sb3JJbnB1dC50eXBlID0gJ2NvbG9yJztcbiAgICAgICAgdG9kb0VkaXRDb2xvcklucHV0LnZhbHVlID0gdGFzay5jb2xvciB8fCAnI2E5YWRjMSc7XG4gICAgICAgIHRvZG9FZGl0Q29sb3JSZXNldC5zcmMgPSByZXNldFxuICAgICAgICB0b2RvRWRpdENvbG9yUmVzZXQuc3R5bGUuZGlzcGxheSA9IHRhc2suY29sb3IgPT09ICcjYTlhZGMxJyA/ICdub25lJyA6ICdibG9jayc7XG4gICAgICAgIHRvZG9DbG9zZS5zcmMgPSBjbG9zZTtcblxuICAgICAgICB0b2RvTWFyay5vbm1vdXNlb3ZlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRvZG9NYXJrLnNyYyA9IGNoZWNrO1xuICAgICAgICB9O1xuICAgICAgICB0b2RvTWFyay5vbm1vdXNlb3V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgdG9kb01hcmsuc3JjID0gY2hlY2tPdXRsaW5lO1xuICAgICAgICB9O1xuICAgICAgICB0b2RvTWFyay5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgYXBwLmNvbXBsZXRlVG9kbyh0YXNrKTtcbiAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRvZG9FZGl0Q29sb3JJbnB1dC5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0b2RvRWRpdENvbG9ySW5wdXQudmFsdWUgPT09ICcjYTlhZGMxJykge1xuICAgICAgICAgICAgICAgIHRvZG9FZGl0Q29sb3JSZXNldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2RvRWRpdENvbG9yUmVzZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvRWRpdFRpdGxlLnN0eWxlLmNvbG9yID0gdG9kb0VkaXRDb2xvcklucHV0LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9kb0VkaXREYXRlUmVzZXQub25tb3VzZW92ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvRWRpdERhdGVSZXNldC5zcmMgPSByZXNldFdoaXRlO1xuICAgICAgICB9O1xuICAgICAgICB0b2RvRWRpdERhdGVSZXNldC5vbm1vdXNlb3V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0VkaXREYXRlUmVzZXQuc3JjID0gcmVzZXQ7XG4gICAgICAgIH07XG4gICAgICAgIHRvZG9FZGl0RGF0ZVJlc2V0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvRWRpdERhdGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdG9kb0VkaXREYXRlUmVzZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfTtcblxuICAgICAgICB0b2RvRWRpdENvbG9yUmVzZXQub25tb3VzZW92ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvRWRpdENvbG9yUmVzZXQuc3JjID0gcmVzZXRXaGl0ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdG9kb0VkaXRDb2xvclJlc2V0Lm9ubW91c2VvdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvRWRpdENvbG9yUmVzZXQuc3JjID0gcmVzZXQ7XG4gICAgICAgIH07XG4gICAgICAgIHRvZG9FZGl0Q29sb3JSZXNldC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0VkaXRDb2xvcklucHV0LnZhbHVlID0gJyNhOWFkYzEnO1xuICAgICAgICAgICAgdG9kb0VkaXRUaXRsZS5zdHlsZS5jb2xvciA9IHRvZG9FZGl0Q29sb3JJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIHRvZG9FZGl0Q29sb3JSZXNldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgdG9kby5vbm1vdXNlb3ZlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRvZG9DbG9zZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICB9O1xuICAgICAgICB0b2RvLm9ubW91c2VvdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvQ2xvc2Uuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRvZG9DbG9zZS5vbm1vdXNlb3ZlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRvZG9DbG9zZS5zcmMgPSBjbG9zZVdoaXRlO1xuICAgICAgICB9O1xuICAgICAgICB0b2RvQ2xvc2Uub25tb3VzZW91dCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRvZG9DbG9zZS5zcmMgPSBjbG9zZTtcbiAgICAgICAgfTtcbiAgICAgICAgdG9kb0Nsb3NlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBhcHAuZGVsZXRlVG9kbyh0YXNrKTtcbiAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRvZG8ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRvZG9Cb2R5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB0b2RvRWRpdEJvZHkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0b2RvLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBhcHAudXBkYXRlVG9kbyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2ssXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvRWRpdFRpdGxlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0VkaXREZXNjLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0VkaXREYXRlSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvRWRpdFByaW9yaXR5SW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvRWRpdENvbG9ySW5wdXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0JvZHkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgICAgICAgICAgdG9kb0VkaXRCb2R5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvTWFyayk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0JvZHkpO1xuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9FZGl0Qm9keSk7XG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb0Nsb3NlKTtcbiAgICAgICAgdG9kb0JvZHkuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICAgICAgdG9kb0JvZHkuYXBwZW5kQ2hpbGQodG9kb0Rlc2MpO1xuICAgICAgICB0b2RvQm9keS5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG4gICAgICAgIHRvZG9FZGl0Qm9keS5hcHBlbmRDaGlsZCh0b2RvRWRpdFRpdGxlKTtcbiAgICAgICAgdG9kb0VkaXRCb2R5LmFwcGVuZENoaWxkKHRvZG9FZGl0RGVzYyk7XG4gICAgICAgIHRvZG9FZGl0Qm9keS5hcHBlbmRDaGlsZCh0b2RvRWRpdERhdGUpO1xuICAgICAgICB0b2RvRWRpdEJvZHkuYXBwZW5kQ2hpbGQodG9kb0VkaXRQcmlvcml0eSk7XG4gICAgICAgIHRvZG9FZGl0Qm9keS5hcHBlbmRDaGlsZCh0b2RvRWRpdENvbG9yKTtcbiAgICAgICAgdG9kb0VkaXREYXRlLmFwcGVuZENoaWxkKHRvZG9FZGl0RGF0ZUxhYmVsKTtcbiAgICAgICAgdG9kb0VkaXREYXRlLmFwcGVuZENoaWxkKHRvZG9FZGl0RGF0ZUlucHV0KTtcbiAgICAgICAgdG9kb0VkaXREYXRlLmFwcGVuZENoaWxkKHRvZG9FZGl0RGF0ZVJlc2V0KTtcbiAgICAgICAgdG9kb0VkaXRQcmlvcml0eS5hcHBlbmRDaGlsZCh0b2RvRWRpdFByaW9yaXR5TGFiZWwpO1xuICAgICAgICB0b2RvRWRpdFByaW9yaXR5LmFwcGVuZENoaWxkKHRvZG9FZGl0UHJpb3JpdHlJbnB1dCk7XG4gICAgICAgIHRvZG9FZGl0Q29sb3IuYXBwZW5kQ2hpbGQodG9kb0VkaXRDb2xvckxhYmVsKTtcbiAgICAgICAgdG9kb0VkaXRDb2xvci5hcHBlbmRDaGlsZCh0b2RvRWRpdENvbG9ySW5wdXQpO1xuICAgICAgICB0b2RvRWRpdENvbG9yLmFwcGVuZENoaWxkKHRvZG9FZGl0Q29sb3JSZXNldCk7XG5cbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUFkZFRvZG8gPSAobGlzdGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBhZGRUb2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBhZGRUb2RvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBhZGRUb2RvQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9EYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9EYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBhZGRUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9Qcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb0NvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9Db2xvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBhZGRUb2RvQ29sb3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9NYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgYWRkVG9kby5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kbycpO1xuICAgICAgICBhZGRUb2RvTWFyay5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1tYXJrJyk7XG4gICAgICAgIGFkZFRvZG9MYWJlbC5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1sYWJlbCcpO1xuICAgICAgICBhZGRUb2RvRm9ybS5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1mb3JtJyk7XG4gICAgICAgIGFkZFRvZG9JbnB1dC5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1pbnB1dCcpO1xuICAgICAgICBhZGRUb2RvQXJlYS5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1hcmVhJyk7XG4gICAgICAgIGFkZFRvZG9EYXRlLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWRhdGUnKTtcbiAgICAgICAgYWRkVG9kb0RhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1kYXRlLWxhYmVsJyk7XG4gICAgICAgIGFkZFRvZG9EYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tZGF0ZS1pbnB1dCcpO1xuICAgICAgICBhZGRUb2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tcHJpb3JpdHknKTtcbiAgICAgICAgYWRkVG9kb1ByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tcHJpb3JpdHktbGFiZWwnKTtcbiAgICAgICAgYWRkVG9kb1ByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tcHJpb3JpdHktaW5wdXQnKTtcbiAgICAgICAgYWRkVG9kb0NvbG9yLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWNvbG9yJyk7XG4gICAgICAgIGFkZFRvZG9Db2xvckxhYmVsLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWNvbG9yLWxhYmVsJyk7XG4gICAgICAgIGFkZFRvZG9Db2xvcklucHV0LmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWNvbG9yLWlucHV0Jyk7XG4gICAgICAgIGFkZFRvZG9EYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgYWRkVG9kb01hcmsuc3JjID0gYWRkO1xuICAgICAgICBhZGRUb2RvTGFiZWwuaW5uZXJUZXh0ID0gJ0FkZCBhIHRhc2snO1xuICAgICAgICBhZGRUb2RvRGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdEYXRlOiAnO1xuICAgICAgICBhZGRUb2RvUHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSAnUHJpb3JpdHk6ICc7XG4gICAgICAgIGFkZFRvZG9Qcmlvcml0eUlucHV0LnR5cGUgPSAnbnVtYmVyJztcbiAgICAgICAgYWRkVG9kb1ByaW9yaXR5SW5wdXQudmFsdWUgPSAwO1xuICAgICAgICBhZGRUb2RvQ29sb3JMYWJlbC5pbm5lclRleHQgPSAnQ29sb3I6ICc7XG4gICAgICAgIGFkZFRvZG9Db2xvcklucHV0LnR5cGUgPSAnY29sb3InO1xuICAgICAgICBhZGRUb2RvQ29sb3JJbnB1dC52YWx1ZSA9ICcjYTlhZGMxJztcbiAgICAgICAgYWRkVG9kb0lucHV0LnBsYWNlaG9sZGVyID0gJ1RpdGxlJztcbiAgICAgICAgYWRkVG9kb0FyZWEucGxhY2Vob2xkZXIgPSAnZGVzY3JpcHRpb24nO1xuXG4gICAgICAgIGFkZFRvZG8ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGFkZFRvZG9MYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgYWRkVG9kb01hcmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGFkZFRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghYWRkVG9kby5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9kb0xhYmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICBhZGRUb2RvTWFyay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGFkZFRvZG8ub25rZXl1cCA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgYWRkVG9kb0lucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYXBwLmFkZFRvZG8oXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvZG9JbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9kb0FyZWEudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RpZCxcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9kb0RhdGVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9kb1ByaW9yaXR5SW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvZG9Db2xvcklucHV0LnZhbHVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBhZGRUb2RvTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgYWRkVG9kb01hcmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgYWRkVG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBhZGRUb2RvSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICBhZGRUb2RvQXJlYS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIGFkZFRvZG9EYXRlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICBhZGRUb2RvUHJpb3JpdHlJbnB1dC52YWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgYWRkVG9kb0NvbG9ySW5wdXQudmFsdWUgPSAnI2E5YWRjMSc7XG4gICAgICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgYWRkVG9kby5hcHBlbmRDaGlsZChhZGRUb2RvTWFyayk7XG4gICAgICAgIGFkZFRvZG8uYXBwZW5kQ2hpbGQoYWRkVG9kb0xhYmVsKTtcbiAgICAgICAgYWRkVG9kby5hcHBlbmRDaGlsZChhZGRUb2RvRm9ybSk7XG4gICAgICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGFkZFRvZG9JbnB1dCk7XG4gICAgICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGFkZFRvZG9BcmVhKTtcbiAgICAgICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVG9kb0RhdGUpO1xuICAgICAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZChhZGRUb2RvUHJpb3JpdHkpO1xuICAgICAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZChhZGRUb2RvQ29sb3IpO1xuICAgICAgICBhZGRUb2RvRGF0ZS5hcHBlbmRDaGlsZChhZGRUb2RvRGF0ZUxhYmVsKTtcbiAgICAgICAgYWRkVG9kb0RhdGUuYXBwZW5kQ2hpbGQoYWRkVG9kb0RhdGVJbnB1dCk7XG4gICAgICAgIGFkZFRvZG9Qcmlvcml0eS5hcHBlbmRDaGlsZChhZGRUb2RvUHJpb3JpdHlMYWJlbCk7XG4gICAgICAgIGFkZFRvZG9Qcmlvcml0eS5hcHBlbmRDaGlsZChhZGRUb2RvUHJpb3JpdHlJbnB1dCk7XG4gICAgICAgIGFkZFRvZG9Db2xvci5hcHBlbmRDaGlsZChhZGRUb2RvQ29sb3JMYWJlbCk7XG4gICAgICAgIGFkZFRvZG9Db2xvci5hcHBlbmRDaGlsZChhZGRUb2RvQ29sb3JJbnB1dCk7XG5cbiAgICAgICAgcmV0dXJuIGFkZFRvZG87XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVBvcG92ZXIgPSAobGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcG9wb3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwb3BvdmVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHBvcG92ZXJTb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgY29uc3QgcG9wb3ZlckRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBwb3BvdmVyUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBwb3BvdmVyT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGNvbnN0IHBvcG92ZXJEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgIGFuY2hvci5jbGFzc0xpc3QuYWRkKCdhbmNob3InKTtcbiAgICAgICAgcG9wb3Zlci5jbGFzc0xpc3QuYWRkKCdwb3BvdmVyJyk7XG4gICAgICAgIHBvcG92ZXJMYWJlbC5jbGFzc0xpc3QuYWRkKCdwb3BvdmVyLWxhYmVsJyk7XG4gICAgICAgIHBvcG92ZXJTb3J0LmNsYXNzTGlzdC5hZGQoJ3BvcG92ZXItc29ydCcpO1xuICAgICAgICBwb3BvdmVyT3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdwb3BvdmVyLW9wdGlvbnMnKTtcbiAgICAgICAgcG9wb3ZlckRlbGV0ZS5jbGFzc0xpc3QuYWRkKCdwb3BvdmVyLWRlbGV0ZScpO1xuICAgICAgICBwb3BvdmVyTGFiZWwuaW5uZXJUZXh0ID0gJ1NvcnQgYnk6JztcbiAgICAgICAgcG9wb3ZlckRhdGUuaW5uZXJUZXh0ID0gJ0RhdGUnO1xuICAgICAgICBwb3BvdmVyUHJpb3JpdHkuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5JztcbiAgICAgICAgcG9wb3ZlckRlbGV0ZS5pbm5lclRleHQgPSAnRGVsZXRlIGxpc3QnO1xuXG4gICAgICAgIHN3aXRjaCAobGlzdC5zb3J0VHlwZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBwb3BvdmVyRGF0ZS5jbGFzc0xpc3QuYWRkKCdlbmFibGVkJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcG9wb3ZlclByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2VuYWJsZWQnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBwb3BvdmVyRGVsZXRlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBhcHAuZGVsZXRlTGlzdChsaXN0KTtcbiAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHBvcG92ZXJEYXRlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBhcHAuc29ydExpc3QobGlzdCwgMSk7XG4gICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBwb3BvdmVyUHJpb3JpdHkub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGFwcC5zb3J0TGlzdChsaXN0LCAyKTtcbiAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGFuY2hvci5hcHBlbmRDaGlsZChwb3BvdmVyKTtcbiAgICAgICAgcG9wb3Zlci5hcHBlbmRDaGlsZChwb3BvdmVyTGFiZWwpO1xuICAgICAgICBwb3BvdmVyLmFwcGVuZENoaWxkKHBvcG92ZXJTb3J0KTtcbiAgICAgICAgcG9wb3Zlci5hcHBlbmRDaGlsZChwb3BvdmVyT3B0aW9ucyk7XG4gICAgICAgIHBvcG92ZXJTb3J0LmFwcGVuZENoaWxkKHBvcG92ZXJEYXRlKTtcbiAgICAgICAgcG9wb3ZlclNvcnQuYXBwZW5kQ2hpbGQocG9wb3ZlclByaW9yaXR5KTtcbiAgICAgICAgcG9wb3Zlck9wdGlvbnMuYXBwZW5kQ2hpbGQocG9wb3ZlckRlbGV0ZSk7XG5cbiAgICAgICAgcmV0dXJuIGFuY2hvcjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgY3JlYXRlVGl0bGUsIGNyZWF0ZUNvbnRhaW5lciwgdXBkYXRlIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVUkoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChET00uY3JlYXRlVGl0bGUoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChET00uY3JlYXRlQ29udGFpbmVyKCkpO1xuXG4gICAgRE9NLnVwZGF0ZSgpO1xufSIsIi8vIGFwcC5qc1xuXG5pbXBvcnQgTGlzdCBmcm9tICcuL2xpc3RzJztcbmltcG9ydCBUb0RvIGZyb20gJy4vdG9kb3MnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJztcblxuY29uc3QgYXBwID0gKCgpID0+IHtcbiAgICBsZXQgbGlzdHMgPSBzdG9yYWdlLmdldERhdGEoKTtcblxuICAgIGNvbnN0IGFkZExpc3QgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gbmV3IExpc3QobmFtZSk7XG4gICAgICAgIGxpc3RzLnB1c2gobmV3TGlzdCk7XG4gICAgXG4gICAgfTtcblxuICAgIGNvbnN0IHNvcnRMaXN0ID0gKGxpc3QsIHNvcnRUeXBlPWxpc3Quc29ydFR5cGUpID0+IHtcblxuICAgICAgICBjb25zdCBsaXN0T2JqID0gbGlzdDtcbiAgICAgICAgc3dpdGNoIChzb3J0VHlwZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgIC8vIHNvcnQgYnkgZGF0ZVxuICAgICAgICAgICAgbGlzdC5pdGVtcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEuZHVlRGF0ZSA8IGIuZHVlRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhLmR1ZURhdGUgPiBiLmR1ZURhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsaXN0T2JqLnNvcnRUeXBlID0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgLy8gc29ydCBieSBwcmlvcml0eSAoZ3JlYXRlciBpcyBoaWdoZXIpXG4gICAgICAgICAgICBsaXN0Lml0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGEucHJpb3JpdHkpID4gTnVtYmVyKGIucHJpb3JpdHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcihhLnByaW9yaXR5KSA8IE51bWJlcihiLnByaW9yaXR5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxpc3RPYmouc29ydFR5cGUgPSAyO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gd29udCBydW5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZUxpc3QgPSAobGlzdCkgPT4ge1xuICAgICAgICBsaXN0cyA9IGxpc3RzLmZpbHRlcigoaSkgPT4gaS5pZCAhPT0gbGlzdC5pZCk7XG4gICAgXG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBsaXN0SWQsIGR1ZURhdGUsIHByaW9yaXR5LCBjb2xvcikgPT4ge1xuICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBsaXN0SWQsIGR1ZURhdGUsIHByaW9yaXR5LCBjb2xvcik7XG4gICAgICAgIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICAgIGlmIChsaXN0LmlkID09PSBsaXN0SWQpIHtcbiAgICAgICAgICAgICAgICBsaXN0LmFkZEl0ZW0obmV3VG9kbyk7XG4gICAgICAgICAgICAgICAgc29ydExpc3QobGlzdCk7XG4gICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlVG9kbyA9IChcbiAgICAgICAgdGFzayxcbiAgICAgICAgdGl0bGUgPSB0YXNrLnRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUgPSB0YXNrLmR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5ID0gdGFzay5wcmlvcml0eSxcbiAgICAgICAgY29sb3IgPSB0YXNrLmNvbG9yXG4gICAgKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tPYmogPSB0YXNrO1xuICAgICAgICB0YXNrT2JqLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRhc2tPYmouZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGFza09iai5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGFza09iai5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0YXNrT2JqLmNvbG9yID0gY29sb3I7XG4gICAgICAgIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICAgIGlmIChsaXN0LmlkID09PSB0YXNrLnBhcmVudGlkKSB7XG4gICAgICAgICAgICAgICAgc29ydExpc3QobGlzdCk7XG4gICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICAgIGlmIChsaXN0LmlkID09PSB0b2RvLnBhcmVudGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdE9iaiA9IGxpc3Q7XG4gICAgICAgICAgICAgICAgbGlzdE9iai5pdGVtcyA9IGxpc3QuaXRlbXMuZmlsdGVyKChpKSA9PiBpLmlkICE9PSB0b2RvLmlkKTtcbiAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjb21wbGV0ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgICAgICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgICAgICBpZiAobGlzdC5pZCA9PT0gdG9kby5wYXJlbnRpZCkge1xuICAgICAgICAgICAgICAgIGxpc3QuY29tcGxldGVJdGVtKHRvZG8pO1xuICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIHN0b3JhZ2Uuc3RvcmVEYXRhKFsuLi5saXN0c10pO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICB1cGRhdGVDb250ZW50KCk7XG4gICAgICAgIC8vIHRlbXBcbiAgICAgICAgY29uc29sZS5sb2coWy4uLmxpc3RzXSk7XG4gICAgICAgIHJldHVybiBbLi4ubGlzdHNdO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRMaXN0LFxuICAgICAgICBzb3J0TGlzdCxcbiAgICAgICAgZGVsZXRlTGlzdCxcbiAgICAgICAgYWRkVG9kbyxcbiAgICAgICAgdXBkYXRlVG9kbyxcbiAgICAgICAgZGVsZXRlVG9kbyxcbiAgICAgICAgY29tcGxldGVUb2RvLFxuICAgICAgICBnZXRDb250ZW50LFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7IiwiLy8gaW5pdGlhbGl6ZS5qc1xuXG5pbXBvcnQgbG9hZFVJIGZyb20gJy4vVUknO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgZGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGhlYWRlckxvZ28uaHJlZiA9ICcuJztcbiAgICBoZWFkZXJMb2dvLmlubmVyVGV4dCA9ICdUb2RvIExpc3QnO1xuICAgIGhlYWRlckxvZ28uaWQgPSAnbG9nbyc7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGl2SGVhZGVyKTtcbiAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTG9nbyk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZGl2Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGZvb3RlckxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vcnVkbmFtL29kaW4tdG9kby1saXN0JztcbiAgICBmb290ZXJMaW5rLmlubmVyVGV4dCA9ICdHaXRodWIgcmVwbyc7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZGl2Rm9vdGVyKTtcbiAgICBkaXZGb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTGluayk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnRlbnQuaWQgPSAnY29udGVudCc7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gICAgbG9hZFVJKCk7XG59IiwiLy8gbGlzdHMuanNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSxzb3J0VHlwZT0xKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5pZCA9IGBpZCR7TWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMil9YDtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBbXTtcbiAgICAgICAgdGhpcy5zb3J0VHlwZSA9IHNvcnRUeXBlO1xuICAgIH1cblxuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgY29tcGxldGVJdGVtKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKChpKSA9PiBpLmlkICE9PSBpdGVtLmlkKTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICByZWNvdmVySXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gdGhpcy5jb21wbGV0ZWQuZmlsdGVyKChpKSA9PiBpLmlkICE9PSBpdGVtLmlkKTtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH1cbn1cbiIsIi8vIHN0b3JhZ2UuanNcblxuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0cyc7XG5pbXBvcnQgVG9EbyBmcm9tICcuL3RvZG9zJztcblxuY29uc3Qgc3RvcmFnZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0ZGF0YScpID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RkYXRhJykpO1xuICAgICAgICBjb25zdCBsaXN0cyA9IFtdO1xuXG4gICAgICAgIGRhdGEuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IG5ldyBMaXN0KGxpc3QubmFtZSxsaXN0LnNvcnRUeXBlKTtcblxuICAgICAgICAgICAgbGlzdC5pdGVtcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb0RvKFxuICAgICAgICAgICAgICAgICAgICB0YXNrLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBuZXdMaXN0LmlkLFxuICAgICAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgIHRhc2suY29sb3JcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIG5ld0xpc3QuYWRkSXRlbShuZXdUb2RvKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsaXN0cy5wdXNoKG5ld0xpc3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbGlzdHM7XG4gICAgfTtcblxuICAgIGNvbnN0IHN0b3JlRGF0YSA9IChsaXN0cykgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdGRhdGEnLCBKU09OLnN0cmluZ2lmeShsaXN0cykpO1xuICAgIFxuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXREYXRhLCBzdG9yZURhdGEgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2U7IiwiLy8gdG9kb3MuanNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9EbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwYXJlbnRpZCwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbG9yKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmlkID0gYGlkJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyKX1gO1xuICAgICAgICB0aGlzLnBhcmVudGlkID0gcGFyZW50aWQ7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3IgfHwgJyNhOWFkYzEnO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW5kZXguanNcblxuaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi9pbml0aWFsaXplJztcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcblxuaW5pdGlhbGl6ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9