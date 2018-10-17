export const colorFromIndex = (index) => {
  const idx = ((index) % 9) + 1;
  return idx <= 4 ? `accent-${idx}` : `neutral-${idx - 4}`;
};

export const colorForName = (name, theme) => theme.global.colors[name] || name;
