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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./base.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_re_base__ = __webpack_require__("re-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_re_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_re_base__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("firebase");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* unused harmony reexport firebase */


var config = {
  //apiKey: "AIzaSyB39n_JmtqSW7zZhCUfUcARgyP_3esueFg",
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_URL
  apiKey: "AIzaSyB39n_JmtqSW7zZhCUfUcARgyP_3esueFg",
  authDomain: "invoices-list.firebaseapp.com",
  databaseURL: "https://invoices-list.firebaseio.com"
};
!__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.apps.length ? __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.initializeApp(config) : __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.app();
var base = __WEBPACK_IMPORTED_MODULE_0_re_base___default.a.createClass(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database()); // This is a named export

 // This is a default export;

/* harmony default export */ __webpack_exports__["a"] = (base);

/***/ }),

/***/ "./components/Advantages.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\user\\Desktop\\UDEMY\\REACT-PRACTICE\\07-2018-nextjs-drnk\\components\\Advantages.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Advantages =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Advantages, _React$Component);

  function Advantages() {
    _classCallCheck(this, Advantages);

    return _possibleConstructorReturn(this, (Advantages.__proto__ || Object.getPrototypeOf(Advantages)).apply(this, arguments));
  }

  _createClass(Advantages, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "our__advantages",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 4
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      }, "\u0422\u0440\u0435\u0437\u0432\u044B\u0439 \u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043E\u0442 SafeRide"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "our__advantages__container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "advantage-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      })));
    }
  }]);

  return Advantages;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Advantages);

/***/ }),

/***/ "./components/Conversation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_simple_chatbot__ = __webpack_require__("react-simple-chatbot");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_simple_chatbot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_simple_chatbot__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__("./base.js");
var _jsxFileName = "C:\\Users\\user\\Desktop\\UDEMY\\REACT-PRACTICE\\07-2018-nextjs-drnk\\components\\Conversation.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Image =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://j.gifs.com/kZkzpv.gif",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      });
    }
  }]);

  return Image;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var ImageTwo =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ImageTwo, _React$Component2);

  function ImageTwo() {
    _classCallCheck(this, ImageTwo);

    return _possibleConstructorReturn(this, (ImageTwo.__proto__ || Object.getPrototypeOf(ImageTwo)).apply(this, arguments));
  }

  _createClass(ImageTwo, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://j.gifs.com/0VN4WN.gif",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      });
    }
  }]);

  return ImageTwo;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var Review =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Review, _React$Component3);

  function Review(props) {
    var _this;

    _classCallCheck(this, Review);

    _this = _possibleConstructorReturn(this, (Review.__proto__ || Object.getPrototypeOf(Review)).call(this, props));
    _this.state = {
      name: '',
      phone: '',
      address: ''
    };
    return _this;
  }

  _createClass(Review, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var steps = this.props.steps;
      var name = steps.name,
          phone = steps.phone,
          address = steps.address;
      this.setState({
        name: name,
        phone: phone,
        address: address
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var order = {
        name: this.state.name.value,
        phone: this.state.phone.value,
        address: this.state.address.value
      };
      console.log(order);
      this.ref = __WEBPACK_IMPORTED_MODULE_3__base__["a" /* default */].push('orders', {
        data: order
      }).then(function () {//Router.transitionTo('dashboard');
      }).catch(function (err) {
        // handle error
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          name = _state.name,
          phone = _state.phone,
          address = _state.address;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "\u0412\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "\u0418\u043C\u044F:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, name.value)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "\u0410\u0434\u0440\u0435\u0441:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, address.value)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, phone.value)))));
    }
  }]);

  return Review;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Review.propTypes = {
  steps: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
};
Review.defaultProps = {
  steps: undefined
};

var Conversation =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Conversation, _React$Component4);

  function Conversation() {
    _classCallCheck(this, Conversation);

    return _possibleConstructorReturn(this, (Conversation.__proto__ || Object.getPrototypeOf(Conversation)).apply(this, arguments));
  }

  _createClass(Conversation, [{
    key: "render",
    // trackWindow = () => {
    //   const mobile = window.matchMedia("(max-width: 500px)").matches ? true : false;
    //   console.log(mobile)
    // }
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_simple_chatbot___default.a, {
        headerComponent: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
          className: "front-header",
          key: 22,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, "\u0422\u0440\u0435\u0437\u0432\u044B\u0439 \u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043E\u0442 ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          key: 11,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, "800"), "\u20BD!") //headerComponent={"Трезвый Водитель"}
        //headerTitle={"Лелик поможет тебе заказать трезвого водителя:"}
        ,
        userAvatar: 'http://res.cloudinary.com/dlmeqtsfq/image/upload/c_scale,h_70,q_70/v1530714044/Drive/semen70x70.png',
        botAvatar: 'http://res.cloudinary.com/dlmeqtsfq/image/upload/c_scale,h_70,q_auto/v1530715032/Drive/papanov70x70.png',
        steps: [{
          id: '1',
          message: 'Ну, что...Выпил и хочешь заказать трезвого водителя?',
          trigger: '2'
        }, {
          id: '2',
          component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            }
          }),
          trigger: '3'
        }, {
          id: '3',
          options: [{
            value: 1,
            label: 'Хочу Заказать!',
            trigger: '5'
          }, {
            value: 2,
            label: 'Нет',
            trigger: '4'
          }]
        }, {
          id: '4',
          message: 'Тогда бросай машину и езжай на метро!',
          end: true
        }, {
          id: '5',
          message: 'Отлично - как тебя зовут?',
          trigger: 'name'
        }, {
          id: 'name',
          user: true,
          trigger: '7'
        }, {
          id: '7',
          message: 'Привет {previousValue}! Напиши мне свой телефон!',
          trigger: 'phone'
        }, {
          id: 'phone',
          user: true,
          trigger: '9'
        }, {
          id: '9',
          message: 'Так... Теперь введи свой адрес:',
          trigger: 'address'
        }, {
          id: 'address',
          user: true,
          trigger: '11'
        }, {
          id: '11',
          message: 'Отлично! Проверь, что все правильно:',
          //end: true
          trigger: 'review'
        }, {
          id: 'review',
          component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Review, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 182
            }
          }),
          asMessage: true,
          trigger: 'update' //end: true

        }, {
          id: 'update',
          message: 'Хочешь что-нибудь поправить?',
          trigger: 'update-question'
        }, {
          id: 'update-question',
          options: [{
            value: 'yes',
            label: 'Да',
            trigger: 'update-yes'
          }, {
            value: 'no',
            label: 'Нет',
            trigger: 'pre-end-message'
          }]
        }, {
          id: 'update-yes',
          message: 'Какую информацию поправить?',
          trigger: 'update-fields'
        }, {
          id: 'update-fields',
          options: [{
            value: 'name',
            label: 'Имя',
            trigger: 'update-name'
          }, {
            value: 'address',
            label: 'Адрес',
            trigger: 'update-address'
          }, {
            value: 'phone',
            label: 'Телефон',
            trigger: 'update-phone'
          }]
        }, {
          id: 'update-name',
          message: 'Введи правильное имя:',
          trigger: 'update-name-action'
        }, {
          id: 'update-name-action',
          update: 'name',
          trigger: '11'
        }, {
          id: 'update-phone',
          message: 'Введи правильный номер:',
          trigger: 'update-phone-action'
        }, {
          id: 'update-phone-action',
          update: 'phone',
          trigger: '11'
        }, {
          id: 'update-address',
          message: 'Введи правильный адрес:',
          trigger: 'update-address-action'
        }, {
          id: 'update-address-action',
          update: 'address',
          trigger: '11'
        }, {
          id: 'pre-end-message',
          component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ImageTwo, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 245
            }
          }),
          trigger: 'end-message'
        }, {
          id: 'end-message',
          message: 'Спасибо! Все записали - сейчас позвоним тебе и подтвердим заказ!',
          end: true
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      });
    }
  }]);

  return Conversation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Conversation);

/***/ }),

/***/ "./components/DrunkLaw.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\user\\Desktop\\UDEMY\\REACT-PRACTICE\\07-2018-nextjs-drnk\\components\\DrunkLaw.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PricesDesktop =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PricesDesktop, _React$Component);

  function PricesDesktop() {
    _classCallCheck(this, PricesDesktop);

    return _possibleConstructorReturn(this, (PricesDesktop.__proto__ || Object.getPrototypeOf(PricesDesktop)).apply(this, arguments));
  }

  _createClass(PricesDesktop, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "legal__faq",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "legal__faq__container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, "\u041D\u0430\u043A\u0430\u0437\u0430\u043D\u0438\u0435 \u0437\u0430 \u0412\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0432 \u041F\u044C\u044F\u043D\u043E\u043C \u0412\u0438\u0434\u0435"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "faqs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "faq",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0432 \u0420\u043E\u0441\u0441\u0438\u0438 \u0441\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u0430\u0432\u0430\u0440\u0438\u0439 \u043F\u043E \u0432\u0438\u043D\u0435 \u043F\u044C\u044F\u043D\u044B\u0445 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0432 2017 \u0433\u043E\u0434\u0443?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, "\u0412 2017 \u0433\u043E\u0434\u0443 \u043F\u044C\u044F\u043D\u044B\u0435 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0438 \u0441\u0442\u0430\u043B\u0438 \u0432\u0438\u043D\u043E\u0432\u043D\u0438\u043A\u0430\u043C\u0438 \u0431\u043E\u043B\u0435\u0435 ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "hl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, "16 \u0442\u044B\u0441\u044F\u0447"), " \u0430\u0432\u0430\u0440\u0438\u0439. \u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0433\u0438\u0431\u0448\u0438\u0445 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u043B\u043E \u043F\u043E\u0447\u0442\u0438 5 \u0442\u044B\u0441\u044F\u0447 \u0447\u0435\u043B\u043E\u0432\u0435\u043A.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "faq",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, "\u041A\u0430\u043A \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0432 \u043F\u044C\u044F\u043D\u043E\u043C \u0432\u0438\u0434\u0435?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "\u0421\u0435\u0433\u043E\u0434\u043D\u044F, \u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F \u0432 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u043F\u044C\u044F\u043D\u0435\u043D\u0438\u044F \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "hl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "\u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u043C"), " \u043F\u0440\u0430\u0432\u043E\u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435\u043C. \u0412\u0438\u043D\u043E\u0432\u043D\u0438\u043A\u0443 \u0433\u0440\u043E\u0437\u0438\u0442 ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "hl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "\u043B\u0438\u0448\u0435\u043D\u0438\u0435 \u043F\u0440\u0430\u0432"), " \u043D\u0430 \u0441\u0440\u043E\u043A \u0434\u043E 2-\u0445 \u043B\u0435\u0442.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "faq",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "\u041F\u0440\u0430\u0432\u0434\u0438 \u043B\u0438, \u0447\u0442\u043E \u043F\u0440\u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u043C \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0438, \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0423\u0433\u043B\u043E\u0432\u043D\u044B\u0439 \u041A\u043E\u0434\u0435\u043A\u0441?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "\u042D\u0442\u043E - \u043F\u0440\u0430\u0432\u0434\u0430. \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0435 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u044F \u043F\u043E\u043F\u0430\u0434\u0430\u044E\u0442 \u043F\u043E\u0434 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 264.1 \u0423\u041A \u0420\u0424")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "faq",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "\u0427\u0442\u043E \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043E \u0441\u0442\u0430\u0442\u044C\u0435\u0439 264.1 \u0423\u041A \u0420\u0424?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u0430\u0440\u0435\u0441\u0442 \u0438\u043B\u0438 ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "hl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "\u0448\u0442\u0440\u0430\u0444"), " \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 \u0434\u043E 200-300 \u0442\u044B\u0441. \u0440\u0443\u0431. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "hl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "\u041B\u0438\u0448\u0435\u043D\u0438\u0435 \u0441\u0432\u043E\u0431\u043E\u0434\u044B"), " \u0434\u043E 2-\u0445 \u043B\u0435\u0442.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "faq",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "\u041A\u0430\u043A \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u044E\u0442 \u0443\u0436\u0435\u0441\u0442\u043E\u0447\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E 264.1 \u0423\u041A \u0420\u0424 \u0434\u043B\u044F \u043D\u0430\u0440\u0443\u0448\u0438\u0442\u0435\u043B\u0435\u0439?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0440\u043E\u043A ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "\u043B\u0438\u0448\u0435\u043D\u0438\u044F \u0441\u0432\u043E\u0431\u043E\u0434\u044B"), " \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u0441\u044F \u0434\u043E 4 \u043B\u0435\u0442. \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0448\u0442\u0440\u0430\u0444\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442 ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "500 \u0442\u044B\u0441. \u0440\u0443\u0431."))))));
    }
  }]);

  return PricesDesktop;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (PricesDesktop);

/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\user\\Desktop\\UDEMY\\REACT-PRACTICE\\07-2018-nextjs-drnk\\components\\Footer.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 4
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      }, "\u0421\u0435\u0440\u0432\u0438\u0441 \u0422\u0440\u0435\u0437\u0432\u044B\u0439 \u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C"));
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_svg_loader_images_phone_svg__ = __webpack_require__("./node_modules/react-svg-loader/lib/loader.js!./images/phone.svg");
var _jsxFileName = "C:\\Users\\user\\Desktop\\UDEMY\\REACT-PRACTICE\\07-2018-nextjs-drnk\\components\\Header.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "scrollPrices", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        console.log("PUSH");
      }
    }), _temp));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        className: "navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "navbar__logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "SafeDrive"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "navbar__menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link callButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_svg_loader_images_phone_svg__["a" /* default */], {
        width: 30,
        height: 30,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        onClick: this.scrollPrices,
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "\u0426\u0435\u043D\u044B")))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = "C:\\Users\\user\\Desktop\\UDEMY\\REACT-PRACTICE\\07-2018-nextjs-drnk\\components\\Layout.js";





var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "\u0422\u0440\u0435\u0437\u0432\u044B\u0439 \u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, props.children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/PricesDesktop.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\user\\Desktop\\UDEMY\\REACT-PRACTICE\\07-2018-nextjs-drnk\\components\\PricesDesktop.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PricesDesktop =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PricesDesktop, _React$Component);

  function PricesDesktop() {
    _classCallCheck(this, PricesDesktop);

    return _possibleConstructorReturn(this, (PricesDesktop.__proto__ || Object.getPrototypeOf(PricesDesktop)).apply(this, arguments));
  }

  _createClass(PricesDesktop, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "prices__desktop",
        ref: "priceBlock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "prices__container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "prices__container--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block single one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, "\u0417\u043E\u043D\u0430 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "price-type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, "\u0422\u0430\u0440\u0438\u0444 \"\u0411\u0443\u043B\u044C\u0432\u0430\u0440\"", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "price-star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, "\u2605\u2605\u2605\u2605\u2605")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "item-block-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, "(\u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u0411\u0443\u043B\u044C\u0432\u0430\u0440\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u044C\u0446\u0430)")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "price-type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "\u0422\u0430\u0440\u0438\u0444 \"\u0421\u0430\u0434\u043E\u0432\u043E\u0435\"", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "price-star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "\u2605\u2605\u2605\u2605")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "item-block-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "(\u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u0421\u0430\u0434\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043B\u044C\u0446\u0430)")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "price-type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "\u0422\u0430\u0440\u0438\u0444 \"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\""), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "item-block-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "(\u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u041C\u041A\u0410\u0414)")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "price-type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "\u041F\u043E\u0435\u0437\u0434\u043A\u0430 \u0437\u0430 \u041C\u041A\u0410\u0414"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "item-block-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "(\u0438\u0437 \u041C\u043E\u0441\u043A\u0432\u044B \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u044C)")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "price-type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "\u041F\u043E\u0435\u0437\u0434\u043A\u0430 \u0438\u0437-\u0437\u0430 \u041C\u041A\u0410\u0414"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "item-block-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "(\u0432\u044B\u0435\u0437\u0434 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u044C)"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "prices__container--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "(\u0446\u0435\u043D\u0430 1 \u0447\u0430\u0441\u0430 \u043F\u043E\u0435\u0437\u0434\u043A\u0438)")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block single",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "800 \u0420\u0443\u0431"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block single",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "1000 \u0420\u0443\u0431"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block single",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "1500 \u0420\u0443\u0431"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "1500 \u0420\u0443\u0431"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "+ 25 \u0440\u0443\u0431/\u043A\u043C \u043E\u0442 \u041C\u041A\u0410\u0414")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "1500 \u0420\u0443\u0431 + 50 \u0440\u0443\u0431/\u043A\u043C "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "\u0434\u043E \u041C\u041A\u0410\u0414"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "prices__container--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "\u0422\u0430\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0443\u0441\u043B\u0443\u0433\u0438"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "\u0441\u043E \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0447\u0430\u0441\u0430")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block single",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "10 \u0440\u0443\u0431/\u043C\u0438\u043D"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block single",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "10 \u0440\u0443\u0431/\u043C\u0438\u043D"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block single",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "10 \u0440\u0443\u0431/\u043C\u0438\u043D"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block single",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "20 \u0440\u0443\u0431/\u043C\u0438\u043D"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block single",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "20 \u0440\u0443\u0431/\u043C\u0438\u043D")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "prices__container--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block single",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "\u0421\u0440\u043E\u043A \u043F\u043E\u0434\u0430\u0447\u0438 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block single",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "\u043E\u0442 20-30 \u043C\u0438\u043D\u0443\u0442"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block single",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "\u043E\u0442 20-30 \u043C\u0438\u043D\u0443\u0442"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block single",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "\u043E\u0442 20-30 \u043C\u0438\u043D\u0443\u0442"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block single",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "\u043E\u0442 20-30 \u043C\u0438\u043D\u0443\u0442"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "\u043F\u043E \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u043C\u0443"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "\u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044E")))));
    }
  }]);

  return PricesDesktop;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (PricesDesktop);

/***/ }),

/***/ "./components/PricesMobile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\user\\Desktop\\UDEMY\\REACT-PRACTICE\\07-2018-nextjs-drnk\\components\\PricesMobile.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PricesMobile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PricesMobile, _React$Component);

  function PricesMobile() {
    _classCallCheck(this, PricesMobile);

    return _possibleConstructorReturn(this, (PricesMobile.__proto__ || Object.getPrototypeOf(PricesMobile)).apply(this, arguments));
  }

  _createClass(PricesMobile, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "prices__mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 4
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "prices__mobile__container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "prices__mobile__container--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-head",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, "\u0422\u0430\u0440\u0438\u0444 \"\u0411\u0443\u043B\u044C\u0432\u0430\u0440\"", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "price-star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, "\u2605\u2605\u2605\u2605\u2605")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, "(\u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u0411\u0443\u043B\u044C\u0432\u0430\u0440\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u044C\u0446\u0430)")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-detail unit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "(\u0446\u0435\u043D\u0430 1 \u0447\u0430\u0441\u0430 \u043F\u043E\u0435\u0437\u0434\u043A\u0438)")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "800\u20BD")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-detail unit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "\u0422\u0430\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0443\u0441\u043B\u0443\u0433\u0438"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "\u0441\u043E \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0447\u0430\u0441\u0430")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "10\u20BD/\u043C\u0438\u043D")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-detail unit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u0438\u0435\u0437\u0434\u0430"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "\u043E\u0442 20-30 \u043C\u0438\u043D\u0443\u0442"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "prices__mobile__container--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-head",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "\u0422\u0430\u0440\u0438\u0444 \"\u0421\u0430\u0434\u043E\u0432\u043E\u0435\"", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "price-star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "\u2605\u2605\u2605\u2605")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, "(\u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u0421\u0430\u0434\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043B\u044C\u0446\u0430)")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-detail unit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "(\u0446\u0435\u043D\u0430 1 \u0447\u0430\u0441\u0430 \u043F\u043E\u0435\u0437\u0434\u043A\u0438)")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "1000\u20BD")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-detail unit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "\u0422\u0430\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0443\u0441\u043B\u0443\u0433\u0438"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "\u0441\u043E \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0447\u0430\u0441\u0430")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "10\u20BD/\u043C\u0438\u043D")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-detail unit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u0438\u0435\u0437\u0434\u0430"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "\u043E\u0442 20-30 \u043C\u0438\u043D\u0443\u0442"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "prices__mobile__container--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-head",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "\u0422\u0430\u0440\u0438\u0444 \"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\""), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "(\u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u041C\u041A\u0410\u0414)")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-detail unit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "(\u0446\u0435\u043D\u0430 1 \u0447\u0430\u0441\u0430 \u043F\u043E\u0435\u0437\u0434\u043A\u0438)")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "1500\u20BD")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-detail unit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "\u0422\u0430\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0443\u0441\u043B\u0443\u0433\u0438"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "\u0441\u043E \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0447\u0430\u0441\u0430")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "10\u20BD/\u043C\u0438\u043D")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-detail unit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u0438\u0435\u0437\u0434\u0430"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "\u043E\u0442 20-30 \u043C\u0438\u043D\u0443\u0442"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "prices__mobile__container--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-head",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, "\u041F\u043E\u0435\u0437\u0434\u043A\u0430 \u0437\u0430 \u041C\u041A\u0410\u0414"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "(\u0438\u0437 \u041C\u043E\u0441\u043A\u0432\u044B \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u044C)")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-detail unit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, "(\u0446\u0435\u043D\u0430 1 \u0447\u0430\u0441\u0430 \u043F\u043E\u0435\u0437\u0434\u043A\u0438)")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "1500\u20BD+25\u20BD/\u043A\u043C"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "\u043E\u0442 \u041C\u041A\u0410\u0414"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-detail unit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, "\u0422\u0430\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0443\u0441\u043B\u0443\u0433\u0438"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "\u0441\u043E \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0447\u0430\u0441\u0430")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, "20\u20BD/\u043C\u0438\u043D")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "item-detail unit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, "\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u0438\u0435\u0437\u0434\u0430"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, "\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, "\u043E\u0442 20-30 \u043C\u0438\u043D\u0443\u0442")))));
    }
  }]);

  return PricesMobile;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (PricesMobile);

/***/ }),

/***/ "./css/styles.styl":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-svg-loader/lib/loader.js!./images/phone.svg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }


/* harmony default export */ __webpack_exports__["a"] = ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, props),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M20 22.621l-3.521-6.795a618.8 618.8 0 0 1-2.064 1.011c-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026L8.396 0 6.29 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" })
  );
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Conversation__ = __webpack_require__("./components/Conversation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PricesDesktop__ = __webpack_require__("./components/PricesDesktop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_PricesMobile__ = __webpack_require__("./components/PricesMobile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_DrunkLaw__ = __webpack_require__("./components/DrunkLaw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Advantages__ = __webpack_require__("./components/Advantages.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__css_styles_styl__ = __webpack_require__("./css/styles.styl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__css_styles_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__css_styles_styl__);
var _jsxFileName = "C:\\Users\\user\\Desktop\\UDEMY\\REACT-PRACTICE\\07-2018-nextjs-drnk\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Link from 'next/link';








var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "conversation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Conversation__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "our-prices",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "\u041D\u0430\u0448\u0438 \u0426\u0435\u043D\u044B"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_PricesDesktop__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_PricesMobile__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_DrunkLaw__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Advantages__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "firebase":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "re-base":
/***/ (function(module, exports) {

module.exports = require("re-base");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-simple-chatbot":
/***/ (function(module, exports) {

module.exports = require("react-simple-chatbot");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map