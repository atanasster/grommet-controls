/* eslint-disable no-param-reassign */

export const colorsFromArray = (colors, array, prefix) =>
  array.forEach((color, index) => {
    colors[`${prefix}-${index + 1}`] = color;
  });

export const colorsFromObject = (colors, obj, prefix) =>
  Object.keys(obj).forEach((color) => {
    colors[`${prefix}-${color}`] = obj[color];
  });
