(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["customizable-login-component-library"] = factory(require("vue"));
	else
		root["customizable-login-component-library"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 57:
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

/***/ }),

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

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

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-86.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/packages/Google.vue?vue&type=template&id=318f7608&scoped=true

const _withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-318f7608"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);
const _hoisted_1 = {
  class: "cardContainer"
};
const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "cardHeader"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  width: "75",
  height: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("g", {
  id: "Layer_1"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("title", null, "Layer 1"), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("g", {
  stroke: "null",
  id: "svg_18"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  stroke: "#FFB27C",
  d: "m15.61592,0.7114c-0.10593,0.38261 -0.95237,1.82066 -2.01265,3.6986c-0.82731,1.46532 -1.13696,2.45291 -1.69486,3.18845c-0.70714,0.9323 -1.40398,1.89111 -2.33043,3.57107c-0.76397,1.38533 -1.358,2.80789 -2.01265,3.57107c-0.54877,0.63975 -1.05929,1.0203 -1.483,1.53046c-0.63557,0.76523 -1.16522,1.65799 -1.37707,2.16815l-0.10593,0",
  id: "svg_1",
  "stroke-width": "0",
  fill: "none"
}), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  stroke: "#FFB27C",
  d: "m14.23885,1.34909c0,0.12754 -0.12375,0.10959 -0.7415,1.0203c-0.76397,1.12628 -1.57167,2.18295 -2.33043,3.44353c-0.9324,1.54906 -1.81817,3.01748 -2.75415,4.33629c-0.68123,0.95986 -1.21058,1.71199 -1.69486,2.42322c-0.47488,0.69742 -0.84215,1.28051 -1.27114,1.91307c-0.52326,0.77157 -0.98446,1.36804 -1.37707,1.91307c-0.34702,0.48175 -0.42371,0.63769 -0.52964,0.89277l-0.21186,0.12754",
  id: "svg_2",
  "stroke-width": "0",
  fill: "none"
}), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  stroke: "null",
  id: "svg_6",
  d: "m-0.40321,5.47808l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.9679l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.9679l3.21924,-6.33955l-3.21924,-6.33955z",
  "stroke-width": "0",
  fill: "#5b9dff"
}), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  stroke: "null",
  id: "svg_14",
  d: "m12.41416,5.47808l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.96789l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.96789l3.21924,-6.33955l-3.21924,-6.33955z",
  "stroke-width": "0",
  fill: "#FFAAB8"
}), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  stroke: "null",
  id: "svg_15",
  d: "m25.44339,5.8607l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.96789l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.96789l3.21924,-6.33955l-3.21924,-6.33955z",
  "stroke-width": "0",
  fill: "#FFF093"
}), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  stroke: "null",
  id: "svg_16",
  d: "m38.15483,5.98824l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.96789l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.96789l3.21924,-6.33955l-3.21924,-6.33955z",
  "stroke-width": "0",
  fill: "#5b9dff"
}), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  stroke: "null",
  id: "svg_17",
  d: "m50.9722,5.8607l3.03051,-5.96784l3.21927,6.3395l3.21927,-6.3395l3.03054,5.96784l-3.21927,6.33955l3.21927,6.33955l-3.03054,5.96789l-3.21927,-6.33955l-3.21927,6.33955l-3.03051,-5.96789l3.21924,-6.33955l-3.21924,-6.33955z",
  "stroke-width": "0",
  fill: "#D1FFB4"
})]), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  stroke: "null",
  id: "svg_19",
  d: "m63.65751,5.72126l2.78632,-6.08969l2.95987,6.46893l2.95987,-6.46893l2.78635,6.08969l-2.95987,6.46899l2.95987,6.46899l-2.78635,6.08975l-2.95987,-6.46899l-2.95987,6.46899l-2.78632,-6.08975l2.95985,-6.46899l-2.95985,-6.46899z",
  "stroke-width": "0",
  fill: "#FFAAB8"
})])]), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "wordContainer"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("h1", {
  class: "signinWord"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, "Sign in")])]), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "myWord"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, "to continue to XXXXX")])], -1));
const _hoisted_3 = {
  class: "cardBody"
};
const _hoisted_4 = {
  style: {
    "width": "100%",
    "padding-top": "10px"
  }
};
const _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  style: {
    "width": "100%",
    "margin-top": "36px",
    "font-family": "inherit",
    "font-size": "inherit"
  }
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, "Not your computer? Use Guest mode to sign in privately.")], -1));
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-input");
  const _component_router_link = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("router-link");
  const _component_el_button = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-button");
  const _component_el_carousel_item = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-carousel-item");
  const _component_el_carousel = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-carousel");
  const _component_el_card = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-card");
  const _component_el_option = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-option");
  const _component_el_select = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-select");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_card, {
    shadow: "never",
    class: "box-card"
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_carousel, {
      ref: "carouselMenu",
      "indicator-position": "none",
      arrow: "never",
      autoplay: false,
      loop: false,
      trigger: "click"
    }, {
      default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_carousel_item, null, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_input, {
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.input = $event),
          placeholder: "Please input your email"
        }, null, 8, ["modelValue"]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_4, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_router_link, {
          to: "/404"
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("Forgot email?")]),
          _: 1
        })]), _hoisted_5, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_6, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_router_link, {
          to: "/404"
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("Learn more")]),
          _: 1
        })]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_7, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_router_link, {
          to: "/404"
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("Create account")]),
          _: 1
        }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_button, {
          class: "firstnext",
          onClick: $options.changeToNextPage,
          type: "primary",
          style: {
            "height": "36px",
            "width": "80px"
          }
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" Next ")]),
          _: 1
        }, 8, ["onClick"])])]),
        _: 1
      }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_carousel_item, null, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_input, {
          style: {
            "margin-top": "60px"
          },
          modelValue: _ctx.input,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.input = $event),
          placeholder: "Enter your password"
        }, null, 8, ["modelValue"]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_8, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_router_link, {
          to: "/404"
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("Forgot password?")]),
          _: 1
        }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_button, {
          onClick: $options.login,
          type: "primary",
          style: {
            "height": "36px",
            "width": "80px"
          }
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("Next")]),
          _: 1
        }, 8, ["onClick"])])]),
        _: 1
      })]),
      _: 1
    }, 512)])])]),
    _: 1
  }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_9, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_select, {
    modelValue: _ctx.value,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.value = $event),
    class: "m-2",
    placeholder: "Select",
    size: "large"
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($data.countries, item => {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_el_option, {
        key: item,
        label: item,
        value: item
      }, null, 8, ["label", "value"]);
    }), 128))]),
    _: 1
  }, 8, ["modelValue"]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_10, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_button, {
    text: "true",
    size: "small"
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("Help")]),
    _: 1
  }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_button, {
    text: "true",
    size: "small"
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("Privacy")]),
    _: 1
  }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_button, {
    text: "true",
    size: "small"
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("Terms")]),
    _: 1
  })])])], 64);
}
;// CONCATENATED MODULE: ./src/packages/Google.vue?vue&type=template&id=318f7608&scoped=true

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-86.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/packages/Google.vue?vue&type=script&lang=js
/**
 * @vue-data {String} username - username
 * @vue-data {String} password - password
 * @vue-data {Array} countries - countries list
 * @vue-event {} changeToNextPage - change to next login page
 * @vue-event {} login - login
 */
/* harmony default export */ var Googlevue_type_script_lang_js = ({
  name: "GoogleCentral",
  data() {
    return {
      countries: ["English (United States)", "Chinese", "Janpanese"],
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      const username = "abc";
      const password = "abc";
      console.log(username, password);
    },
    changeToNextPage() {
      this.$refs.carouselMenu.next();
    }
  }
});
;// CONCATENATED MODULE: ./src/packages/Google.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-58.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-58.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-58.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/packages/Google.vue?vue&type=style&index=0&id=318f7608&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/packages/Google.vue?vue&type=style&index=0&id=318f7608&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(57);
;// CONCATENATED MODULE: ./src/packages/Google.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Googlevue_type_script_lang_js, [['render',render],['__scopeId',"data-v-318f7608"]])

/* harmony default export */ var Google = (__exports__);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-86.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/packages/Amazon.vue?vue&type=template&id=29dc2df6&scoped=true

const Amazonvue_type_template_id_29dc2df6_scoped_true_withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-29dc2df6"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);
const Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_1 = /*#__PURE__*/Amazonvue_type_template_id_29dc2df6_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("img", {
  width: "103",
  src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
}, null, -1));
const Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_2 = /*#__PURE__*/Amazonvue_type_template_id_29dc2df6_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  style: {
    "padding-top": "20px"
  }
}, null, -1));
const Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_3 = {
  style: {
    "padding": "20px 26px!important"
  }
};
const Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_4 = /*#__PURE__*/Amazonvue_type_template_id_29dc2df6_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("h1", {
  style: {
    "margin-bottom": "10px",
    "margin-top": "0px",
    "font-size": "28px",
    "font-weight": "400",
    "line-height": "1.2",
    "padding-bottom": "4px"
  }
}, " Sign in ", -1));
const Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_5 = /*#__PURE__*/Amazonvue_type_template_id_29dc2df6_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("label", {
  style: {
    "font-weight": "700"
  }
}, " Email or mobile phone number ", -1));
const Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_6 = /*#__PURE__*/Amazonvue_type_template_id_29dc2df6_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  style: {
    "padding-top": "18px"
  }
}, null, -1));
const Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_7 = /*#__PURE__*/Amazonvue_type_template_id_29dc2df6_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  style: {
    "padding-top": "20px",
    "font-size": "12px",
    "line-height": "1.5"
  }
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" By continuing, you agree to Amazon's "), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("a", {
  href: "https://www.amazon.com/"
}, "Conditions of Use"), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" and "), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("a", {
  href: "https://www.amazon.com/"
}, "Privacy Notice.")], -1));
const Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_8 = /*#__PURE__*/Amazonvue_type_template_id_29dc2df6_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  style: {
    "padding-top": "20px"
  }
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("a", {
  href: "https://www.amazon.com/"
}, "Need Help?")], -1));
const Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_9 = /*#__PURE__*/Amazonvue_type_template_id_29dc2df6_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("a", {
  href: "https://www.amazon.com/"
}, " Change", -1));
const Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_10 = /*#__PURE__*/Amazonvue_type_template_id_29dc2df6_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  style: {
    "padding-top": "10px",
    "display": "flex",
    "justify-content": "space-between"
  }
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("h4", null, "Password"), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("a", {
  href: "https://www.amazon.com/"
}, " Forgot your password?")], -1));
const _hoisted_11 = /*#__PURE__*/Amazonvue_type_template_id_29dc2df6_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  style: {
    "padding-top": "18px"
  }
}, null, -1));
const _hoisted_12 = /*#__PURE__*/Amazonvue_type_template_id_29dc2df6_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  style: {
    "padding-top": "18px"
  }
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("input", {
  type: "checkbox",
  value: "true",
  tabindex: "4"
}), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" Keep me signed in. "), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("a", {
  href: "https://www.amazon.com/"
}, "Details")], -1));
function Amazonvue_type_template_id_29dc2df6_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-input");
  const _component_el_button = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-button");
  const _component_el_carousel_item = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-carousel-item");
  const _component_el_carousel = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-carousel");
  const _component_el_card = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-card");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, [Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_1, Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_2, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_card, {
    shadow: "never"
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_3, [Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_4, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_carousel, {
      height: "200px",
      ref: "carouselMenu",
      "indicator-position": "none",
      arrow: "never",
      autoplay: false,
      loop: false,
      trigger: "click"
    }, {
      default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_carousel_item, null, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_5, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_input, {
          modelValue: $data.username,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.username = $event),
          placeholder: "Please input your email"
        }, null, 8, ["modelValue"]), Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_6, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_button, {
          onClick: $options.changeToNextPage,
          style: {
            "width": "100%",
            "border-color": "rgb(124 101 43)"
          },
          color: "#f0c14b"
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" Continue ")]),
          _: 1
        }, 8, ["onClick"]), Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_7, Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_8]),
        _: 1
      }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_carousel_item, null, {
        default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($data.username) + " ", 1), Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_9]), Amazonvue_type_template_id_29dc2df6_scoped_true_hoisted_10, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_input, {
          modelValue: $data.password,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.password = $event),
          placeholder: "Please input your password"
        }, null, 8, ["modelValue"]), _hoisted_11, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_button, {
          onClick: $options.changeToNextPage,
          style: {
            "width": "100%",
            "border-color": "rgb(124 101 43)"
          },
          color: "#f0c14b"
        }, {
          default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("Sign in ")]),
          _: 1
        }, 8, ["onClick"]), _hoisted_12]),
        _: 1
      })]),
      _: 1
    }, 512)])]),
    _: 1
  })], 64);
}
;// CONCATENATED MODULE: ./src/packages/Amazon.vue?vue&type=template&id=29dc2df6&scoped=true

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-86.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/packages/Amazon.vue?vue&type=script&lang=js
/**
 * @vue-data {String} username - username
 * @vue-data {String} password - password
 * @vue-event {} changeToNextPage - change to next login page
 * @vue-event {} login - login
 */
/* harmony default export */ var Amazonvue_type_script_lang_js = ({
  name: "AmazonCentral",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      const username = "abc";
      const password = "abc";
      console.log(username, password);
    },
    changeToNextPage() {
      this.$refs.carouselMenu.next();
    }
  }
});
;// CONCATENATED MODULE: ./src/packages/Amazon.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-58.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-58.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-58.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/packages/Amazon.vue?vue&type=style&index=0&id=29dc2df6&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/packages/Amazon.vue?vue&type=style&index=0&id=29dc2df6&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/packages/Amazon.vue




;


const Amazon_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Amazonvue_type_script_lang_js, [['render',Amazonvue_type_template_id_29dc2df6_scoped_true_render],['__scopeId',"data-v-29dc2df6"]])

/* harmony default export */ var Amazon = (Amazon_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-86.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/packages/Github.vue?vue&type=template&id=57ecd7a2&scoped=true

const Githubvue_type_template_id_57ecd7a2_scoped_true_withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-57ecd7a2"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);
const Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_1 = /*#__PURE__*/Githubvue_type_template_id_57ecd7a2_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("svg", {
  height: "48",
  "aria-hidden": "true",
  viewBox: "0 0 16 16",
  version: "1.1",
  width: "48",
  "data-view-component": "true",
  class: "octicon octicon-mark-github"
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("path", {
  d: "M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
})], -1));
const Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_2 = /*#__PURE__*/Githubvue_type_template_id_57ecd7a2_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  style: {
    "padding-top": "20px"
  }
}, null, -1));
const Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_3 = /*#__PURE__*/Githubvue_type_template_id_57ecd7a2_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("h1", null, "Sign in to GitHub", -1));
const Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_4 = /*#__PURE__*/Githubvue_type_template_id_57ecd7a2_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  style: {
    "padding-top": "15px"
  }
}, null, -1));
const Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_5 = /*#__PURE__*/Githubvue_type_template_id_57ecd7a2_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("label", null, " Username or email address ", -1));
const Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_6 = /*#__PURE__*/Githubvue_type_template_id_57ecd7a2_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  style: {
    "padding-top": "5px"
  }
}, null, -1));
const Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_7 = /*#__PURE__*/Githubvue_type_template_id_57ecd7a2_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  style: {
    "padding-top": "15px",
    "padding-bottom": "5px",
    "display": "flex",
    "justify-content": "space-between"
  }
}, [/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" Password "), /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("a", {
  href: "https://github.com/"
}, "Forgot password?")], -1));
const Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_8 = /*#__PURE__*/Githubvue_type_template_id_57ecd7a2_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  style: {
    "padding-top": "15px"
  }
}, null, -1));
const Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_9 = /*#__PURE__*/Githubvue_type_template_id_57ecd7a2_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  style: {
    "padding-top": "20px"
  }
}, null, -1));
const Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_10 = /*#__PURE__*/Githubvue_type_template_id_57ecd7a2_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("a", {
  href: "https://github.com/"
}, " Create an account.", -1));
function Githubvue_type_template_id_57ecd7a2_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-input");
  const _component_el_button = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-button");
  const _component_el_card = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("el-card");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, [Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_1, Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_2, Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_3, Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_4, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_card, {
    class: "login-card",
    shadow: "never"
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_5, Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_6, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_input, {
      modelValue: _ctx.username,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.username = $event),
      placeholder: "Please input your username/email"
    }, null, 8, ["modelValue"]), Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_7, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_input, {
      modelValue: _ctx.password,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.password = $event),
      placeholder: "Please input your password"
    }, null, 8, ["modelValue"]), Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_8, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_button, {
      onClick: _ctx.login,
      style: {
        "width": "100%",
        "border-color": "rgb(24 119 51)"
      },
      color: "rgb(24 119 51)"
    }, {
      default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)("Sign in ")]),
      _: 1
    }, 8, ["onClick"])]),
    _: 1
  }), Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_9, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_el_card, {
    class: "register-card",
    shadow: "never"
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)(" New to GitHub? "), Githubvue_type_template_id_57ecd7a2_scoped_true_hoisted_10]),
    _: 1
  })], 64);
}
;// CONCATENATED MODULE: ./src/packages/Github.vue?vue&type=template&id=57ecd7a2&scoped=true

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-86.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/packages/Github.vue?vue&type=script&lang=js
/**
 * @vue-data {String} username - username
 * @vue-data {String} password - password
 * @vue-event {} login - login
 */
/* harmony default export */ var Githubvue_type_script_lang_js = ({
  name: "GithubCentral"
});
;// CONCATENATED MODULE: ./src/packages/Github.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-58.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-58.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-58.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/packages/Github.vue?vue&type=style&index=0&id=57ecd7a2&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/packages/Github.vue?vue&type=style&index=0&id=57ecd7a2&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/packages/Github.vue




;


const Github_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Githubvue_type_script_lang_js, [['render',Githubvue_type_template_id_57ecd7a2_scoped_true_render],['__scopeId',"data-v-57ecd7a2"]])

/* harmony default export */ var Github = (Github_exports_);
;// CONCATENATED MODULE: ./src/packages/index.js



const components = [Google, Amazon, Github];
const install = Vue => {
  components.forEach(com => {
    Vue.component(com.name, com);
  });
};
/* harmony default export */ var src_packages = (install);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_packages);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=customizable-login-component-library.umd.js.map