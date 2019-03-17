<template>
  <div>
    <!-- Placeholder Image -->
    <div v-if="!internal_image">
      <img
        :src="placeholder"
        :alt="placeholderAlt"
        :style="placeholderImgStyle"
        :class="placeholderImgClass"
      >
      <br>
      <label
        :for="name"
        :style="placeholderButtonStyle"
        :class="placeholderButtonClass"
      >
        {{ addLabel }}
      </label>
      <input
        :id="name"
        type="file"
        :name="name"
        style="display: none;"
        accept="image/*"
        @change="onFileChange"
      >
    </div>
    <!-- When the user loads the image -->
    <div v-else>
      <img
        :src="internal_image"
        :alt="alt"
        :style="imgStyle"
        :class="imgClass"
      >
      <br>
      <button
        :style="buttonStyle"
        :class="buttonClass"
        @click="removeImage"
      >
        {{ removeLabel }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VImage',
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
      required: false,
    },
    removeLabel: {
      type: String,
      default: 'Remove Image',
      required: false,
    },
    placeholderAlt: {
      type: String,
      default: 'Placeholder Image',
      required: false,
    },
    alt: {
      type: String,
      default: 'Very Interesting Image',
      required: false,
    },
    placeholderImgStyle: {
      type: Object,
      default() {},
      required: false,
    },
    placeholderImgClass: {
      type: String,
      default: '',
      required: false,
    },
    placeholderButtonStyle: {
      type: Object,
      default() {},
      required: false,
    },
    placeholderButtonClass: {
      type: String,
      default: '',
      required: false,
    },
    imgStyle: {
      type: Object,
      default() {},
      required: false,
    },
    imgClass: {
      type: String,
      default: '',
      required: false,
    },
    buttonStyle: {
      type: Object,
      default() {},
      required: false,
    },
    buttonClass: {
      type: String,
      default: '',
      required: false,
    },
  },
  data: () => ({
    internal_image: null,
  }),
  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      const reader = new FileReader();
      const vm = this;

      reader.onload = e => {
        vm.internal_image = e.target.result;
        vm.$emit('loadImage', e.target.result);
      };
      reader.readAsDataURL(file);
    },
    removeImage() {
      this.image = null;
      this.internal_image = null;
      this.$emit('removeImage');
    },
  },
};
</script>
