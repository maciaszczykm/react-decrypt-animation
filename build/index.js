module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dictionary = "0123456789qwertyuiopasdfghjklzxcvbnm!?></\a`~+*=@#$%".split('');

var Decrypt = function (_React$Component) {
  _inherits(Decrypt, _React$Component);

  function Decrypt(props) {
    _classCallCheck(this, Decrypt);

    var _this = _possibleConstructorReturn(this, (Decrypt.__proto__ || Object.getPrototypeOf(Decrypt)).call(this, props));

    _this.target = props.text || "unknown text";
    _this.delay = props.delay || 3000;
    _this.interval = props.interval || 30;
    _this.state = {
      text: _this.init(props.text)
    };
    return _this;
  }

  _createClass(Decrypt, [{
    key: 'init',
    value: function init(text) {
      return text && text.length > 3 ? '' + text[0] + (text.length - 2) + text[text.length - 1] : text;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        var timePassed = 0;
        var lettersCount = _this2.state.text.length;
        var interval = setInterval(function () {
          timePassed += _this2.interval;

          // Add new letters 5 times slower.
          if (_this2.state.text.length < _this2.target.length && timePassed > _this2.target.length * _this2.interval * 5) {
            lettersCount++;
            _this2.setStateText('' + _this2.target[0] + _this2.randomString(lettersCount - 2) + _this2.target[_this2.target.length - 1]);
          }

          // Try to find matching letters.
          if (lettersCount === _this2.target.length) {
            for (var i = 1; i < lettersCount - 1; i++) {
              if (_this2.state.text[i] != _this2.target[i]) {
                _this2.setStateText(_this2.setCharAt(_this2.state.text, i, dictionary[_this2.random()]));
              }
            }
          }

          // Finish when text is matching target.
          if (_this2.target === _this2.state.text) {
            clearInterval(interval);
          }
        }, _this2.interval);
      }, this.delay);
    }
  }, {
    key: 'random',
    value: function random() {
      return Math.floor(Math.random() * dictionary.length);
    }
  }, {
    key: 'randomString',
    value: function randomString(amount) {
      var s = '';
      for (var i = 0; i < amount; i++) {
        s += dictionary[this.random()];
      }
      return s;
    }
  }, {
    key: 'setCharAt',
    value: function setCharAt(str, index, chr) {
      if (index > str.length - 1) {
        return str;
      }
      return str.substr(0, index) + chr + str.substr(index + 1);
    }
  }, {
    key: 'setStateText',
    value: function setStateText(text) {
      this.setState({
        text: text
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.state.text
      );
    }
  }]);

  return Decrypt;
}(_react2.default.Component);

exports.default = Decrypt;

/***/ })
/******/ ]);