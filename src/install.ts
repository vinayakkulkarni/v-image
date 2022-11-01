import { App as Application } from 'vue';
import VImage from './components/VImage.vue';

let installed = false;

const install = (app: Application) => {
  if (!installed) {
    app.component('VImage', VImage);
    installed = true;
  }
};

export default install;
