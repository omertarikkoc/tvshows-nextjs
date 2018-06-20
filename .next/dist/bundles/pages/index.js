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

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
var _jsxFileName = "/Users/omertarik/Documents/Projects/NextJs/hello-next/components/Header.js";




var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-1879714342"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-1879714342"
  }, "Tv Shows - A Next Js App"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-1879714342"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: {
      linkStyle: linkStyle
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: "jsx-1879714342"
  }, " Home ")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: {
      linkStyle: linkStyle
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: "jsx-1879714342"
  }, " About ")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1879714342",
    css: "a.jsx-1879714342{font-size:1.5em;-webkit-text-decoration:none;text-decoration:none;color:pink;-webkit-transition:0.3s ease;transition:0.3s ease;}a.jsx-1879714342:hover{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cb0IsQUFJNkIsQUFPTixVQUdkLE1BVHlCLGtEQUNWLFdBQ1Usa0RBQ3pCIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9vbWVydGFyaWsvRG9jdW1lbnRzL1Byb2plY3RzL05leHRKcy9oZWxsby1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBsaW5rU3R5bGUgPSB7XG4gICAgbWFyZ2luUmlnaHQ6IDE1XG59XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5UdiBTaG93cyAtIEEgTmV4dCBKcyBBcHA8L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YSBzdHlsZT17e2xpbmtTdHlsZX19PiBIb21lIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICA8YSBzdHlsZT17e2xpbmtTdHlsZX19PiBBYm91dCA8L2E+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHBpbms7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG5cblxuICAgICAgICB9XG5cblxuXG4gICAgICAgIGB9IDwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=components/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_js__ = __webpack_require__("./components/Header.js");
var _jsxFileName = "/Users/omertarik/Documents/Projects/NextJs/hello-next/components/MyLayout.js";



var layoutStyle = {
  padding: 20,
  border: '1px solid #DDD',
  maxWidth: 800,
  marginRight: 'auto',
  marginLeft: 'auto'
};

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-1742075001" + " " + "main-container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1742075001",
    css: ".main-container.jsx-1742075001{max-width:1200px;margin-right:auto;margin-left:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY3FCLEFBSTZCLGlCQUNDLGtCQUNELGlCQUVwQiIsImZpbGUiOiJjb21wb25lbnRzL015TGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9vbWVydGFyaWsvRG9jdW1lbnRzL1Byb2plY3RzL05leHRKcy9oZWxsby1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlci5qcydcblxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XG4gICAgcGFkZGluZzogMjAsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLFxuICAgIG1heFdpZHRoOiA4MDAsXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bydcbn1cblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PiB7YFxuXG4gICAgICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuXG4gICAgICAgIH1cblxuXG4gICAgICAgIGB9IDwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dCJdfQ== */\n/*@ sourceURL=components/MyLayout.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/SearchBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/omertarik/Documents/Projects/NextJs/hello-next/components/SearchBar.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar(props) {
    var _this;

    _classCallCheck(this, SearchBar);

    _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));
    _this.state = {
      term: 'batman'
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-577327951" + " " + "search-bar"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        value: this.state.term,
        onChange: function onChange(event) {
          return _this2.onInputChange(event.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-577327951"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "577327951",
        css: ".search-bar.jsx-577327951{text-align:center;}.search-bar.jsx-577327951 input.jsx-577327951{width:80%;margin:auto;height:2em;padding:5px;border:1px solid #DDD;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoQmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWM2QixBQUd1QyxBQUlSLFVBQ0MsUUFKZixJQUtlLFdBQ0MsWUFDVSxzQkFDc0QscUVBQzdDLHNFQUNuQyIsImZpbGUiOiJjb21wb25lbnRzL1NlYXJjaEJhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvb21lcnRhcmlrL0RvY3VtZW50cy9Qcm9qZWN0cy9OZXh0SnMvaGVsbG8tbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0geyB0ZXJtOiAnYmF0bWFuJ307XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3RoaXMuc3RhdGUudGVybX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMub25JbnB1dENoYW5nZShldmVudC50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+IHtgXG4gICAgICAgICAgICAgICAgLnNlYXJjaC1iYXIge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNlYXJjaC1iYXIgaW5wdXR7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjREREO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbklucHV0Q2hhbmdlKHRlcm0pe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt0ZXJtfSk7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWFyY2hUZXJtQ2hhbmdlKHRlcm0pO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7Il19 */\n/*@ sourceURL=components/SearchBar.js */"
      }));
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(term) {
      this.setState({
        term: term
      });
      this.props.onSearchTermChange(term);
    }
  }]);

  return SearchBar;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchBar);

/***/ }),

/***/ "./components/ShowList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/omertarik/Documents/Projects/NextJs/hello-next/components/ShowList.js";




var ShowList = function ShowList(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    className: "jsx-2928279466" + " " + "shows-container"
  }, props.shows.map(function (_ref) {
    var show = _ref.show;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: show.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      className: "jsx-2928279466" + " " + "show"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
      as: "/p/".concat(show.id),
      href: "/post?id=".concat(show.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      className: "jsx-2928279466"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: show.image.medium ? show.image.medium : show.image.original,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      className: "jsx-2928279466" + " " + "show-image"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      className: "jsx-2928279466" + " " + "show-name"
    }, show.name))));
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2928279466",
    css: "ul.jsx-2928279466{padding:0;}li.jsx-2928279466{list-style:none;margin:5px 0;}a.jsx-2928279466{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2928279466:hover{opacity:0.6;}.shows-container.jsx-2928279466{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.show.jsx-2928279466{margin:auto;border:1px solid #DDD;margin-top:2%;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;}.show.jsx-2928279466:hover{cursor:pointer;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}@media only screen and (max-width:480px){.show.jsx-2928279466{width:100%;max-width:350px;margin-left:auto;margin-right:auto;}}@media only screen and (min-width:481px) and (max-width:747px){.show.jsx-2928279466{width:45%;}}@media only screen and (min-width:748px) and (max-width:929px){.show.jsx-2928279466{width:30%;}}@media only screen and (min-width:930px){.show.jsx-2928279466{width:20%;}}.show-image.jsx-2928279466{width:100%;}.show-name.jsx-2928279466{display:block;text-align:center;padding-top:0.5em;padding-bottom:0.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2hvd0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYXFCLEFBR21CLEFBSU0sQUFLSyxBQUtULEFBSUMsQUFPRCxBQVNHLEFBT0EsQUFVRCxBQU9BLEFBT0EsQUFPSCxBQUlHLFVBM0VoQixBQW1ESSxBQU9BLEFBT0EsQ0F4QmtCLEFBK0J0QixDQTFEQSxBQVd3QixFQW1ESixDQTFDRyxDQTlCUixXQXNDUSxFQXJDdkIsR0F3RW9CLEVBbkRKLFVBaUJRLElBaEJzRCxFQWxCakUsQUFxRVUsV0FwRXZCLENBa0NJLFNBbUNKLEdBN0RpQixnQkFpQmpCLDJCQVBpQyxjQVRSLHdEQVV6QiwyQ0FSQSIsImZpbGUiOiJjb21wb25lbnRzL1Nob3dMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9vbWVydGFyaWsvRG9jdW1lbnRzL1Byb2plY3RzL05leHRKcy9oZWxsby1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuY29uc3QgU2hvd0xpc3QgPSAocHJvcHMpID0+IChcbiAgICA8dWwgY2xhc3NOYW1lPVwic2hvd3MtY29udGFpbmVyXCI+XG4gICAgICAgIHtwcm9wcy5zaG93cy5tYXAoKHtzaG93fSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17c2hvdy5pZH0gY2xhc3NOYW1lPVwic2hvd1wiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL3AvJHtzaG93LmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3Nob3cuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNob3ctaW1hZ2VcIiBzcmM9e3Nob3cuaW1hZ2UubWVkaXVtP3Nob3cuaW1hZ2UubWVkaXVtOnNob3cuaW1hZ2Uub3JpZ2luYWx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNob3ctbmFtZVwiPntzaG93Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgICAgPHN0eWxlIGpzeD4ge2BcbiAgICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG5cbiAgICAgIC5zaG93cy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICB9XG5cbiAgICAgIC5zaG93IHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjREREO1xuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICAgIH1cblxuXG4gICAgICAgLnNob3c6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIH1cblxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgIC5zaG93IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzQ3cHgpIHtcbiAgICAgICAgICAgLnNob3cge1xuICAgICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NDhweCkgYW5kIChtYXgtd2lkdGg6IDkyOXB4KSB7XG4gICAgICAgICAgIC5zaG93IHtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkzMHB4KSB7XG4gICAgICAgICAgIC5zaG93IHtcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG5cblxuICAgICAgLnNob3ctaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLnNob3ctbmFtZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICAgICAgfVxuXG5cblxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC91bD5cbilcblxuXG5cbmV4cG9ydCBkZWZhdWx0IFNob3dMaXN0Il19 */\n/*@ sourceURL=components/ShowList.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (ShowList);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_SearchBar_js__ = __webpack_require__("./components/SearchBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ShowList_js__ = __webpack_require__("./components/ShowList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__);
var _jsxFileName = "/Users/omertarik/Documents/Projects/NextJs/hello-next/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    _this.state = {
      searchTerm: 'Batman',
      loading: true,
      error: null,
      shows: []
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.showSearch('batman');
    }
  }, {
    key: "showSearch",
    value: function showSearch(term) {
      var _this2 = this;

      this.setState({
        loading: true
      });
      __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch___default()("https://api.tvmaze.com/search/shows?q=".concat(term)).then(function (res) {
        return res.json();
      }).then(function (shows) {
        return _this2.setState({
          searchTerm: term,
          shows: shows,
          loading: false
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var loading = this.state.loading;

      var showSearch = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(function (term) {
        _this3.showSearch(term);
      }, 1000);

      if (loading) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          className: "jsx-1068568687"
        }, " Loading.. "), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "1068568687",
          css: "h1.jsx-1068568687{margin:auto;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDaUMsQUFHcUMsWUFDTSxrQkFFdEIiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL29tZXJ0YXJpay9Eb2N1bWVudHMvUHJvamVjdHMvTmV4dEpzL2hlbGxvLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hCYXIuanMnXG5pbXBvcnQgU2hvd0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9TaG93TGlzdC5qcydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlYXJjaFRlcm06ICdCYXRtYW4nLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgc2hvd3M6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zaG93U2VhcmNoKCdiYXRtYW4nKTtcbiAgICB9XG5cbiAgICBzaG93U2VhcmNoKHRlcm0pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pXG4gICAgICAgIGZldGNoKGBodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPSR7dGVybX1gKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHNob3dzKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzZWFyY2hUZXJtOiB0ZXJtLFxuICAgICAgICAgICAgICAgIHNob3dzOiBzaG93cyxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtsb2FkaW5nfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgY29uc3Qgc2hvd1NlYXJjaCA9IF8uZGVib3VuY2UoKHRlcm0pID0+IHt0aGlzLnNob3dTZWFyY2godGVybSl9LCAxMDAwKTtcbiAgICAgICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPGgxPiBMb2FkaW5nLi4gPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD4ge2BcbiAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH0gPC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319Pnt0aGlzLnN0YXRlLnNlYXJjaFRlcm0udG9VcHBlckNhc2UoKX0gVFYgU0hPV1MgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEJhciBvblNlYXJjaFRlcm1DaGFuZ2UgPSB7c2hvd1NlYXJjaH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNob3dMaXN0IHNob3dzPXt0aGlzLnN0YXRlLnNob3dzfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKX1cbiAgICB9XG59XG5cblxuXG4iXX0= */\n/*@ sourceURL=pages/index.js */"
        }));
      } else {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
          style: {
            textAlign: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, this.state.searchTerm.toUpperCase(), " TV SHOWS "), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_SearchBar_js__["a" /* default */], {
          onSearchTermChange: showSearch,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ShowList_js__["a" /* default */], {
          shows: this.state.shows,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        })));
      }
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map