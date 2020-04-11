# [v-image](https://vinayakkulkarni.github.io/v-image/) 📷
<a href="https://github.com/vinayakkulkarni/v-image/releases/latest"><img src="https://img.shields.io/github/release/vinayakkulkarni/v-image.svg" alt="github release"></a> <a href="http://npmjs.org/package/v-image"><img src="https://img.shields.io/npm/v/v-image.svg" alt="npm version"></a> <a href="https://travis-ci.org/vinayakkulkarni/v-image"><img src="https://travis-ci.org/vinayakkulkarni/v-image.svg?branch=master" alt="Build Status"></a> <a href="http://npm-stat.com/charts.html?package=v-image"><img src="https://img.shields.io/npm/dm/v-image.svg" alt="npm downloads"></a> [![codebeat badge](https://codebeat.co/badges/055e70c6-1d9c-4d11-9059-2b6960b84731)](https://codebeat.co/projects/github-com-vinayakkulkarni-v-image-master)

+ This is [on GitHub](https://github.com/vinayakkulkarni/v-image)  so let me know if I've b0rked it somewhere, give me a star :star: if you like it :beers:
+ Demo here -> [v-image](https://vinayakkulkarni.github.io/v-image/)

### :white_check_mark: Install :ok_hand:
``` bash
npm i v-image
// or
yarn add v-image
```

CDN: [UNPKG](https://unpkg.com/v-image/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/v-image/dist/) (available as `window.VImage`)

## :white_check_mark: Usage :mortar_board:

Register the component globally:
```javascript
Vue.component('vImage', require('v-image'));
```
Or use locally
```javascript
import vImage from 'v-image';
```

### :white_check_mark: Example :four_leaf_clover:

```html
<template>
  <v-image
    wrapper="flex justify-center items-center content-center w-full h-full"
    :place-holder="placeholder"
    :uploaded="uploaded"
    @load-image="saveImage"
    @remove-image="removeImage"
  />
</template>
```
```js
/* Used Tailwind Utility classes, checkout the example dir */
import vImage from 'v-image';
export default {
  components: { vImage },
  data: () => ({
    placeholder: {
      wrapper: 'p-4 max-w-xs w-full border border-gray-400 border-dotted',
      image: 'https://picsum.photos/1000/1000',
      alt: 'Placeholder Image',
      imgClass: 'block rounded object-contain object-center max-w-xs',
      btnClass: 'block btn cursor-pointer text-center',
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
    saveImage(imageSentFromComponent) {
      this.image = imageSentFromComponent;
    },
    removeImage() {
      this.image = null;
    },
  },
};
```
## API

### :white_check_mark: :book: Props:
|   Name  |   Type    |     Required?   |   Default   |   Description   |
|   ---   |   ---     |     ---         |   ---       |   ---           |
| `wrapper` | String  | No | '' | The wrapper classes for the top level `<div>`|
| `placeHolder` | Object  | No | - |  The placeholder image & input related code|
| `placeHolder.wrapper` | String  | No | '' | Any wrapper classes for the placeholder `<div>` |
| `placeHolder.image` | String  | No | 'https://picsum.photos/200x200' |  The placeholder image |
| `placeHolder.alt` | String  | No | 'Placeholder Image' |  The placeholder image alt attribute |
| `placeHolder.imgClass` | String  | No | '' |  Any placeholder image classes |
| `placeHolder.btnClass` | String  | No | '' |  `Select Image` button classes |
| `placeHolder.form` | Object  | No | - |  The placeholder input form |
| `placeHolder.form.name` | String  | No | 'v-image' |  Enable the label to interact with the `<input />`|
| `placeHolder.form.label` | String  | No | 'Select Image' |  The label/button text |
| `placeHolder.form.accept` | String  | No | 'image/*' |  Abilty to accept file types |
| `uploaded` | Object  | No | - |  The user uploaded image related `Object` |
| `uploaded.wrapper` | String  | No | '' | Any wrapper classes for the uploaded image `<div>` |
| `uploaded.alt` | String  | No | 'Very Interesting Image' |  The actual uploaded image alt attribute |
| `uploaded.imgClass` | String  | No | '' |  Uploaded image classes |
| `uploaded.btnClass` | String  | No | '' |  `Remove Image` button classes |
| `uploaded.removeBtnText` | String  | No | 'Remove Image' |  `Remove Image` button text |


### :white_check_mark: :ear: Events:
+ `@load-image` (load the base64 to your custom component's variable (see [example](https://github.com/vinayakkulkarni/v-image/tree/master/example)))
+ `@remove-image` (let the parent know the remove label was clicked)

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Author

**v-image** © [Vinayak](https://github.com/vinayakkulkarni), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Vinayak Kulkarni with help from contributors ([list](https://github.com/vinayakkulkarni/v-image/contributors)).

> [vinayak.pw](https://vinayak.pw) · GitHub [@vinayakkulkarni](https://github.com/vinayakkulkarni) · Twitter [@\_vinayak_k](https://twitter.com/_vinayak_k)

