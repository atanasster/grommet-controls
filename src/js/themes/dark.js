import { dark } from 'grommet/themes';
import { deepFreeze, deepMerge } from 'grommet/utils';
import base from './base';

export default deepFreeze(deepMerge(deepMerge(dark, base), {
  global: {
    colors: {
      'accent-1': '#FD6FFF',
      'accent-2': '#60EB9F',
      'accent-3': '#60EBE1',
      'accent-4': '#3D138D',
      'neutral-1': '#EB6060',
      'neutral-2': '#01C781',
      'neutral-3': '#6095EB',
      'neutral-4': '#78AA1C',
      'neutral-5': '#87794E',
    },
  },
  anchor: {
    color: {
      dark: '#FFCA58',
      light: '#275596',
    },
  },
  icon: {
    color: undefined,
  },
}));
