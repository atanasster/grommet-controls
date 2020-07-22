import React from 'react';
import { ControlTypes } from '@component-controls/core';
import { ImageStamp } from '../ImageStamp';

export default {
  title: 'CONTROLS/controls/ImageStamp',
  component: ImageStamp,
};

export const main = props => (
  <ImageStamp
    {...props}
  />
);

main.controls = {
  src: { type: ControlTypes.TEXT, value: 'https://s3.amazonaws.com/uifaces/faces/twitter/aaronkwhite/128.jpg' },
  size: { type: ControlTypes.OPTIONS, options: ['medium', 'large', 'xlarge', 'xxlarge'], value: 'large' },
  round: { type: ControlTypes.OPTIONS, options: ['xsmall', 'small', 'medium', 'large', 'full'], value: 'full' },
};
export const size = () => (
  <ImageStamp
    src='https://s3.amazonaws.com/uifaces/faces/twitter/gojeanyn/128.jpg'
    size='medium'
    round='full'
  />
);
