import { deepFreeze, deepMerge } from 'grommet/utils/object';
import base from './base';

const colors = {
  'brand': '#ffffff',
  'active': {
    light: '#57b457',
    dark: '#52b7f9',
  },
  'control': {
    dark: '#52b7f9',
    light: '#4a984a',
  },
  'focus': '#5ec660',
  'accent-1': '#367bd5',
  'accent-2': '#5ec660',
  'accent-3': '#d4293d',
  'accent-4': '#9C27B0',
  'neutral-1': '#795548',
  'neutral-2': '#CDDC39',
  'neutral-3': '#607D8B',
  'neutral-4': '#9cb6d7',
  'neutral-5': '#FF9800',
};

const baseSpacing = 16;

export default deepFreeze(deepMerge(base, {
  global: {
    breakpoints: {
      small: {
        size: {
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
    },
    colors,
    font: {
      family: "'Montserrat', sans-serif;",
      size: '14px',
    },
    edgeSize: {
      none: '0',
      hair: '1px', // for Chart
      xxsmall: `${baseSpacing / 8}px`, // 3
      xsmall: `${baseSpacing / 4}px`, // 6
      small: `${baseSpacing / 2}px`, // 12
      medium: `${baseSpacing}px`, // 24
      large: `${baseSpacing * 2}px`, // 48
      xlarge: `${baseSpacing * 4}px`, // 96
    },
    hover: {
      background: {
        light: '#c8c8c8',
        dark: '#333333',
      },
      color: {
        light: '#333333',
        dark: '#f8f8f8',
      },
    },
    selected: {
      background: '#635d60',
      color: '#f8f8f8',
    },
  },
  text: {
    xsmall: { size: '10px', height: 1.5 },
    small: { size: '12px', height: 1.43 },
    medium: { size: '14px', height: 1.375 },
    large: { size: '20px', height: 1.167 },
    xlarge: { size: '28px', height: 1.1875 },
    xxlarge: { size: '26px', height: 1.125 },
  },
  heading: {
    font: false,
    weight: 500,
  },
  icon: {
    size: {
      xsmall: '14px',
    },
  },
  button: {
    border: {
      radius: '1px',
      color: {
        dark: '#fbf9ff',
        light: '#28599e',
      },
    },
    // color: { dark: undefined, light: undefined }
    primary: {
      color: {
        dark: '#0093ff',
        light: '#316cbe',
      },
    },
  },
  anchor: {
    textDecoration: 'none',
    fontWeight: 600,
    color: {
      dark: '#f7efff',
      light: '#275596',
    },
  },
  checkBox: {
    border: {
      width: '2px',
    },
    check: {
      radius: '4px',
      thickness: '4px',
    },
  },
  rangeInput: {
    track: {
      color: {
        'dark': '#3a82b1',
        'light': '#52b7f9',
      },
    },
  },
}));

