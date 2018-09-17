import { deepFreeze, deepMerge } from 'grommet/utils';
import { rgba } from 'polished';
import base from './base';
import colorsFromArray from './colorsFromArray';
import colorsFromObject from './colorsFromObject';


const brandColor = '#000000';
const accentColors = ['#FF4081', '#4eadeb', '#56cf98', '#8e6ee1'];
const neutralColors = ['#a4c400', '#006766', '#f3741c', '#8F6C53', '#e82121'];
const statusColors = {
  critical: '#d2293f',
  error: '#d2293f',
  warning: '#c5a502',
  ok: '#78ab00',
  unknown: '#868686',
  disabled: '#b0b0b0',
};
const darkColors = ['#333333', '#555555', '#666666', '#777777', '#999999', '#AAAAAA'];
const lightColors = ['#F6F6F6', '#EEEEEE', '#DDDDDD', '#CCCCCC', '#BBBBBB', '#AAAAAA'];

const backgroundColor = '#5e5e5e';
const textColor = '#ebebeb';
const activeColor = rgba('#9C9C9C', 0.5);
const shadowColor = 'rgba(200, 200, 200, 0.5)';
const focusColor = accentColors[1];
const colors = {
  'active': activeColor,
  'background': '#444444',
  'border-dark': 'rgba(255, 255, 255, 0.33)',
  'border-light': 'rgba(0, 0, 0, 0.33)',
  'brand': brandColor,
  'placeholder': '#AAAAAA',
  'text': textColor,
  'focus': focusColor,
};
colorsFromArray(colors, accentColors, 'accent');
colorsFromArray(colors, darkColors, 'dark');
colorsFromArray(colors, lightColors, 'light');
colorsFromArray(colors, neutralColors, 'neutral');
colorsFromObject(colors, statusColors, 'status');

export default deepFreeze(deepMerge(base, {
  global: {
    colors,
    text: {
      color: {
        dark: textColor,
        light: '#333333',
      },
    },
    drop: {
      background: '#222222',
      border: {
        width: '0px',
        radius: '0px',
      },
      shadow: {
        light: '0px 3px 8px rgba(100, 100, 100, 0.50)',
        dark: '0px 3px 8px rgba(255, 255, 255, 0.40)',
      },
    },
    elevation: {
      none: 'none',
      xsmall: `0px 1px 2px ${shadowColor}`,
      small: `0px 2px 4px ${shadowColor}`,
      medium: `0px 3px 8px ${shadowColor}`,
      large: `0px 6px 12px ${shadowColor}`,
      xlarge: `0px 8px 16px ${shadowColor}`,
    },
    font: {
      family: "'Inconsolata', monospace",
      face: `
        @font-face {
          font-family: 'Inconsolata';
          font-style: normal;
          font-weight: 400;
          src: local('Inconsolata Regular'), local('Inconsolata-Regular'), url(https://fonts.gstatic.com/s/inconsolata/v16/QldKNThLqRwH-OJ1UHjlKGlZ5qhExfHw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: 'Inconsolata';
          font-style: normal;
          font-weight: 700;
          src: local('Inconsolata Bold'), local('Inconsolata-Bold'), url(https://fonts.gstatic.com/s/inconsolata/v16/QldXNThLqRwH-OJ1UHjlKGHiw71p5_zaDpwm.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `,
      size: '16px',
    },
    hover: {
      backgroundColor: '#666666',
      textColor: '#ffffff',
    },
    input: {
      border: {
        radius: '0px',
      },
    },
    control: {
      color: {
        dark: '#ffffff',
        light: '#333333',
      },
    },
  },
  icon: {
    colors,
  },
  anchor: {
    color: {
      light: '#0d5b8e',
      dark: '#4eadeb',
    },
  },
  button: {
    border: {
      radius: '0px',
    },
  },
  checkBox: {
    border: {
      color: {
        light: 'rgba(255, 255, 255, 0.5)',
        dark: 'rgba(0, 0, 0, 0.5)',
      },
      radius: '0px',
    },
    toggle: {
      color: '#d9d9d9',
      radius: '0px',
    },
  },
  layer: {
    background: backgroundColor,
    overlay: {
      background: 'rgba(255, 255, 255, 0.5)',
    },
    border: {
      radius: '0px',
    },
  },
  radioButton: {
    border: {
      color: {
        light: 'rgba(255, 255, 255, 0.5)',
        dark: 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  rangeInput: {
    track: {
      color: '#4eadeb',
    },
  },
  heading: {
    font: false,
  },
}));
