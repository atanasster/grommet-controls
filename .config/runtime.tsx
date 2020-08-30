import React from 'react';
import { RunOnlyConfiguration, defaultRunConfig } from "@component-controls/core";
import { grommet, Grommet } from 'grommet';
import { TestingPage } from "./TestingPage";
import { ThemesPage } from "./ThemesPage";

const config: RunOnlyConfiguration = {
  siteTitle: `grommet-controls`,
  siteUrl: `https:/grommet-controls.netlify.app`,
  siteDescription: `A pack of extensions for grommet 2`,
  author: 'grommet-controls',
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
      return (
        <Grommet theme={grommet}>
          {renderFn(controls, context)}
        </Grommet>
      );
    },
  ],
};

export default config;
