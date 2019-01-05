import React, { Component } from 'react';
import { StyledImageStamp } from './StyledImageStamp';

const SIZE_MAP = {
  small: 'medium',
  medium: 'large',
  large: 'xlarge',
  xlarge: 'xxlarge',
};

class ImageStamp extends Component {
  static defaultProps = {
    size: 'medium',
  }
  render() {
    const { size, ...rest } = this.props;

    return (
      this.props.src ? <StyledImageStamp size={SIZE_MAP[size]} {...rest} /> : null
    );
  }
}


let ImageStampDoc;
if (process.env.NODE_ENV !== 'production') {
  ImageStampDoc = require('./doc').default(ImageStamp); // eslint-disable-line global-require
}

const ImageStampWrapper = ImageStampDoc || ImageStamp;

export { ImageStampWrapper as ImageStamp };
