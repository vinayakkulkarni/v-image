<template>
  <section :class="wrapper">
    <!-- Placeholder Image -->
    <div v-if="!image" title="placeholder" :class="placeholder.wrapper">
      <img
        :src="placeholder.image"
        :alt="placeholder.alt"
        :class="placeholder.imgClass"
      />
      <label :for="form.name" :class="placeholder.btnClass">
        {{ form.label }}
      </label>
      <input
        :id="form.name"
        type="file"
        :name="form.name"
        style="display: none"
        :accept="form.accept"
        @change="onFileChange"
      />
    </div>
    <!-- User uploaded image -->
    <div v-if="typeof image === 'string'" :class="uploaded.wrapper">
      <img :src="image" :alt="uploaded.alt" :class="uploaded.imgClass" />
      <button type="button" :class="uploaded.btnClass" @click="removeImage">
        {{ uploaded.removeBtnText }}
      </button>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent, PropType, ref, Ref } from '@vue/composition-api';
  import { Placeholder, Uploaded, VImageForm } from '../types';

  export default defineComponent({
    name: 'VImage',
    props: {
      wrapper: {
        type: String as PropType<string>,
        default: '',
        required: false,
      },
      placeholder: {
        type: Object as PropType<Placeholder>,
        default: () => {
          return {
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
          } as Placeholder;
        },
        required: false,
      },
      form: {
        type: Object as PropType<VImageForm>,
        default: () => {
          return {
            name: 'v-image',
            label: 'Select Image',
            accept: 'image/*',
          } as VImageForm;
        },
        required: false,
      },
      uploaded: {
        type: Object as PropType<Uploaded>,
        default: () => {
          return {
            wrapper: '',
            alt: 'Very Interesting Image',
            imgClass: '',
            btnClass: '',
            removeBtnText: 'Remove Image',
          } as Uploaded;
        },
        required: false,
      },
    },
    setup(_, { emit }) {
      // Local image variable
      const image: Ref<string | ArrayBuffer | undefined | null> = ref(null);

      /**
       * Removes the image & emits the
       * `remove-image` event
       *
       * @returns {void}
       */
      function removeImage(): void {
        image.value = null;
        emit('image-removed', true);
      }

      /**
       * On change event when
       * file is changed.
       *
       * @param {Event} e - Event on change object
       * @returns {void}
       */
      function onFileChange(e: any): void {
        const target = e.target as HTMLInputElement;
        const dataTransfer = e.dataTransfer as DataTransfer;
        const files: FileList = target.files || dataTransfer.files;
        if (files && files.length) {
          const reader = new FileReader();
          reader.onload = (e: ProgressEvent<FileReader>) => {
            image.value = e.target?.result;
            emit('image-loaded', image);
          };
          reader.readAsDataURL(files[0]);
        }
      }

      return {
        image,
        onFileChange,
        removeImage,
      };
    },
  });
</script>
