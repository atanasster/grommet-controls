const spinkitSpinners = {
  'circle': { divCount: 12 },
  'cube-grid': { divCount: 9 },
  'wave': { divCount: 5 },
  'folding-cube': { divCount: 4 },
  'three-bounce': { divCount: 3 },
  'double-bounce': { divCount: 2 },
  'wandering-cubes': { divCount: 2 },
  'chasing-dots': { divCount: 2 },
  'rotating-plane': { divCount: 1 },
  'pulse': { divCount: 1 },
  'wordpress': { divCount: 1 },
};

const loadersCssSpinners = {
  'ball-grid-beat': { divCount: 9 },
  'ball-grid-pulse': { divCount: 9 },
  'line-spin-fade-loader': { divCount: 8 },
  'ball-spin-fade-loader': { divCount: 8 },
  'ball-pulse-rise': { divCount: 5 },
  'line-scale': { divCount: 5 },
  'line-scale-pulse-out': { divCount: 5 },
  'line-scale-pulse-out-rapid': { divCount: 5 },
  'pacman': { divCount: 5 },
  'line-scale-party': { divCount: 4 },
  'ball-triangle-path': { divCount: 3 },
  'ball-scale-multiple': { divCount: 3 },
  'ball-scale-ripple-multiple': { divCount: 3 },
  'ball-pulse-sync': { divCount: 3 },
  'ball-beat': { divCount: 3 },
  'ball-zig-zag': { divCount: 2 },
  'ball-zig-zag-deflect': { divCount: 2 },
  'ball-clip-rotate-pulse': { divCount: 2 },
  'ball-clip-rotate-multiple': { divCount: 2 },
  'ball-clip-rotate': { divCount: 1 },
  'ball-scale-ripple': { divCount: 1 },
  'triangle-skew-spin': { divCount: 1 },
};

const allSpinners = {
  ...spinkitSpinners,
  ...loadersCssSpinners,
};

export {
  spinkitSpinners,
  loadersCssSpinners,
  allSpinners,
};
