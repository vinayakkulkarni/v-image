import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'cjs',
      file: 'dist/v-image.cjs.js',
    },
    {
      format: 'umd',
      name: 'VImage',
      file: 'dist/v-image.js',
    },
    {
      format: 'es',
      file: 'dist/v-image.esm.js',
    },
  ],
  plugins: [
    commonjs(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    vue(),
  ],
};
