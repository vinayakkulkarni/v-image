<template>
  <div :class="wrapper">
    <!-- Placeholder Image -->
    <div v-if="!image" title="placeholder" :class="placeHolder.wrapper">
      <img
        :src="placeHolder.image"
        :alt="placeHolder.alt"
        :class="placeHolder.imgClass"
      />
      <label :for="placeHolder.form.name" :class="placeHolder.btnClass">
        {{ placeHolder.form.label }}
      </label>
      <input
        :id="placeHolder.form.name"
        type="file"
        :name="placeHolder.form.name"
        style="display: none;"
        :accept="placeHolder.form.accept"
        @change="onFileChange"
      />
    </div>
    <!-- User uploaded image -->
    <div v-else :class="uploaded.wrapper">
      <img :src="image" :alt="uploaded.alt" :class="uploaded.imgClass" />
      <button type="button" :class="uploaded.btnClass" @click="removeImage">
        {{ uploaded.removeBtnText }}
      </button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'VImage',
    props: {
      wrapper: {
        type: String,
        default: '',
        required: false,
      },
      // placeholder specific code
      placeHolder: {
        type: Object,
        default: () => ({
          wrapper: '',
          image: 'https://picsum.photos/200x200',
          alt: 'Placeholder Image',
          imgClass: '',
          btnClass: '',
          form: {
            name: 'v-image',
            label: 'Select Image',
            accept: 'image/*',
          },
        }),
        required: false,
      },
      // user uploaded image
      uploaded: {
        type: Object,
        default: () => ({
          wrapper: '',
          alt: 'Very Interesting Image',
          imgClass: '',
          btnClass: '',
          removeBtnText: 'Remove Image',
        }),
        required: false,
      },
    },
    data: () => ({
      image: null,
    }),
    methods: {
      onFileChange(e) {
        const files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.createImage(files[0]);
      },
      createImage(file) {
        const reader = new FileReader();
        const t = this;
        reader.onload = (e) => {
          t.image = e.target.result;
          t.$emit('load-image', t.image);
        };
        reader.readAsDataURL(file);
      },
      removeImage() {
        this.image = null;
        this.$emit('remove-image');
      },
    },
  };
</script>
