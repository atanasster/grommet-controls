// eslint-disable-next-line import/prefer-default-export
export const colorFromIndex = (index) => {
  const idx = ((index) % 9) + 1;
  return idx <= 4 ? `accent-${idx}` : `neutral-${idx - 4}`;
};
