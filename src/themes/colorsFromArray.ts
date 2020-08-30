/* eslint-disable no-param-reassign */

export default (colors, array, prefix) =>
  array.forEach((color, index) => {
    colors[`${prefix}-${index + 1}`] = color;
  });
