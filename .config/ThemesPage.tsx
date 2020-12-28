/* eslint-disable react/display-name */
import React from 'react';
import { TabConfiguration } from '@component-controls/core';
import { Story, Description } from '@component-controls/blocks';
import { ThemeProvider } from 'styled-components';
import { grommet, dark } from 'grommet';
import {
  black,
  light,
  materialdark,
  materiallight,
  metro,
} from '../src/themes';

import { HoverBox } from '@component-controls/components';

const themes = {
  grommet,
  dark,
  black,
  light,
  materialdark,
  materiallight,
  metro,
};

const ThemesPage = () => {
  return (
    <>
      <Description />
      {Object.keys(themes).map(themeName => (
        <HoverBox key={themeName} label={themeName}>
          <ThemeProvider theme={themes[themeName]}>
            <Story id="." sx={{ mb: 0 }} />
          </ThemeProvider>
        </HoverBox>
      ))}
    </>
  );
};

export default {
  title: 'Themes',
  component: ThemesPage
} as TabConfiguration;
