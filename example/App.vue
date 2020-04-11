<template>
  <v-image
    wrapper="flex justify-center items-center content-center w-full h-full"
    :place-holder="placeholder"
    :uploaded="uploaded"
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
      placeholder: {
        image: 'https://picsum.photos/1000/1000',
        alt: 'Placeholder Image',
        imgClass: 'block rounded object-contain object-center max-w-xs',
        btnClass: 'block btn cursor-pointer text-center',
        wrapper: 'p-4 max-w-xs w-full border border-gray-400 border-dotted',
        form: {
          name: 'myImage',
          label: 'Select an Image',
          accept: 'image/jpg',
        },
      },
      uploaded: {
        wrapper: 'p-4 max-w-xs w-full border border-gray-400 border-dotted',
        alt: 'User uploaded dope image',
        imgClass: 'block rounded object-contain object-center max-w-xs',
        btnClass: 'block btn cursor-pointer text-center w-full',
        removeBtnText: 'Remove image',
      },
      image: '',
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
<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
  body {
    font-family: 'Nunito', sans-serif;
    height: 100vh;
    width: 100vw;
    margin: 0;
  }
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .justify-center {
    justify-content: center;
  }
  .items-center {
    align-items: center;
  }
  .content-center {
    align-content: center;
  }
  .max-w-xs {
    max-width: 20rem !important;
  }
  .w-full {
    width: 100% !important;
  }
  .h-full {
    height: 100% !important;
  }
  .border {
    border-width: 1px;
  }
  .border-gray-400 {
    border-color: #cbd5e0;
  }
  .border-dotted {
    border-style: dotted;
  }
  .p-4 {
    padding: 1rem;
  }
  .text-center {
    text-align: center;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .object-contain {
    object-fit: contain;
  }
  .object-center {
    object-position: center;
  }
  .h-24 {
    height: 10rem;
  }
  .btn {
    font-weight: 700 !important;
    margin-top: 0.75rem !important;
    color: white;
    background-color: #4299e1 !important;
    border-radius: 0.25rem !important;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }
</style>
