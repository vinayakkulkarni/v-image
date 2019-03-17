<template>
  <v-image
    name="myImage"
    alt="Much Wow!"
    placeholder-alt="Placeholder image"
    :placeholder-img-style="placeholderImgStyle"
    :placeholder-button-style="placeholderBtnStyle"
    :placeholder-img-class="placeholderImgClass"
    :placeholder-button-class="placeholderButtonClass"
    :img-style="imgStyle"
    :add-label="add"
    :remove-label="remove"
    @load-image="localVariable"
    @remove-image="removeVariable"
  />
</template>

<script>
import vImage from '../src/v-image.vue';

export default {
  name: 'VImageDemo',
  components: { vImage },
  data: () => ({
    image: '',
    add: 'Select a dopeass Image',
    remove: 'Remove this dopeass image',
    placeholderImgStyle: {
      height: '200px',
      width: '200px',
    },
    imgStyle: {
      height: '200px',
      width: '200px',
    },
    placeholderBtnStyle: {
      color: '#333333'
    },
    placeholderImgClass: 'image-responsive',
    placeholderButtonClass: 'ui btn',
  }),
  methods: {
    localVariable(imageSentFromComponent) {
      this.image = imageSentFromComponent;
    },
    removeVariable() {
      this.image = null;
    },
  },
};
</script>
