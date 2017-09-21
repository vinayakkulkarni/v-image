module.exports = {
    name: 'v-image',

    template: '<div>\
        <div v-if="!internal_image">\
            <img src="https://placehold.it/180x180" v-bind:alt="alt" v-bind:style="imgStyle" />\
            <br>\
            <label v-bind:for="name" v-bind:class="buttonStyle">Select Image</label>\
            <input type="file" v-bind:name="name" style="display:none;" accept="image/*" v-on:change="onFileChange">\
        </div>\
        <div v-else>\
            <img v-bind:src="internal_image" v-bind:alt="alt" v-bind:style="imgStyle" />\
            <br>\
            <button v-bind:class="buttonStyle" v-on:click="removeImage">Remove image</button>\
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
        onFileChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },

        createImage(file) {
            let image = new Image();
            let reader = new FileReader();
            let t = this;

            reader.onload = (e) => {
                t.internal_image = e.target.result;
                t.$emit('loadImage', e.target.result);
            };
            reader.readAsDataURL(file);
        },

        removeImage() {
            this.image = null;
            this.internal_image = null;
        }

    }
};