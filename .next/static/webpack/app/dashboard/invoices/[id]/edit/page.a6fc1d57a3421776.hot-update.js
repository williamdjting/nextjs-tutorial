"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/invoices/[id]/edit/page",{

/***/ "(app-pages-browser)/./app/ui/invoices/edit-form.tsx":
/*!***************************************!*\
  !*** ./app/ui/invoices/edit-form.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditInvoiceForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/CurrencyDollarIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ClockIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/CheckIcon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/ui/button */ \"(app-pages-browser)/./app/ui/button.tsx\");\n/* harmony import */ var _app_lib_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/lib/actions */ \"(app-pages-browser)/./app/lib/actions.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction EditInvoiceForm(param) {\n    let { invoice, customers } = param;\n    const updateInvoiceWithId = _app_lib_actions__WEBPACK_IMPORTED_MODULE_3__.updateInvoice.bind(null, invoice.id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        action: updateInvoiceWithId,\n        children: [\n            \"      \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-md bg-gray-50 p-4 md:p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"customer\",\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Choose customer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        id: \"customer\",\n                                        name: \"customerId\",\n                                        className: \"peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500\",\n                                        defaultValue: invoice.customer_id,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"\",\n                                                disabled: true,\n                                                children: \"Select a customer\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 15\n                                            }, this),\n                                            customers.map((customer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: customer.id,\n                                                    children: customer.name\n                                                }, customer.id, false, {\n                                                    fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 17\n                                                }, this))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        className: \"pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"amount\",\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Choose an amount\"\n                            }, void 0, false, {\n                                fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative mt-2 rounded-md\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"amount\",\n                                            name: \"amount\",\n                                            type: \"number\",\n                                            step: \"0.01\",\n                                            defaultValue: invoice.amount,\n                                            placeholder: \"Enter USD amount\",\n                                            className: \"peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            className: \"pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Set the invoice status\"\n                            }, void 0, false, {\n                                fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"rounded-md border border-gray-200 bg-white px-[14px] py-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"pending\",\n                                                    name: \"status\",\n                                                    type: \"radio\",\n                                                    value: \"pending\",\n                                                    defaultChecked: invoice.status === \"pending\",\n                                                    className: \"h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"pending\",\n                                                    className: \"ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600\",\n                                                    children: [\n                                                        \"Pending \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                            className: \"h-4 w-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                                            lineNumber: 91,\n                                                            columnNumber: 27\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"paid\",\n                                                    name: \"status\",\n                                                    type: \"radio\",\n                                                    value: \"paid\",\n                                                    defaultChecked: invoice.status === \"paid\",\n                                                    className: \"h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"paid\",\n                                                    className: \"ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white\",\n                                                    children: [\n                                                        \"Paid \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                            className: \"h-4 w-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                                            lineNumber: 107,\n                                                            columnNumber: 24\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                lineNumber: 24,\n                columnNumber: 46\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 flex justify-end gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/dashboard/invoices\",\n                        className: \"flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200\",\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        type: \"submit\",\n                        children: \"Edit Invoice\"\n                    }, void 0, false, {\n                        fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/willting/Desktop/next-tutorial/app/ui/invoices/edit-form.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_c = EditInvoiceForm;\nvar _c;\n$RefreshReg$(_c, \"EditInvoiceForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9pbnZvaWNlcy9lZGl0LWZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBUXFDO0FBQ1I7QUFDWTtBQUNTO0FBRW5DLFNBQVNPLGdCQUFnQixLQU12QztRQU51QyxFQUN0Q0MsT0FBTyxFQUNQQyxTQUFTLEVBSVYsR0FOdUM7SUFPdEMsTUFBTUMsc0JBQXNCSixnRUFBa0IsQ0FBQyxNQUFNRSxRQUFRSSxFQUFFO0lBRS9ELHFCQUNFLDhEQUFDQztRQUFLQyxRQUFRSjs7WUFBcUI7MEJBQU0sOERBQUNLO2dCQUFJQyxXQUFVOztrQ0FFcEQsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQU1DLFNBQVE7Z0NBQVdGLFdBQVU7MENBQWlDOzs7Ozs7MENBR3JFLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNHO3dDQUNDUCxJQUFHO3dDQUNIUSxNQUFLO3dDQUNMSixXQUFVO3dDQUNWSyxjQUFjYixRQUFRYyxXQUFXOzswREFFakMsOERBQUNDO2dEQUFPQyxPQUFNO2dEQUFHQyxRQUFROzBEQUFDOzs7Ozs7NENBR3pCaEIsVUFBVWlCLEdBQUcsQ0FBQyxDQUFDQyx5QkFDZCw4REFBQ0o7b0RBQXlCQyxPQUFPRyxTQUFTZixFQUFFOzhEQUN6Q2UsU0FBU1AsSUFBSTttREFESE8sU0FBU2YsRUFBRTs7Ozs7Ozs7Ozs7a0RBSzVCLDhEQUFDVCwrSUFBY0E7d0NBQUNhLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLOUIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQU1DLFNBQVE7Z0NBQVNGLFdBQVU7MENBQWlDOzs7Ozs7MENBR25FLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDWTs0Q0FDQ2hCLElBQUc7NENBQ0hRLE1BQUs7NENBQ0xTLE1BQUs7NENBQ0xDLE1BQUs7NENBQ0xULGNBQWNiLFFBQVF1QixNQUFNOzRDQUM1QkMsYUFBWTs0Q0FDWmhCLFdBQVU7Ozs7OztzREFFWiw4REFBQ2QsK0lBQWtCQTs0Q0FBQ2MsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTXBDLDhEQUFDaUI7OzBDQUNDLDhEQUFDQztnQ0FBT2xCLFdBQVU7MENBQWlDOzs7Ozs7MENBR25ELDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNZO29EQUNDaEIsSUFBRztvREFDSFEsTUFBSztvREFDTFMsTUFBSztvREFDTEwsT0FBTTtvREFDTlcsZ0JBQWdCM0IsUUFBUTRCLE1BQU0sS0FBSztvREFDbkNwQixXQUFVOzs7Ozs7OERBRVosOERBQUNDO29EQUNDQyxTQUFRO29EQUNSRixXQUFVOzt3REFDWDtzRUFDUyw4REFBQ2YsK0lBQVNBOzREQUFDZSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBR2pDLDhEQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNZO29EQUNDaEIsSUFBRztvREFDSFEsTUFBSztvREFDTFMsTUFBSztvREFDTEwsT0FBTTtvREFDTlcsZ0JBQWdCM0IsUUFBUTRCLE1BQU0sS0FBSztvREFDbkNwQixXQUFVOzs7Ozs7OERBRVosOERBQUNDO29EQUNDQyxTQUFRO29EQUNSRixXQUFVOzt3REFDWDtzRUFDTSw4REFBQ2hCLCtJQUFTQTs0REFBQ2dCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU90Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDWixrREFBSUE7d0JBQ0hpQyxNQUFLO3dCQUNMckIsV0FBVTtrQ0FDWDs7Ozs7O2tDQUdELDhEQUFDWCxrREFBTUE7d0JBQUN3QixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7S0EvR3dCdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VpL2ludm9pY2VzL2VkaXQtZm9ybS50c3g/NzZmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IEN1c3RvbWVyRmllbGQsIEludm9pY2VGb3JtIH0gZnJvbSAnQC9hcHAvbGliL2RlZmluaXRpb25zJztcbmltcG9ydCB7XG4gIENoZWNrSWNvbixcbiAgQ2xvY2tJY29uLFxuICBDdXJyZW5jeURvbGxhckljb24sXG4gIFVzZXJDaXJjbGVJY29uLFxufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvYXBwL3VpL2J1dHRvbic7XG5pbXBvcnQgeyB1cGRhdGVJbnZvaWNlIH0gZnJvbSAnQC9hcHAvbGliL2FjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0SW52b2ljZUZvcm0oe1xuICBpbnZvaWNlLFxuICBjdXN0b21lcnMsXG59OiB7XG4gIGludm9pY2U6IEludm9pY2VGb3JtO1xuICBjdXN0b21lcnM6IEN1c3RvbWVyRmllbGRbXTtcbn0pIHtcbiAgY29uc3QgdXBkYXRlSW52b2ljZVdpdGhJZCA9IHVwZGF0ZUludm9pY2UuYmluZChudWxsLCBpbnZvaWNlLmlkKTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIGFjdGlvbj17dXBkYXRlSW52b2ljZVdpdGhJZH0+ICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJnLWdyYXktNTAgcC00IG1kOnAtNlwiPlxuICAgICAgICB7LyogQ3VzdG9tZXIgTmFtZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjdXN0b21lclwiIGNsYXNzTmFtZT1cIm1iLTIgYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgQ2hvb3NlIGN1c3RvbWVyXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIGlkPVwiY3VzdG9tZXJcIlxuICAgICAgICAgICAgICBuYW1lPVwiY3VzdG9tZXJJZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlZXIgYmxvY2sgdy1mdWxsIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBweS0yIHBsLTEwIHRleHQtc20gb3V0bGluZS0yIHBsYWNlaG9sZGVyOnRleHQtZ3JheS01MDBcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ludm9pY2UuY3VzdG9tZXJfaWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICBTZWxlY3QgYSBjdXN0b21lclxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAge2N1c3RvbWVycy5tYXAoKGN1c3RvbWVyKSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2N1c3RvbWVyLmlkfSB2YWx1ZT17Y3VzdG9tZXIuaWR9PlxuICAgICAgICAgICAgICAgICAge2N1c3RvbWVyLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8VXNlckNpcmNsZUljb24gY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiBoLVsxOHB4XSB3LVsxOHB4XSAtdHJhbnNsYXRlLXktMS8yIHRleHQtZ3JheS01MDBcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogSW52b2ljZSBBbW91bnQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW1vdW50XCIgY2xhc3NOYW1lPVwibWItMiBibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICBDaG9vc2UgYW4gYW1vdW50XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG10LTIgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aW52b2ljZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBVU0QgYW1vdW50XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZWVyIGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcHktMiBwbC0xMCB0ZXh0LXNtIG91dGxpbmUtMiBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEN1cnJlbmN5RG9sbGFySWNvbiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGxlZnQtMyB0b3AtMS8yIGgtWzE4cHhdIHctWzE4cHhdIC10cmFuc2xhdGUteS0xLzIgdGV4dC1ncmF5LTUwMCBwZWVyLWZvY3VzOnRleHQtZ3JheS05MDBcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBJbnZvaWNlIFN0YXR1cyAqL31cbiAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwibWItMiBibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICBTZXQgdGhlIGludm9pY2Ugc3RhdHVzXG4gICAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0yMDAgYmctd2hpdGUgcHgtWzE0cHhdIHB5LTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBpZD1cInBlbmRpbmdcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJwZW5kaW5nXCJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtpbnZvaWNlLnN0YXR1cyA9PT0gJ3BlbmRpbmcnfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCBjdXJzb3ItcG9pbnRlciBib3JkZXItZ3JheS0zMDAgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCBmb2N1czpyaW5nLTJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGVuZGluZ1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGZsZXggY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGdhcC0xLjUgcm91bmRlZC1mdWxsIGJnLWdyYXktMTAwIHB4LTMgcHktMS41IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUGVuZGluZyA8Q2xvY2tJY29uIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBpZD1cInBhaWRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJwYWlkXCJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtpbnZvaWNlLnN0YXR1cyA9PT0gJ3BhaWQnfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCBjdXJzb3ItcG9pbnRlciBib3JkZXItZ3JheS0zMDAgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCBmb2N1czpyaW5nLTJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGFpZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGZsZXggY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGdhcC0xLjUgcm91bmRlZC1mdWxsIGJnLWdyZWVuLTUwMCBweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFBhaWQgPENoZWNrSWNvbiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBqdXN0aWZ5LWVuZCBnYXAtNFwiPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9XCIvZGFzaGJvYXJkL2ludm9pY2VzXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGgtMTAgaXRlbXMtY2VudGVyIHJvdW5kZWQtbGcgYmctZ3JheS0xMDAgcHgtNCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDAgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctZ3JheS0yMDBcIlxuICAgICAgICA+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RWRpdCBJbnZvaWNlPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ2hlY2tJY29uIiwiQ2xvY2tJY29uIiwiQ3VycmVuY3lEb2xsYXJJY29uIiwiVXNlckNpcmNsZUljb24iLCJMaW5rIiwiQnV0dG9uIiwidXBkYXRlSW52b2ljZSIsIkVkaXRJbnZvaWNlRm9ybSIsImludm9pY2UiLCJjdXN0b21lcnMiLCJ1cGRhdGVJbnZvaWNlV2l0aElkIiwiYmluZCIsImlkIiwiZm9ybSIsImFjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsIm5hbWUiLCJkZWZhdWx0VmFsdWUiLCJjdXN0b21lcl9pZCIsIm9wdGlvbiIsInZhbHVlIiwiZGlzYWJsZWQiLCJtYXAiLCJjdXN0b21lciIsImlucHV0IiwidHlwZSIsInN0ZXAiLCJhbW91bnQiLCJwbGFjZWhvbGRlciIsImZpZWxkc2V0IiwibGVnZW5kIiwiZGVmYXVsdENoZWNrZWQiLCJzdGF0dXMiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/invoices/edit-form.tsx\n"));

/***/ })

});