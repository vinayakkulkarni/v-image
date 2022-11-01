import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  base: '/v-image/',
  // optimizeDeps: {
  //   include: ['dash-shaka-playback', 'clappr'],
  // },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
  plugins: [vue(), WindiCSS()],
});
