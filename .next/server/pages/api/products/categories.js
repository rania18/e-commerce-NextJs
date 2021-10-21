(function() {
var exports = {};
exports.id = "pages/api/products/categories";
exports.ids = ["pages/api/products/categories"];
exports.modules = {

/***/ "./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const reviewSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  user: {
    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  comment: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
const productSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0
  },
  description: {
    type: String,
    required: true
  },
  reviews: [reviewSchema],
  featuredImage: {
    type: String
  },
  isFeatured: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
});
const Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Product', productSchema);
/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./pages/api/products/categories.js":
/*!******************************************!*\
  !*** ./pages/api/products/categories.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Product */ "./models/Product.js");
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/db */ "./utils/db.js");



const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.get(async (req, res) => {
  await _utils_db__WEBPACK_IMPORTED_MODULE_2__.default.connect();
  const categories = await _models_Product__WEBPACK_IMPORTED_MODULE_1__.default.find().distinct('category');
  await _utils_db__WEBPACK_IMPORTED_MODULE_2__.default.disconnect();
  res.send(categories);
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }

  if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {
    connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);

    if (connection.isConnected === 1) {
      console.log('use previous connection');
      return;
    }

    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();
  }

  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
  console.log('new connection');
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (false) {} else {
      console.log('not disconnected');
    }
  }
}

function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = {
  connect,
  disconnect,
  convertDocToObj
};
/* harmony default export */ __webpack_exports__["default"] = (db);

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-connect");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/products/categories.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFtYXpvbmEvLi9tb2RlbHMvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9uZXh0LWFtYXpvbmEvLi9wYWdlcy9hcGkvcHJvZHVjdHMvY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly9uZXh0LWFtYXpvbmEvLi91dGlscy9kYi5qcyIsIndlYnBhY2s6Ly9uZXh0LWFtYXpvbmEvZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovL25leHQtYW1hem9uYS9leHRlcm5hbCBcIm5leHQtY29ubmVjdFwiIl0sIm5hbWVzIjpbInJldmlld1NjaGVtYSIsIm1vbmdvb3NlIiwidXNlciIsInR5cGUiLCJyZWYiLCJyZXF1aXJlZCIsIm5hbWUiLCJTdHJpbmciLCJyYXRpbmciLCJOdW1iZXIiLCJkZWZhdWx0IiwiY29tbWVudCIsInRpbWVzdGFtcHMiLCJwcm9kdWN0U2NoZW1hIiwic2x1ZyIsInVuaXF1ZSIsImNhdGVnb3J5IiwiaW1hZ2UiLCJwcmljZSIsImJyYW5kIiwibnVtUmV2aWV3cyIsImNvdW50SW5TdG9jayIsImRlc2NyaXB0aW9uIiwicmV2aWV3cyIsImZlYXR1cmVkSW1hZ2UiLCJpc0ZlYXR1cmVkIiwiQm9vbGVhbiIsIlByb2R1Y3QiLCJoYW5kbGVyIiwibmMiLCJnZXQiLCJyZXEiLCJyZXMiLCJkYiIsImNhdGVnb3JpZXMiLCJkaXN0aW5jdCIsInNlbmQiLCJjb25uZWN0aW9uIiwiY29ubmVjdCIsImlzQ29ubmVjdGVkIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUNyZWF0ZUluZGV4IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiZGlzY29ubmVjdCIsImNvbnZlcnREb2NUb09iaiIsImRvYyIsIl9pZCIsInRvU3RyaW5nIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7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QUosR0FBZ0JKLEdBQUcsQ0FBQ0ksU0FBSixDQUFjRixRQUFkLEVBQWhCO0FBQ0EsU0FBT0YsR0FBUDtBQUNEOztBQUVELE1BQU1uQixFQUFFLEdBQUc7QUFBRUssU0FBRjtBQUFXWSxZQUFYO0FBQXVCQztBQUF2QixDQUFYO0FBQ0EsK0RBQWVsQixFQUFmLEU7Ozs7Ozs7Ozs7O0FDN0NBLHNDOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InBhZ2VzL2FwaS9wcm9kdWN0cy9jYXRlZ29yaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgcmV2aWV3U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIHVzZXI6IHsgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdVc2VyJywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICByYXRpbmc6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXG4gICAgY29tbWVudDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIH0sXG4gIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9XG4pO1xuXG5jb25zdCBwcm9kdWN0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHNsdWc6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXG4gICAgY2F0ZWdvcnk6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGltYWdlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBwcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgYnJhbmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHJhdGluZzogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwIH0sXG4gICAgbnVtUmV2aWV3czogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwIH0sXG4gICAgY291bnRJblN0b2NrOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IDAgfSxcbiAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgcmV2aWV3czogW3Jldmlld1NjaGVtYV0sXG4gICAgZmVhdHVyZWRJbWFnZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBpc0ZlYXR1cmVkOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiBmYWxzZSB9LFxuICB9LFxuICB7XG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgfVxuKTtcblxuY29uc3QgUHJvZHVjdCA9XG4gIG1vbmdvb3NlLm1vZGVscy5Qcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKCdQcm9kdWN0JywgcHJvZHVjdFNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuIiwiaW1wb3J0IG5jIGZyb20gJ25leHQtY29ubmVjdCc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvUHJvZHVjdCc7XG5pbXBvcnQgZGIgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGInO1xuXG5jb25zdCBoYW5kbGVyID0gbmMoKTtcblxuaGFuZGxlci5nZXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGF3YWl0IGRiLmNvbm5lY3QoKTtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IFByb2R1Y3QuZmluZCgpLmRpc3RpbmN0KCdjYXRlZ29yeScpO1xuICBhd2FpdCBkYi5kaXNjb25uZWN0KCk7XG4gIHJlcy5zZW5kKGNhdGVnb3JpZXMpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBjb25uZWN0aW9uID0ge307XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XG4gICAgY29uc29sZS5sb2coJ2FscmVhZHkgY29ubmVjdGVkJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPT09IDEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd1c2UgcHJldmlvdXMgY29ubmVjdGlvbicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KCk7XG4gIH1cbiAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgfSk7XG4gIGNvbnNvbGUubG9nKCduZXcgY29ubmVjdGlvbicpO1xuICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXdhaXQgbW9uZ29vc2UuZGlzY29ubmVjdCgpO1xuICAgICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnbm90IGRpc2Nvbm5lY3RlZCcpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0RG9jVG9PYmooZG9jKSB7XG4gIGRvYy5faWQgPSBkb2MuX2lkLnRvU3RyaW5nKCk7XG4gIGRvYy5jcmVhdGVkQXQgPSBkb2MuY3JlYXRlZEF0LnRvU3RyaW5nKCk7XG4gIGRvYy51cGRhdGVkQXQgPSBkb2MudXBkYXRlZEF0LnRvU3RyaW5nKCk7XG4gIHJldHVybiBkb2M7XG59XG5cbmNvbnN0IGRiID0geyBjb25uZWN0LCBkaXNjb25uZWN0LCBjb252ZXJ0RG9jVG9PYmogfTtcbmV4cG9ydCBkZWZhdWx0IGRiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==