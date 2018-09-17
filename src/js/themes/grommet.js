import { grommet } from 'grommet/themes';
import { deepFreeze, deepMerge } from 'grommet/utils';
import base from './base';

export default deepFreeze(deepMerge(deepMerge(base, grommet), {
  anchor: {
    color: {
      dark: '#ede1ff',
      light: '#9060EB',
    },
  },
}));
