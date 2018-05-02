import React, { Component } from 'react';
import { compose } from 'recompose';

import { withTheme } from 'grommet/components/hocs';

import StyledImageStamp from './StyledImageStamp';
import doc from './doc';

class ImageStamp extends Component {
  static defaultProps = {
    size: 'large',
  }
  render() {
    return (
      this.props.src ? <StyledImageStamp {...this.props} /> : null
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  doc(ImageStamp);
}

export default compose(
  withTheme,
)(ImageStamp);
