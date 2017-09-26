module.exports = {
    name: 'v-image',

    template: '<div>\
        <div v-if="!internal_image">\
            <img v-bind:src="placeholder" v-bind:alt="alt" v-bind:style="imgStyle" />\
            <br>\
            <label v-bind:for="name" v-bind:style="buttonStyle">{{ addLabel }}</label>\
            <input type="file" v-bind:name="name" v-bind:id="name" style="display:none;" accept="image/*" v-on:change="onFileChange">\
        </div>\
        <div v-else>\
            <img v-bind:src="internal_image" v-bind:alt="alt" v-bind:style="imgStyle" />\
            <br>\
            <button v-bind:style="buttonStyle" v-on:click="removeImage">{{ removeLabel }}</button>\
        </div>\
    </div>',

    props: {
        image: {
            type: String,
            default: null,
            required: false,
        },

        name: {
            type: String,
            default: 'name',
            required: true,
        },

        placeholder: {
            type: String,
            default: 'https://placehold.it/180x180',
            required: false,
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

        alt: {
            type: String,
            default: 'Very Interesting Image',
            required: false,
        },

        imgStyle: {
            type: Object,
            required: false
        },

        buttonStyle: {
            type: Object,
            required: false
        }
    },
    data: function() {
        return {
            internal_image: null,
        }
    },
    methods: {
        onFileChange: function(e) {
            const files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },

        createImage: function(file) {
            const image = new Image();
            const reader = new FileReader();
            const vm = this;

            reader.onload = function(e) {
                vm.internal_image = e.target.result;
                vm.$emit('loadImage', e.target.result);
            };
            reader.readAsDataURL(file);
        },

        removeImage: function() {
            this.image = null;
            this.internal_image = null;
        }

    }
};