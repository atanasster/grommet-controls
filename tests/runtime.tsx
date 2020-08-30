import React from 'react';
import { RunOnlyConfiguration } from '@component-controls/core';
import { Grommet } from 'grommet';

const config: RunOnlyConfiguration = {
  decorators: [
    (controls, context) => {
      const { renderFn } = context;
      return <Grommet>{renderFn(controls, context)}</Grommet>;
    },
  ],
};

export default config;
