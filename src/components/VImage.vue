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
        @change="onImageLoad"
      />
    </div>
    <!-- User uploaded image -->
    <div v-else :class="uploaded.wrapper">
      <img :src="image" :alt="uploaded.alt" :class="uploaded.imgClass" />
      <button type="button" :class="uploaded.btnClass" @click="onImageRemove">
        {{ uploaded.removeBtnText }}
      </button>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import type { PropType } from 'vue';

  type CommonFields = {
    wrapper?: string;
    alt?: string;
    imgClass?: string;
    btnClass?: string;
  };
  type Placeholder = {
    image?: string;
  } & CommonFields;
  type Uploaded = {
    removeBtnText?: string;
  } & CommonFields;
  type VImageForm = {
    name?: string;
    label?: string;
    accept?: string;
  };

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
    emits: ['image-removed', 'image-loaded'],
    setup(_, { emit }) {
      let image = ref(null as null | string);
      const onImageRemove = (): void => {
        image.value = null;
        emit('image-removed', true);
      };
      const onImageLoad = (e: Event | DragEvent): void => {
        const target = (e as Event).target as HTMLInputElement;
        const dataTransfer = (e as DragEvent).dataTransfer;
        if (e instanceof DragEvent) {
          readFiles(dataTransfer!.files);
        } else {
          readFiles(target.files!);
        }
      };
      const readFiles = (files: FileList) => {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          image.value = e.target?.result as string;
          emit('image-loaded', e.target?.result);
        };
        reader.readAsDataURL(files[0]);
      };

      return {
        image,
        onImageLoad,
        onImageRemove,
      };
    },
  });
</script>
