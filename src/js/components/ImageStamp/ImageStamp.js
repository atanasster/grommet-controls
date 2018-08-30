import React, { Component } from 'react';
import { compose } from 'recompose';

import { withTheme } from '../hocs';

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
  ImageStampDoc = require('./doc').doc(ImageStamp); // eslint-disable-line global-require
}

const ImageStampWrapper = compose(
  withTheme,
)(
  ImageStampDoc || ImageStamp
);

export { ImageStampWrapper as ImageStamp };
