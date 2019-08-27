import React from 'react';
import { Box } from 'grommet';
import { Avatar } from '../Avatar';

export default {
  title: 'controls/Avatar',
  component: Avatar,
};

export const main = () => (
  <Box basis='medium' align='center'>
    <Avatar
      image='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
      title='Adam Smith'
      subTitle='admin'
    />
  </Box>
);
