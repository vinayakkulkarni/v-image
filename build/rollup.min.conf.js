import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: 'VImage',
    file: 'dist/v-image.min.js',
  },
  plugins: [
    commonjs(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    vue(),
    terser(),
  ],
};
