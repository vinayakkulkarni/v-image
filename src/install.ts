import VueCompositionApi from '@vue/composition-api';
import { VueConstructor } from 'vue';
import VImage from './VImage.vue';

let installed = false;

const install = {
  install(Vue: VueConstructor): void {
    if (!installed) {
      Vue.use(VueCompositionApi);
      Vue.component('VImage', VImage);
      installed = true;
    }
  },
};

export default install;
