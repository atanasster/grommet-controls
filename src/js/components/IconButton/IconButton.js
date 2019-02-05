import React from 'react';
import StyledIconButton from './StyledIconButton';

class IconButton extends React.Component {
  render() {
    return (
      <StyledIconButton
        {...this.props}
        hoverIndicator={{
          dark: {
            color: 'dark-2',
            opacity: '1',
          },
          light: {
            color: 'light-2',
            opacity: '1',
          },
          border: {
            radius: '50%',
          },
        }}
      />
    );
  }
}

let IconButtonDoc;
if (process.env.NODE_ENV !== 'production') {
  IconButtonDoc = require('./doc').default(IconButton); // eslint-disable-line global-require
}

const IconButtonWrapper = IconButtonDoc || IconButton;

export { IconButtonWrapper as IconButton };

