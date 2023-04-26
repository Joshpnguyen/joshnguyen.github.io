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
              return fetch('Josh_Nguyen_Resume.pdf');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJwcm9wcyIsImhhbmRsZURvd25sb2FkIiwiZmV0Y2giLCJmZXRjaEZpbGUiLCJibG9iIiwiYmxvYkZyb21GZXRjaCIsIkJsb2IiLCJ0eXBlIiwic2F2ZUFzIiwiYWx0IiwiZm9ybSIsImRpc2FibGVkIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hCLE1BQU1DLGNBQWM7QUFBQSwyVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNHQyxLQUFLLENBQUMsd0JBQUQsQ0FEUjs7QUFBQTtBQUNmQyx1QkFEZTtBQUFBO0FBQUEscUJBRU9BLFNBQVMsQ0FBQ0MsSUFBVixFQUZQOztBQUFBO0FBRWZDLDJCQUZlO0FBSWZELGtCQUplLEdBSVIsSUFBSUUsSUFBSixDQUFTLENBQUNELGFBQUQsQ0FBVCxFQUEwQjtBQUFFRSxvQkFBSSxFQUFFO0FBQVIsZUFBMUIsQ0FKUTtBQUtyQkMsZ0VBQU0sQ0FBQ0osSUFBRCxFQUFPLHdCQUFQLENBQU47O0FBTHFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWRILGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7O0FBUUEsc0JBQ0UsOERBQUMsOENBQUQ7QUFBWSxPQUFHLEVBQUVELEtBQUssQ0FBQ1MsR0FBdkI7QUFBNEIsUUFBSSxFQUFFVCxLQUFLLENBQUNVLElBQXhDO0FBQThDLFlBQVEsRUFBRVYsS0FBSyxDQUFDVyxRQUE5RDtBQUFBLGVBQXlFWCxLQUFLLENBQUNZLFFBQS9FLGVBQ0EsOERBQUMsK0NBQUQ7QUFBYSxTQUFHLEVBQUVaLEtBQUssQ0FBQ1MsR0FBeEI7QUFBNkIsYUFBTyxFQUFFUixjQUF0QztBQUFzRCxjQUFRLEVBQUVELEtBQUssQ0FBQ1csUUFBdEU7QUFBQSxnQkFBaUZYLEtBQUssQ0FBQ1k7QUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FkRDs7S0FBTWIsTTtBQWdCTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZWFiNzUzMDhhMTVlMDA2MTk1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IEJ1dHRvbkJhY2ssIEJ1dHRvbkZyb250IH0gZnJvbSAnLi9pbmRleCdcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hGaWxlID0gYXdhaXQgZmV0Y2goJ0pvc2hfTmd1eWVuX1Jlc3VtZS5wZGYnKTtcclxuICAgIGNvbnN0IGJsb2JGcm9tRmV0Y2ggPSBhd2FpdCBmZXRjaEZpbGUuYmxvYigpO1xyXG5cclxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYmxvYkZyb21GZXRjaF0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL3BkZicgfSk7XHJcbiAgICBzYXZlQXMoYmxvYiwgJ2pvc2hfbmd1eWVuX3Jlc3VtZS5wZGYnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uQmFjayBhbHQ9e3Byb3BzLmFsdH0gZm9ybT17cHJvcHMuZm9ybX0gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfT57cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8QnV0dG9uRnJvbnQgYWx0PXtwcm9wcy5hbHR9IG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkfSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9Pntwcm9wcy5jaGlsZHJlbn08L0J1dHRvbkZyb250PlxyXG4gICAgPC9CdXR0b25CYWNrPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==