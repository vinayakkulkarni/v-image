<template>
  <v-github-icon url="https://github.com/vinayakkulkarni/v-image" />
  <v-image
    wrapper="flex flex-col justify-center items-center content-center w-full h-full"
    :placeholder="placeholder"
    :form="form"
    :uploaded="uploaded"
    @image-loaded="onImageLoad"
    @image-removed="onImageRemove"
  />
  <!-- Netlify Badge -->
  <div class="absolute bottom-4 right-4">
    <a
      href="https://app.netlify.com/sites/v-image/deploys"
      aria-label="View deploys on Netlify"
      target="_blank"
      rel="noopener noreferrer"
      class="gray-400"
    >
      <img
        src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
        alt="Deploys by Netlify"
      />
    </a>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import type { Ref } from 'vue';
  import { VGithubIcon } from 'v-github-icon';
  import { VImage } from 'v-image';

  export default defineComponent({
    components: {
      VImage,
      VGithubIcon,
    },
    setup() {
      const image: Ref<null | string> = ref(null);
      const placeholder = ref({
        image: 'https://picsum.photos/1000/1000',
        alt: 'Placeholder Image',
        imgClass: 'block rounded object-contain min-h-0 w-72',
        btnClass:
          'cursor-pointer inline-flex items-center justify-center mt-4 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-72',
        wrapper: 'p-4 max-w-xs w-full border border-gray-400 border-dotted',
      });
      const form = ref({
        name: 'myImage',
        label: 'Select Image',
        accept: 'image/jpg',
      });
      const uploaded = ref({
        wrapper: 'p-4 max-w-xs w-full border border-gray-400 border-dotted',
        alt: 'User uploaded dope image',
        imgClass: 'block rounded object-contain min-h-0 w-72',
        btnClass:
          'cursor-pointer inline-flex items-center justify-center mt-4 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-72',
        removeBtnText: 'Remove image',
      });

      const onImageLoad = (img: string) => {
        image.value = img;
      };
      const onImageRemove = (deleted: boolean) => {
        if (deleted) {
          image.value = null;
        }
      };

      return {
        placeholder,
        form,
        uploaded,
        onImageLoad,
        onImageRemove,
      };
    },
  });
</script>
<style>
  @import 'v-github-icon/dist/v-github-icon.css';
</style>
