import React from 'react';
import { compose } from 'recompose';
import { Box } from 'grommet/es6/components/Box';
import { Text } from 'grommet/es6/components/Text';
import { withTheme } from 'styled-components';
import { ImageStamp } from '../ImageStamp';

const Avatar = ({ image, title, subTitle, ...rest }) => (
  <Box direction='row' align='center' gap='small'>
    <ImageStamp
      src={image}
      round='full'
      {...rest}
    />
    <Box justify='between'>
      <Text weight='bold' truncate={true}>{title}</Text>
      <Text size='small' truncate={true}>{subTitle}</Text>
    </Box>
  </Box>
);

let AvatarDoc;
if (process.env.NODE_ENV !== 'production') {
  AvatarDoc = require('./doc').default(Avatar); // eslint-disable-line global-require
}

const AvatarWrapper = compose(
  withTheme,
)(AvatarDoc || Avatar);


export { AvatarWrapper as Avatar };

