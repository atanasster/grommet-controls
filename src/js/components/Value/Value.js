import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';

import doc from './doc';

const LABEL_SIZE_MAP = {
  xsmall: 'xsmall',
  small: 'xsmall',
  medium: 'xsmall',
  large: 'small',
  xlarge: 'medium',
  xxlarge: 'large',
};
const Value = ({
  label, value, size, weight, gap, units, color,
}) => (
  <Box gap={gap}>
    {React.isValidElement(value) ? value : (
      <Text size={size} weight={weight} color={color}>
        {`${value !== undefined ? value : '-'}${units ? ` ${units}` : ''}`}
      </Text>
    )}
    <Box alignSelf='end'>
      <Text size={LABEL_SIZE_MAP[size]} color={color}>
        {label}
      </Text>
    </Box>
  </Box>
);

if (process.env.NODE_ENV !== 'production') {
  doc(Value);
}

Value.defaultProps = {
  label: undefined,
  value: undefined,
  weight: 'bold',
  gap: 'small',
  size: 'large',
  color: undefined,
};

Value.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.number]),
  weight: PropTypes.oneOfType([PropTypes.oneOf(['normal', 'bold']), PropTypes.number]),
  gap: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
};


const ValueWrapper = process.env.NODE_ENV !== 'production' ? doc(Value) : Value;

export { ValueWrapper as Value };
