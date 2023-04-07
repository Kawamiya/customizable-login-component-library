/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 998:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/packages/GoogleCentral.vue?vue&type=script&setup=true&lang=ts


const _withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.pushScopeId)("data-v-f9ccf870"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.popScopeId)(), n);
const _hoisted_1 = {
  class: "cardContainer"
};
const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
  class: "cardHeader"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("svg", {
  width: "75",
  height: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("g", {
  id: "Layer_1"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("title", null, "Layer 1"), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("g", {
  stroke: "null",
  id: "svg_18"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  stroke: "#FFB27C",
  d: "m15.61592,0.7114c-0.10593,0.38261 -0.95237,1.82066 -2.01265,3.6986c-0.82731,1.46532 -1.13696,2.45291 -1.69486,3.18845c-0.70714,0.9323 -1.40398,1.89111 -2.33043,3.57107c-0.76397,1.38533 -1.358,2.80789 -2.01265,3.57107c-0.54877,0.63975 -1.05929,1.0203 -1.483,1.53046c-0.63557,0.76523 -1.16522,1.65799 -1.37707,2.16815l-0.10593,0",
  id: "svg_1",
  "stroke-width": "0",
  fill: "none"
}), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  stroke: "#FFB27C",
  d: "m14.23885,1.34909c0,0.12754 -0.12375,0.10959 -0.7415,1.0203c-0.76397,1.12628 -1.57167,2.18295 -2.33043,3.44353c-0.9324,1.54906 -1.81817,3.01748 -2.75415,4.33629c-0.68123,0.95986 -1.21058,1.71199 -1.69486,2.42322c-0.47488,0.69742 -0.84215,1.28051 -1.27114,1.91307c-0.52326,0.77157 -0.98446,1.36804 -1.37707,1.91307c-0.34702,0.48175 -0.42371,0.63769 -0.52964,0.89277l-0.21186,0.12754",
  id: "svg_2",
  "stroke-width": "0",
  fill: "none"
}), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  stroke: "null",
  id: "svg_6",
  d: "m-0.40321,5.47808l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.9679l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.9679l3.21924,-6.33955l-3.21924,-6.33955z",
  "stroke-width": "0",
  fill: "#5b9dff"
}), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  stroke: "null",
  id: "svg_14",
  d: "m12.41416,5.47808l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.96789l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.96789l3.21924,-6.33955l-3.21924,-6.33955z",
  "stroke-width": "0",
  fill: "#FFAAB8"
}), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  stroke: "null",
  id: "svg_15",
  d: "m25.44339,5.8607l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.96789l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.96789l3.21924,-6.33955l-3.21924,-6.33955z",
  "stroke-width": "0",
  fill: "#FFF093"
}), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  stroke: "null",
  id: "svg_16",
  d: "m38.15483,5.98824l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.96789l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.96789l3.21924,-6.33955l-3.21924,-6.33955z",
  "stroke-width": "0",
  fill: "#5b9dff"
}), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  stroke: "null",
  id: "svg_17",
  d: "m50.9722,5.8607l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.96789l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.96789l3.21924,-6.33955l-3.21924,-6.33955z",
  "stroke-width": "0",
  fill: "#D1FFB4"
})]), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
  stroke: "null",
  id: "svg_19",
  d: "m63.65751,5.72126l2.78632,-6.08969l2.95987,6.46893l2.95987,-6.46893l2.78635,6.08969l-2.95987,6.46899l2.95987,6.46899l-2.78635,6.08975l-2.95987,-6.46899l-2.95987,6.46899l-2.78632,-6.08975l2.95985,-6.46899l-2.95985,-6.46899z",
  "stroke-width": "0",
  fill: "#FFAAB8"
})])]), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
  class: "wordContainer"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("h1", {
  class: "signinWord"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", null, "Sign in")])]), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
  class: "myWord"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", null, "to continue to XXXXX")])], -1));
const _hoisted_3 = {
  class: "cardBody"
};
const _hoisted_4 = {
  style: {
    "width": "100%",
    "padding-top": "10px"
  }
};
const _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", {
  style: {
    "width": "100%",
    "margin-top": "36px",
    "font-family": "inherit",
    "font-size": "inherit"
  }
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", null, "Not your computer? Use Guest mode to sign in privately.")], -1));
const _hoisted_6 = {
  style: {
    "width": "100%",
    "padding-top": "10px"
  }
};
const _hoisted_7 = {
  style: {
    "display": "flex",
    "justify-content": "space-between",
    "margin-top": "50px"
  }
};
const _hoisted_8 = {
  style: {
    "display": "flex",
    "justify-content": "space-between",
    "margin-top": "50px"
  }
};
const _hoisted_9 = {
  class: "footer"
};
const _hoisted_10 = {
  style: {
    "margin-top": "10px"
  }
};


const __default__ = {
  name: 'GoogleCentral'
};
/* harmony default export */ var GoogleCentralvue_type_script_setup_true_lang_ts = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  ...__default__,
  setup(__props) {
    const {
      proxy
    } = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.getCurrentInstance)();
    const countries = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(["English (United States)", "Chinese", "Janpanese"]);
    const changeToNextPage = () => {
      proxy.$refs.carouselMenu.next();
    };
    return (_ctx, _cache) => {
      const _component_el_input = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("el-input");
      const _component_router_link = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("router-link");
      const _component_el_button = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("el-button");
      const _component_el_carousel_item = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("el-carousel-item");
      const _component_el_carousel = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("el-carousel");
      const _component_el_card = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("el-card");
      const _component_el_option = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("el-option");
      const _component_el_select = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("el-select");
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_card, {
        shadow: "never",
        class: "box-card"
      }, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_carousel, {
          ref: "carouselMenu",
          "indicator-position": "none",
          arrow: "never",
          autoplay: false,
          loop: false,
          trigger: "click"
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_carousel_item, null, {
            default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_input, {
              modelValue: _ctx.input,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.input = $event),
              placeholder: "Please input your email"
            }, null, 8, ["modelValue"]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_4, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_router_link, {
              to: "/404"
            }, {
              default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)("Forgot email?")]),
              _: 1
            })]), _hoisted_5, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_6, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_router_link, {
              to: "/404"
            }, {
              default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)("Learn more")]),
              _: 1
            })]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_7, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_router_link, {
              to: "/404"
            }, {
              default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)("Create account")]),
              _: 1
            }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_button, {
              class: "firstnext",
              onClick: changeToNextPage,
              type: "primary",
              style: {
                "height": "36px",
                "width": "80px"
              }
            }, {
              default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)(" Next ")]),
              _: 1
            })])]),
            _: 1
          }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_carousel_item, null, {
            default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_input, {
              style: {
                "margin-top": "60px"
              },
              modelValue: _ctx.input,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.input = $event),
              placeholder: "Enter your password"
            }, null, 8, ["modelValue"]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_8, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_router_link, {
              to: "/404"
            }, {
              default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)("Forgot password?")]),
              _: 1
            }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_button, {
              type: "primary",
              style: {
                "height": "36px",
                "width": "80px"
              }
            }, {
              default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)("Next")]),
              _: 1
            })])]),
            _: 1
          })]),
          _: 1
        }, 512)])])]),
        _: 1
      }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_9, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_select, {
        modelValue: _ctx.value,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.value = $event),
        class: "m-2",
        placeholder: "Select",
        size: "large"
      }, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)(countries.value, item => {
          return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_el_option, {
            key: item,
            label: item,
            value: item
          }, null, 8, ["label", "value"]);
        }), 128))]),
        _: 1
      }, 8, ["modelValue"]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_10, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_button, {
        text: "true",
        size: "small"
      }, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)("Help")]),
        _: 1
      }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_button, {
        text: "true",
        size: "small"
      }, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)("Privacy")]),
        _: 1
      }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_el_button, {
        text: "true",
        size: "small"
      }, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)("Terms")]),
        _: 1
      })])])], 64);
    };
  }
}));
;// CONCATENATED MODULE: ./src/packages/GoogleCentral.vue?vue&type=script&setup=true&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/packages/GoogleCentral.vue?vue&type=style&index=0&id=f9ccf870&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/packages/GoogleCentral.vue?vue&type=style&index=0&id=f9ccf870&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(998);
;// CONCATENATED MODULE: ./src/packages/GoogleCentral.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(GoogleCentralvue_type_script_setup_true_lang_ts, [['__scopeId',"data-v-f9ccf870"]])

/* harmony default export */ var GoogleCentral = (__exports__);
;// CONCATENATED MODULE: ./src/packages/index.js

const components = [GoogleCentral];
const install = Vue => {
  components.forEach(com => {
    Vue.component(com.name, com);
  });
};
/* harmony default export */ var src_packages = (install);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_packages);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=customizable-login-component-library.common.js.map