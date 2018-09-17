const baseSpacing = 24;

export default {
  global: {
    breakpoints: {
      narrow: 699,
      screenMedium: 768,
      screenLarge: 992,
      screenXlarge: 1200,
    },
    borderSize: {
      screenMedium: {
        xsmall: '1px',
        small: '2px',
        medium: `${baseSpacing / 6}px`, // 4
        large: `${baseSpacing / 4}px`, // 6
        xlarge: `${baseSpacing / 2}px`, // 12
      },
    },
    edgeSize: {
      screenMedium: {
        none: '0',
        hair: '1px', // for Chart
        xxsmall: '2px',
        xsmall: `${baseSpacing / 8}px`, // 3
        small: `${baseSpacing / 4}px`, // 6
        medium: `${baseSpacing / 2}px`, // 12
        large: `${baseSpacing}px`, // 24
        xlarge: `${baseSpacing * 2}px`, // 48
      },
    },
    size: {
      xxsmall: `${baseSpacing * 2}px`, // 48
      xsmall: `${baseSpacing * 4}px`, // 96
      small: `${baseSpacing * 8}px`, // 192
      medium: `${baseSpacing * 16}px`, // 384
      large: `${baseSpacing * 32}px`, // 768
      xlarge: `${baseSpacing * 48}px`, // 1152
      full: '100%',
      narrow: {
        xxsmall: `${baseSpacing}px`, // 24
        xsmall: `${baseSpacing * 2}px`, // 48
        small: `${baseSpacing * 4}px`, // 96
        medium: `${baseSpacing * 8}px`, // 192
        large: `${baseSpacing * 16}px`, // 384
        xlarge: `${baseSpacing * 32}px`, // 768
        full: '100%',
      },
      screenMedium: {
        xxsmall: '30px',
        xsmall: '56px',
        small: '108px',
        medium: '206px',
        large: '400px',
        xlarge: '800px',
        full: '100%',
      },
      screenLarge: {
        xxsmall: '36px',
        xsmall: '72px',
        small: '142px',
        medium: '262px',
        large: '560px',
        xlarge: '892px',
        full: '100%',
      },
      screenXlarge: {
        xxsmall: '44px',
        xsmall: '84px',
        small: '170px',
        medium: '320px',
        large: '702px',
        xlarge: '980px',
        full: '100%',
      },
    },
  },
};
