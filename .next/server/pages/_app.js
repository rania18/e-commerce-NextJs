(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @paypal/react-paypal-js */ "@paypal/react-paypal-js");
/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notistack */ "notistack");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Store */ "./utils/Store.js");

var _jsxFileName = "C:\\Users\\Rania\\Documents\\Work\\test\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(notistack__WEBPACK_IMPORTED_MODULE_2__.SnackbarProvider, {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_Store__WEBPACK_IMPORTED_MODULE_5__.StoreProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalScriptProvider, {
        deferLoading: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./utils/Store.js":
/*!************************!*\
  !*** ./utils/Store.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": function() { return /* binding */ Store; },
/* harmony export */   "StoreProvider": function() { return /* binding */ StoreProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Rania\\Documents\\Work\\test\\utils\\Store.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
const initialState = {
  darkMode: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('darkMode') === 'ON' ? true : false,
  cart: {
    cartItems: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('cartItems') ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('cartItems')) : [],
    shippingAddress: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('shippingAddress') ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('shippingAddress')) : {
      location: {}
    },
    paymentMethod: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('paymentMethod') ? js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('paymentMethod') : ''
  },
  userInfo: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('userInfo') ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('userInfo')) : null
};

function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return _objectSpread(_objectSpread({}, state), {}, {
        darkMode: true
      });

    case 'DARK_MODE_OFF':
      return _objectSpread(_objectSpread({}, state), {}, {
        darkMode: false
      });

    case 'CART_ADD_ITEM':
      {
        const newItem = action.payload;
        const existItem = state.cart.cartItems.find(item => item._id === newItem._id);
        const cartItems = existItem ? state.cart.cartItems.map(item => item.name === existItem.name ? newItem : item) : [...state.cart.cartItems, newItem];
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set('cartItems', JSON.stringify(cartItems));
        return _objectSpread(_objectSpread({}, state), {}, {
          cart: _objectSpread(_objectSpread({}, state.cart), {}, {
            cartItems
          })
        });
      }

    case 'CART_REMOVE_ITEM':
      {
        const cartItems = state.cart.cartItems.filter(item => item._id !== action.payload._id);
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set('cartItems', JSON.stringify(cartItems));
        return _objectSpread(_objectSpread({}, state), {}, {
          cart: _objectSpread(_objectSpread({}, state.cart), {}, {
            cartItems
          })
        });
      }

    case 'SAVE_SHIPPING_ADDRESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: _objectSpread(_objectSpread({}, state.cart), {}, {
          shippingAddress: _objectSpread(_objectSpread({}, state.cart.shippingAddress), action.payload)
        })
      });

    case 'SAVE_SHIPPING_ADDRESS_MAP_LOCATION':
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: _objectSpread(_objectSpread({}, state.cart), {}, {
          shippingAddress: _objectSpread(_objectSpread({}, state.cart.shippingAddress), {}, {
            location: action.payload
          })
        })
      });

    case 'SAVE_PAYMENT_METHOD':
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: _objectSpread(_objectSpread({}, state.cart), {}, {
          paymentMethod: action.payload
        })
      });

    case 'CART_CLEAR':
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: _objectSpread(_objectSpread({}, state.cart), {}, {
          cartItems: []
        })
      });

    case 'USER_LOGIN':
      return _objectSpread(_objectSpread({}, state), {}, {
        userInfo: action.payload
      });

    case 'USER_LOGOUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        userInfo: null,
        cart: {
          cartItems: [],
          shippingAddress: {
            location: {}
          },
          paymentMethod: ''
        }
      });

    default:
      return state;
  }
}

function StoreProvider(props) {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, initialState);
  const value = {
    state,
    dispatch
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {
    value: value,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "@paypal/react-paypal-js":
/*!******************************************!*\
  !*** external "@paypal/react-paypal-js" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@paypal/react-paypal-js");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "notistack":
/*!****************************!*\
  !*** external "notistack" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("notistack");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFtYXpvbmEvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL25leHQtYW1hem9uYS8uL3V0aWxzL1N0b3JlLmpzIiwid2VicGFjazovL25leHQtYW1hem9uYS9leHRlcm5hbCBcIkBwYXlwYWwvcmVhY3QtcGF5cGFsLWpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1hbWF6b25hL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vbmV4dC1hbWF6b25hL2V4dGVybmFsIFwibm90aXN0YWNrXCIiLCJ3ZWJwYWNrOi8vbmV4dC1hbWF6b25hL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0LWFtYXpvbmEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUVmZmVjdCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIlN0b3JlIiwiY3JlYXRlQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsImRhcmtNb2RlIiwiQ29va2llcyIsImNhcnQiLCJjYXJ0SXRlbXMiLCJKU09OIiwicGFyc2UiLCJzaGlwcGluZ0FkZHJlc3MiLCJsb2NhdGlvbiIsInBheW1lbnRNZXRob2QiLCJ1c2VySW5mbyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXdJdGVtIiwicGF5bG9hZCIsImV4aXN0SXRlbSIsImZpbmQiLCJpdGVtIiwiX2lkIiwibWFwIiwibmFtZSIsInN0cmluZ2lmeSIsImZpbHRlciIsIlN0b3JlUHJvdmlkZXIiLCJwcm9wcyIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInZhbHVlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RUFBRTtBQUE5QjtBQUF2Qjs7QUFDRixTQUFLLFlBQUw7QUFDRSw2Q0FBWVEsS0FBWjtBQUFtQkYsZ0JBQVEsRUFBRUcsTUFBTSxDQUFDRztBQUFwQzs7QUFDRixTQUFLLGFBQUw7QUFDRSw2Q0FDS0osS0FETDtBQUVFRixnQkFBUSxFQUFFLElBRlo7QUFHRVAsWUFBSSxFQUFFO0FBQ0pDLG1CQUFTLEVBQUUsRUFEUDtBQUVKRyx5QkFBZSxFQUFFO0FBQUVDLG9CQUFRLEVBQUU7QUFBWixXQUZiO0FBR0pDLHVCQUFhLEVBQUU7QUFIWDtBQUhSOztBQVVGO0FBQ0UsYUFBT0csS0FBUDtBQXBFSjtBQXNFRDs7QUFFTSxTQUFTYSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUNuQyxRQUFNO0FBQUEsT0FBQ2QsS0FBRDtBQUFBLE9BQVFlO0FBQVIsTUFBb0JDLGlEQUFVLENBQUNqQixPQUFELEVBQVVYLFlBQVYsQ0FBcEM7QUFDQSxRQUFNNkIsS0FBSyxHQUFHO0FBQUVqQixTQUFGO0FBQVNlO0FBQVQsR0FBZDtBQUNBLHNCQUFPLDhEQUFDLEtBQUQsQ0FBTyxRQUFQO0FBQWdCLFNBQUssRUFBRUUsS0FBdkI7QUFBQSxjQUErQkgsS0FBSyxDQUFDSTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0QscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBheVBhbFNjcmlwdFByb3ZpZGVyIH0gZnJvbSAnQHBheXBhbC9yZWFjdC1wYXlwYWwtanMnO1xuaW1wb3J0IHsgU25hY2tiYXJQcm92aWRlciB9IGZyb20gJ25vdGlzdGFjayc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyBTdG9yZVByb3ZpZGVyIH0gZnJvbSAnLi4vdXRpbHMvU3RvcmUnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XG4gICAgaWYgKGpzc1N0eWxlcykge1xuICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8U25hY2tiYXJQcm92aWRlciBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6ICd0b3AnLCBob3Jpem9udGFsOiAnY2VudGVyJyB9fT5cbiAgICAgIDxTdG9yZVByb3ZpZGVyPlxuICAgICAgICA8UGF5UGFsU2NyaXB0UHJvdmlkZXIgZGVmZXJMb2FkaW5nPXt0cnVlfT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvUGF5UGFsU2NyaXB0UHJvdmlkZXI+XG4gICAgICA8L1N0b3JlUHJvdmlkZXI+XG4gICAgPC9TbmFja2JhclByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsImltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KCk7XG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGRhcmtNb2RlOiBDb29raWVzLmdldCgnZGFya01vZGUnKSA9PT0gJ09OJyA/IHRydWUgOiBmYWxzZSxcbiAgY2FydDoge1xuICAgIGNhcnRJdGVtczogQ29va2llcy5nZXQoJ2NhcnRJdGVtcycpXG4gICAgICA/IEpTT04ucGFyc2UoQ29va2llcy5nZXQoJ2NhcnRJdGVtcycpKVxuICAgICAgOiBbXSxcbiAgICBzaGlwcGluZ0FkZHJlc3M6IENvb2tpZXMuZ2V0KCdzaGlwcGluZ0FkZHJlc3MnKVxuICAgICAgPyBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KCdzaGlwcGluZ0FkZHJlc3MnKSlcbiAgICAgIDogeyBsb2NhdGlvbjoge30gfSxcbiAgICBwYXltZW50TWV0aG9kOiBDb29raWVzLmdldCgncGF5bWVudE1ldGhvZCcpXG4gICAgICA/IENvb2tpZXMuZ2V0KCdwYXltZW50TWV0aG9kJylcbiAgICAgIDogJycsXG4gIH0sXG4gIHVzZXJJbmZvOiBDb29raWVzLmdldCgndXNlckluZm8nKVxuICAgID8gSlNPTi5wYXJzZShDb29raWVzLmdldCgndXNlckluZm8nKSlcbiAgICA6IG51bGwsXG59O1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0RBUktfTU9ERV9PTic6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGFya01vZGU6IHRydWUgfTtcbiAgICBjYXNlICdEQVJLX01PREVfT0ZGJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXJrTW9kZTogZmFsc2UgfTtcbiAgICBjYXNlICdDQVJUX0FERF9JVEVNJzoge1xuICAgICAgY29uc3QgbmV3SXRlbSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZXhpc3RJdGVtID0gc3RhdGUuY2FydC5jYXJ0SXRlbXMuZmluZChcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uX2lkID09PSBuZXdJdGVtLl9pZFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IGV4aXN0SXRlbVxuICAgICAgICA/IHN0YXRlLmNhcnQuY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICAgIGl0ZW0ubmFtZSA9PT0gZXhpc3RJdGVtLm5hbWUgPyBuZXdJdGVtIDogaXRlbVxuICAgICAgICAgIClcbiAgICAgICAgOiBbLi4uc3RhdGUuY2FydC5jYXJ0SXRlbXMsIG5ld0l0ZW1dO1xuICAgICAgQ29va2llcy5zZXQoJ2NhcnRJdGVtcycsIEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtcykpO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0gfTtcbiAgICB9XG4gICAgY2FzZSAnQ0FSVF9SRU1PVkVfSVRFTSc6IHtcbiAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IHN0YXRlLmNhcnQuY2FydEl0ZW1zLmZpbHRlcihcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uX2lkICE9PSBhY3Rpb24ucGF5bG9hZC5faWRcbiAgICAgICk7XG4gICAgICBDb29raWVzLnNldCgnY2FydEl0ZW1zJywgSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW1zKSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSB9O1xuICAgIH1cbiAgICBjYXNlICdTQVZFX1NISVBQSU5HX0FERFJFU1MnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5jYXJ0LFxuICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczoge1xuICAgICAgICAgICAgLi4uc3RhdGUuY2FydC5zaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlICdTQVZFX1NISVBQSU5HX0FERFJFU1NfTUFQX0xPQ0FUSU9OJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0OiB7XG4gICAgICAgICAgLi4uc3RhdGUuY2FydCxcbiAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLmNhcnQuc2hpcHBpbmdBZGRyZXNzLFxuICAgICAgICAgICAgbG9jYXRpb246IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgJ1NBVkVfUEFZTUVOVF9NRVRIT0QnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQ6IHsgLi4uc3RhdGUuY2FydCwgcGF5bWVudE1ldGhvZDogYWN0aW9uLnBheWxvYWQgfSxcbiAgICAgIH07XG4gICAgY2FzZSAnQ0FSVF9DTEVBUic6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXM6IFtdIH0gfTtcbiAgICBjYXNlICdVU0VSX0xPR0lOJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VySW5mbzogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBjYXNlICdVU0VSX0xPR09VVCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlckluZm86IG51bGwsXG4gICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICBjYXJ0SXRlbXM6IFtdLFxuICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogeyBsb2NhdGlvbjoge30gfSxcbiAgICAgICAgICBwYXltZW50TWV0aG9kOiAnJyxcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdG9yZVByb3ZpZGVyKHByb3BzKSB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuICBjb25zdCB2YWx1ZSA9IHsgc3RhdGUsIGRpc3BhdGNoIH07XG4gIHJldHVybiA8U3RvcmUuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57cHJvcHMuY2hpbGRyZW59PC9TdG9yZS5Qcm92aWRlcj47XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcGF5cGFsL3JlYWN0LXBheXBhbC1qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub3Rpc3RhY2tcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=