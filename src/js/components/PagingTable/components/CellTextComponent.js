import React from 'react';
import { Text } from 'grommet/es6/components/Text';

export const extractTextProps = ({
  value, color, size, truncate, weight, textAlign, ...rest
}) => (rest);


export const collectTextProps = ({
  value, color, size, truncate, weight, textAlign,
}) => ({
  value, color, size, truncate, weight, textAlign,
});

export default ({ value, ...rest }) => (
  <Text
    {...collectTextProps(rest)}
  >
    {value}
  </Text>
);
