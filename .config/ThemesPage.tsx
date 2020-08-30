/* eslint-disable react/display-name */
import React from 'react';
import {
  Story,
  Description,
} from '@component-controls/blocks';
import { Grommet } from 'grommet';
import { grommet, dark } from 'grommet';
import { black, light, materialdark, materiallight, metro } from '../src/themes';

import {
  HoverBox,
} from '@component-controls/components';

const themes = {
  grommet, dark, black, light, materialdark, materiallight, metro
}

export const ThemesPage = () => {
  return (
    <>
      <Description />
      {Object.keys(themes).map(themeName => (
        <HoverBox key={themeName} label={themeName}>
        <Grommet  theme={themes[themeName]}>
          <Story id="."  sxStyle={{ mb: 0 }}/>
        </Grommet>
        </HoverBox>
      ))}
    </>
  );
}

