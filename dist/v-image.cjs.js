'use strict';

var script = {
  name: 'VImage',
  props: {
    wrapper: {
      type: String,
      "default": '',
      required: false
    },
    placeHolder: {
      type: Object,
      "default": function _default() {
        return {
          wrapper: '',
          image: 'https://picsum.photos/200x200',
          alt: 'Placeholder Image',
          imgClass: '',
          btnClass: '',
          form: {
            name: 'v-image',
            label: 'Select Image',
            accept: 'image/*'
          }
        };
      },
      required: false
    },
    uploaded: {
      type: Object,
      "default": function _default() {
        return {
          wrapper: '',
          alt: 'Very Interesting Image',
          imgClass: '',
          btnClass: '',
          removeBtnText: 'Remove Image'
        };
      },
      required: false
    }
  },
  data: function data() {
    return {
      image: null
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
      var t = this;

      reader.onload = function (e) {
        t.image = e.target.result;
        t.$emit('load-image', t.image);
      };

      reader.readAsDataURL(file);
    },
    removeImage: function removeImage() {
      this.image = null;
      this.$emit('remove-image');
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.wrapper }, [
    !_vm.image
      ? _c(
          "div",
          { class: _vm.placeHolder.wrapper, attrs: { title: "placeholder" } },
          [
            _c("img", {
              class: _vm.placeHolder.imgClass,
              attrs: { src: _vm.placeHolder.image, alt: _vm.placeHolder.alt }
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                class: _vm.placeHolder.btnClass,
                attrs: { for: _vm.placeHolder.form.name }
              },
              [
                _vm._v(
                  "\n      " + _vm._s(_vm.placeHolder.form.label) + "\n    "
                )
              ]
            ),
            _vm._v(" "),
            _c("input", {
              staticStyle: { display: "none" },
              attrs: {
                id: _vm.placeHolder.form.name,
                type: "file",
                name: _vm.placeHolder.form.name,
                accept: _vm.placeHolder.form.accept
              },
              on: { change: _vm.onFileChange }
            })
          ]
        )
      : _c("div", { class: _vm.uploaded.wrapper }, [
          _c("img", {
            class: _vm.uploaded.imgClass,
            attrs: { src: _vm.image, alt: _vm.uploaded.alt }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              class: _vm.uploaded.btnClass,
              attrs: { type: "button" },
              on: { click: _vm.removeImage }
            },
            [_vm._v("\n      " + _vm._s(_vm.uploaded.removeBtnText) + "\n    ")]
          )
        ])
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

module.exports = __vue_component__;
