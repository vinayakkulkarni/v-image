import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  plugins: [commonjs(), babel(), vue(), terser()],
  output: {
    format: 'umd',
    name: 'VImage',
    file: 'dist/v-image.min.js',
  },
};
