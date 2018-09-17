import { dark } from 'grommet/themes';
import { deepFreeze, deepMerge } from 'grommet/utils/object';
import base from './base';

export default deepFreeze(deepMerge(deepMerge(base, dark), {
  anchor: {
    color: {
      dark: '#fdfff2',
      light: '#FFCA58',
    },
  },
}));
