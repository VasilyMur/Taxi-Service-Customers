webpackHotUpdate(5,{

/***/ "./components/Conversation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_simple_chatbot__ = __webpack_require__("./node_modules/react-simple-chatbot/dist/react-simple-chatbot.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_simple_chatbot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_simple_chatbot__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
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

/***/ })

})
//# sourceMappingURL=5.be63e38aed219a58992a.hot-update.js.map