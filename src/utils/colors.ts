export const colorFromIndex = (index: number): string => {
  const idx = ((index) % 9) + 1;
  return idx <= 4 ? `accent-${idx}` : `neutral-${idx - 4}`;
};

export const colorForName = (name: string, theme: any): string => theme.global.colors[name] || name;
