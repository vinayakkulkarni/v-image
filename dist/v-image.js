(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VImage = factory());
}(this, (function () { 'use strict';

  var script = {
    name: 'VImage',
    props: {
      image: {
        type: String,
        default: null,
        required: false
      },
      name: {
        type: String,
        default: 'name',
        required: true
      },
      placeholder: {
        type: String,
        default: 'https://placehold.it/180x180',
        required: false
      },
      addLabel: {
        type: String,
        default: 'Select Image',
        required: false
      },
      removeLabel: {
        type: String,
        default: 'Remove Image',
        required: false
      },
      placeholderAlt: {
        type: String,
        default: 'Placeholder Image',
        required: false
      },
      alt: {
        type: String,
        default: 'Very Interesting Image',
        required: false
      },
      placeholderImgStyle: {
        type: Object,
        default: function _default() {},

        required: false
      },
      placeholderImgClass: {
        type: String,
        default: '',
        required: false
      },
      placeholderButtonStyle: {
        type: Object,
        default: function _default() {},

        required: false
      },
      placeholderButtonClass: {
        type: String,
        default: '',
        required: false
      },
      imgStyle: {
        type: Object,
        default: function _default() {},

        required: false
      },
      imgClass: {
        type: String,
        default: '',
        required: false
      },
      buttonStyle: {
        type: Object,
        default: function _default() {},

        required: false
      },
      buttonClass: {
        type: String,
        default: '',
        required: false
      }
    },
    data: function data() {
      return {
        internal_image: null
      };
    },
    methods: {
      onFileChange: function onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.createImage(files[0]);
      },
      createImage: function createImage(file) {
        var reader = new FileReader();
        var vm = this;

        reader.onload = function (e) {
          vm.internal_image = e.target.result;
          vm.$emit('loadImage', e.target.result);
        };
        reader.readAsDataURL(file);
      },
      removeImage: function removeImage() {
        this.image = null;
        this.internal_image = null;
        this.$emit('removeImage');
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    }

    var options = typeof script === 'function' ? script.options : script;

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true;

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    }

    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      hook = function hook(context) {
        context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        }

        if (style) {
          style.call(this, createInjectorSSR(context));
        }

        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };

      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  var __vue_script__ = script;

  var __vue_render__ = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [!_vm.internal_image ? _c("div", [_c("img", {
      class: _vm.placeholderImgClass,
      style: _vm.placeholderImgStyle,
      attrs: { src: _vm.placeholder, alt: _vm.placeholderAlt }
    }), _vm._v(" "), _c("br"), _vm._v(" "), _c("label", {
      class: _vm.placeholderButtonClass,
      style: _vm.placeholderButtonStyle,
      attrs: { for: _vm.name }
    }, [_vm._v("\n      " + _vm._s(_vm.addLabel) + "\n    ")]), _vm._v(" "), _c("input", {
      staticStyle: { display: "none" },
      attrs: {
        id: _vm.name,
        type: "file",
        name: _vm.name,
        accept: "image/*"
      },
      on: { change: _vm.onFileChange }
    })]) : _c("div", [_c("img", {
      class: _vm.imgClass,
      style: _vm.imgStyle,
      attrs: { src: _vm.internal_image, alt: _vm.alt }
    }), _vm._v(" "), _c("br"), _vm._v(" "), _c("button", {
      class: _vm.buttonClass,
      style: _vm.buttonStyle,
      on: { click: _vm.removeImage }
    }, [_vm._v("\n      " + _vm._s(_vm.removeLabel) + "\n    ")])])]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  var __vue_inject_styles__ = undefined;

  var __vue_scope_id__ = undefined;

  var __vue_module_identifier__ = undefined;

  var __vue_is_functional_template__ = false;


  var VImage = normalizeComponent_1({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

  return VImage;

})));
