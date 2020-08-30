/* eslint-disable no-param-reassign */
import { Colors } from './types';

export default (colors: Colors, obj: Record<string, string>, prefix: string) =>
  Object.keys(obj).forEach(color => {
    colors[`${prefix}-${color}`] = obj[color];
  });
