import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { Title, Subtitle, Source, Story, Stories, Props, Description } from '@storybook/addon-docs/blocks';
import { DependenciesTable } from 'storybook-addon-deps/blocks';
import { ControlsEditorsTable } from '@component-controls/storybook';

import { withGrommet } from 'storybook-addon-grommet';
import { grommet, dark } from 'grommet';

export const DocsPage = ({
  titleSlot,
  subtitleSlot,
  descriptionSlot,
  propsSlot,
  storiesSlot,
}) => {
  return (
    <>
      <Title slot={titleSlot} />
      <Subtitle slot={subtitleSlot} />
      <Description slot={descriptionSlot} />
      <Story id="." />
      <Source id="." />
      <ControlsEditorsTable id="." />
      <Props slot={propsSlot} />
      <DependenciesTable titleDependencies='Dependencies' titleDependents='Dependents' />
      <Stories slot={storiesSlot} />
    </>
  );
};
window.STORYBOOK_GA_ID = 'UA-118001856-1';

import GrommetLogo from './assets/grommet-logo.svg';
import { black, light, materialdark, materiallight, metro } from '../src/themes';

addDecorator(withGrommet({
    theme: 'grommet',
    themes: {
      grommet,
      dark,
      black,
      light,
      materialdark,
      materiallight,
      metro,
    },
    boxProps: {
      align: 'start',
    },
  }
));

addParameters({
  options: {
    showRoots: true,
    theme: {
      ...themes.light,
      brandImage: GrommetLogo,
      brandTitle: 'grommet-controls',
      url: 'https://github.com/atanasster/grommet-controls.git'
    },
  },
  docs: { page: DocsPage },
  dependencies: { hideEmpty: true }
});

