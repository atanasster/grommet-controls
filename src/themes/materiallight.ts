import { deepFreeze, deepMerge } from 'grommet/utils';
import base from './base';
import colorsFromArray from './colorsFromArray';
import colorsFromObject from './colorsFromObject';


const brandColor = '#00ABD4';
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
  background: '#ffffff',
  brand: brandColor,
  focus: focusColor,
  control: {
    dark: '#ffffff',
    light: '#00ABD4',
  },
};

colorsFromArray(colors, accentColors, 'accent');
colorsFromArray(colors, neutralColors, 'neutral');
colorsFromObject(colors, statusColors, 'status');

export default deepFreeze(deepMerge(base, {
  global: {
    colors,
    drop: {
      background: '#f8f8f8',
      border: {
        width: '0px',
        radius: '0px',
      },
    },
    hover: {
      background: {
        light: '#d5f3ff',
        dark: '#5a5a5a',
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
        light: '#3f51b5',
        dark: '#7986cb',
      },
    },
  },
  checkBox: {
    check: {
      radius: '0px',
    },
    color: {
      light: brandColor,
      dark: '#a7ecff',
    },
    toggle: {
      color: {
        dark: '#bdbdbd',
        light: brandColor,
      },
    },
  },
  radioButton: {
    border: {
      color: {
        light: 'rgba(0, 98, 186, 0.5)',
        dark: 'rgba(255, 255, 255, 0.5)',
      },
    },
  },
  anchor: {
    color: {
      light: '#3f51b5',
      dark: '#7986cb',
    },
  },
}));

