import React from 'react';
import { ImageStamp } from '../../../index';

export default {
  title: 'controls/ImageStamp',
  component: ImageStamp,
};

export const main = () => (
  <ImageStamp
    src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
    size='large'
    round='full'
  />
);

export const size = () => (
  <ImageStamp
    src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
    size='medium'
    round='full'
  />
);
