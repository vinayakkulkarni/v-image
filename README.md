# [v-image](https://vinayakkulkarni.github.io/v-image/) 📷

<a href="https://github.com/vinayakkulkarni/v-image/releases/latest"><img src="https://img.shields.io/github/release/vinayakkulkarni/v-image.svg" alt="github release"></a>
<a href="https://github.com/vinayakkulkarni/v-image/actions/workflows/ci.yml"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/vinayakkulkarni/v-image/ci"></a>
<a href="http://npmjs.org/package/v-image"><img src="https://img.shields.io/npm/v/v-image.svg" alt="npm version"></a>
<a href="http://npm-stat.com/charts.html?package=v-image"><img src="https://img.shields.io/npm/dm/v-image.svg" alt="npm downloads"></a>
<a href="https://app.netlify.com/sites/v-image/deploys"><img alt="Netlify Status" src="https://img.shields.io/netlify/341e9f45-256e-4ad0-9f7f-b948b60f4e99"/></a>
<a href="https://lgtm.com/projects/g/vinayakkulkarni/v-image/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/vinayakkulkarni/v-image.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://codebeat.co/projects/github-com-vinayakkulkarni-v-image-master"><img alt="codebeat badge" src="https://codebeat.co/badges/055e70c6-1d9c-4d11-9059-2b6960b84731" /></a>

## Demo

[![Edit v-image](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/v-image-h16uk?fontsize=14&hidenavigation=1&theme=dark)

## Features

- 💪 Built with [TypeScript](https://www.typescriptlang.org/).
- 🌠 Built with [Vue 2](https://vuejs.org/) w/ [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html)
- ⚡ Zero dependencies.

## Table of Contents

- [v-image 📷](#v-image-)
  - [Demo](#demo)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Build Setup](#build-setup)
    - [TypeScript](#typescript)
    - [Usage](#usage)
    - [Example](#example)
    - [API](#api)
      - [Props](#props)
      - [Events](#events)
  - [Contributing](#contributing)
  - [License](#license)
  - [Author](#author)
### Installation
``` bash
npm i v-image
// or
yarn add v-image
```


### Build Setup

``` bash
# install dependencies
$ npm install

# package lib
$ npm run build
```

### TypeScript

> You can import the typings by including `v-image` in `compilerOptions.types` section of your `tsconfig.json` file.

### Usage

Browser:
CDN: [UNPKG](https://unpkg.com/v-image/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/v-image/dist/) (available as `window.VImage`)

Module Bundler:
```javascript
import { VImage } from 'v-image';
Vue.component('VImage', VImage);
```
Or use locally
```javascript
import { VImage } from 'v-image';
```

Or use it as a plugin:
```js
import VImage from 'v-image';
import Vue from 'vue';

Vue.use(VImage);
```

For Nuxt, create a file in `plugins/v-image.ts`

```js
import VImage from 'v-image';
import Vue from 'vue';

Vue.use(VImage);
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
}
```

### Example

```html
<template>
  <v-image
    wrapper="flex justify-center items-center content-center w-full h-full"
    :placeholder="placeholder"
    :form="form"
    :uploaded="uploaded"
    @image-loaded="saveImage"
    @image-removed="deleteImage"
  />
</template>
```
```js
/* Used Tailwind Utility classes, checkout the example dir */
import { VImage } from 'v-image';
export default {
  components: { VImage },
  data() {
    return {
      placeholder: {
        image: 'https://picsum.photos/1000/1000',
        alt: 'Placeholder Image',
        imgClass: 'block rounded object-contain object-center max-w-xs',
        btnClass: 'block btn cursor-pointer text-center',
        wrapper: 'p-4 max-w-xs w-full border border-gray-400 border-dotted',
      },
      form: {
        name: 'myImage',
        label: 'Select dope Image',
        accept: 'image/jpg',
      },
      uploaded: {
        wrapper: 'p-4 max-w-xs w-full border border-gray-400 border-dotted',
        alt: 'User uploaded dope image',
        imgClass: 'block rounded object-contain object-center max-w-xs',
        btnClass: 'block btn cursor-pointer text-center w-full',
        removeBtnText: 'Remove image',
      },
      image: '' as string | null,
    };
  },
  methods: {
    saveImage(image: string) {
      this.image = image;
    },
    deleteImage(deleted: boolean) {
      if (deleted) {
        this.image = null;
      }
    },
  },
};
```

### API

#### Props
|   Name  |   Type    |     Required?   |   Default   |   Description   |
|   ---   |   ---     |     ---         |   ---       |   ---           |
| `wrapper` | String  | No | '' | The wrapper classes for the top level `<div>`|
| `placeholder` | Object  | No | - |  The placeholder image & input related code|
| `placeholder.wrapper` | String  | No | '' | Any wrapper classes for the placeholder `<div>` |
| `placeholder.image` | String  | No | 'https://picsum.photos/200x200' |  The placeholder image |
| `placeholder.alt` | String  | No | 'Placeholder Image' |  The placeholder image alt attribute |
| `placeholder.imgClass` | String  | No | '' |  Any placeholder image classes |
| `placeholder.btnClass` | String  | No | '' |  `Select Image` button classes |
| `form` | Object  | No | - |  The placeholder input form |
| `form.name` | String  | No | 'v-image' |  Enable the label to interact with the `<input />`|
| `form.label` | String  | No | 'Select Image' |  The label/button text |
| `form.accept` | String  | No | 'image/*' |  Abilty to accept file types |
| `uploaded` | Object  | No | - |  The user uploaded image related `Object` |
| `uploaded.wrapper` | String  | No | '' | Any wrapper classes for the uploaded image `<div>` |
| `uploaded.alt` | String  | No | 'Very Interesting Image' |  The actual uploaded image alt attribute |
| `uploaded.imgClass` | String  | No | '' |  Uploaded image classes |
| `uploaded.btnClass` | String  | No | '' |  `Remove Image` button classes |
| `uploaded.removeBtnText` | String  | No | 'Remove Image' |  `Remove Image` button text |


#### Events
|   Name  |   Return Type    |     Required?   |      Description   |
|   ---   |   ---     |     ---         |     ---           |
| `@image-loaded` | String  | No | Sends the image base64 |
| `@image-removed` | Boolean  | No | Emits `true` if image is removed |

## Contributing 

1. Fork it ( [https://github.com/vinayakkulkarni/v-image/fork](https://github.com/vinayakkulkarni/v-image/fork) )
2. Create your feature branch (`git checkout -b feat/new-feature`)
3. Commit your changes (`git commit -Sam 'feat: add feature'`)
4. Push to the branch (`git push origin feat/new-feature`)
5. Create a new [Pull Request](https://github.com/vinayakkulkarni/v-image/compare)

_Note_: 
1. Please contribute using [Github Flow](https://guides.github.com/introduction/flow/)
2. Commits & PRs will be allowed only if the commit messages & PR titles follow the [conventional commit standard](https://www.conventionalcommits.org/), _read more about it [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)_
3. PS. Ensure your commits are signed. _[Read why](https://withblue.ink/2020/05/17/how-and-why-to-sign-git-commits.html)_


## License

MIT &copy; Vinayak Kulkarni

## Author

**v-image** © [Vinayak](https://github.com/vinayakkulkarni), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Vinayak Kulkarni with help from contributors ([list](https://github.com/vinayakkulkarni/v-image/contributors)).

> [vinayakkulkarni.dev](https://vinayakkulkarni.dev) · GitHub [@vinayakkulkarni](https://github.com/vinayakkulkarni) · Twitter [@\_vinayak_k](https://twitter.com/_vinayak_k)

