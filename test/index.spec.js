const Vue = require('vue');
const VImage = require('v-image');

function getComponent(Component, propsData) {
  const Ctor = Vue.extend(Component);
  return new Ctor({ propsData }).$mount();
}

var exampleData = {
  image: 'https://placehold.it/180x180',
  alt: 'Placeholder Image',
  imgClass: '',
  btnClass: '',
  form: {
    name: 'v-image',
    label: 'Select Image',
    accept: 'image/*',
  },
};

describe('VImage', function () {
  it('has correct DOM structure', function () {
    const vm = getComponent(VImage, {
      data: exampleData,
    });

    expect(vm.$el.nodeName).toBe('DIV');
  });

  it('has correct required props', function () {
    const vm = getComponent(VImage, {
      data: exampleData,
    });

    expect(vm.placeHolder.form.name).toBe(exampleData.form.name);
  });

  it('has correct non-required props', function () {
    const vm = getComponent(VImage, {
      data: exampleData,
    });

    expect(vm.placeHolder.alt).toBe(exampleData.alt);
  });
});
