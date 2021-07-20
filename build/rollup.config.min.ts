import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import beep from '@rollup/plugin-beep';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';
import pkg from '../package.json';

const plugins = [
  alias({
    entries: {
      vue: 'vue/dist/vue.runtime.esm.js',
    },
  }),
  resolve({
    extensions: ['.js', '.ts', '.vue'],
    browser: true,
  }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
  }),
  commonjs({
    extensions: ['.js', '.ts', '.vue'],
    exclude: 'src/**',
    include: 'node_modules/**',
  }),
  vue({ css: false }),
  scss({
    output: 'dist/v-image.min.css',
    outputStyle: 'compressed',
  }),
  sucrase({
    exclude: ['node_modules/**'],
    transforms: ['typescript'],
  }),
  beep(),
  terser({
    compress: {
      drop_console: true,
      drop_debugger: true,
    },
  }),
];

const banner = `/*!
  * ${pkg.name} v${pkg.version}
  * (c) ${new Date().getFullYear()} ${pkg.author.name}
  * @license ${pkg.license}
  */`;

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/v-image.min.js',
      format: 'umd',
      name: 'VImage',
      exports: 'named',
      banner,
      sourcemap: true,
      globals: {
        vue: 'vue',
        '@vue/composition-api': 'vueCompositionApi',
      },
    },
  ],
  plugins,
  external: ['vue', '@vue/composition-api'],
};
