import React from 'react';
import { ControlTypes } from '@component-controls/core';
import { Avatar } from '../Avatar';

export default {
  title: 'controls/Avatar',
  component: Avatar,
  parameters: {
    componentSubtitle:
      'Displays an image that represents a user or organization',
  },
};

export const main = ({ size, title, subTitle, image }) => (
  <Avatar image={image} title={title} subTitle={subTitle} size={size} />
);

main.controls = {
  size: {
    type: ControlTypes.OPTIONS,
    options: ['medium', 'large', 'xlarge', 'xxlarge'],
    label: 'Size',
    value: 'medium',
  },
  title: {
    type: ControlTypes.TEXT,
    label: 'Title',
    value: 'Adam Smith',
  },
  subTitle: {
    type: ControlTypes.TEXT,
    label: 'Sub-title',
    value: 'admin',
  },
  image: {
    type: ControlTypes.TEXT,
    label: 'Image',
    value: 'https://s3.amazonaws.com/uifaces/faces/twitter/sta1ex/128.jpg',
    data: { name: 'internet.avatar' },
  },
};
