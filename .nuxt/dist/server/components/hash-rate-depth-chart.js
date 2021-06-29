exports.ids = [9,17];
exports.modules = {

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("32a8b26e", content, true, context)
};

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  getContext2D(element) {
    if (element) {
      return element.getContext('2d');
    }

    return null;
  },

  isEmpty(map) {
    if (!map) {
      return true;
    }

    if (map instanceof Array) {
      return !map.length;
    }

    return !Object.keys(map).length;
  },

  toPretty(num) {
    num = num || 0;

    if (num < 100) {
      return num.toFixed(2);
    }

    if (num < 1e6) {
      return (num / 1e3).toFixed(1) + ' K';
    }

    if (num < 1e7) {
      return (num / 1e6).toFixed(1) + ' M';
    }

    if (num < 1e9) {
      return (num / 1e6).toFixed(0) + ' M';
    }

    if (num < 1e10) {
      return (num / 1e9).toFixed(1) + ' B';
    }

    return (num / 1e9).toFixed(0) + ' B';
  },

  toThousand(num = 0) {
    if (typeof num === 'undefined') {
      return 0;
    }

    return (num || 0).toString().replace(/\d+/, function (n) {
      let len = n.length;

      if (len % 3 === 0) {
        return n.replace(/(\d{3})/g, ',$1').slice(1);
      } else {
        return n.slice(0, len % 3) + n.slice(len % 3).replace(/(\d{3})/g, ',$1');
      }
    });
  }

});

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_depth_chart_vue_vue_type_style_index_0_id_870dfd1a_scoped_true_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(166);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_depth_chart_vue_vue_type_style_index_0_id_870dfd1a_scoped_true_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_depth_chart_vue_vue_type_style_index_0_id_870dfd1a_scoped_true_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_depth_chart_vue_vue_type_style_index_0_id_870dfd1a_scoped_true_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_depth_chart_vue_vue_type_style_index_0_id_870dfd1a_scoped_true_rel_stylesheet_2Fscss_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bk09[data-v-870dfd1a]{\n  background-color:#09b67d\n}\n.bk10[data-v-870dfd1a]{\n  background:#b8babb!important;\n  background-color:#b8babb!important\n}\n.bk19[data-v-870dfd1a]{\n  background-color:#f7f7f7\n}\n.bk29[data-v-870dfd1a]{\n  background-color:#fff\n}\n.bk34[data-v-870dfd1a]{\n  background-color:#a3acbd\n}\n.bk52[data-v-870dfd1a]{\n  background-color:#333\n}\n.bk62[data-v-870dfd1a]{\n  background-color:#0b1821\n}\n.bk88[data-v-870dfd1a]{\n  background-color:#02ad8f\n}\n.bk112[data-v-870dfd1a]{\n  background-color:#131722\n}\n.bk113[data-v-870dfd1a]{\n  background-color:#02ad8f\n}\n.bk114[data-v-870dfd1a]{\n  background-color:#222e3e\n}\n.bk117[data-v-870dfd1a]{\n  background-color:#08050c\n}\n.bk121[data-v-870dfd1a]{\n  background-color:#13181a\n}\n.bk122[data-v-870dfd1a]{\n  background-color:#162229\n}\n.cl08[data-v-870dfd1a]{\n  color:#aa5369\n}\n.cl09[data-v-870dfd1a]{\n  color:#09b67d\n}\n.cl23[data-v-870dfd1a]{\n  color:#5c5c5c\n}\n.cl24[data-v-870dfd1a]{\n  color:#858585\n}\n.cl25[data-v-870dfd1a]{\n  color:#adadad\n}\n.cl29[data-v-870dfd1a]{\n  color:#fff\n}\n.cl52[data-v-870dfd1a]{\n  color:#333\n}\n.cl75[data-v-870dfd1a]{\n  color:#959595\n}\n.cl77[data-v-870dfd1a]{\n  color:#cd332d\n}\n.cl88[data-v-870dfd1a]{\n  color:#02ad8f\n}\n.cl110[data-v-870dfd1a]{\n  color:#4adb62\n}\n.cl113[data-v-870dfd1a]{\n  color:#02ad8f\n}\n.cl123[data-v-870dfd1a]{\n  color:#c1d3df\n}\n.cl125[data-v-870dfd1a]{\n  color:#707d8f\n}\n.cl127[data-v-870dfd1a]{\n  color:#08b67e\n}\n.cl128[data-v-870dfd1a]{\n  color:#d5742c\n}\n.cl_buy[data-v-870dfd1a]{\n  color:#03bf7b\n}\n.cl_sell[data-v-870dfd1a]{\n  color:#eb4d5c\n}\n.br-cl09[data-v-870dfd1a]{\n  border:1px solid #09b67d\n}\n.br-cl13[data-v-870dfd1a]{\n  border:1px solid #47545c\n}\n.br-cl72[data-v-870dfd1a]{\n  border:1px solid #ededed\n}\n.tl[data-v-870dfd1a]{\n  text-align:left\n}\n.tc[data-v-870dfd1a]{\n  text-align:center\n}\n.tr[data-v-870dfd1a]{\n  text-align:right\n}\n.fl[data-v-870dfd1a]{\n  float:left\n}\n.fr[data-v-870dfd1a]{\n  float:right\n}\n.hover-cl09[data-v-870dfd1a]:hover{\n  cursor:pointer;\n  color:#09b67d\n}\n#installPWA[data-v-870dfd1a]{\n  display:none\n}\n.clffffff[data-v-870dfd1a]{\n  color:#fff!important\n}\n.clE7EEFF[data-v-870dfd1a]{\n  color:#e7eeff\n}\n.cl5fe9ce[data-v-870dfd1a]{\n  color:#5fe9ce\n}\n.cl02AD8F[data-v-870dfd1a]{\n  color:#ff7f00!important\n}\n.clCB374E[data-v-870dfd1a]{\n  color:#cb374e\n}\n.cl9FA9C0[data-v-870dfd1a]{\n  color:#9fa9c0\n}\n.cl454545[data-v-870dfd1a]{\n  color:#454545\n}\n.cl868D9A[data-v-870dfd1a]{\n  color:#868d9a\n}\n.cl94EADB[data-v-870dfd1a]{\n  color:#94eadb\n}\n.clC9CED8[data-v-870dfd1a]{\n  color:#c9ced8\n}\n.cl727988[data-v-870dfd1a]{\n  color:#727988\n}\n.clCD7728[data-v-870dfd1a]{\n  color:#cd7728\n}\n.clD7F5F0[data-v-870dfd1a]{\n  color:#d7f5f0\n}\n.cl6A7B98[data-v-870dfd1a]{\n  color:#6a7b98\n}\n.cl98E4DA[data-v-870dfd1a]{\n  color:#98e4da\n}\n.cl3FCFBA[data-v-870dfd1a]{\n  color:#3fcfba\n}\n.clA5A9B0[data-v-870dfd1a]{\n  color:#a5a9b0\n}\n.clC5FAF3[data-v-870dfd1a]{\n  color:#c5faf3\n}\n.cl697080[data-v-870dfd1a]{\n  color:#697080\n}\n.cl534F4F[data-v-870dfd1a]{\n  color:#534f4f\n}\n.clAFB6C3[data-v-870dfd1a]{\n  color:#afb6c3\n}\n.bk0F182D[data-v-870dfd1a]{\n  background:#0f182d\n}\n.bk02AD8F[data-v-870dfd1a]{\n  background:#ff7f00\n}\n.bk0A1121[data-v-870dfd1a]{\n  background:#0a1121\n}\n.bk232F49[data-v-870dfd1a]{\n  background:#232f49\n}\n.bkffffff[data-v-870dfd1a]{\n  background:#fff\n}\n.bk222E4B[data-v-870dfd1a]{\n  background:#222e4b\n}\n.bk101a30[data-v-870dfd1a]{\n  background:#101a30\n}\n.bkf8f8f8[data-v-870dfd1a]{\n  background:#f8f8f8\n}\n.bk2A303C[data-v-870dfd1a]{\n  background:#2a303c\n}\n.bk191D24[data-v-870dfd1a]{\n  background:#fff\n}\n.bk21252F[data-v-870dfd1a]{\n  background:#220a9e\n}\n.bk2E3743[data-v-870dfd1a]{\n  background:#2e3743\n}\n.bk312922[data-v-870dfd1a]{\n  background:#312922\n}\n.bk616A77[data-v-870dfd1a]{\n  background-color:#616a77\n}\n.bk363C4A[data-v-870dfd1a]{\n  background-color:#363c4a\n}\n.bk0070F3[data-v-870dfd1a]{\n  background-color:#0070f3\n}\n.bk868D9A[data-v-870dfd1a]{\n  background-color:#868d9a\n}\n.bk222A37[data-v-870dfd1a]{\n  background-color:#222a37\n}\n.bk15171E[data-v-870dfd1a]{\n  background-color:#15171e\n}\n.bk292E39[data-v-870dfd1a]{\n  background-color:#292e39\n}\n.bk686F82[data-v-870dfd1a]{\n  background-color:#686f82\n}\n.bk343A47[data-v-870dfd1a]{\n  background-color:#343a47\n}\n.bk383E4D[data-v-870dfd1a]{\n  background-color:#383e4d\n}\n.bk303541[data-v-870dfd1a]{\n  background-color:#303541\n}\n.bk0B3D34[data-v-870dfd1a]{\n  background-color:#0b3d34\n}\n.bk2B303D[data-v-870dfd1a]{\n  background-color:#2b303d\n}\n.bk2F3441[data-v-870dfd1a]{\n  background-color:#2f3441\n}\n.bk2F3543[data-v-870dfd1a]{\n  background-color:#2f3543\n}\n.bk373D4A[data-v-870dfd1a]{\n  background-color:#373d4a\n}\n.bk95979D[data-v-870dfd1a]{\n  background-color:#95979d\n}\n.bk253f41[data-v-870dfd1a]{\n  background-color:#253f41\n}\n.bkFDFDFF[data-v-870dfd1a]{\n  background-color:#f7f8fa\n}\n.bkEFF2A3[data-v-870dfd1a]{\n  background-color:#eee\n}\n.bkF5F6FA[data-v-870dfd1a]{\n  background-color:#f5f6fa\n}\n.bkAFB6C3[data-v-870dfd1a]{\n  background-color:#afb6c3\n}\n.bc-868D9A[data-v-870dfd1a]{\n  border-color:#868d9a\n}\n.bc-3A53B8[data-v-870dfd1a]{\n  border-color:#3a53b8\n}\n.bc-1D088B[data-v-870dfd1a]{\n  border-color:#fff\n}\n.bc-02AD8F[data-v-870dfd1a]{\n  border-color:#ff7f00\n}\n.bc-co9FA9C0[data-v-870dfd1a]{\n  border-color:#9fa9c0\n}\n.bc-co0A1121[data-v-870dfd1a]{\n  border-color:#0a1121\n}\n.bc-co121D36[data-v-870dfd1a]{\n  border-color:#121d36\n}\n.bc-co383E4D[data-v-870dfd1a]{\n  border-color:#383e4d\n}\n.bc-co363E4A[data-v-870dfd1a]{\n  border-color:#363e4a\n}\n.bc-co3FCFBA[data-v-870dfd1a]{\n  border-color:#3fcfba\n}\n.bc-co535E6D[data-v-870dfd1a]{\n  border-color:#535e6d\n}\n.bc-co0C0E11[data-v-870dfd1a]{\n  border-color:#0c0e11\n}\n.bc-co373D4A[data-v-870dfd1a]{\n  border-color:#373d4a\n}\n.bc-co02AD8F[data-v-870dfd1a]{\n  border-color:#ff7f00\n}\n.bc-co242936[data-v-870dfd1a]{\n  border-color:#242936\n}\n.bc-null[data-v-870dfd1a]{\n  border-color:transparent\n}\n.cl9CC1FF[data-v-870dfd1a]{\n  color:#9cc1ff\n}\n.cl3A53B8[data-v-870dfd1a]{\n  color:#3a53b8\n}\n.cl487DC6[data-v-870dfd1a]{\n  color:#487dc6\n}\n.cl000f18[data-v-870dfd1a]{\n  color:#000f18\n}\n.cl6272a1[data-v-870dfd1a]{\n  color:#6272a1\n}\n.cl4774f9[data-v-870dfd1a]{\n  color:#4774f9\n}\n.cldce2f2[data-v-870dfd1a]{\n  color:#dce2f2\n}\n.cldbe4fe[data-v-870dfd1a]{\n  color:#dbe4fe\n}\n.cl324170[data-v-870dfd1a]{\n  color:#324170\n}\n.cl93a4da[data-v-870dfd1a]{\n  color:#93a4da\n}\n.cl67d852[data-v-870dfd1a]{\n  color:#67d852\n}\n.cl606d82[data-v-870dfd1a]{\n  color:#606d82\n}\n.cl17BC95[data-v-870dfd1a]{\n  color:#17bc95\n}\n.clnull[data-v-870dfd1a]{\n  color:transparent\n}\n.bk59[data-v-870dfd1a]{\n  background:#a9b3b8!important\n}\n.bkCB374E[data-v-870dfd1a]{\n  background:#cb374e\n}\n.bk67d852[data-v-870dfd1a]{\n  background:#67d852\n}\n.bk1c3385[data-v-870dfd1a]{\n  background:#1c3385\n}\n.bk3A53B8[data-v-870dfd1a]{\n  background:#3a53b8\n}\n.bk1D088B[data-v-870dfd1a]{\n  background:#fff\n}\n.bk000f18[data-v-870dfd1a]{\n  background:#000f18\n}\n.bk1e2643[data-v-870dfd1a]{\n  background:#1e2643\n}\n.bk151b35[data-v-870dfd1a]{\n  background:#151b35\n}\n.bk17BC95[data-v-870dfd1a]{\n  background:#17bc95\n}\n.bknull[data-v-870dfd1a]{\n  background:transparent\n}\n.br-cl67d852[data-v-870dfd1a]{\n  border:1px solid #67d852\n}\n.chart-layout[data-v-870dfd1a]{\n  position:relative;\n  background:#1e222a\n}\n.chart-layout canvas[data-v-870dfd1a]{\n  position:absolute\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HashRate/depth-chart.vue?vue&type=template&id=870dfd1a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"depth-chart",staticClass:"depth-chart"},[_vm._ssrNode("<div class=\"chart-layout\""+(_vm._ssrStyle(null,_vm.wrapStyles, null))+" data-v-870dfd1a><canvas"+(_vm._ssrAttr("width",_vm.fWidth * 2))+(_vm._ssrAttr("height",_vm.fHeight * 2))+" class=\"chart\""+(_vm._ssrStyle(null,_vm.chartStyles, null))+" data-v-870dfd1a></canvas> <canvas"+(_vm._ssrAttr("width",_vm.fWidth))+(_vm._ssrAttr("height",_vm.fHeight))+" class=\"chart-mask\" data-v-870dfd1a></canvas> <canvas"+(_vm._ssrAttr("width",_vm.fWidth))+" height=\"24\" class=\"chart-x\""+(_vm._ssrStyle(null,_vm.xStyles, null))+" data-v-870dfd1a></canvas> <canvas width=\"48\""+(_vm._ssrAttr("height",_vm.fHeight))+" class=\"chart-y\""+(_vm._ssrStyle(null,_vm.yStyles, null))+" data-v-870dfd1a></canvas></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HashRate/depth-chart.vue?vue&type=template&id=870dfd1a&scoped=true&

// EXTERNAL MODULE: ./components/HashRate/js/utils.js
var utils = __webpack_require__(192);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HashRate/depth-chart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var depth_chartvue_type_script_lang_js_ = ({
  name: 'HelloWorld',
  props: {
    bgColor: {
      type: String,
      default: '#1E222A'
    },
    options: {
      type: Object,
      default: null
    },
    //买竖线的颜色
    buyFillColor: {
      type: String,
      default: 'rgb(3, 191, 123, 1)'
    },
    //卖竖线的颜色
    sellFillColor: {
      type: String,
      default: 'rgb(235, 77, 92)'
    },
    gap: {
      type: Number,
      default: 10
    },
    // 锯齿
    jagged: {
      type: Boolean,
      default: false
    },
    paddingTop: {
      type: Number,
      default: 10
    },
    depthsData: {
      type: Object,
      default: {
        'depths': {
          'asks': [],
          'bids': []
        }
      }
    }
  },

  data() {
    return {
      chart: null,
      context: null,
      maskChart: null,
      maskContext: null,
      xChart: null,
      xChartContext: null,
      yChart: null,
      yChartContext: null,
      finalOptions: { ...this.options
      },
      fHeight: 0,
      fWidth: 0,
      width: 0,
      height: 0,
      hasPaint: false,
      args: null,
      valueMap: new Map(),
      valueData: [],
      //实时买卖数据
      buyData: [],
      //买单数据
      sellData: [],
      //卖单数据
      initState: false,
      timeInterval: null,
      buyInitState: false,
      //买单数据初始化状态
      sellInitState: false,
      //卖单数据初始化状态
      timer: null
    };
  },

  computed: {
    wrapStyles() {
      return {
        height: this.fHeight + 24 + 'px'
      };
    },

    chartStyles() {
      return {
        backgroundColor: this.bgColor,
        width: this.fWidth + 'px',
        height: this.fHeight + 'px'
      };
    },

    xStyles() {
      return {
        top: this.fHeight + 'px',
        left: 0
      };
    },

    yStyles() {
      return {
        top: 0,
        left: this.fWidth + 'px'
      };
    },

    isEmptyData() {
      let res = {
        buy: this.buyData,
        sell: this.sellData
      };
      return utils["default"].isEmpty(res);
    }

  },
  watch: {
    depthsData: {
      //深度监听，可监听到对象、数组的变化
      handler(newV, oldV) {
        // do something, 可使用this
        if (newV.bids.length) {
          let newArray = [];
          newV.bids.forEach((item, index) => {
            newArray.push({
              index: index,
              price: item[0],
              total: item[1],
              volume: item[1]
            });
          });
          this.buyData = newArray;
        }

        if (newV.asks.length) {
          let newArray = [];
          newV.asks.forEach((item, index) => {
            newArray.push({
              index: index,
              price: item[0],
              total: item[1],
              volume: item[1]
            });
          });
          this.sellData = newArray.reverse();
        }

        if (!this.sellData.length || !this.sellData[0].total || !this.buyData.length || !this.buyData[0].total) return;

        this._initChart();
      },

      deep: true
    }
  },

  //离开当前页面就显示底部
  destroyed() {
    clearInterval(this.timeInterval);
    clearTimeout(this.timer);
  },

  mounted() {
    this.$nextTick(() => {
      this.timer = setTimeout(() => {
        this.handleResize();
      });
      window.addEventListener('resize', this.handleResize); //如果切换了主题就重新渲染

      this.$bus.on('changeTheme', () => {
        if (!this.sellData.length || !this.sellData[0].total || !this.buyData.length || !this.buyData[0].total) return;

        this._initChart();
      });
    });
  },

  beforeDestroy() {
    this._resetChart();
  },

  methods: {
    //获取当前屏幕宽度和高度
    handleResize() {
      //如果一样的高宽不做改变 直接return
      if (this.width && this.width == this.$refs['depth-chart'].clientWidth && this.height == this.$refs['depth-chart'].clientHeight) {
        return;
      }

      this.width = this.$refs['depth-chart'].clientWidth;
      this.height = this.$refs['depth-chart'].clientHeight;
      this.fHeight = parseFloat(this.height) - 24;
      this.fWidth = parseFloat(this.width) - 48;
      this.initState = false;
    },

    _initChart() {
      this.chart = this.$refs['chart'];
      this.context = utils["default"].getContext2D(this.chart);
      this.maskChart = this.$refs['chartMask'];
      this.maskContext = utils["default"].getContext2D(this.maskChart);
      this.xChart = this.$refs['xChart'];
      this.xChartContext = utils["default"].getContext2D(this.xChart);
      this.yChart = this.$refs['yChart'];
      this.yChartContext = utils["default"].getContext2D(this.yChart);
      if (!this.maskContext || !this.xChartContext || !this.yChartContext) return; //清除竖线

      this.maskContext.clearRect(0, 0, parseFloat(this.fWidth), parseFloat(this.fHeight)); //清除x轴画布

      this.xChartContext.clearRect(0, 0, parseFloat(this.fWidth), 24); //清除y轴画布

      this.yChartContext.clearRect(0, 0, parseFloat(this.fHeight), parseFloat(this.fHeight)); // this._drawChart(this._initChartData());

      let res = {
        buy: this.buyData,
        sell: this.sellData
      };

      this._drawChart(res);
    },

    //深度数据填充
    _initChartData() {
      const buyLength = this.buyData.length;
      const sellLength = this.sellData.length;
      let gap;
      let indexFilter;
      let result = {};

      if (buyLength && sellLength) {
        const buy = this.buyData;
        const buyFirstPrice = Number(buy[0].price);
        const buyLastPrice = Number(buy[buy.length - 1].price);
        const buyGap = buy.length > 1 ? Number(buyFirstPrice - buyLastPrice) : buy[0].price;
        const sell = this.sellData;
        const sellFirstPrice = Number(sell[0].price);
        const sellLastPrice = Number(sell[sell.length - 1].price);
        const sellGap = Number(sellLastPrice - sellFirstPrice);
        const isBuySmall = buyGap < sellGap;

        if (isBuySmall) {
          gap = Number(sellFirstPrice + buyGap);
          result['buy'] = this.buyData;

          for (let i = 0; i < this.sellData.length; i++) {
            let item = this.sellData[i];

            if (gap === item.price) {
              indexFilter = i;
              break;
            } else if (item.price > gap) {
              indexFilter = i;
              break;
            }
          }

          result['sell'] = this.sellData.filter((item, index) => indexFilter >= index);
        } else {
          gap = Number(buyLastPrice + sellGap);
          result['sell'] = this.sellData;

          for (let i = 0; i < this.buyData.length; i++) {
            let item = this.buyData[i];

            if (gap === item.price) {
              indexFilter = i;
              break;
            } else if (item.price > gap) {
              indexFilter = i;
              break;
            }
          }

          result['buy'] = this.buyData.filter((item, index) => indexFilter <= index);
        }
      }

      console.log(result);
      return result;
    },

    _resetChart() {
      this.chart = this.maskChart = this.xChart = this.yChart = null;
    },

    _drawChart(data) {
      // if (!this.args) {
      // this.args = this._calcArgs(data, this.fWidth, this.fHeight);
      // }
      //实时监听最大值
      this.args = this._calcArgs(data, this.fWidth, this.fHeight);

      if (!this.isEmptyData) {
        const context = this.context;
        const width = parseFloat(this.fWidth);
        const height = parseFloat(this.fHeight);

        this._drawMainCanvas(context, data, width, height, this.args);

        this._drawXLine(data);

        this._drawYLine();

        this.hasPaint = true;
      }
    },

    _calcArgs(data, width, height) {
      if (!this.isEmptyData || data.sell.length && !data.sell[data.sell.length - 1].total || data.buy.length && !data.buy[data.buy.length - 1].total) {
        // const maxAmount = Math.max(data.sell[0].total, data.buy[data.buy.length - 1].total);
        const maxAmount = Math.max(data.sell[data.sell.length - 1].total, data.buy[data.buy.length - 1].total);
        const scaleH = maxAmount / height;
        const scaleW = width / 2 / data.sell.length;
        return {
          maxAmount,
          scaleH,
          scaleW
        };
      }

      return null;
    },

    //堆积深度图
    _drawMainCanvas(context, data, width, height, args) {
      if (!args) {
        throw new Error('args not ok');
      }

      if (this.hasPaint) {
        context.clearRect(0, 0, width, height);
      } //深度图背景色


      context.fillStyle = this.$store.state.background == 'day' ? '#FFFFFF' : '#1E222A'; // context.fillStyle = '#FFFBF6';

      context.fillRect(0, 0, width, height);

      if (!this.initState) {
        this.initState = true;
        this.context.scale(2, 2);
      }

      const {
        maxAmount
      } = args;
      const paddingTop = this.paddingTop;
      const gap = this.gap;
      const equalWidth = width / 2;
      let tempList = [];
      let x = 0;
      let y = paddingTop;
      let lastPoint = {
        x,
        y
      };
      let buyLength = data.buy.length;
      let sellLength = data.sell.length; // console.log(data.buy[0])

      if (buyLength) {
        const scaleW = equalWidth / (buyLength ? buyLength : 1);
        context.beginPath();
        context.fillStyle = this.buyFillColor;

        for (let i in data.buy) {
          let item = data.buy[i];
          x = equalWidth - i * scaleW - gap;
          y = height - item.total / maxAmount * (height - 24); //设置买单深度高度

          if (Number(i) === 0 && x > 0) {
            context.lineTo(x, height);
          }

          if (x <= 2) {
            x = 2;
          }

          tempList.push({
            x,
            y,
            value: item,
            side: 'buy'
          });

          if (this.jagged) {
            context.lineTo(x, lastPoint.y);
          }

          context.lineTo(x, y);
          context.stroke();
          lastPoint = {
            x,
            y
          };
        }

        context.lineWidth = 3;
        context.strokeStyle = '#0D7680';
        context.lineTo(0, y);
        context.lineTo(0, height);
        context.lineTo(equalWidth - gap, height);
        context.stroke();
        context.fill();
        context.closePath();
      }

      if (sellLength) {
        const scaleW = equalWidth / (sellLength ? sellLength : 1);
        context.beginPath();
        context.fillStyle = this.sellFillColor;
        context.moveTo(equalWidth + gap, height);
        lastPoint = {
          x: equalWidth + gap,
          y: height
        };

        for (let i in data.sell) {
          let item = data.sell[i];
          x = equalWidth + i * scaleW + gap;
          y = height - item.total / maxAmount * (height - 24); //设置卖单深度高度

          if (x > width - 2) {
            x = width - 2;
          }

          tempList.push({
            x,
            y,
            value: item,
            side: 'sell'
          });

          if (this.jagged) {
            context.lineTo(x, lastPoint.y);
          }

          context.lineTo(x, y);
          lastPoint = {
            x,
            y
          };
        }

        context.lineWidth = 3;
        context.strokeStyle = '#8F223A';
        context.lineTo(width + gap, y);
        context.lineTo(width + gap, height);
        context.lineTo(equalWidth + gap, height);
        context.stroke();
        context.fill();
        context.closePath(); //删除最后一个数组

        tempList.pop();
        tempList = tempList.sort((a, b) => a.x - b.x); // console.log(tempList[0])
        // tempList.forEach((item) => this.valueMap.set([item.x, item.y, item.side], item.value));
        // console.log(this.valueMap.keys())

        let newArray = []; //组装深度图竖线实时可变数据

        tempList.forEach(item => {
          newArray.push({
            x: item.x,
            y: item.y,
            side: item.side,
            value: item.value
          });
        });
        this.valueData = newArray;
      }
    },

    //深度图x轴
    _drawXLine(data) {
      const context = this.xChartContext;
      const width = parseFloat(this.fWidth);

      if (this.hasPaint) {
        context.clearRect(0, 0, width, 24);
      }

      context.font = '10px Sans-Serif'; //深度图x坐标轴背景色

      context.fillStyle = this.$store.state.background == 'day' ? '#1E222A' : '#ffffff'; // context.fillStyle = "rgba(0, 0, 0, 0.35)";

      let buyLength = data.buy.length;
      let sellLength = data.sell.length;
      const equalWidth = width / 2;
      const step = width <= 650 ? 3 : 4;

      this._xPagesFn(buyLength, equalWidth, step, context, data, 'buy', width);

      this._xPagesFn(sellLength, equalWidth, step, context, data, 'sell', width);
    },

    _xPagesFn(length, equalWidth, step, context, data, type, width) {
      if (length) {
        let x = 0;
        let y = 16;
        const scaleW = equalWidth / (length ? length : 1);
        const Divisor = Math.ceil(length / step);

        for (let i = 0; i < length; i++) {
          let item = data[type][i];

          if (i % Divisor) {
            continue;
          }

          let text = item.price;
          let textWidth = Math.floor(context.measureText(text).width);

          if (type === 'sell') {
            x = equalWidth + 16 + i * scaleW;
          } else {
            x = equalWidth - i * scaleW - textWidth;
          }

          if (x + textWidth >= width) {
            x = width - textWidth;
          }

          context.fillText(text, x, y);
        }
      }
    },

    //深度图y轴
    _drawYLine() {
      let x = 0;
      let y = 0;
      const height = parseFloat(this.fHeight);
      const {
        maxAmount
      } = this.args;
      const context = this.yChartContext;

      if (this.hasPaint) {
        context.clearRect(0, 0, 48, height);
      }

      context.font = '10px Sans-Serif'; //深度图y坐标轴背景色

      context.fillStyle = this.$store.state.background == 'day' ? '#1E222A' : '#ffffff'; // context.fillStyle = "rgba(0, 0, 0, 0.35)";
      // 计算Y轴的每个阶段的值

      let seg = maxAmount / 5; // for (let i = 1; i < 6; i++) {
      // Y轴从0 开始

      for (let i = 0; i < 6; i++) {
        x = 6; // y = height - seg * (i - 1) / maxAmount * (height - 24);

        y = height - seg * i / maxAmount * (height - 24);
        context.fillText(utils["default"].toPretty(seg * i), x, y);
      }
    },

    handleMouseMove({
      offsetX,
      offsetY
    }) {
      const valueMap = this.valueMap;
      const valueData = this.valueData;
      const maskContext = this.maskContext;
      const width = this.fWidth;
      const height = this.fHeight;
      const Half = width / 2;
      if (!this.maskContext) return;
      maskContext.clearRect(0, 0, width, height); // for (let key of valueMap.keys()) {

      for (let key of valueData) {
        const x = key.x;
        const y = key.y;
        const side = key.side; // const result = valueMap.get(key);

        const result = key.value; //买卖竖线的颜色

        const colorsDepth = side === 'buy' ? 'rgb(3, 191, 123, 1)' : 'rgb(235, 77, 92)';
        const colorsDepthArc = side === 'buy' ? 'rgba(13, 118, 128, 0.35)' : 'rgba(143, 34, 58, 0.35)';
        const isLeft = offsetX < Half;

        if (offsetX < x) {
          maskContext.strokeStyle = colorsDepth;
          maskContext.lineWidth = 2;
          maskContext.setLineDash([3]);
          maskContext.clearRect(0, 0, width, height); // maskContext.beginPath();
          // maskContext.moveTo(0, y);
          // maskContext.lineTo(width, y);
          // maskContext.stroke();
          // maskContext.closePath();

          maskContext.beginPath();
          maskContext.moveTo(x, y);
          maskContext.lineTo(x, height);
          maskContext.stroke();
          maskContext.closePath();
          maskContext.beginPath(); // maskContext.shadowBlur = 10;
          // maskContext.shadowColor = 'rgba(0, 0, 0, 0.8)';

          maskContext.fillStyle = colorsDepthArc;
          maskContext.arc(x, y, 10, 0, 2 * Math.PI);
          maskContext.fill();
          maskContext.closePath();
          maskContext.beginPath();
          maskContext.fillStyle = colorsDepth;
          maskContext.arc(x, y, 5, 0, 2 * Math.PI);
          maskContext.fill();
          maskContext.closePath();
          maskContext.beginPath();
          maskContext.fillStyle = this.$store.state.background == 'day' ? 'rgb(248, 249, 251)' : 'rgb(19, 23, 34, .9)';
          maskContext.font = '12px bold';
          let widthOffset = 152;
          let heightOffset = 96;
          let left = x - widthOffset / 2;
          let top = y - heightOffset - 10;
          let maxTextWidth = Math.max(maskContext.measureText(this.$t('HashRate.pro.depthChart.title1')).width, maskContext.measureText(this.$t('HashRate.pro.depthChart.title2')).width); // if(maxTextWidth + 20 > widthOffset) {
          //   widthOffset = maxTextWidth + 20;
          // }
          //
          // if(left < 0) {
          //   left = 0
          // }
          // if(left >= width - widthOffset) {
          //   left = width - widthOffset;
          // }

          if (top <= 0) {
            top = y + 10;
          }

          const marginLeft = 10;
          const marginTop = 24;
          const lineHeight = 20;
          const leftPos = left + widthOffset / 2;
          const leftPosAndMargin = left + marginLeft + widthOffset / 2 + 6;
          const rightPos = left - widthOffset / 2;
          const rightPosAndMargin = left - marginLeft + widthOffset - 206;
          const textPos = isLeft ? leftPosAndMargin : rightPosAndMargin; // maskContext.fillRect(left, top, widthOffset, heightOffset);

          this.drawRoundedRect(maskContext, isLeft ? leftPos : rightPos, top, widthOffset, heightOffset, 4, true, false);
          maskContext.fillStyle = colorsDepth;
          maskContext.fillRect(leftPos, top, 2, heightOffset);
          maskContext.textAlign = 'left'; // maskContext.shadowBlur = 6;
          // maskContext.shadowColor = 'rgba(255, 206, 167, 0.5)';
          // maskContext.fillStyle = 'rgba(0, 0, 0, 0.65)';

          maskContext.fillStyle = this.$store.state.background == 'day' ? 'rgb(19, 23, 34)' : '#ffffff';
          maskContext.fillText(this.$t('HashRate.pro.depthChart.title1'), textPos, top + marginTop);
          maskContext.fillStyle = this.$store.state.background == 'day' ? 'rgb(19, 23, 34)' : '#ffffff'; // maskContext.fillStyle = 'black';

          maskContext.fillText(utils["default"].toThousand(result.price), textPos, top + marginTop + 16);
          maskContext.fillStyle = this.$store.state.background == 'day' ? 'rgb(19, 23, 34)' : '#ffffff'; // maskContext.fillStyle = 'rgba(0, 0, 0, 0.65)';

          maskContext.fillText(this.$t('HashRate.pro.depthChart.title2'), textPos, top + marginTop + lineHeight + 24);
          maskContext.fillStyle = this.$store.state.background == 'day' ? 'rgb(19, 23, 34)' : '#ffffff'; // maskContext.fillStyle = 'black';

          maskContext.fillText(utils["default"].toThousand(result.total), textPos, top + marginTop + lineHeight + 40);
          maskContext.closePath();
          break;
        }
      }
    },

    handleMouseOut() {
      const maskContext = this.maskContext;
      const width = this.fWidth;
      const height = this.fHeight;
      if (!this.maskContext) return;
      maskContext.clearRect(0, 0, width, height);
    },

    drawRoundedRect(ctx, x, y, width, height, r, fill, stroke) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + width, y, x + width, y + r, r);
      ctx.arcTo(x + width, y + height, x + width - r, y + height, r);
      ctx.arcTo(x, y + height, x, y + height - r, r);
      ctx.arcTo(x, y, x + r, y, r);

      if (fill) {
        ctx.fill();
      }

      if (stroke) {
        ctx.stroke();
      }

      ctx.restore();
    }

  }
});
// CONCATENATED MODULE: ./components/HashRate/depth-chart.vue?vue&type=script&lang=js&
 /* harmony default export */ var HashRate_depth_chartvue_type_script_lang_js_ = (depth_chartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HashRate/depth-chart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(198)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  HashRate_depth_chartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "870dfd1a",
  "639e7426"
  
)

/* harmony default export */ var depth_chart = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=hash-rate-depth-chart.js.map