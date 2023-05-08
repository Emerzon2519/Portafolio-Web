"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layouts/Switcher.js":
/*!*********************************!*\
  !*** ./src/layouts/Switcher.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_colorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/colorContext */ \"./src/context/colorContext.js\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar colors = [\n    {\n        name: \"blue\",\n        colorImg: \"img/styleswitcher/gota-azul2.jpg\"\n    },\n    {\n        name: \"red\",\n        colorImg: \"img/styleswitcher/circulo-rojo.png\"\n    },\n    {\n        name: \"goldrenrod\",\n        colorImg: \"img/styleswitcher/goldenrod.png\"\n    },\n    {\n        name: \"magenta\",\n        colorImg: \"img/styleswitcher/magenta.png\"\n    },\n    {\n        name: \"yellowgreen\",\n        colorImg: \"img/styleswitcher/yellowgreen.png\"\n    },\n    {\n        name: \"orange\",\n        colorImg: \"img/styleswitcher/orange.png\"\n    },\n    {\n        name: \"green\",\n        colorImg: \"img/styleswitcher/green.png\"\n    },\n    {\n        name: \"yellow\",\n        colorImg: \"img/styleswitcher/yellow.png\"\n    }, \n];\nvar Switcher = function() {\n    var _this1 = _this;\n    _s();\n    var changeColor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_colorContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).changeColor;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), toggle = ref[0], setToggle = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"switcher\",\n                className: \"\",\n                style: {\n                    display: toggle ? \"block\" : \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"content-switcher\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"Cambia de estilo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Switcher.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: colors.map(function(color, i) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"#\",\n                                        title: color.name,\n                                        className: \"color\",\n                                        onClick: function() {\n                                            return changeColor(color.name);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: color.colorImg,\n                                            alt: color.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Switcher.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    }, i, false, {\n                                        fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Switcher.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, _this1)\n                                }, i, false, {\n                                    fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Switcher.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Switcher.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Switcher.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"hideSwitcher\",\n                            onClick: function() {\n                                return setToggle(false);\n                            },\n                            children: \"\\xd7\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Switcher.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Switcher.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Switcher.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"showSwitcher\",\n                className: \"styleSecondColor\",\n                onClick: function() {\n                    return setToggle(true);\n                },\n                style: {\n                    display: toggle ? \"none\" : \"block\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"fa fa-cog fa-spin\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Switcher.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Switcher.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Switcher.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(Switcher, \"NjFJ1oZj7wVVH9HIfS6SK8W4pzw=\");\n_c = Switcher;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Switcher);\nvar _c;\n$RefreshReg$(_c, \"Switcher\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7YUFFRyxDQUNYO0NBQ0g7R0F0REtOLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQXVEZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXRzL1N3aXRjaGVyLmpzP2EyYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb2xvckNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvY29sb3JDb250ZXh0XCI7XHJcblxyXG5jb25zdCBjb2xvcnMgPSBbXHJcbiAgeyBuYW1lOiBcImJsdWVcIiwgY29sb3JJbWc6IFwiaW1nL3N0eWxlc3dpdGNoZXIvZ290YS1henVsMi5qcGdcIiB9LFxyXG4gIHsgbmFtZTogXCJyZWRcIiwgY29sb3JJbWc6IFwiaW1nL3N0eWxlc3dpdGNoZXIvY2lyY3Vsby1yb2pvLnBuZ1wiIH0sXHJcbiAgeyBuYW1lOiBcImdvbGRyZW5yb2RcIiwgY29sb3JJbWc6IFwiaW1nL3N0eWxlc3dpdGNoZXIvZ29sZGVucm9kLnBuZ1wiIH0sXHJcbiAgeyBuYW1lOiBcIm1hZ2VudGFcIiwgY29sb3JJbWc6IFwiaW1nL3N0eWxlc3dpdGNoZXIvbWFnZW50YS5wbmdcIiB9LFxyXG4gIHsgbmFtZTogXCJ5ZWxsb3dncmVlblwiLCBjb2xvckltZzogXCJpbWcvc3R5bGVzd2l0Y2hlci95ZWxsb3dncmVlbi5wbmdcIiB9LFxyXG4gIHsgbmFtZTogXCJvcmFuZ2VcIiwgY29sb3JJbWc6IFwiaW1nL3N0eWxlc3dpdGNoZXIvb3JhbmdlLnBuZ1wiIH0sXHJcbiAgeyBuYW1lOiBcImdyZWVuXCIsIGNvbG9ySW1nOiBcImltZy9zdHlsZXN3aXRjaGVyL2dyZWVuLnBuZ1wiIH0sXHJcbiAgeyBuYW1lOiBcInllbGxvd1wiLCBjb2xvckltZzogXCJpbWcvc3R5bGVzd2l0Y2hlci95ZWxsb3cucG5nXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IFN3aXRjaGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY2hhbmdlQ29sb3IgfSA9IHVzZUNvbnRleHQoQ29sb3JDb250ZXh0KTtcclxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIHsvKiBMaXZlIFN0eWxlIFN3aXRjaGVyIFN0YXJ0cyAtIGRlbW8gb25seSAqL31cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGlkPVwic3dpdGNoZXJcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogdG9nZ2xlID8gXCJibG9ja1wiIDogXCJub25lXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1zd2l0Y2hlclwiPlxyXG4gICAgICAgICAgPGg0PkNhbWJpYSBkZSBlc3RpbG88L2g0PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7Y29sb3JzLm1hcCgoY29sb3IsIGkpID0+IChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2NvbG9yLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDb2xvcihjb2xvci5uYW1lKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbG9yLmNvbG9ySW1nfSBhbHQ9e2NvbG9yLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICB7LyogPGFcclxuICAgICAgICAgICAgaHJlZj1cIlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gZm9udC13ZWlnaHQtNjAwIHB1cmNoYXNlIGhvdmVyYWJsZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2hvcHBpbmctY2FydFwiIC8+IFBVUkNIQVNFXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiaGlkZVN3aXRjaGVyXCIgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKGZhbHNlKX0+XHJcbiAgICAgICAgICAgIMOXXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBpZD1cInNob3dTd2l0Y2hlclwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwic3R5bGVTZWNvbmRDb2xvclwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKHRydWUpfVxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IHRvZ2dsZSA/IFwibm9uZVwiIDogXCJibG9ja1wiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb2cgZmEtc3BpblwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogTGl2ZSBTdHlsZSBTd2l0Y2hlciBFbmRzIC0gZGVtbyBvbmx5ICovfVxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hlcjtcclxuIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQ29sb3JDb250ZXh0IiwiY29sb3JzIiwibmFtZSIsImNvbG9ySW1nIiwiU3dpdGNoZXIiLCJjaGFuZ2VDb2xvciIsInRvZ2dsZSIsInNldFRvZ2dsZSIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJkaXNwbGF5IiwiaDQiLCJ1bCIsIm1hcCIsImNvbG9yIiwiaSIsImxpIiwiYSIsImhyZWYiLCJ0aXRsZSIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJhbHQiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layouts/Switcher.js\n"));

/***/ })

});