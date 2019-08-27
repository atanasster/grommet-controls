import React from 'react';
import { StyledImageStamp } from './StyledImageStamp';
import { IImageStampProps } from './ImageStampProps';

const SIZE_MAP = {
  small: 'medium',
  medium: 'large',
  large: 'xlarge',
  xlarge: 'xxlarge',
};

/**
*  A small image stamp used for avatars or image thumbnails
*/
const ImageStamp = ({ size, src, ...rest }: IImageStampProps) => (
    src ? <StyledImageStamp src={src} size={SIZE_MAP[size]} {...rest} /> : null
);

ImageStamp.defaultProps = {
  contain: null,
  size: 'medium',
  plain: false,
};


export { ImageStamp };
