/* eslint-disable no-param-reassign */
import { Colors } from './types';
export default (colors: Colors, array: string[], prefix: string) =>
  array.forEach((color, index) => {
    colors[`${prefix}-${index + 1}`] = color;
  });
