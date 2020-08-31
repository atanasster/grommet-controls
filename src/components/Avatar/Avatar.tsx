import React from 'react';
import { Box, Text } from 'grommet';
import { ImageStamp } from '../ImageStamp';
import { IAvatarProps } from './AvatarProps';

/**
 * An image with some text, can be used as a user Avatar image<br/>
 */
const Avatar = ({ image, title, subTitle, ...rest }: IAvatarProps) => (
  <Box direction="row" align="center" gap="small">
    <ImageStamp src={image} round="full" {...rest} />
    <Box justify="between">
      <Text weight="bold" truncate={true}>
        {title}
      </Text>
      <Text size="small" truncate={true}>
        {subTitle}
      </Text>
    </Box>
  </Box>
);

export { Avatar };
