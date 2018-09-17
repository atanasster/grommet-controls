import { deepFreeze, deepMerge } from 'grommet/utils';
import { rgba } from 'polished';
import base from './base';
import colorsFromArray from './colorsFromArray';
import colorsFromObject from './colorsFromObject';

const brandColor = '#000000';
const accentColors = ['#FF4081', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#795548'];
const neutralColors = ['#03A9F4', '#009688', '#8BC34A', '#CDDC39', '#FF9800', '#FF5722', '#607D8B'];
const statusColors = {
  critical: '#FF4081',
  error: '#F44336',
  warning: '#FFEB3B',
  ok: '#4CAF50',
  unknown: '#9E9E9E',
  disabled: '#9E9E9E',
};
const darkColors = ['#333333', '#555555', '#666666', '#777777', '#999999', '#AAAAAA'];
const lightColors = ['#F6F6F6', '#EEEEEE', '#DDDDDD', '#CCCCCC', '#BBBBBB', '#AAAAAA'];
const backgroundColor = '#5e5e5e';
const textColor = '#ebebeb';
const shadowColor = 'rgba(200, 200, 200, 0.50)';
const activeColor = rgba('#9C9C9C', 0.5);
const focusColor = accentColors[4];

const colors = {
  'focus': focusColor,
  'active': activeColor,
  'background': '#444444',
  'border-dark': 'rgba(255, 255, 255, 0.33)',
  'border-light': 'rgba(0, 0, 0, 0.33)',
  'brand': brandColor,
  'placeholder': '#AAAAAA',
  'text': textColor,
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
      family: "'Roboto', sans-serif",
      face: `
        /* latin */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 100;
          src: local('Roboto Thin'), local('Roboto-Thin'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1MmgVxIIzIXKMny.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 300;
          src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 900;
          src: local('Roboto Black'), local('Roboto-Black'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfBBc4AMP6lQ.woff2) format('woff2');
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
      light: '#2196f3',
      dark: '#ffffff',
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
  tag: {
    border: {
      round: 'small',
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
  heading: {
    font: false,
  },
}));
