"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/colorState.js":
/*!***********************************!*\
  !*** ./src/context/colorState.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _colorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorContext */ \"./src/context/colorContext.js\");\n\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar type = {\n    COLOR: \"NAV\"\n};\nvar navReducer = function(state, action) {\n    switch(action.type){\n        case type.COLOR:\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, state), {\n                color: action.payload\n            });\n        default:\n            return state;\n    }\n};\nvar ColorState = function(props) {\n    _s();\n    var initialState = {\n        color: \"red\"\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(navReducer, initialState), state = ref[0], dispatch = ref[1];\n    var changeColor = function(value) {\n        dispatch({\n            type: type.COLOR,\n            payload: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_colorContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            changeColor: changeColor,\n            color: state.color\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\context\\\\colorState.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(ColorState, \"skVOqNGrFQuDFh+lpttAJ2AZFeA=\");\n_c = ColorState;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorState);\nvar _c;\n$RefreshReg$(_c, \"ColorState\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9jb2xvclN0YXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFBbUM7QUFDTzs7QUFFMUMsSUFBTUUsSUFBSSxHQUFHO0lBQ1hDLEtBQUssRUFBRSxLQUFLO0NBQ2I7QUFFRCxJQUFNQyxVQUFVLEdBQUcsU0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEVBQUs7SUFDcEMsT0FBUUEsTUFBTSxDQUFDSixJQUFJO1FBQ2pCLEtBQUtBLElBQUksQ0FBQ0MsS0FBSztZQUNiLE9BQU8sd0tBQ0ZFLEtBQUs7Z0JBQ1JFLEtBQUssRUFBRUQsTUFBTSxDQUFDRSxPQUFPO2NBQ3RCLENBQUM7UUFFSjtZQUNFLE9BQU9ILEtBQUssQ0FBQztLQUNoQjtDQUNGO0FBRUQsSUFBTUksVUFBVSxHQUFHLFNBQUNDLEtBQUssRUFBSzs7SUFDNUIsSUFBTUMsWUFBWSxHQUFHO1FBQ25CSixLQUFLLEVBQUUsS0FBSztLQUNiO0lBQ0QsSUFBMEJQLEdBQW9DLEdBQXBDQSxpREFBVSxDQUFDSSxVQUFVLEVBQUVPLFlBQVksQ0FBQyxFQUF2RE4sS0FBSyxHQUFjTCxHQUFvQyxHQUFsRCxFQUFFWSxRQUFRLEdBQUlaLEdBQW9DLEdBQXhDO0lBRXRCLElBQU1hLFdBQVcsR0FBRyxTQUFDQyxLQUFLLEVBQUs7UUFDN0JGLFFBQVEsQ0FBQztZQUNQVixJQUFJLEVBQUVBLElBQUksQ0FBQ0MsS0FBSztZQUNoQkssT0FBTyxFQUFFTSxLQUFLO1NBQ2YsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxxQkFDRSw4REFBQ2IsOERBQXFCO1FBQ3BCYSxLQUFLLEVBQUU7WUFDTEQsV0FBVyxFQUFFQSxXQUFXO1lBQ3hCTixLQUFLLEVBQUVGLEtBQUssQ0FBQ0UsS0FBSztTQUNuQjtrQkFFQUcsS0FBSyxDQUFDTSxRQUFROzs7OzthQUNPLENBQ3hCO0NBQ0g7R0F0QktQLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQXdCaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9jb2xvclN0YXRlLmpzP2NjZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29sb3JDb250ZXh0IGZyb20gXCIuL2NvbG9yQ29udGV4dFwiO1xyXG5cclxuY29uc3QgdHlwZSA9IHtcclxuICBDT0xPUjogXCJOQVZcIixcclxufTtcclxuXHJcbmNvbnN0IG5hdlJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgdHlwZS5DT0xPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjb2xvcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IENvbG9yU3RhdGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBjb2xvcjogXCJyZWRcIixcclxuICB9O1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihuYXZSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICBjb25zdCBjaGFuZ2VDb2xvciA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiB0eXBlLkNPTE9SLFxyXG4gICAgICBwYXlsb2FkOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb2xvckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBjaGFuZ2VDb2xvcjogY2hhbmdlQ29sb3IsXHJcbiAgICAgICAgY29sb3I6IHN0YXRlLmNvbG9yLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L0NvbG9yQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sb3JTdGF0ZTtcclxuIl0sIm5hbWVzIjpbInVzZVJlZHVjZXIiLCJDb2xvckNvbnRleHQiLCJ0eXBlIiwiQ09MT1IiLCJuYXZSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb2xvciIsInBheWxvYWQiLCJDb2xvclN0YXRlIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJkaXNwYXRjaCIsImNoYW5nZUNvbG9yIiwidmFsdWUiLCJQcm92aWRlciIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/colorState.js\n"));

/***/ })

});