import React from 'react';
import { black, materiallight, materialdark, metro, light } from '../../../dist/themes/index';
import { Grommet, Box, Text, Select, grommet, dark } from 'grommet';

import addons, { types } from '@storybook/addons';

const ADDON_ID = 'grommet_theme';
const PARAM_KEY = 'grommet_theme';
const PANEL_ID = `${ADDON_ID}/panel`;

const themes = {
   black, materiallight, materialdark, metro, light, grommet, dark,
};

const ThemePanel = ({ api, channel }) => {
  const [theme, setTheme] = React.useState('');
  React.useEffect(() => {
    channel.emit("setGrommetTheme", themes[theme]);
  }, []);

  return (
    <Grommet>
      <Box pad='small' align='start'>
        <Box direction='row' align='center' gap='small'>
          <Text>
            Select a theme:
          </Text>
          <Select
            a11yTitle='Select theme'
            value={theme}
            options={Object.keys(themes)}
            onChange={({ option: newTheme }) => {
              channel.emit("setGrommetTheme", themes[newTheme]);
              setTheme(newTheme);
            }}
          />
        </Box>
      </Box>
    </Grommet>
  );
}

addons.register(ADDON_ID, api => {
  const render = ({ active }) => (
    <ThemePanel
      key={PARAM_KEY}
      api={api}
      channel={addons.getChannel()}
    />
  );
  const title = 'Theme';

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render,
  });
});
