import copy from 'rollup-plugin-copy-glob';
import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  external: Object.keys(pkg.peerDependencies || {}),
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
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
      { files: 'src/**/**/*.{json,md}', dest: 'dist' },
      { files: 'README.md', dest: 'dist' },
      { files: 'package.json', dest: 'dist' },
    ]),
  ],
};
