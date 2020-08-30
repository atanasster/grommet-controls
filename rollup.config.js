import copy from 'rollup-plugin-copy-glob';
import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  external: [...[
    'text-mask-addons',
    'text-mask-core',
  ], ...Object.keys(pkg.peerDependencies || {})],
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
    },
  ],
  plugins: [
    external(),
    typescript({
      // eslint-disable-next-line global-require
      typescript: require('typescript'),
    }),
    copy([
      { files: 'README.md', dest: 'dist' },
      { files: 'package.json', dest: 'dist' },
    ]),
    del({ targets: 'dist/*' }),
  ],
};
