# [V-Image](https://vinayakkulkarni.github.io/v-image/) :camera: · <a href="https://github.com/vinayakkulkarni/v-image/releases/latest"><img src="https://img.shields.io/github/release/vinayakkulkarni/v-image.svg" alt="github release"></a> <a href="http://npmjs.org/package/v-image"><img src="https://img.shields.io/npm/v/v-image.svg" alt="npm version"></a> <a href="https://travis-ci.org/vinayakkulkarni/v-image"><img src="https://travis-ci.org/vinayakkulkarni/v-image.svg?branch=master" alt="Build Status"></a> <a href="http://npm-stat.com/charts.html?package=v-image"><img src="https://img.shields.io/npm/dm/v-image.svg" alt="npm downloads"></a>

+ This is [on GitHub](https://github.com/vinayakkulkarni/v-image)  so let me know if I've b0rked it somewhere, give me a star :star: if you like it :beers:
+ Demo here -> [v-image](https://vinayakkulkarni.github.io/v-image/)

### :white_check_mark: Install :ok_hand:
``` bash
npm i v-image
// or
yarn add v-image
```

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
  <v-image alt="Alt Text for the Image" name="name" @load-image="localVariable" :add-label="'My Custom Label'" :remove-label="'My Custom Remove Label'"></v-image>
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
```

### :white_check_mark: :book: Props:
| Name | Type | Required? | Default | Description |
| --- | --- | --- | --- | --- |
| `name` | String | Yes | -- | For `name` attribute for the input field. |
| `alt` | String | No | `Very Interesting Image` | For `alt` attribute for the input field, mostly for proper SEO. |
| `imgStyle` | Object | No | -- | Styling for the `img` tag. |
| `add-label` | String | No | `Select Image` | Label text shown to user where he clicks and select image popup is shown. |
| `buttonStyle` | Object | No | -- | Styling for the `button` & `label` tag. |
| `remove-label` | String | No | `Remove Image` | Button text shown to user where he clicks and image data is cleared. |


### :white_check_mark: :ear: Events:
+ `load-image` (load the base64 to your custom component's variable (see [example](https://github.com/vinayakkulkarni/v-image/tree/master/example))) [default: ""]
+ `removeImage` (let the parent know the remove label was clicked)

## NPM :octocat:

[![NPM](https://nodei.co/npm/v-image.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/v-image/)
