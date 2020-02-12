import React from 'react';
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

main.story = {
  parameters: {
    controls: {
      src: { type: 'text', value: 'https://s3.amazonaws.com/uifaces/faces/twitter/aaronkwhite/128.jpg' },
      size: { type: 'options', options: ['medium', 'large', 'xlarge', 'xxlarge'], value: 'large' },
      round: { type: 'options', options: ['xsmall', 'small', 'medium', 'large', 'full'], value: 'full' },
    },
  },
};
export const size = () => (
  <ImageStamp
    src='https://s3.amazonaws.com/uifaces/faces/twitter/gojeanyn/128.jpg'
    size='medium'
    round='full'
  />
);
