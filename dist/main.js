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

        todoEditDateInput.onchange = () => {
            if (todoEditDateInput.value === '') {
                todoEditDateReset.style.display = 'none';
            } else {
                todoEditDateReset.style.display = 'block';
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGtJQUE4QztBQUMxRiw0Q0FBNEMsNEhBQTJDO0FBQ3ZGLDRDQUE0Qyw0SkFBMkQ7QUFDdkcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHVFQUF1RSx3QkFBd0IseURBQXlELEdBQUcsZ0JBQWdCLHdCQUF3Qix5REFBeUQsc0JBQXNCLEdBQUcsZ0JBQWdCLDRDQUE0Qyx5REFBeUQsR0FBRyxPQUFPLGNBQWMsZUFBZSxHQUFHLE9BQU8sMEJBQTBCLG1CQUFtQixHQUFHLGFBQWEsK0JBQStCLEdBQUcsUUFBUSwwQkFBMEIsR0FBRyxXQUFXLGtCQUFrQixxQkFBcUIsb0JBQW9CLHFCQUFxQixvQkFBb0IseUJBQXlCLG1CQUFtQixzQkFBc0IsNkJBQTZCLHNDQUFzQyxzRUFBc0Usb0JBQW9CLHVCQUF1QixHQUFHLFVBQVUsbUJBQW1CLGtCQUFrQix5QkFBeUIsMkJBQTJCLHNCQUFzQixtQ0FBbUMsd0JBQXdCLEdBQUcsWUFBWSxzQkFBc0Isc0JBQXNCLHVCQUF1QixrQkFBa0IsdUJBQXVCLGtDQUFrQyxHQUFHLGNBQWMsdUJBQXVCLHFCQUFxQixHQUFHLFlBQVksc0JBQXNCLEdBQUcsZ0JBQWdCLHFCQUFxQiwyQkFBMkIsa0JBQWtCLDJCQUEyQiw2QkFBNkIsNEJBQTRCLGNBQWMscUJBQXFCLHNCQUFzQixHQUFHLHFCQUFxQixrQ0FBa0Msb0JBQW9CLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsbUJBQW1CLHlCQUF5QixvQkFBb0IscUJBQXFCLGlCQUFpQixHQUFHLFdBQVcsa0NBQWtDLHVCQUF1QixrQkFBa0IseUNBQXlDLEdBQUcsa0JBQWtCLGtCQUFrQixHQUFHLGlCQUFpQixzQkFBc0Isa0JBQWtCLGlCQUFpQixtQkFBbUIseUJBQXlCLHFCQUFxQixpQkFBaUIsR0FBRyxtQkFBbUIsaUJBQWlCLHNCQUFzQixvQkFBb0IsaUJBQWlCLHdCQUF3QixHQUFHLGFBQWEsa0JBQWtCLEdBQUcsYUFBYSx1QkFBdUIsa0JBQWtCLEdBQUcsY0FBYyx1QkFBdUIsaUJBQWlCLGtCQUFrQix1QkFBdUIsZUFBZSxrQ0FBa0Msa0JBQWtCLDJCQUEyQixHQUFHLG9CQUFvQixzQkFBc0IsaUJBQWlCLEdBQUcsbUJBQW1CLGtCQUFrQiwyQkFBMkIsR0FBRyxzQkFBc0Isb0JBQW9CLGlCQUFpQixHQUFHLHNCQUFzQixxQkFBcUIsa0JBQWtCLDJCQUEyQixHQUFHLHlCQUF5QixvQkFBb0IsaUJBQWlCLEdBQUcscUJBQXFCLHNCQUFzQixHQUFHLDJCQUEyQiwwQkFBMEIsR0FBRyxXQUFXLGtCQUFrQix1QkFBdUIsa0JBQWtCLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsa0JBQWtCLEdBQUcsaUJBQWlCLGlCQUFpQixtQkFBbUIseUJBQXlCLG9CQUFvQixxQkFBcUIsaUJBQWlCLEdBQUcsZ0JBQWdCLHNCQUFzQiw0QkFBNEIsd0JBQXdCLDBCQUEwQixHQUFHLG9CQUFvQiw0QkFBNEIsNEJBQTRCLHFCQUFxQix5QkFBeUIsMEJBQTBCLGlDQUFpQyxHQUFHLHFCQUFxQiw2QkFBNkIsa0JBQWtCLDJCQUEyQixrQkFBa0IsYUFBYSxHQUFHLHNCQUFzQixpQkFBaUIsbUJBQW1CLHlCQUF5QixvQkFBb0IscUJBQXFCLGlCQUFpQixHQUFHLHFCQUFxQix3QkFBd0IseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLGlCQUFpQixrQkFBa0IscUJBQXFCLGlCQUFpQixHQUFHLHdFQUF3RSxtQkFBbUIsaUJBQWlCLHdCQUF3QixHQUFHLHFCQUFxQixvQkFBb0Isa0JBQWtCLGFBQWEsR0FBRywyQkFBMkIsaUJBQWlCLG1CQUFtQixHQUFHLHlCQUF5QixvQkFBb0Isa0JBQWtCLGFBQWEsR0FBRywrQkFBK0IsaUJBQWlCLG1CQUFtQixzQkFBc0IsR0FBRyxzQkFBc0Isb0JBQW9CLGtCQUFrQixhQUFhLEdBQUcsNEJBQTRCLG1CQUFtQixHQUFHLGtDQUFrQywyQ0FBMkMsR0FBRyxpQkFBaUIsc0JBQXNCLHVCQUF1QixHQUFHLGVBQWUsa0NBQWtDLGtCQUFrQix1QkFBdUIsR0FBRyxpQ0FBaUMsa0NBQWtDLG9CQUFvQixHQUFHLHFCQUFxQixrQkFBa0IsR0FBRyxvQkFBb0Isa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcscUJBQXFCLHFCQUFxQixtQkFBbUIseUJBQXlCLG9CQUFvQixxQkFBcUIsaUJBQWlCLEdBQUcsb0JBQW9CLG1CQUFtQix5QkFBeUIscUJBQXFCLGlCQUFpQixtQkFBbUIsa0JBQWtCLHFCQUFxQixpQkFBaUIsR0FBRyxvQkFBb0Isb0JBQW9CLGtCQUFrQixhQUFhLEdBQUcsMEJBQTBCLGlCQUFpQixtQkFBbUIsc0JBQXNCLEdBQUcsNkJBQTZCLHNCQUFzQixHQUFHLHdCQUF3QixvQkFBb0Isa0JBQWtCLGFBQWEsR0FBRyw4QkFBOEIsZ0JBQWdCLG1CQUFtQixzQkFBc0IsR0FBRyxxQkFBcUIsb0JBQW9CLGtCQUFrQixhQUFhLEdBQUcsMkJBQTJCLG1CQUFtQixHQUFHLDZCQUE2QixrQ0FBa0Msb0JBQW9CLEdBQUcsWUFBWSx1QkFBdUIscUJBQXFCLGtCQUFrQixHQUFHLHVCQUF1Qix3QkFBd0Isb0JBQW9CLEdBQUcsY0FBYywrQkFBK0IscUJBQXFCLEdBQUcsT0FBTyw0RkFBNEYsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sUUFBUSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUs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QTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFc0M7QUFDVjs7QUFFNUIsdURBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9saXN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL01hdHRlci1SZWd1bGFyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL01hdHRlci1Cb2xkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0hpcmFnaW5vLUtha3UtR290aGljLVByby1XMy5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHN0eWxlLmNzcyAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE1hdHRlcjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTWF0dGVyO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm8nO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS13aGl0ZTogI2ZmZjtcXG4gIC0tYmxhY2s6ICMxZjIwMjg7XFxuICAtLWJsdWU6ICMzNmEzZmY7XFxuICAtLWxpZ2h0OiAjYTlhZGMxO1xcbiAgLS1ncmV5OiAjMmUzMDM5O1xcbiAgLS1saWdodC1zdWI6ICM3YTdjODU7XFxuICAtLXJlZDogI2ZmNDU0NTtcXG4gIC0teWVsbG93OiAjZmZkNjQ0O1xcbiAgLS10cmFuc3BhcmVudDogIzJlMzAzOTQxO1xcbiAgLS1kZWZhdWx0LXdpZHRoOiBtaW4oODAwcHgsIDEwMCUpO1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXR0ZXJcXFwiLCAnSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbmhlYWRlciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMHB4IDIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAzMDBweDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxNXB4O1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4jYWRkLWxpc3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtbGlzdC1sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNhZGQtbGlzdC1pbnB1dCB7XFxuICBwYWRkaW5nOiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5saXN0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcXG59XFxuXFxuLmxpc3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubGlzdC1vcHRpb25zIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLmxpc3QgKiB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYW5jaG9yIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wb3BvdmVyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBvcG92ZXItbGFiZWwge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wb3BvdmVyLXNvcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wb3BvdmVyLXNvcnQgbGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucG9wb3Zlci1vcHRpb25zIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBvcG92ZXItb3B0aW9ucyBsaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wb3BvdmVyLWRlbGV0ZSB7XFxuICBjb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLnBvcG92ZXItZGVsZXRlOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcXG59XFxuXFxuLnRvZG8ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50b2RvLWJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICBtYXJnaW46IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRvZG8tZGVzYyB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1zdWIpO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLmhpZGUtb3ZlcmZsb3cge1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxufVxcblxcbi50b2RvLWVkaXQtYm9keSB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tZWRpdC10aXRsZSB7XFxuICBtYXJnaW46IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRvZG8tZWRpdC1kZXNjIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodCk7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogODBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udG9kby1tYXJrLFxcbi50b2RvLWNsb3NlLFxcbi5hZGQtdG9kby1tYXJrLFxcbi50b2RvLWVkaXQtY29sb3ItcmVzZXQge1xcbiAgbWFyZ2luOiBhdXRvIDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4udG9kby1lZGl0LWRhdGUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kby1lZGl0LWRhdGUtaW5wdXQge1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgaGVpZ2h0OiAxLjFyZW07XFxufVxcblxcbi50b2RvLWVkaXQtcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kby1lZGl0LXByaW9yaXR5LWlucHV0IHtcXG4gIHdpZHRoOiA1MHB4OyBcXG4gIGhlaWdodDogMS4xcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XFxufVxcblxcbi50b2RvLWVkaXQtY29sb3Ige1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kby1lZGl0LWNvbG9yLWlucHV0IHtcXG4gIGhlaWdodDogMS4zcmVtO1xcbn1cXG5cXG4udG9kby1lZGl0LWNvbG9yLXJlc2V0OmhvdmVyIHtcXG4gIHNyYzogbG9jYWwoJy4vaW1hZ2VzL3Jlc2V0X3doaXRlLnN2ZycpO1xcbn1cXG5cXG4udG9kby1jbG9zZSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmFkZC10b2RvIHtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDcuNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmFkZC10b2RvOmhvdmVyOm5vdCg6Zm9jdXMpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRvZG8tbGFiZWwge1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmFkZC10b2RvLWZvcm0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5hZGQtdG9kby1pbnB1dCB7XFxuICBwYWRkaW5nOiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5hZGQtdG9kby1hcmVhIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmFkZC10b2RvLWRhdGUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tZGF0ZS1pbnB1dCB7XFxuICB3aWR0aDogMTEwcHg7XFxuICBoZWlnaHQ6IDEuMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogM3B4O1xcbn1cXG5cXG46Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdCB7XFxuICBwYWRkaW5nLWxlZnQ6IDNweDtcXG59XFxuXFxuLmFkZC10b2RvLXByaW9yaXR5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmFkZC10b2RvLXByaW9yaXR5LWlucHV0IHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiAxLjFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDNweDtcXG59XFxuXFxuLmFkZC10b2RvLWNvbG9yIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmFkZC10b2RvLWNvbG9yLWlucHV0IHtcXG4gIGhlaWdodDogMS4zcmVtO1xcbn1cXG5cXG4udG9kbzpob3Zlcjpub3QoOmZvY3VzKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucG9wb3ZlciBsaTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZW5hYmxlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7QUFDZDtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQWtDO0VBQ2xDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2Qyw0Q0FBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFD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QWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHN0eWxlLmNzcyAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE1hdHRlcjtcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL01hdHRlci1SZWd1bGFyLm90Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE1hdHRlcjtcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL01hdHRlci1Cb2xkLm90Zik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0hpcmFnaW5vIEtha3UgR290aGljIFBybyc7XFxuICBzcmM6IHVybCguLi9mb250cy9IaXJhZ2luby1LYWt1LUdvdGhpYy1Qcm8tVzMub3RmKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbjpyb290IHtcXG4gIC0td2hpdGU6ICNmZmY7XFxuICAtLWJsYWNrOiAjMWYyMDI4O1xcbiAgLS1ibHVlOiAjMzZhM2ZmO1xcbiAgLS1saWdodDogI2E5YWRjMTtcXG4gIC0tZ3JleTogIzJlMzAzOTtcXG4gIC0tbGlnaHQtc3ViOiAjN2E3Yzg1O1xcbiAgLS1yZWQ6ICNmZjQ1NDU7XFxuICAtLXllbGxvdzogI2ZmZDY0NDtcXG4gIC0tdHJhbnNwYXJlbnQ6ICMyZTMwMzk0MTtcXG4gIC0tZGVmYXVsdC13aWR0aDogbWluKDgwMHB4LCAxMDAlKTtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0dGVyXFxcIiwgJ0hpcmFnaW5vIEtha3UgR290aGljIFBybycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgcGFkZGluZzogMjBweCA1MHB4O1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDBweCAyMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWF1dG8tY29sdW1uczogMzAwcHg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMTVweDtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuI2FkZC1saXN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkLWxpc3QtbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYWRkLWxpc3QtaW5wdXQge1xcbiAgcGFkZGluZzogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubGlzdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XFxufVxcblxcbi5saXN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubGlzdC10aXRsZSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmxpc3Qtb3B0aW9ucyB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5saXN0ICoge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmFuY2hvciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucG9wb3ZlciB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wb3BvdmVyLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucG9wb3Zlci1zb3J0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucG9wb3Zlci1zb3J0IGxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnBvcG92ZXItb3B0aW9ucyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wb3BvdmVyLW9wdGlvbnMgbGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucG9wb3Zlci1kZWxldGUge1xcbiAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi5wb3BvdmVyLWRlbGV0ZTpob3ZlciB7XFxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XFxufVxcblxcbi50b2RvIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9kby1ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgbWFyZ2luOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50b2RvLWRlc2Mge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtc3ViKTtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5oaWRlLW92ZXJmbG93IHtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbn1cXG5cXG4udG9kby1lZGl0LWJvZHkge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWVkaXQtdGl0bGUge1xcbiAgbWFyZ2luOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50b2RvLWVkaXQtZGVzYyB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnRvZG8tbWFyayxcXG4udG9kby1jbG9zZSxcXG4uYWRkLXRvZG8tbWFyayxcXG4udG9kby1lZGl0LWNvbG9yLXJlc2V0IHtcXG4gIG1hcmdpbjogYXV0byAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLnRvZG8tZWRpdC1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tZWRpdC1kYXRlLWlucHV0IHtcXG4gIHdpZHRoOiAxMTBweDtcXG4gIGhlaWdodDogMS4xcmVtO1xcbn1cXG5cXG4udG9kby1lZGl0LXByaW9yaXR5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tZWRpdC1wcmlvcml0eS1pbnB1dCB7XFxuICB3aWR0aDogNTBweDsgXFxuICBoZWlnaHQ6IDEuMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogM3B4O1xcbn1cXG5cXG4udG9kby1lZGl0LWNvbG9yIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tZWRpdC1jb2xvci1pbnB1dCB7XFxuICBoZWlnaHQ6IDEuM3JlbTtcXG59XFxuXFxuLnRvZG8tZWRpdC1jb2xvci1yZXNldDpob3ZlciB7XFxuICBzcmM6IGxvY2FsKCcuL2ltYWdlcy9yZXNldF93aGl0ZS5zdmcnKTtcXG59XFxuXFxuLnRvZG8tY2xvc2Uge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5hZGQtdG9kbyB7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA3LjVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5hZGQtdG9kbzpob3Zlcjpub3QoOmZvY3VzKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvLWxhYmVsIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5hZGQtdG9kby1mb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8taW5wdXQge1xcbiAgcGFkZGluZzogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYWRkLXRvZG8tYXJlYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5hZGQtdG9kby1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmFkZC10b2RvLWRhdGUtaW5wdXQge1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgaGVpZ2h0OiAxLjFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDNweDtcXG59XFxuXFxuOjotd2Via2l0LWRhdGV0aW1lLWVkaXQge1xcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XFxufVxcblxcbi5hZGQtdG9kby1wcmlvcml0eSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5hZGQtdG9kby1wcmlvcml0eS1pbnB1dCB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogMS4xcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XFxufVxcblxcbi5hZGQtdG9kby1jb2xvciB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5hZGQtdG9kby1jb2xvci1pbnB1dCB7XFxuICBoZWlnaHQ6IDEuM3JlbTtcXG59XFxuXFxuLnRvZG86aG92ZXI6bm90KDpmb2N1cykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnBvcG92ZXIgbGk6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVuYWJsZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8vIFVJLmpzXG5cbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0IGNoZWNrT3V0bGluZSBmcm9tICcuL2ltYWdlcy9jaGVja19vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgY2hlY2sgZnJvbSAnLi9pbWFnZXMvY2hlY2suc3ZnJztcbmltcG9ydCBjbG9zZSBmcm9tICcuL2ltYWdlcy9jbG9zZS5zdmcnO1xuaW1wb3J0IGNsb3NlV2hpdGUgZnJvbSAnLi9pbWFnZXMvY2xvc2Vfd2hpdGUuc3ZnJ1xuaW1wb3J0IG1vcmUgZnJvbSAnLi9pbWFnZXMvbW9yZS5zdmcnO1xuaW1wb3J0IGFkZCBmcm9tICcuL2ltYWdlcy9hZGQuc3ZnJztcbmltcG9ydCByZXNldCBmcm9tICcuL2ltYWdlcy9yZXNldC5zdmcnXG5pbXBvcnQgcmVzZXRXaGl0ZSBmcm9tICcuL2ltYWdlcy9yZXNldF93aGl0ZS5zdmcnXG5cbmNvbnN0IERPTSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKTtcbiAgICAgICAgY29uc3QgYXBwRGF0YSA9IGFwcC5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkLmlkICE9PSAnYWRkLWxpc3QnKSB7XG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXBwRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdChpdGVtKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWxpc3QnKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVRpdGxlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRpdGxlLmlkID0gJ3RpdGxlJztcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gJ015IFRhc2tzJztcblxuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcic7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUFkZExpc3QoKSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlQWRkTGlzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBhZGRMaXN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGFkZExpc3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICAgICAgYWRkTGlzdC5pZCA9ICdhZGQtbGlzdCc7XG4gICAgICAgIGFkZExpc3QuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xuICAgICAgICBhZGRMaXN0TGFiZWwuaWQgPSAnYWRkLWxpc3QtbGFiZWwnO1xuICAgICAgICBhZGRMaXN0SW5wdXQuaWQgPSAnYWRkLWxpc3QtaW5wdXQnO1xuXG4gICAgICAgIGFkZExpc3RMYWJlbC5pbm5lclRleHQgPSAnKyBBZGQgbmV3IGxpc3QnO1xuICAgICAgICBhZGRMaXN0SW5wdXQucGxhY2Vob2xkZXIgPSAnTmV3IGxpc3QnO1xuICAgICAgICBhZGRMaXN0SW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICBhZGRMaXN0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBhZGRMaXN0TGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGFkZExpc3RJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGFkZExpc3RJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWFkZExpc3QuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RMYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdElucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBhZGRMaXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGFkZExpc3RJbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFwcC5hZGRMaXN0KGFkZExpc3RJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgYWRkTGlzdExhYmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGFkZExpc3RJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGFkZExpc3RJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBhZGRMaXN0LmFwcGVuZENoaWxkKGFkZExpc3RMYWJlbCk7XG4gICAgICAgIGFkZExpc3QuYXBwZW5kQ2hpbGQoYWRkTGlzdElucHV0KTtcblxuICAgICAgICByZXR1cm4gYWRkTGlzdDtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlTGlzdCA9IChsaXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGl2TGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkaXZMaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBkaXZMaXN0T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCBkaXZMaXN0SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBjb25zdCBwb3BvdmVyID0gY3JlYXRlUG9wb3ZlcihsaXN0KTtcblxuICAgICAgICBkaXZMaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcbiAgICAgICAgZGl2TGlzdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdsaXN0LWhlYWRlcicpO1xuICAgICAgICBkaXZMaXN0VGl0bGUuY2xhc3NMaXN0LmFkZCgnbGlzdC10aXRsZScpO1xuICAgICAgICBkaXZMaXN0T3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdsaXN0LW9wdGlvbnMnKTtcbiAgICAgICAgZGl2TGlzdEl0ZW1zLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbXMnKTtcbiAgICAgICAgZGl2TGlzdFRpdGxlLnZhbHVlID0gbGlzdC5uYW1lO1xuICAgICAgICBkaXZMaXN0VGl0bGUucGxhY2Vob2xkZXIgPSAnVW50aXRsZWQnO1xuICAgICAgICBkaXZMaXN0T3B0aW9ucy5zcmMgPSBtb3JlO1xuXG4gICAgICAgIGRpdkxpc3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RPYmogPSBsaXN0O1xuICAgICAgICAgICAgbGlzdE9iai5uYW1lID0gZGl2TGlzdFRpdGxlLnZhbHVlO1xuICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpdkxpc3RPcHRpb25zLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBwb3BvdmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWRpdkxpc3RPcHRpb25zLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhcG9wb3Zlci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9wb3Zlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgZGl2TGlzdC5hcHBlbmRDaGlsZChkaXZMaXN0SGVhZGVyKTtcbiAgICAgICAgZGl2TGlzdC5hcHBlbmRDaGlsZChkaXZMaXN0SXRlbXMpO1xuICAgICAgICBsaXN0Lml0ZW1zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGRpdkxpc3RJdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVUb2RvKHRvZG8pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRpdkxpc3RJdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVBZGRUb2RvKGxpc3QuaWQpKTtcbiAgICAgICAgZGl2TGlzdEhlYWRlci5hcHBlbmRDaGlsZChkaXZMaXN0VGl0bGUpO1xuICAgICAgICBkaXZMaXN0SGVhZGVyLmFwcGVuZENoaWxkKGRpdkxpc3RPcHRpb25zKTtcbiAgICAgICAgZGl2TGlzdEhlYWRlci5hcHBlbmRDaGlsZChwb3BvdmVyKTtcblxuICAgICAgICByZXR1cm4gZGl2TGlzdDtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdG9kb01hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29uc3QgdG9kb0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0b2RvRWRpdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdG9kb0VkaXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9FZGl0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGNvbnN0IHRvZG9FZGl0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0b2RvRWRpdERhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdG9kb0VkaXREYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0b2RvRWRpdERhdGVSZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCB0b2RvRWRpdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9FZGl0UHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdG9kb0VkaXRQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgdG9kb0VkaXRDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0b2RvRWRpdENvbG9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRvZG9FZGl0Q29sb3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRvZG9FZGl0Q29sb3JSZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCB0b2RvQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICAgICAgdG9kb01hcmsuY2xhc3NMaXN0LmFkZCgndG9kby1tYXJrJyk7XG4gICAgICAgIHRvZG9Cb2R5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tYm9keScpO1xuICAgICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpO1xuICAgICAgICB0b2RvRGVzYy5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2MnKTtcbiAgICAgICAgdG9kb0Rlc2MuY2xhc3NMaXN0LmFkZCgnaGlkZS1vdmVyZmxvdycpO1xuICAgICAgICB0b2RvRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWRhdGUnKTtcbiAgICAgICAgdG9kb0VkaXRCb2R5LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWRpdC1ib2R5Jyk7XG4gICAgICAgIHRvZG9FZGl0VGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LXRpdGxlJyk7XG4gICAgICAgIHRvZG9FZGl0RGVzYy5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQtZGVzYycpO1xuICAgICAgICB0b2RvRWRpdERhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LWRhdGUnKTtcbiAgICAgICAgdG9kb0VkaXREYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LWRhdGUtbGFiZWwnKTtcbiAgICAgICAgdG9kb0VkaXREYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LWRhdGUtaW5wdXQnKTtcbiAgICAgICAgdG9kb0VkaXREYXRlUmVzZXQuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LWRhdGUtcmVzZXQnKTtcbiAgICAgICAgdG9kb0VkaXRQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQtcHJpb3JpdHknKTtcbiAgICAgICAgdG9kb0VkaXRQcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWRpdC1wcmlvcml0eS1sYWJlbCcpO1xuICAgICAgICB0b2RvRWRpdFByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LXByaW9yaXR5LWlucHV0Jyk7XG4gICAgICAgIHRvZG9FZGl0Q29sb3IuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LWNvbG9yJyk7XG4gICAgICAgIHRvZG9FZGl0Q29sb3JMYWJlbC5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQtY29sb3ItbGFiZWwnKTtcbiAgICAgICAgdG9kb0VkaXRDb2xvcklucHV0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZWRpdC1jb2xvci1pbnB1dCcpO1xuICAgICAgICB0b2RvRWRpdENvbG9yUmVzZXQuY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LWNvbG9yLXJlc2V0Jyk7XG4gICAgICAgIHRvZG9DbG9zZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWNsb3NlJyk7XG4gICAgICAgIHRvZG9NYXJrLnNyYyA9IGNoZWNrT3V0bGluZTtcbiAgICAgICAgdG9kb1RpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICAgICAgdG9kb1RpdGxlLnBsYWNlaG9sZGVyID0gJ1VudGl0bGVkJztcbiAgICAgICAgdG9kb1RpdGxlLnN0eWxlLmNvbG9yID0gdGFzay5jb2xvcjtcbiAgICAgICAgdG9kb0Rlc2MuaW5uZXJUZXh0ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgdG9kb0RhdGUuaW5uZXJIVE1MID0gdGFzay5kdWVEYXRlID8gYER1ZTogPGk+JHt0YXNrLmR1ZURhdGV9PC9pPmAgOiAnJztcbiAgICAgICAgdG9kb0VkaXRUaXRsZS5wbGFjZWhvbGRlciA9ICdVbnRpdGxlZCc7XG4gICAgICAgIHRvZG9FZGl0VGl0bGUudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgICAgICB0b2RvRWRpdFRpdGxlLnN0eWxlLmNvbG9yID0gdGFzay5jb2xvcjtcbiAgICAgICAgdG9kb0VkaXREZXNjLnBsYWNlaG9sZGVyID0gJ2Rlc2NyaXB0aW9uJztcbiAgICAgICAgdG9kb0VkaXREZXNjLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgdG9kb0VkaXREYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0RhdGU6ICc7XG4gICAgICAgIHRvZG9FZGl0RGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIHRvZG9FZGl0RGF0ZUlucHV0LnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgICAgICB0b2RvRWRpdERhdGVSZXNldC5zcmMgPSByZXNldFxuICAgICAgICB0b2RvRWRpdERhdGVSZXNldC5zdHlsZS5kaXNwbGF5ID0gdGFzay5kdWVEYXRlID09PSAnJyA/ICdub25lJyA6ICdibG9jayc7XG4gICAgICAgIHRvZG9FZGl0UHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSAnUHJpb3JpdHk6ICc7XG4gICAgICAgIHRvZG9FZGl0UHJpb3JpdHlJbnB1dC50eXBlID0gJ251bWJlcic7XG4gICAgICAgIHRvZG9FZGl0UHJpb3JpdHlJbnB1dC52YWx1ZSA9IHRhc2sucHJpb3JpdHkgfHwgMDtcbiAgICAgICAgdG9kb0VkaXRDb2xvckxhYmVsLmlubmVyVGV4dCA9ICdDb2xvcjogJztcbiAgICAgICAgdG9kb0VkaXRDb2xvcklucHV0LnR5cGUgPSAnY29sb3InO1xuICAgICAgICB0b2RvRWRpdENvbG9ySW5wdXQudmFsdWUgPSB0YXNrLmNvbG9yIHx8ICcjYTlhZGMxJztcbiAgICAgICAgdG9kb0VkaXRDb2xvclJlc2V0LnNyYyA9IHJlc2V0XG4gICAgICAgIHRvZG9FZGl0Q29sb3JSZXNldC5zdHlsZS5kaXNwbGF5ID0gdGFzay5jb2xvciA9PT0gJyNhOWFkYzEnID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgICAgICAgdG9kb0Nsb3NlLnNyYyA9IGNsb3NlO1xuXG4gICAgICAgIHRvZG9NYXJrLm9ubW91c2VvdmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdG9kb01hcmsuc3JjID0gY2hlY2s7XG4gICAgICAgIH07XG4gICAgICAgIHRvZG9NYXJrLm9ubW91c2VvdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvTWFyay5zcmMgPSBjaGVja091dGxpbmU7XG4gICAgICAgIH07XG4gICAgICAgIHRvZG9NYXJrLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBhcHAuY29tcGxldGVUb2RvKHRhc2spO1xuICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdG9kb0VkaXREYXRlSW5wdXQub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodG9kb0VkaXREYXRlSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdG9kb0VkaXREYXRlUmVzZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9kb0VkaXREYXRlUmVzZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0b2RvRWRpdERhdGVSZXNldC5vbm1vdXNlb3ZlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRvZG9FZGl0RGF0ZVJlc2V0LnNyYyA9IHJlc2V0V2hpdGU7XG4gICAgICAgIH07XG4gICAgICAgIHRvZG9FZGl0RGF0ZVJlc2V0Lm9ubW91c2VvdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvRWRpdERhdGVSZXNldC5zcmMgPSByZXNldDtcbiAgICAgICAgfTtcbiAgICAgICAgdG9kb0VkaXREYXRlUmVzZXQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRvZG9FZGl0RGF0ZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0b2RvRWRpdERhdGVSZXNldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRvZG9FZGl0Q29sb3JJbnB1dC5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0b2RvRWRpdENvbG9ySW5wdXQudmFsdWUgPT09ICcjYTlhZGMxJykge1xuICAgICAgICAgICAgICAgIHRvZG9FZGl0Q29sb3JSZXNldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2RvRWRpdENvbG9yUmVzZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvRWRpdFRpdGxlLnN0eWxlLmNvbG9yID0gdG9kb0VkaXRDb2xvcklucHV0LnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9kb0VkaXRDb2xvclJlc2V0Lm9ubW91c2VvdmVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0VkaXRDb2xvclJlc2V0LnNyYyA9IHJlc2V0V2hpdGU7XG4gICAgICAgIH07XG4gICAgICAgIHRvZG9FZGl0Q29sb3JSZXNldC5vbm1vdXNlb3V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0VkaXRDb2xvclJlc2V0LnNyYyA9IHJlc2V0O1xuICAgICAgICB9O1xuICAgICAgICB0b2RvRWRpdENvbG9yUmVzZXQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRvZG9FZGl0Q29sb3JJbnB1dC52YWx1ZSA9ICcjYTlhZGMxJztcbiAgICAgICAgICAgIHRvZG9FZGl0VGl0bGUuc3R5bGUuY29sb3IgPSB0b2RvRWRpdENvbG9ySW5wdXQudmFsdWU7XG4gICAgICAgICAgICB0b2RvRWRpdENvbG9yUmVzZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfTtcblxuXG4gICAgICAgIHRvZG8ub25tb3VzZW92ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvQ2xvc2Uuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgfTtcbiAgICAgICAgdG9kby5vbm1vdXNlb3V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgdG9kb0Nsb3NlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgfTtcblxuICAgICAgICB0b2RvQ2xvc2Uub25tb3VzZW92ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvQ2xvc2Uuc3JjID0gY2xvc2VXaGl0ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdG9kb0Nsb3NlLm9ubW91c2VvdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvQ2xvc2Uuc3JjID0gY2xvc2U7XG4gICAgICAgIH07XG4gICAgICAgIHRvZG9DbG9zZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgYXBwLmRlbGV0ZVRvZG8odGFzayk7XG4gICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0b2RvLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvQm9keS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgdG9kb0VkaXRCb2R5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdG9kby5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwLnVwZGF0ZVRvZG8oXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0VkaXRUaXRsZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9FZGl0RGVzYy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9FZGl0RGF0ZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0VkaXRQcmlvcml0eUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0VkaXRDb2xvcklucHV0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Cb2R5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9FZGl0Qm9keS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodG9kb01hcmspO1xuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9Cb2R5KTtcbiAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0b2RvRWRpdEJvZHkpO1xuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRvZG9DbG9zZSk7XG4gICAgICAgIHRvZG9Cb2R5LmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgICAgIHRvZG9Cb2R5LmFwcGVuZENoaWxkKHRvZG9EZXNjKTtcbiAgICAgICAgdG9kb0JvZHkuYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuICAgICAgICB0b2RvRWRpdEJvZHkuYXBwZW5kQ2hpbGQodG9kb0VkaXRUaXRsZSk7XG4gICAgICAgIHRvZG9FZGl0Qm9keS5hcHBlbmRDaGlsZCh0b2RvRWRpdERlc2MpO1xuICAgICAgICB0b2RvRWRpdEJvZHkuYXBwZW5kQ2hpbGQodG9kb0VkaXREYXRlKTtcbiAgICAgICAgdG9kb0VkaXRCb2R5LmFwcGVuZENoaWxkKHRvZG9FZGl0UHJpb3JpdHkpO1xuICAgICAgICB0b2RvRWRpdEJvZHkuYXBwZW5kQ2hpbGQodG9kb0VkaXRDb2xvcik7XG4gICAgICAgIHRvZG9FZGl0RGF0ZS5hcHBlbmRDaGlsZCh0b2RvRWRpdERhdGVMYWJlbCk7XG4gICAgICAgIHRvZG9FZGl0RGF0ZS5hcHBlbmRDaGlsZCh0b2RvRWRpdERhdGVJbnB1dCk7XG4gICAgICAgIHRvZG9FZGl0RGF0ZS5hcHBlbmRDaGlsZCh0b2RvRWRpdERhdGVSZXNldCk7XG4gICAgICAgIHRvZG9FZGl0UHJpb3JpdHkuYXBwZW5kQ2hpbGQodG9kb0VkaXRQcmlvcml0eUxhYmVsKTtcbiAgICAgICAgdG9kb0VkaXRQcmlvcml0eS5hcHBlbmRDaGlsZCh0b2RvRWRpdFByaW9yaXR5SW5wdXQpO1xuICAgICAgICB0b2RvRWRpdENvbG9yLmFwcGVuZENoaWxkKHRvZG9FZGl0Q29sb3JMYWJlbCk7XG4gICAgICAgIHRvZG9FZGl0Q29sb3IuYXBwZW5kQ2hpbGQodG9kb0VkaXRDb2xvcklucHV0KTtcbiAgICAgICAgdG9kb0VkaXRDb2xvci5hcHBlbmRDaGlsZCh0b2RvRWRpdENvbG9yUmVzZXQpO1xuXG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVBZGRUb2RvID0gKGxpc3RpZCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBjb25zdCBhZGRUb2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBhZGRUb2RvRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBhZGRUb2RvRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9Qcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBhZGRUb2RvUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9Db2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBhZGRUb2RvQ29sb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgYWRkVG9kb0NvbG9ySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBhZGRUb2RvTWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgIGFkZFRvZG8uY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8nKTtcbiAgICAgICAgYWRkVG9kb01hcmsuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tbWFyaycpO1xuICAgICAgICBhZGRUb2RvTGFiZWwuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tbGFiZWwnKTtcbiAgICAgICAgYWRkVG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tZm9ybScpO1xuICAgICAgICBhZGRUb2RvSW5wdXQuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8taW5wdXQnKTtcbiAgICAgICAgYWRkVG9kb0FyZWEuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tYXJlYScpO1xuICAgICAgICBhZGRUb2RvRGF0ZS5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1kYXRlJyk7XG4gICAgICAgIGFkZFRvZG9EYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tZGF0ZS1sYWJlbCcpO1xuICAgICAgICBhZGRUb2RvRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWRhdGUtaW5wdXQnKTtcbiAgICAgICAgYWRkVG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLXByaW9yaXR5Jyk7XG4gICAgICAgIGFkZFRvZG9Qcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLXByaW9yaXR5LWxhYmVsJyk7XG4gICAgICAgIGFkZFRvZG9Qcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLXByaW9yaXR5LWlucHV0Jyk7XG4gICAgICAgIGFkZFRvZG9Db2xvci5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1jb2xvcicpO1xuICAgICAgICBhZGRUb2RvQ29sb3JMYWJlbC5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1jb2xvci1sYWJlbCcpO1xuICAgICAgICBhZGRUb2RvQ29sb3JJbnB1dC5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1jb2xvci1pbnB1dCcpO1xuICAgICAgICBhZGRUb2RvRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGFkZFRvZG9NYXJrLnNyYyA9IGFkZDtcbiAgICAgICAgYWRkVG9kb0xhYmVsLmlubmVyVGV4dCA9ICdBZGQgYSB0YXNrJztcbiAgICAgICAgYWRkVG9kb0RhdGVMYWJlbC5pbm5lclRleHQgPSAnRGF0ZTogJztcbiAgICAgICAgYWRkVG9kb1ByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5OiAnO1xuICAgICAgICBhZGRUb2RvUHJpb3JpdHlJbnB1dC50eXBlID0gJ251bWJlcic7XG4gICAgICAgIGFkZFRvZG9Qcmlvcml0eUlucHV0LnZhbHVlID0gMDtcbiAgICAgICAgYWRkVG9kb0NvbG9yTGFiZWwuaW5uZXJUZXh0ID0gJ0NvbG9yOiAnO1xuICAgICAgICBhZGRUb2RvQ29sb3JJbnB1dC50eXBlID0gJ2NvbG9yJztcbiAgICAgICAgYWRkVG9kb0NvbG9ySW5wdXQudmFsdWUgPSAnI2E5YWRjMSc7XG4gICAgICAgIGFkZFRvZG9JbnB1dC5wbGFjZWhvbGRlciA9ICdUaXRsZSc7XG4gICAgICAgIGFkZFRvZG9BcmVhLnBsYWNlaG9sZGVyID0gJ2Rlc2NyaXB0aW9uJztcblxuICAgICAgICBhZGRUb2RvLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBhZGRUb2RvTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGFkZFRvZG9NYXJrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBhZGRUb2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWFkZFRvZG8uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRvZG9MYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9kb01hcmsuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBhZGRUb2RvLm9ua2V5dXAgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGFkZFRvZG9JbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFwcC5hZGRUb2RvKFxuICAgICAgICAgICAgICAgICAgICBhZGRUb2RvSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvZG9BcmVhLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBsaXN0aWQsXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvZG9EYXRlSW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvZG9Qcmlvcml0eUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRUb2RvQ29sb3JJbnB1dC52YWx1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYWRkVG9kb0xhYmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGFkZFRvZG9NYXJrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGFkZFRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgYWRkVG9kb0lucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgYWRkVG9kb0FyZWEudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICBhZGRUb2RvRGF0ZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgYWRkVG9kb1ByaW9yaXR5SW5wdXQudmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIGFkZFRvZG9Db2xvcklucHV0LnZhbHVlID0gJyNhOWFkYzEnO1xuICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGFkZFRvZG8uYXBwZW5kQ2hpbGQoYWRkVG9kb01hcmspO1xuICAgICAgICBhZGRUb2RvLmFwcGVuZENoaWxkKGFkZFRvZG9MYWJlbCk7XG4gICAgICAgIGFkZFRvZG8uYXBwZW5kQ2hpbGQoYWRkVG9kb0Zvcm0pO1xuICAgICAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZChhZGRUb2RvSW5wdXQpO1xuICAgICAgICBhZGRUb2RvRm9ybS5hcHBlbmRDaGlsZChhZGRUb2RvQXJlYSk7XG4gICAgICAgIGFkZFRvZG9Gb3JtLmFwcGVuZENoaWxkKGFkZFRvZG9EYXRlKTtcbiAgICAgICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVG9kb1ByaW9yaXR5KTtcbiAgICAgICAgYWRkVG9kb0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVG9kb0NvbG9yKTtcbiAgICAgICAgYWRkVG9kb0RhdGUuYXBwZW5kQ2hpbGQoYWRkVG9kb0RhdGVMYWJlbCk7XG4gICAgICAgIGFkZFRvZG9EYXRlLmFwcGVuZENoaWxkKGFkZFRvZG9EYXRlSW5wdXQpO1xuICAgICAgICBhZGRUb2RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQoYWRkVG9kb1ByaW9yaXR5TGFiZWwpO1xuICAgICAgICBhZGRUb2RvUHJpb3JpdHkuYXBwZW5kQ2hpbGQoYWRkVG9kb1ByaW9yaXR5SW5wdXQpO1xuICAgICAgICBhZGRUb2RvQ29sb3IuYXBwZW5kQ2hpbGQoYWRkVG9kb0NvbG9yTGFiZWwpO1xuICAgICAgICBhZGRUb2RvQ29sb3IuYXBwZW5kQ2hpbGQoYWRkVG9kb0NvbG9ySW5wdXQpO1xuXG4gICAgICAgIHJldHVybiBhZGRUb2RvO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVQb3BvdmVyID0gKGxpc3QpID0+IHtcbiAgICAgICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHBvcG92ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcG9wb3ZlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwb3BvdmVyU29ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGNvbnN0IHBvcG92ZXJEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgcG9wb3ZlclByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgcG9wb3Zlck9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBjb25zdCBwb3BvdmVyRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBhbmNob3IuY2xhc3NMaXN0LmFkZCgnYW5jaG9yJyk7XG4gICAgICAgIHBvcG92ZXIuY2xhc3NMaXN0LmFkZCgncG9wb3ZlcicpO1xuICAgICAgICBwb3BvdmVyTGFiZWwuY2xhc3NMaXN0LmFkZCgncG9wb3Zlci1sYWJlbCcpO1xuICAgICAgICBwb3BvdmVyU29ydC5jbGFzc0xpc3QuYWRkKCdwb3BvdmVyLXNvcnQnKTtcbiAgICAgICAgcG9wb3Zlck9wdGlvbnMuY2xhc3NMaXN0LmFkZCgncG9wb3Zlci1vcHRpb25zJyk7XG4gICAgICAgIHBvcG92ZXJEZWxldGUuY2xhc3NMaXN0LmFkZCgncG9wb3Zlci1kZWxldGUnKTtcbiAgICAgICAgcG9wb3ZlckxhYmVsLmlubmVyVGV4dCA9ICdTb3J0IGJ5Oic7XG4gICAgICAgIHBvcG92ZXJEYXRlLmlubmVyVGV4dCA9ICdEYXRlJztcbiAgICAgICAgcG9wb3ZlclByaW9yaXR5LmlubmVyVGV4dCA9ICdQcmlvcml0eSc7XG4gICAgICAgIHBvcG92ZXJEZWxldGUuaW5uZXJUZXh0ID0gJ0RlbGV0ZSBsaXN0JztcblxuICAgICAgICBzd2l0Y2ggKGxpc3Quc29ydFR5cGUpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcG9wb3ZlckRhdGUuY2xhc3NMaXN0LmFkZCgnZW5hYmxlZCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHBvcG92ZXJQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdlbmFibGVkJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9wb3ZlckRlbGV0ZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgYXBwLmRlbGV0ZUxpc3QobGlzdCk7XG4gICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBwb3BvdmVyRGF0ZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgYXBwLnNvcnRMaXN0KGxpc3QsIDEpO1xuICAgICAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcG9wb3ZlclByaW9yaXR5Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBhcHAuc29ydExpc3QobGlzdCwgMik7XG4gICAgICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBhbmNob3IuYXBwZW5kQ2hpbGQocG9wb3Zlcik7XG4gICAgICAgIHBvcG92ZXIuYXBwZW5kQ2hpbGQocG9wb3ZlckxhYmVsKTtcbiAgICAgICAgcG9wb3Zlci5hcHBlbmRDaGlsZChwb3BvdmVyU29ydCk7XG4gICAgICAgIHBvcG92ZXIuYXBwZW5kQ2hpbGQocG9wb3Zlck9wdGlvbnMpO1xuICAgICAgICBwb3BvdmVyU29ydC5hcHBlbmRDaGlsZChwb3BvdmVyRGF0ZSk7XG4gICAgICAgIHBvcG92ZXJTb3J0LmFwcGVuZENoaWxkKHBvcG92ZXJQcmlvcml0eSk7XG4gICAgICAgIHBvcG92ZXJPcHRpb25zLmFwcGVuZENoaWxkKHBvcG92ZXJEZWxldGUpO1xuXG4gICAgICAgIHJldHVybiBhbmNob3I7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGNyZWF0ZVRpdGxlLCBjcmVhdGVDb250YWluZXIsIHVwZGF0ZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFVJKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRE9NLmNyZWF0ZVRpdGxlKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRE9NLmNyZWF0ZUNvbnRhaW5lcigpKTtcblxuICAgIERPTS51cGRhdGUoKTtcbn0iLCIvLyBhcHAuanNcblxuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0cyc7XG5pbXBvcnQgVG9EbyBmcm9tICcuL3RvZG9zJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XG5cbmNvbnN0IGFwcCA9ICgoKSA9PiB7XG4gICAgbGV0IGxpc3RzID0gc3RvcmFnZS5nZXREYXRhKCk7XG5cbiAgICBjb25zdCBhZGRMaXN0ID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG5ldyBMaXN0KG5hbWUpO1xuICAgICAgICBsaXN0cy5wdXNoKG5ld0xpc3QpO1xuICAgIFxuICAgIH07XG5cbiAgICBjb25zdCBzb3J0TGlzdCA9IChsaXN0LCBzb3J0VHlwZT1saXN0LnNvcnRUeXBlKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbGlzdE9iaiA9IGxpc3Q7XG4gICAgICAgIHN3aXRjaCAoc29ydFR5cGUpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAvLyBzb3J0IGJ5IGRhdGVcbiAgICAgICAgICAgIGxpc3QuaXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhLmR1ZURhdGUgPCBiLmR1ZURhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYS5kdWVEYXRlID4gYi5kdWVEYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGlzdE9iai5zb3J0VHlwZSA9IDE7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgIC8vIHNvcnQgYnkgcHJpb3JpdHkgKGdyZWF0ZXIgaXMgaGlnaGVyKVxuICAgICAgICAgICAgbGlzdC5pdGVtcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcihhLnByaW9yaXR5KSA+IE51bWJlcihiLnByaW9yaXR5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoYS5wcmlvcml0eSkgPCBOdW1iZXIoYi5wcmlvcml0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsaXN0T2JqLnNvcnRUeXBlID0gMjtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIHdvbnQgcnVuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVMaXN0ID0gKGxpc3QpID0+IHtcbiAgICAgICAgbGlzdHMgPSBsaXN0cy5maWx0ZXIoKGkpID0+IGkuaWQgIT09IGxpc3QuaWQpO1xuICAgIFxuICAgIH07XG5cbiAgICBjb25zdCBhZGRUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgbGlzdElkLCBkdWVEYXRlLCBwcmlvcml0eSwgY29sb3IpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgbGlzdElkLCBkdWVEYXRlLCBwcmlvcml0eSwgY29sb3IpO1xuICAgICAgICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgICAgICBpZiAobGlzdC5pZCA9PT0gbGlzdElkKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5hZGRJdGVtKG5ld1RvZG8pO1xuICAgICAgICAgICAgICAgIHNvcnRMaXN0KGxpc3QpO1xuICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZVRvZG8gPSAoXG4gICAgICAgIHRhc2ssXG4gICAgICAgIHRpdGxlID0gdGFzay50aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24gPSB0YXNrLmRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlID0gdGFzay5kdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSA9IHRhc2sucHJpb3JpdHksXG4gICAgICAgIGNvbG9yID0gdGFzay5jb2xvclxuICAgICkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrT2JqID0gdGFzaztcbiAgICAgICAgdGFza09iai50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0YXNrT2JqLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRhc2tPYmouZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRhc2tPYmoucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGFza09iai5jb2xvciA9IGNvbG9yO1xuICAgICAgICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgICAgICBpZiAobGlzdC5pZCA9PT0gdGFzay5wYXJlbnRpZCkge1xuICAgICAgICAgICAgICAgIHNvcnRMaXN0KGxpc3QpO1xuICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgICAgICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgICAgICBpZiAobGlzdC5pZCA9PT0gdG9kby5wYXJlbnRpZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3RPYmogPSBsaXN0O1xuICAgICAgICAgICAgICAgIGxpc3RPYmouaXRlbXMgPSBsaXN0Lml0ZW1zLmZpbHRlcigoaSkgPT4gaS5pZCAhPT0gdG9kby5pZCk7XG4gICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgY29tcGxldGVUb2RvID0gKHRvZG8pID0+IHtcbiAgICAgICAgbGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGxpc3QuaWQgPT09IHRvZG8ucGFyZW50aWQpIHtcbiAgICAgICAgICAgICAgICBsaXN0LmNvbXBsZXRlSXRlbSh0b2RvKTtcbiAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBzdG9yYWdlLnN0b3JlRGF0YShbLi4ubGlzdHNdKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgdXBkYXRlQ29udGVudCgpO1xuICAgICAgICAvLyB0ZW1wXG4gICAgICAgIGNvbnNvbGUubG9nKFsuLi5saXN0c10pO1xuICAgICAgICByZXR1cm4gWy4uLmxpc3RzXTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkTGlzdCxcbiAgICAgICAgc29ydExpc3QsXG4gICAgICAgIGRlbGV0ZUxpc3QsXG4gICAgICAgIGFkZFRvZG8sXG4gICAgICAgIHVwZGF0ZVRvZG8sXG4gICAgICAgIGRlbGV0ZVRvZG8sXG4gICAgICAgIGNvbXBsZXRlVG9kbyxcbiAgICAgICAgZ2V0Q29udGVudCxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwOyIsIi8vIGluaXRpYWxpemUuanNcblxuaW1wb3J0IGxvYWRVSSBmcm9tICcuL1VJJztcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IGRpdkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRlckxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICBoZWFkZXJMb2dvLmhyZWYgPSAnLic7XG4gICAgaGVhZGVyTG9nby5pbm5lclRleHQgPSAnVG9kbyBMaXN0JztcbiAgICBoZWFkZXJMb2dvLmlkID0gJ2xvZ28nO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdkhlYWRlcik7XG4gICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckxvZ28pO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGNvbnN0IGRpdkZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICBmb290ZXJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL3J1ZG5hbS9vZGluLXRvZG8tbGlzdCc7XG4gICAgZm9vdGVyTGluay5pbm5lclRleHQgPSAnR2l0aHViIHJlcG8nO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGRpdkZvb3Rlcik7XG4gICAgZGl2Rm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckxpbmspO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICAgIGxvYWRVSSgpO1xufSIsIi8vIGxpc3RzLmpzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsc29ydFR5cGU9MSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuaWQgPSBgaWQke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpfWA7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gW107XG4gICAgICAgIHRoaXMuc29ydFR5cGUgPSBzb3J0VHlwZTtcbiAgICB9XG5cbiAgICBhZGRJdGVtKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIGNvbXBsZXRlSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcigoaSkgPT4gaS5pZCAhPT0gaXRlbS5pZCk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkLnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgcmVjb3Zlckl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRoaXMuY29tcGxldGVkLmZpbHRlcigoaSkgPT4gaS5pZCAhPT0gaXRlbS5pZCk7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG59XG4iLCIvLyBzdG9yYWdlLmpzXG5cbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdHMnO1xuaW1wb3J0IFRvRG8gZnJvbSAnLi90b2Rvcyc7XG5cbmNvbnN0IHN0b3JhZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdGRhdGEnKSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0ZGF0YScpKTtcbiAgICAgICAgY29uc3QgbGlzdHMgPSBbXTtcblxuICAgICAgICBkYXRhLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgTGlzdChsaXN0Lm5hbWUsbGlzdC5zb3J0VHlwZSk7XG5cbiAgICAgICAgICAgIGxpc3QuaXRlbXMuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9EbyhcbiAgICAgICAgICAgICAgICAgICAgdGFzay50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbmV3TGlzdC5pZCxcbiAgICAgICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICB0YXNrLmNvbG9yXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBuZXdMaXN0LmFkZEl0ZW0obmV3VG9kbyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGlzdHMucHVzaChuZXdMaXN0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGxpc3RzO1xuICAgIH07XG5cbiAgICBjb25zdCBzdG9yZURhdGEgPSAobGlzdHMpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RkYXRhJywgSlNPTi5zdHJpbmdpZnkobGlzdHMpKTtcbiAgICBcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0RGF0YSwgc3RvcmVEYXRhIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlOyIsIi8vIHRvZG9zLmpzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcGFyZW50aWQsIGR1ZURhdGUsIHByaW9yaXR5LCBjb2xvcikge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5pZCA9IGBpZCR7TWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMil9YDtcbiAgICAgICAgdGhpcy5wYXJlbnRpZCA9IHBhcmVudGlkO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yIHx8ICcjYTlhZGMxJztcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGluZGV4LmpzXG5cbmltcG9ydCBpbml0aWFsaXplIGZyb20gJy4vaW5pdGlhbGl6ZSc7XG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5cbmluaXRpYWxpemUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==