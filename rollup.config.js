// @noflow
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import { uglify } from 'rollup-plugin-uglify';

const env = process.env.NODE_ENV
const config = {
  output: {
    format: 'umd',
    name: 'ReduxJSToolkitPersist',
    exports: 'named',
    sourcemap: true,  
  },
  plugins: [
    nodeResolve({
      jsnext: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
}

config.plugins.forEach(plugin => {
  plugin.meta = { rollupVersion: '5.2' };
});

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true
      },
    })
  )
}

export default config

