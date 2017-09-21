<template>
  <div>
    <v-image alt="Much Wow!" name="myImage" v-bind:img-style="style" v-on:load-image="localVariable"></v-image>
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
  },
  data() {
    return {
      image: '',
      style: {
        height: '200px',
        width: '200px',
      },
    };
  },
};
</script>
