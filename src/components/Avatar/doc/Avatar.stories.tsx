import React from 'react';
import { Box } from 'grommet';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Avatar } from '../Avatar';


export default {
  title: 'CONTROLS|controls/Avatar',
  component: Avatar,
  parameters: {
    componentSubtitle: 'Displays an image that represents a user or organization',
  },
};

export const main = () => (
  <Box basis='medium' align='center'>
    <Avatar
      image='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
      title='Adam Smith'
      subTitle='admin'
      size={select('Size', ['medium', 'large', 'xlarge', 'xxlarge'], 'medium')}
    />
  </Box>
);

main.story = {
  decorators: [withKnobs],
};
