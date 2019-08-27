import React from 'react';
import { Grommet, Box } from 'grommet';
import addons from '@storybook/addons';

const WithGrommetTheme = ({ story, channel }) => {
  const [theme, setTheme] = React.useState();
  const onSelectTheme = (theme) => {
      setTheme(theme);
  };
  React.useEffect(() => {
    channel.on("setGrommetTheme", onSelectTheme);
    return () => {
      channel.removeListener("setGrommetTheme", onSelectTheme);
    }
  }, []);
  return (
    <Grommet theme={theme} >
      <Box align='start'>
        {story()}
      </Box>
    </Grommet>

  )
}
export default (story) => <WithGrommetTheme story={story} channel={addons.getChannel()} />;

