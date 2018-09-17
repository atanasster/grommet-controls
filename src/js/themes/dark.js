import { dark } from 'grommet/themes';
import { deepFreeze, deepMerge } from 'grommet/utils/object';
import base from './base';

export default deepFreeze(deepMerge(deepMerge(base, dark), {
  anchor: {
    color: {
      dark: '#FFCA58',
      light: '#6194EB',
    },
  },
}));
