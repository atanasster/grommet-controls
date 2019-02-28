import { deepFreeze, deepMerge } from 'grommet/utils/object';
import base from './base';
import colorsFromArray from './colorsFromArray';

const brandColor = '#000000';
const accentColors = ['#FF4081', '#4eadeb', '#56cf98', '#765bba'];
const neutralColors = ['#a4c400', '#006766', '#f3741c', '#8F6C53', '#e82121'];
const backgroundColor = '#5e5e5e';

const colors = {
  'active': {
    light: '#3a82b1',
    dark: '#52b7f9',
  },
  'background': '#444444',
  'brand': brandColor,
  'focus': accentColors[0],
  'control': {
    'dark': '#f8f8f8',
    'light': '#444444',
  },
};
colorsFromArray(colors, accentColors, 'accent');
colorsFromArray(colors, neutralColors, 'neutral');

export default deepFreeze(deepMerge(base, {
  global: {
    colors,
    drop: {
      background: '#444444',
    },
    font: {
      family: "'Inconsolata', monospace",
      size: '16px',
    },
    hover: {
      background: {
        light: '#3a82b1',
        dark: '#52b7f9',
      },
      color: {
        dark: '#ffffff',
        light: '#33333',
      },
    },
    control: {
      border: {
        radius: '0px',
      },
    },
  },
  icon: {
    colors,
  },
  anchor: {
    color: {
      light: '#0a466e',
      dark: '#4eadeb',
    },
  },
  button: {
    border: {
      radius: '0px',
    },
    primary: {
      color: {
        light: '#0a466e',
        dark: '#4eadeb',
      },
    },
  },
  checkBox: {
    check: {
      radius: '0px',
    },
    toggle: {
      radius: '0px',
    },
  },
  layer: {
    background: backgroundColor,
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
