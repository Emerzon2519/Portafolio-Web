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

/***/ "./src/layouts/Header.js":
/*!*******************************!*\
  !*** ./src/layouts/Header.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_navContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/navContext */ \"./src/context/navContext.js\");\n/* harmony import */ var _useClickOutside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useClickOutside */ \"./src/useClickOutside.js\");\n/* harmony import */ var _useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useWindowSize */ \"./src/useWindowSize.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar menus = [\n    {\n        icon: \"fa fa-home\",\n        dkMenuName: \"Inicio\",\n        name: \"Home\",\n        id: \"home\"\n    },\n    {\n        icon: \"fa fa-user\",\n        dkMenuName: \"About\",\n        name: \"About me\",\n        id: \"about\"\n    },\n    {\n        icon: \"fa fa-briefcase\",\n        dkMenuName: \"Portfolio\",\n        name: \"my Portfolio\",\n        id: \"work\"\n    },\n    {\n        icon: \"fa fa-envelope-open\",\n        dkMenuName: \"Contact\",\n        name: \"get in touch\",\n        id: \"contact\"\n    },\n    {\n        icon: \"fa fa-comments\",\n        dkMenuName: \"Blog\",\n        name: \"my Blog\",\n        id: \"blog\"\n    }, \n];\nvar Header = function(param) {\n    var light = param.light;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), toggle = ref[0], setToggle = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_navContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), changeNav = ref1.changeNav, nav = ref1.nav, changeMobileMenu = ref1.changeMobileMenu, mobileMenu = ref1.mobileMenu;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var path = window.location.hash, newpath = path.split(\"#\").pop();\n        return function() {\n            changeNav(newpath ? newpath : \"home\");\n        };\n    }, []);\n    var width = (0,_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().width;\n    // outside click\n    var domNode = (0,_useClickOutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n        setToggle(false);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        id: \"header\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nav-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        id: \"nav\",\n                        className: \"navigation\",\n                        children: menus.map(function(menu, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: nav === menu.id ? \"active\" : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        onClick: function() {\n                                            changeNav(menu.id);\n                                            changeMobileMenu(width < 1025 ? true : false);\n                                        },\n                                        id: \"link-\".concat(menu.id),\n                                        href: \"#\".concat(menu.id),\n                                        className: nav === menu.id ? \"active\" : \"\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                className: \"\".concat(menu.icon)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: menu.name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 21\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 19\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 17\n                                }, _this1)\n                            }, i, false, {\n                                fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: domNode,\n                className: \"cd-stretchy-nav \".concat(toggle ? \"nav-is-visible\" : \"\", \" \").concat(light ? nav == \"home\" && \"lighter\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"cd-nav-trigger\",\n                        onClick: function() {\n                            return setToggle(!toggle);\n                        },\n                        href: \"#\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            \"aria-hidden\": \"true\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"stretchy-nav\",\n                        children: menus.map(function(menu, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: nav == menu.id ? \"active\" : \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\".concat(menu.id),\n                                    onClick: function() {\n                                        changeNav(menu.id);\n                                        setToggle(false);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: menu.dkMenuName\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, _this1)\n                            }, i, false, {\n                                fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        \"aria-hidden\": \"true\",\n                        className: \"stretchy-nav-bg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Emerzon\\\\Desktop\\\\istanbul\\\\src\\\\layouts\\\\Header.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"tS3kpq+4AqT8QovWGzJlseXhtgg=\", false, function() {\n    return [\n        _useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _useClickOutside__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9IZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBd0Q7QUFDVDtBQUNFO0FBQ0o7O0FBRTdDLElBQU1NLEtBQUssR0FBRztJQUNaO1FBQUVDLElBQUksRUFBRSxZQUFZO1FBQUVDLFVBQVUsRUFBRSxRQUFRO1FBQUVDLElBQUksRUFBRSxNQUFNO1FBQUVDLEVBQUUsRUFBRSxNQUFNO0tBQUU7SUFDdEU7UUFBRUgsSUFBSSxFQUFFLFlBQVk7UUFBRUMsVUFBVSxFQUFFLE9BQU87UUFBRUMsSUFBSSxFQUFFLFVBQVU7UUFBRUMsRUFBRSxFQUFFLE9BQU87S0FBRTtJQUMxRTtRQUNFSCxJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCQyxVQUFVLEVBQUUsV0FBVztRQUN2QkMsSUFBSSxFQUFFLGNBQWM7UUFDcEJDLEVBQUUsRUFBRSxNQUFNO0tBQ1g7SUFDRDtRQUNFSCxJQUFJLEVBQUUscUJBQXFCO1FBQzNCQyxVQUFVLEVBQUUsU0FBUztRQUNyQkMsSUFBSSxFQUFFLGNBQWM7UUFDcEJDLEVBQUUsRUFBRSxTQUFTO0tBQ2Q7SUFDRDtRQUFFSCxJQUFJLEVBQUUsZ0JBQWdCO1FBQUVDLFVBQVUsRUFBRSxNQUFNO1FBQUVDLElBQUksRUFBRSxTQUFTO1FBQUVDLEVBQUUsRUFBRSxNQUFNO0tBQUU7Q0FDNUU7QUFFRCxJQUFNQyxNQUFNLEdBQUcsZ0JBQWU7UUFBWkMsS0FBSyxTQUFMQSxLQUFLOzs7SUFDckIsSUFBNEJWLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcENXLE1BQU0sR0FBZVgsR0FBZSxHQUE5QixFQUFFWSxTQUFTLEdBQUlaLEdBQWUsR0FBbkI7SUFDeEIsSUFDRUYsSUFBc0IsR0FBdEJBLGlEQUFVLENBQUNHLDJEQUFVLENBQUMsRUFEaEJZLFNBQVMsR0FDZmYsSUFBc0IsQ0FEaEJlLFNBQVMsRUFBRUMsR0FBRyxHQUNwQmhCLElBQXNCLENBRExnQixHQUFHLEVBQUVDLGdCQUFnQixHQUN0Q2pCLElBQXNCLENBREFpQixnQkFBZ0IsRUFBRUMsVUFBVSxHQUNsRGxCLElBQXNCLENBRGtCa0IsVUFBVTtJQUVwRGpCLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlrQixJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEVBQzdCQyxPQUFPLEdBQUdKLElBQUksQ0FBQ0ssS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUU7UUFDakMsT0FBTyxXQUFNO1lBQ1hWLFNBQVMsQ0FBQ1EsT0FBTyxHQUFHQSxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUM7U0FDdkMsQ0FBQztLQUNILEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxJQUFNLEtBQU8sR0FBS2xCLDBEQUFhLEVBQUUsQ0FBekJxQixLQUFLO0lBRWIsZ0JBQWdCO0lBQ2hCLElBQUlDLE9BQU8sR0FBR3ZCLDREQUFlLENBQUMsV0FBTTtRQUNsQ1UsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2xCLENBQUM7SUFFRixxQkFDRSw4REFBQ2MsUUFBTTtRQUFDbEIsRUFBRSxFQUFDLFFBQVE7OzBCQUNqQiw4REFBQ21CLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxlQUFlOzBCQUM1Qiw0RUFBQ0QsS0FBRzs4QkFFRiw0RUFBQ0UsSUFBRTt3QkFBQ3JCLEVBQUUsRUFBQyxLQUFLO3dCQUFDb0IsU0FBUyxFQUFDLFlBQVk7a0NBQ2hDeEIsS0FBSyxDQUFDMEIsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsQ0FBQztpREFDakIsOERBQUNDLElBQUU7Z0NBQUNMLFNBQVMsRUFBRWQsR0FBRyxLQUFLaUIsSUFBSSxDQUFDdkIsRUFBRSxHQUFHLFFBQVEsR0FBRyxFQUFFOzBDQUM1Qyw0RUFBQ21CLEtBQUc7OENBQ0YsNEVBQUNPLEdBQUM7d0NBQ0FDLE9BQU8sRUFBRSxXQUFNOzRDQUNidEIsU0FBUyxDQUFDa0IsSUFBSSxDQUFDdkIsRUFBRSxDQUFDLENBQUM7NENBQ25CTyxnQkFBZ0IsQ0FBQ1MsS0FBSyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUM7eUNBQy9DO3dDQUNEaEIsRUFBRSxFQUFFLE9BQU0sQ0FBVSxPQUFSdUIsSUFBSSxDQUFDdkIsRUFBRSxDQUFFO3dDQUNyQjRCLElBQUksRUFBRSxHQUFFLENBQVUsT0FBUkwsSUFBSSxDQUFDdkIsRUFBRSxDQUFFO3dDQUNuQm9CLFNBQVMsRUFBRWQsR0FBRyxLQUFLaUIsSUFBSSxDQUFDdkIsRUFBRSxHQUFHLFFBQVEsR0FBRyxFQUFFOzswREFFMUMsOERBQUN3QixHQUFDO2dEQUFDSixTQUFTLEVBQUUsRUFBQyxDQUFZLE9BQVZHLElBQUksQ0FBQzFCLElBQUksQ0FBRTs7Ozs7c0RBQUk7MERBQ2hDLDhEQUFDZ0MsTUFBSTswREFBRU4sSUFBSSxDQUFDeEIsSUFBSTs7Ozs7c0RBQVE7Ozs7Ozs4Q0FDdEI7Ozs7OzBDQUNBOytCQWQ2Q3lCLENBQUM7Ozs7c0NBZWpEO3lCQUNOLENBQUM7Ozs7OzZCQUNDOzs7Ozt5QkFFRDs7Ozs7cUJBQ0Y7MEJBRU4sOERBQUNMLEtBQUc7Z0JBQ0ZXLEdBQUcsRUFBRWIsT0FBTztnQkFDWkcsU0FBUyxFQUFFLGtCQUFpQixDQUMxQmxCLE1BQXVDLENBRFhDLE1BQU0sR0FBRyxnQkFBZ0IsR0FBRyxFQUFFLEVBQUMsR0FBQyxDQUNwQixDQUN6QyxPQURDRCxLQUFLLEdBQUdJLEdBQUcsSUFBSSxNQUFNLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FDdkM7O2tDQUVGLDhEQUFDb0IsR0FBQzt3QkFDQU4sU0FBUyxFQUFDLGdCQUFnQjt3QkFDMUJPLE9BQU8sRUFBRTttQ0FBTXZCLFNBQVMsQ0FBQyxDQUFDRCxNQUFNLENBQUM7eUJBQUE7d0JBQ2pDeUIsSUFBSSxFQUFDLEdBQUc7a0NBRVIsNEVBQUNDLE1BQUk7NEJBQUNFLGFBQVcsRUFBQyxNQUFNOzs7OztpQ0FBRzs7Ozs7NkJBQ3pCO2tDQUNKLDhEQUFDVixJQUFFO3dCQUFDRCxTQUFTLEVBQUMsY0FBYztrQ0FDekJ4QixLQUFLLENBQUMwQixHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxDQUFDO2lEQUNqQiw4REFBQ0MsSUFBRTtnQ0FBQ0wsU0FBUyxFQUFFZCxHQUFHLElBQUlpQixJQUFJLENBQUN2QixFQUFFLEdBQUcsUUFBUSxHQUFHLEVBQUU7MENBQzNDLDRFQUFDMEIsR0FBQztvQ0FDQUUsSUFBSSxFQUFFLEdBQUUsQ0FBVSxPQUFSTCxJQUFJLENBQUN2QixFQUFFLENBQUU7b0NBQ25CMkIsT0FBTyxFQUFFLFdBQU07d0NBQ2J0QixTQUFTLENBQUNrQixJQUFJLENBQUN2QixFQUFFLENBQUMsQ0FBQzt3Q0FDbkJJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQ0FDbEI7OENBRUQsNEVBQUN5QixNQUFJO2tEQUFFTixJQUFJLENBQUN6QixVQUFVOzs7Ozs4Q0FBUTs7Ozs7MENBQzVCOytCQVQ4QzBCLENBQUM7Ozs7c0NBVWhEO3lCQUNOLENBQUM7Ozs7OzZCQUNDO2tDQUNMLDhEQUFDSyxNQUFJO3dCQUFDRSxhQUFXLEVBQUMsTUFBTTt3QkFBQ1gsU0FBUyxFQUFDLGlCQUFpQjs7Ozs7NkJBQUc7Ozs7OztxQkFDbkQ7Ozs7OzthQUVDLENBQ1Q7Q0FDSDtHQWhGS25CLE1BQU07O1FBV1FOLHNEQUFhO1FBR2pCRCx3REFBZTs7O0FBZHpCTyxLQUFBQSxNQUFNO0FBaUZaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvSGVhZGVyLmpzPzkxYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2Q29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9uYXZDb250ZXh0XCI7XHJcbmltcG9ydCB1c2VDbGlja091dHNpZGUgZnJvbSBcIi4uL3VzZUNsaWNrT3V0c2lkZVwiO1xyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tIFwiLi4vdXNlV2luZG93U2l6ZVwiO1xyXG5cclxuY29uc3QgbWVudXMgPSBbXHJcbiAgeyBpY29uOiBcImZhIGZhLWhvbWVcIiwgZGtNZW51TmFtZTogXCJJbmljaW9cIiwgbmFtZTogXCJIb21lXCIsIGlkOiBcImhvbWVcIiB9LFxyXG4gIHsgaWNvbjogXCJmYSBmYS11c2VyXCIsIGRrTWVudU5hbWU6IFwiQWJvdXRcIiwgbmFtZTogXCJBYm91dCBtZVwiLCBpZDogXCJhYm91dFwiIH0sXHJcbiAge1xyXG4gICAgaWNvbjogXCJmYSBmYS1icmllZmNhc2VcIixcclxuICAgIGRrTWVudU5hbWU6IFwiUG9ydGZvbGlvXCIsXHJcbiAgICBuYW1lOiBcIm15IFBvcnRmb2xpb1wiLFxyXG4gICAgaWQ6IFwid29ya1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogXCJmYSBmYS1lbnZlbG9wZS1vcGVuXCIsXHJcbiAgICBka01lbnVOYW1lOiBcIkNvbnRhY3RcIixcclxuICAgIG5hbWU6IFwiZ2V0IGluIHRvdWNoXCIsXHJcbiAgICBpZDogXCJjb250YWN0XCIsXHJcbiAgfSxcclxuICB7IGljb246IFwiZmEgZmEtY29tbWVudHNcIiwgZGtNZW51TmFtZTogXCJCbG9nXCIsIG5hbWU6IFwibXkgQmxvZ1wiLCBpZDogXCJibG9nXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IGxpZ2h0IH0pID0+IHtcclxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgY2hhbmdlTmF2LCBuYXYsIGNoYW5nZU1vYmlsZU1lbnUsIG1vYmlsZU1lbnUgfSA9XHJcbiAgICB1c2VDb250ZXh0KE5hdkNvbnRleHQpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLFxyXG4gICAgICBuZXdwYXRoID0gcGF0aC5zcGxpdChcIiNcIikucG9wKCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjaGFuZ2VOYXYobmV3cGF0aCA/IG5ld3BhdGggOiBcImhvbWVcIik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCB7IHdpZHRoIH0gPSB1c2VXaW5kb3dTaXplKCk7XHJcblxyXG4gIC8vIG91dHNpZGUgY2xpY2tcclxuICBsZXQgZG9tTm9kZSA9IHVzZUNsaWNrT3V0c2lkZSgoKSA9PiB7XHJcbiAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBpZD1cImhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgey8qIE1vYmlsZSBOYXZpZ2F0aW9uIFN0YXJ0cyAqL31cclxuICAgICAgICAgIDx1bCBpZD1cIm5hdlwiIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAge21lbnVzLm1hcCgobWVudSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e25hdiA9PT0gbWVudS5pZCA/IFwiYWN0aXZlXCIgOiBcIlwifSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VOYXYobWVudS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb2JpbGVNZW51KHdpZHRoIDwgMTAyNSA/IHRydWUgOiBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBpZD17YGxpbmstJHttZW51LmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YCMke21lbnUuaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e25hdiA9PT0gbWVudS5pZCA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHttZW51Lmljb259YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bWVudS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgey8qIE1vYmlsZSBOYXZpZ2F0aW9uIEVuZHMgKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogU3RyZXRjaHkgTmF2aWdhdGlvbiBTdGFydHMgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICByZWY9e2RvbU5vZGV9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgY2Qtc3RyZXRjaHktbmF2ICR7dG9nZ2xlID8gXCJuYXYtaXMtdmlzaWJsZVwiIDogXCJcIn0gJHtcclxuICAgICAgICAgIGxpZ2h0ID8gbmF2ID09IFwiaG9tZVwiICYmIFwibGlnaHRlclwiIDogXCJcIlxyXG4gICAgICAgIH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNkLW5hdi10cmlnZ2VyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZSghdG9nZ2xlKX1cclxuICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3RyZXRjaHktbmF2XCI+XHJcbiAgICAgICAgICB7bWVudXMubWFwKChtZW51LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e25hdiA9PSBtZW51LmlkID8gXCJhY3RpdmVcIiA6IFwiXCJ9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9e2AjJHttZW51LmlkfWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYW5nZU5hdihtZW51LmlkKTtcclxuICAgICAgICAgICAgICAgICAgc2V0VG9nZ2xlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e21lbnUuZGtNZW51TmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJzdHJldGNoeS1uYXYtYmdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIFN0cmV0Y2h5IE5hdmlnYXRpb24gRW5kcyAqL31cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdkNvbnRleHQiLCJ1c2VDbGlja091dHNpZGUiLCJ1c2VXaW5kb3dTaXplIiwibWVudXMiLCJpY29uIiwiZGtNZW51TmFtZSIsIm5hbWUiLCJpZCIsIkhlYWRlciIsImxpZ2h0IiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwiY2hhbmdlTmF2IiwibmF2IiwiY2hhbmdlTW9iaWxlTWVudSIsIm1vYmlsZU1lbnUiLCJwYXRoIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwibmV3cGF0aCIsInNwbGl0IiwicG9wIiwid2lkdGgiLCJkb21Ob2RlIiwiaGVhZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJtZW51IiwiaSIsImxpIiwiYSIsIm9uQ2xpY2siLCJocmVmIiwic3BhbiIsInJlZiIsImFyaWEtaGlkZGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layouts/Header.js\n"));

/***/ })

});