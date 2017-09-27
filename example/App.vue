<template>
  <div>
    <v-image alt="Much Wow!" name="myImage" v-bind:img-style="style" v-on:loadImage="localVariable" v-on:removeImage="removeVariable" :add-label="add" :remove-label="remove"></v-image>
  </div>
</template>

<script>
import vImage from 'v-image';

export default {
  components: { vImage },
  methods: {
    localVariable(imageSentFromComponent) {
      this.image = imageSentFromComponent;
      console.log('You have a base64 of the image file.');
    },
    removeVariable() {
      this.image = null;
      console.log('Image was removed by the user.');
    },
  },
  data() {
    return {
      image: '',
      add: 'Select a dopeass Image',
      remove: 'Remove this dopeass image',
      style: {
        height: '200px',
        width: '200px',
      },
    };
  },
};
</script>
