import { grommet } from 'grommet/themes';
import { deepFreeze, deepMerge } from 'grommet/utils';
import base from './base';

export default deepFreeze(deepMerge(deepMerge(grommet, base), {
  global: {
    colors: {
      'accent-1': '#FD6FFF',
      'accent-2': '#61EC9F',
      'accent-3': '#60EBE1',
      'accent-4': '#FFCA58',
      'neutral-1': '#3D138D',
      'neutral-2': '#607D8B',
      'neutral-3': '#00C781',
      'neutral-4': '#87794E',
      'neutral-5': '#FFB202',
    },
  },
  anchor: {
    color: {
      dark: '#ede1ff',
      light: '#9060EB',
    },
  },
}));
