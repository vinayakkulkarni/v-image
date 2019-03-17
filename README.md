# [V-Image](https://vinayakkulkarni.github.io/v-image/) :camera: · <a href="https://github.com/vinayakkulkarni/v-image/releases/latest"><img src="https://img.shields.io/github/release/vinayakkulkarni/v-image.svg" alt="github release"></a> <a href="http://npmjs.org/package/v-image"><img src="https://img.shields.io/npm/v/v-image.svg" alt="npm version"></a> <a href="https://travis-ci.org/vinayakkulkarni/v-image"><img src="https://travis-ci.org/vinayakkulkarni/v-image.svg?branch=master" alt="Build Status"></a> <a href="http://npm-stat.com/charts.html?package=v-image"><img src="https://img.shields.io/npm/dm/v-image.svg" alt="npm downloads"></a>

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
```
```js
import vImage from 'v-image';
export default {
  components: { vImage },
  methods: {
    localVariable(imageSentFromComponent) {
      this.image = imageSentFromComponent;
    },
  },
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
};
```
## API

### :white_check_mark: :book: Props:
| Name | Type | Required? | Default | Description |
| --- | --- | --- | --- | --- |
| `name` | String | Yes | -- | For `name` attribute for the input field. |
| `alt` | String | No | `Very Interesting Image` | For `alt` attribute for the input field, mostly for proper SEO. |
| `placeholder-alt` | String | No | `Placeholder Image` | This attribute is displayed when placeholder image is displayed. |
| `placeholder-img-style` | Object | No | -- | Styling for the placeholder `img` tag. |
| `placeholder-img-class` | String | No | '' | Class for the placeholder `img` tag. |
| `placeholder-button-style` | Object | No | -- | Styling for the placeholder label text. |
| `placeholder-button-class` | String | No | '' | Class for the placeholder label text. |
| `add-label` | String | No | `Select Image` | Label text shown to user where he clicks and select image popup is shown. |
| `img-style` | Object | No | -- | Styling for the actual user uploaded `img` tag. |
| `img-class` | String | No | '' | Class for the actual user uploaded `img` tag. |
| `button-style` | Object | No | -- | Styling for the `button` tag, visible only when user has uploaded image. |
| `button-class` | Object | No | '' | Class for the `button` tag, visible only when user has uploaded image. |
| `remove-label` | String | No | `Remove Image` | Button text shown to user where he clicks and image data is cleared. |
| `placeholder` | String | No | `https://placehold.it/180x180` | The `src` attribute for a placeholder image. |


### :white_check_mark: :ear: Events:
+ `load-image` (load the base64 to your custom component's variable (see [example](https://github.com/vinayakkulkarni/v-image/tree/master/example))) [default: ""]
+ `remove-image` (let the parent know the remove label was clicked)

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

