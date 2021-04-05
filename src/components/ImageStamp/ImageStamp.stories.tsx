import React from 'react';
import { ControlTypes, Document, Example } from '@component-controls/core';
import { ImageStamp } from './ImageStamp';
import { IImageStampProps } from './ImageStampProps';

export default {
  title: 'controls/ImageStamp',
  component: ImageStamp,
} as Document;

export const main: Example<IImageStampProps> = props => (
  <ImageStamp {...props} />
);

main.controls = {
  src: {
    type: ControlTypes.TEXT,
    value: 'https://s3.amazonaws.com/uifaces/faces/twitter/aaronkwhite/128.jpg',
  },
  size: {
    type: ControlTypes.OPTIONS,
    options: ['medium', 'large', 'xlarge', 'xxlarge'],
    value: 'large',
  },
  round: {
    type: ControlTypes.OPTIONS,
    options: ['xsmall', 'small', 'medium', 'large', 'full'],
    value: 'full',
  },
};
export const size: Example = () => (
  <ImageStamp
    src="https://s3.amazonaws.com/uifaces/faces/twitter/gojeanyn/128.jpg"
    size="medium"
    round="full"
  />
);
