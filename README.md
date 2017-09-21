[![npm](https://img.shields.io/npm/v/v-image.svg)]() [![npm](https://img.shields.io/npm/dt/v-image.svg)]() [![npm](https://img.shields.io/npm/dw/v-image.svg)]() 
# V-Image :camera:

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
  <v-image alt="Alt Text for the Image" name="name" v-on:load-image="localVariable"></v-image>
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
| Name | Type | Required? | Description |
| --- | --- | --- | --- |
| `name` | String | Yes | For `name` attribute for the input field. |
| `alt` | String | No | For `alt` attribute for the input field, mostly for proper SEO. |
| `imgStyle` | Object | No | Styling for the `img` tag. |
| `buttonStyle` | Object | No | Styling for the `button` & `label` tag. |


### :white_check_mark: :ear: Events: 
+ `load-image` (load the base64 to your custom component's variable (see [example](https://github.com/vinayakkulkarni/v-image/tree/master/example))) [default: ""]

## NPM :octocat:  

[![NPM](https://nodei.co/npm/v-image.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/v-image/)
