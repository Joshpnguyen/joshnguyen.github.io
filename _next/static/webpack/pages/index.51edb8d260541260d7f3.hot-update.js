self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/styles/GlobalComponents/Button.js":
/*!***********************************************!*\
  !*** ./src/styles/GlobalComponents/Button.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_joshn_Documents_Github_joshpnguyen_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_joshn_Documents_Github_joshpnguyen_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_joshn_Documents_Github_joshpnguyen_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_joshn_Documents_Github_joshpnguyen_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./src/styles/GlobalComponents/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\joshn\\Documents\\Github\\joshpnguyen.github.io\\src\\styles\\GlobalComponents\\Button.js",
    _this = undefined;





var Button = function Button(props) {
  var handleDownload = /*#__PURE__*/function () {
    var _ref = (0,C_Users_joshn_Documents_Github_joshpnguyen_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_joshn_Documents_Github_joshpnguyen_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var fetchFile, blobFromFetch, blob;
      return C_Users_joshn_Documents_Github_joshpnguyen_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('Resume.pdf');

            case 2:
              fetchFile = _context.sent;
              _context.next = 5;
              return fetchFile.blob();

            case 5:
              blobFromFetch = _context.sent;
              blob = new Blob([blobFromFetch], {
                type: 'application/pdf'
              });
              (0,file_saver__WEBPACK_IMPORTED_MODULE_4__.saveAs)(blob, 'josh_nguyen_resume.pdf');

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDownload() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_5__.ButtonBack, {
    alt: props.alt,
    form: props.form,
    disabled: props.disabled,
    children: [props.children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_5__.ButtonFront, {
      alt: props.alt,
      onClick: handleDownload,
      disabled: props.disabled,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_c = Button;
/* harmony default export */ __webpack_exports__["default"] = (Button);

var _c;

$RefreshReg$(_c, "Button");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJwcm9wcyIsImhhbmRsZURvd25sb2FkIiwiZmV0Y2giLCJmZXRjaEZpbGUiLCJibG9iIiwiYmxvYkZyb21GZXRjaCIsIkJsb2IiLCJ0eXBlIiwic2F2ZUFzIiwiYWx0IiwiZm9ybSIsImRpc2FibGVkIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hCLE1BQU1DLGNBQWM7QUFBQSwyVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNHQyxLQUFLLENBQUMsWUFBRCxDQURSOztBQUFBO0FBQ2ZDLHVCQURlO0FBQUE7QUFBQSxxQkFFT0EsU0FBUyxDQUFDQyxJQUFWLEVBRlA7O0FBQUE7QUFFZkMsMkJBRmU7QUFJZkQsa0JBSmUsR0FJUixJQUFJRSxJQUFKLENBQVMsQ0FBQ0QsYUFBRCxDQUFULEVBQTBCO0FBQUVFLG9CQUFJLEVBQUU7QUFBUixlQUExQixDQUpRO0FBS3JCQyxnRUFBTSxDQUFDSixJQUFELEVBQU8sd0JBQVAsQ0FBTjs7QUFMcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZEgsY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFRQSxzQkFDRSw4REFBQyw4Q0FBRDtBQUFZLE9BQUcsRUFBRUQsS0FBSyxDQUFDUyxHQUF2QjtBQUE0QixRQUFJLEVBQUVULEtBQUssQ0FBQ1UsSUFBeEM7QUFBOEMsWUFBUSxFQUFFVixLQUFLLENBQUNXLFFBQTlEO0FBQUEsZUFBeUVYLEtBQUssQ0FBQ1ksUUFBL0UsZUFDQSw4REFBQywrQ0FBRDtBQUFhLFNBQUcsRUFBRVosS0FBSyxDQUFDUyxHQUF4QjtBQUE2QixhQUFPLEVBQUVSLGNBQXRDO0FBQXNELGNBQVEsRUFBRUQsS0FBSyxDQUFDVyxRQUF0RTtBQUFBLGdCQUFpRlgsS0FBSyxDQUFDWTtBQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQWREOztLQUFNYixNO0FBZ0JOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUxZWRiOGQyNjA1NDEyNjBkN2YzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuaW1wb3J0IHsgQnV0dG9uQmFjaywgQnV0dG9uRnJvbnQgfSBmcm9tICcuL2luZGV4J1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlRG93bmxvYWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEZpbGUgPSBhd2FpdCBmZXRjaCgnUmVzdW1lLnBkZicpO1xyXG4gICAgY29uc3QgYmxvYkZyb21GZXRjaCA9IGF3YWl0IGZldGNoRmlsZS5ibG9iKCk7XHJcblxyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtibG9iRnJvbUZldGNoXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vcGRmJyB9KTtcclxuICAgIHNhdmVBcyhibG9iLCAnam9zaF9uZ3V5ZW5fcmVzdW1lLnBkZicpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25CYWNrIGFsdD17cHJvcHMuYWx0fSBmb3JtPXtwcm9wcy5mb3JtfSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9Pntwcm9wcy5jaGlsZHJlbn1cclxuICAgIDxCdXR0b25Gcm9udCBhbHQ9e3Byb3BzLmFsdH0gb25DbGljaz17aGFuZGxlRG93bmxvYWR9IGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0+e3Byb3BzLmNoaWxkcmVufTwvQnV0dG9uRnJvbnQ+XHJcbiAgICA8L0J1dHRvbkJhY2s+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9