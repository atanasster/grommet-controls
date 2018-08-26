import React, { Component } from 'react';
import { compose } from 'recompose';

import { withTheme } from 'grommet/components/hocs';

import { StyledImageStamp } from './StyledImageStamp';
import doc from './doc';

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

const ImageStampWrapper = compose(
  withTheme,
)(
  process.env.NODE_ENV !== 'production' ? doc(ImageStamp) : ImageStamp
);

export { ImageStampWrapper as ImageStamp };
