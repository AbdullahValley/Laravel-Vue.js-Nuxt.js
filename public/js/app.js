/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /opt/lampp/htdocs/Vue-Nuxt/resources/js/app.js: Unexpected token, expected \",\" (24:23)\n\n\u001b[0m \u001b[90m 22 | \u001b[39m    el\u001b[33m:\u001b[39m \u001b[32m'#app'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 23 | \u001b[39m    router\u001b[33m:\u001b[39m \u001b[33mRoutes\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 24 | \u001b[39m    render\u001b[33m:\u001b[39m h \u001b[33m=>\u001b[39m h(\u001b[33mApp\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 25 | \u001b[39m})\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 27 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m app\u001b[33m;\u001b[39m\u001b[0m\n    at Parser.raise (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:6387:17)\n    at Parser.unexpected (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:7704:16)\n    at Parser.expect (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:7690:28)\n    at Parser.parseObj (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:9221:14)\n    at Parser.parseExprAtom (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:8855:28)\n    at Parser.parseExprSubscripts (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:8483:23)\n    at Parser.parseMaybeUnary (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:8463:21)\n    at Parser.parseExprOps (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:8329:23)\n    at Parser.parseMaybeConditional (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:8302:23)\n    at Parser.parseMaybeAssign (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:8249:21)\n    at Parser.parseExprListItem (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:9562:18)\n    at Parser.parseExprList (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:9536:22)\n    at Parser.parseNewArguments (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:9164:25)\n    at Parser.parseNew (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:9158:10)\n    at Parser.parseExprAtom (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:8872:21)\n    at Parser.parseExprSubscripts (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:8483:23)\n    at Parser.parseMaybeUnary (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:8463:21)\n    at Parser.parseExprOps (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:8329:23)\n    at Parser.parseMaybeConditional (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:8302:23)\n    at Parser.parseMaybeAssign (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:8249:21)\n    at Parser.parseVar (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:10551:26)\n    at Parser.parseVarStatement (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:10370:10)\n    at Parser.parseStatementContent (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:9967:21)\n    at Parser.parseStatement (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:9900:17)\n    at Parser.parseBlockOrModuleBlockBody (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:10476:25)\n    at Parser.parseBlockBody (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:10463:10)\n    at Parser.parseTopLevel (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:9829:10)\n    at Parser.parse (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:11341:17)\n    at parse (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/parser/lib/index.js:11377:38)\n    at parser (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/core/lib/transformation/normalize-file.js:166:34)\n    at normalizeFile (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/core/lib/transformation/normalize-file.js:100:11)\n    at runSync (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/opt/lampp/htdocs/Vue-Nuxt/node_modules/@babel/core/lib/transform.js:34:34)\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /opt/lampp/htdocs/Vue-Nuxt/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /opt/lampp/htdocs/Vue-Nuxt/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });