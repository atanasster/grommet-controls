import React, { useContext } from 'react';
import { RunOnlyConfiguration, defaultRunConfig } from "@component-controls/core";
import { Grommet } from 'grommet';
import { ThemeContext } from 'styled-components';
import { TestingPage } from "./TestingPage";
import { ThemesPage } from "./ThemesPage";

const categories = ['about', 'controls', 'layout', 'navigation', 'input', 'validation', 'chartjs']

const config: RunOnlyConfiguration = {
  title: `grommet-controls`,
  description: `A pack of extensions for grommet 2`,
  author: 'grommet-controls',
  storySort: (a, b) => {
    const aSplit = a.split('/')[0];
    const bSplit = b.split('/')[0];
    const aIndex = categories.findIndex(c => c === aSplit);
    const bIndex = categories.findIndex(c => c === bSplit);
    return aIndex - bIndex;
  },
  components: {
    playground: {
      openTab: 'source',
    }
  },
  pages: {
    story: {
      tabs: [
        ...defaultRunConfig.pages.story.tabs,
        { title: 'Testing', render: () => <TestingPage /> },
        { title: 'Themes', render: () => <ThemesPage /> },
      ],
    },
  },
  decorators: [
    (controls, context) => {
      const { renderFn } = context;
      const theme = useContext(ThemeContext)
      return (
        <Grommet theme={theme}>
          {renderFn(controls, context)}
        </Grommet>
      );
    },
  ],
};

export default config;
