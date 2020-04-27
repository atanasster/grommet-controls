import React from 'react';
import { Avatar } from '../Avatar';


export default {
  title: 'CONTROLS/controls/Avatar',
  component: Avatar,
  parameters: {
    componentSubtitle: 'Displays an image that represents a user or organization',
  },
};

export const main = ({
 size, title, subTitle, image,
}) => (
  <Avatar
    image={image}
    title={title}
    subTitle={subTitle}
    size={size}
  />
);

main.story = {
  controls: {
    size: {
      type: 'options', options: ['medium', 'large', 'xlarge', 'xxlarge'], label: 'Size', value: 'medium',
    },
    title: {
      type: 'text', label: 'Title', value: 'Adam Smith',
    },
    subTitle: {
      type: 'text', label: 'Sub-title', value: 'admin',
    },
    image: {
      type: 'text', label: 'Image', value: 'https://s3.amazonaws.com/uifaces/faces/twitter/sta1ex/128.jpg', data: { name: 'internet.avatar' },
    },

  },
};
