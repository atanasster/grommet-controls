import { deepFreeze, deepMerge } from 'grommet/utils';
import base from './base';
import colorsFromArray from './colorsFromArray';
import colorsFromObject from './colorsFromObject';

const brandColor = '#000000';
const backgroundColor = '#444444';
const accentColors = ['#2AD2C9', '#FFC107', '#9C27B0', '#673AB7'];
const neutralColors = ['#795548', '#009688', '#8BC34A', '#CDDC39', '#FF9800'];
const statusColors = {
  critical: '#FF4081',
  error: '#F44336',
  warning: '#FFEB3B',
  ok: '#4CAF50',
  unknown: '#9E9E9E',
  disabled: '#9E9E9E',
};

const focusColor = accentColors[0];
const colors = {
  active: {
    light: '#f50057',
    dark: '#ff4081',
  },
  brand: brandColor,
  background: backgroundColor,
  focus: focusColor,
  control: {
    'dark': '#f8f8f8',
    'light': '#444444',
  },

};

colorsFromArray(colors, accentColors, 'accent');
colorsFromArray(colors, neutralColors, 'neutral');
colorsFromObject(colors, statusColors, 'status');

export default deepFreeze(deepMerge(base, {
  global: {
    colors,
    drop: {
      background: '#2a2a2a',
    },
    hover: {
      background: {
        light: '#dddddd',
        dark: '#222222',
      },
      text: {
        light: '#000000',
        dark: '#f8f8f8',
      },
    },
    focus: {
      border: {
        color: '#f50057',
      },
    },
    font: {
      family: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    control: {
      border: {
        radius: '0px',
      },
    },
  },
  button: {
    border: {
      radius: '0px',
    },
    primary: {
      color: {
        light: '#f50057',
        dark: '#ff4081',
      },
    },
  },
  checkBox: {
    check: {
      radius: '0px',
    },
  },
  layer: {
    background: backgroundColor,
  },
  anchor: {
    color: {
      light: '#f50057',
      dark: '#ff4081',
    },
  },
}));

