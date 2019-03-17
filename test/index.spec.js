const Vue = require('vue');
const VImage = require('v-image');

function getComponent(Component, propsData) {
    const Ctor = Vue.extend(Component);
    return new Ctor({ propsData }).$mount();
}

var exampleData = {
    image: 'someImagebase64',
    name: 'name',
    alt: 'Very Interesting Image',
};

describe('VImage', function() {
    it('has correct DOM structure', function() {
        const vm = getComponent(VImage, {
            data: exampleData
        });

        expect(vm.$el.nodeName).toBe('DIV');
    });

    it('has correct required props', function() {
        const vm = getComponent(VImage, {
            data: exampleData
        });

        expect(vm.name).toBe(exampleData.name);
    });

    it('has correct non-required props', function() {
        const vm = getComponent(VImage, {
            data: exampleData
        });

        expect(vm.alt).toBe(exampleData.alt);
    });
});