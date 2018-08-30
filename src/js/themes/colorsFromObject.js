/* eslint-disable no-param-reassign */

export default (colors, obj, prefix) =>
  Object.keys(obj).forEach((color) => {
    colors[`${prefix}-${color}`] = obj[color];
  });
