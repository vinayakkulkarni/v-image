# [v-image](https://vinayakkulkarni.github.io/v-image/) 📷

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/vinayakkulkarni/v-image/ci?logo=github-actions)](https://github.com/vinayakkulkarni/v-image/actions/workflows/ci.yml)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/vinayakkulkarni/v-image/Ship%20js%20trigger?label=⛴%20Ship.js%20trigger)](https://github.com/vinayakkulkarni/v-image/actions/workflows/shipjs-trigger.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/vinayakkulkarni/v-image?sort=semver&logo=github)](https://github.com/vinayakkulkarni/v-image/releases)
[![npm](https://img.shields.io/npm/v/v-image?logo=npm)](https://www.npmjs.com/package/v-image)
[![npm](https://img.shields.io/npm/dm/v-image?logo=npm)](http://npm-stat.com/charts.html?package=v-image)
[![npm bundle size (version)](https://img.shields.io/bundlephobia/min/v-image/latest)](https://bundlephobia.com/package/v-image@latest)
[![npm type definitions](https://img.shields.io/npm/types/v-image?logo=TypeScript)](https://github.com/vinayakkulkarni/v-image/blob/master/package.json)
[![DeepScan grade](https://deepscan.io/api/teams/9055/projects/11604/branches/426884/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=9055&pid=11604&bid=426884)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/vinayakkulkarni/v-image)](https://snyk.io/test/github/vinayakkulkarni/v-image)
[![LGTM Alerts](https://img.shields.io/lgtm/alerts/github/vinayakkulkarni/v-image?logo=lgtm)](https://lgtm.com/projects/g/vinayakkulkarni/v-image/alerts/)
[![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/vinayakkulkarni/v-image?logo=lgtm)](https://lgtm.com/projects/g/vinayakkulkarni/v-image/context:javascript)
[![Codebeat](https://codebeat.co/badges/055e70c6-1d9c-4d11-9059-2b6960b84731)](https://codebeat.co/projects/github-com-vinayakkulkarni-v-image-master)
[![Netlify](https://app.netlify.com/sites/v-image/deploys)](https://img.shields.io/netlify/341e9f45-256e-4ad0-9f7f-b948b60f4e99?logo=netlify)
[![GitHub contributors](https://img.shields.io/github/contributors/vinayakkulkarni/v-image)](https://github.com/vinayakkulkarni/v-image/graphs/contributors)

[![eslint](https://img.shields.io/npm/dependency-version/v-image/dev/eslint?logo=eslint)](https://eslint.org/)
[![prettier](https://img.shields.io/npm/dependency-version/v-image/dev/prettier?logo=prettier)](https://prettier.io/)
[![vite](https://img.shields.io/npm/dependency-version/v-image/dev/vite?logo=vite)](https://vitejs.dev/)
[![typescript](https://img.shields.io/npm/dependency-version/v-image/dev/typescript?logo=TypeScript)](https://www.typescriptlang.org/)

⚠️ Docs are for Vue 3, for Vue 2 docs, check [this tree](https://github.com/vinayakkulkarni/v-image/tree/v2.6.1#readme)

## Demo

[![Edit v-image](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/v-image-h16uk?fontsize=14&hidenavigation=1&theme=dark)

## Features

- 💪 Built with [TypeScript](https://www.typescriptlang.org/)
- 🌠 Built with [Vue 3](https://vuejs.org/)
- ⚡ Zero dependencies.

## Table of Contents

- [v-image 📷](#v-image-)
  - [Demo](#demo)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Build Setup](#build-setup)
    - [Usage](#usage)
    - [Example](#example)
    - [API](#api)
      - [Props](#props)
      - [Events](#events)
  - [Contributing](#contributing)
  - [Author](#author)

### Installation

```bash
npm i v-image
```

### Build Setup

```bash
# install dependencies
$ npm install

# package lib
$ npm run build
```

### Usage

Browser:
CDN: [UNPKG](https://unpkg.com/v-image/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/v-image/dist/) (available as `window.VImage`)

Global component:

```js
// main.ts
import { VImage } from 'v-image';
import { createApp } from 'vue';

const app = createApp({});
app.component('VImage', VImage);
```

Or use locally

```js
// component.vue
<script lang="ts">
import { VImage } from 'v-image';

export default defineComponent({
  components: {
    VImage,
  },
})
</script>
```

For Nuxt 3, create a file in `plugins/v-image.ts`

```js
import { VImage } from 'v-image';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VImage', VImage);
```

then import the file in `nuxt.config.{j|t}s`:

```js
export default {
  // ...
  plugins: [
    // ...
    { src: '~/plugins/v-image', mode: 'client' },
    // ...
  ],
  // ...
};
```

### Example

```html
<template>
  <v-image
    wrapper="flex justify-center items-center content-center w-full h-full"
    :placeholder="placeholder"
    :form="form"
    :uploaded="uploaded"
    @image-loaded="onImageLoad"
    @image-removed="onImageRemove"
  />
</template>
```

```js
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import type { Ref } from 'vue';
  import { VImage } from 'v-image';

  export default defineComponent({
    components: { VImage },
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
```

### API

#### Props

| Name                     | Type   | Required? | Default                         | Description                                        |
| ------------------------ | ------ | --------- | ------------------------------- | -------------------------------------------------- |
| `wrapper`                | String | No        | ''                              | The wrapper classes for the top level `<div>`      |
| `placeholder`            | Object | No        | -                               | The placeholder image & input related code         |
| `placeholder.wrapper`    | String | No        | ''                              | Any wrapper classes for the placeholder `<div>`    |
| `placeholder.image`      | String | No        | 'https://picsum.photos/200x200' | The placeholder image                              |
| `placeholder.alt`        | String | No        | 'Placeholder Image'             | The placeholder image alt attribute                |
| `placeholder.imgClass`   | String | No        | ''                              | Any placeholder image classes                      |
| `placeholder.btnClass`   | String | No        | ''                              | `Select Image` button classes                      |
| `form`                   | Object | No        | -                               | The placeholder input form                         |
| `form.name`              | String | No        | 'v-image'                       | Enable the label to interact with the `<input />`  |
| `form.label`             | String | No        | 'Select Image'                  | The label/button text                              |
| `form.accept`            | String | No        | 'image/\*'                      | Abilty to accept file types                        |
| `uploaded`               | Object | No        | -                               | The user uploaded image related `Object`           |
| `uploaded.wrapper`       | String | No        | ''                              | Any wrapper classes for the uploaded image `<div>` |
| `uploaded.alt`           | String | No        | 'Very Interesting Image'        | The actual uploaded image alt attribute            |
| `uploaded.imgClass`      | String | No        | ''                              | Uploaded image classes                             |
| `uploaded.btnClass`      | String | No        | ''                              | `Remove Image` button classes                      |
| `uploaded.removeBtnText` | String | No        | 'Remove Image'                  | `Remove Image` button text                         |

#### Events

| Name             | Returns | Description                        |
| ---------------- | ------- | ---------------------------------- |
| `@image-loaded`  | String  | Sends the image in `base64` format |
| `@image-removed` | Boolean | Emits `true` if image is removed   |

## Contributing

1. Fork it ([https://github.com/vinayakkulkarni/v-image/fork](https://github.com/vinayakkulkarni/v-image/fork))
2. Create your feature branch (`git checkout -b feat/new-feature`)
3. Commit your changes (`git commit -Sam 'feat: add feature'`)
4. Push to the branch (`git push origin feat/new-feature`)
5. Create a new [Pull Request](https://github.com/vinayakkulkarni/v-image/compare)

_Note_:

1. Please contribute using [GitHub Flow](https://web.archive.org/web/20191104103724/https://guides.github.com/introduction/flow/)
2. Commits & PRs will be allowed only if the commit messages & PR titles follow the [conventional commit standard](https://www.conventionalcommits.org/), _read more about it [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)_
3. PS. Ensure your commits are signed. _[Read why](https://withblue.ink/2020/05/17/how-and-why-to-sign-git-commits.html)_

## Author

**v-image** © [Vinayak](https://github.com/vinayakkulkarni), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Vinayak Kulkarni with help from contributors ([list](https://github.com/vinayakkulkarni/v-image/contributors)).

> [vinayakkulkarni.dev](https://vinayakkulkarni.dev) · GitHub [@vinayakkulkarni](https://github.com/vinayakkulkarni) · Twitter [@\_vinayak_k](https://twitter.com/_vinayak_k)
