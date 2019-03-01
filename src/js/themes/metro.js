import { deepFreeze, deepMerge } from 'grommet/utils/object';
import base from './base';
import colorsFromArray from './colorsFromArray';


const brandColor = '#0072c6';
const accentColors = ['#fa6800', '#128023', '#0050ef', '#d80073'];
const neutralColors = ['#a4c400', '#00aba9', '#BF5A15', '#8F6C53', '#9A1616'];

const colors = {
  'brand': brandColor,
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
      background: '#005696',
      border: {
        width: '0px',
        radius: '0px',
      },
    },
    hover: {
      background: {
        light: '#a5cdff',
        dark: '#405063',
      },
      color: {
        light: '#333333',
        dark: '#cccccc',
      },
    },
    focus: {
      border: {
        color: {
          light: brandColor,
          dark: '#003967',
        },
      },
    },
    font: {
      family: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Ubuntu", "Helvetica Neue", sans-serif',
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
        light: brandColor,
        dark: 'accent-1',
      },
    },
  },
  anchor: {
    color: {
      light: '#0078D4',
      dark: '#ffffff',
    },
  },
  checkBox: {
    border: {
      color: {
        light: 'rgba(0, 98, 186, 0.5)',
        dark: 'rgba(255, 255, 255, 0.5)',
      },
    },
    check: {
      radius: '0px',
    },
    color: {
      light: brandColor,
      dark: '#a6cfff',
    },
    toggle: {
      color: {
        dark: '#bdbdbd',
        light: brandColor,
      },
      radius: '0px',
    },
  },
  layer: {
    backgroundColor: '#eef3fc',
    border: {
      radius: '0px',
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
}));

