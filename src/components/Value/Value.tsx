import React from 'react';
import { Box, Text } from 'grommet';
import { IValueProps } from './ValueProps';

const LABEL_SIZE_MAP = {
  xsmall: 'xsmall',
  small: 'xsmall',
  medium: 'xsmall',
  large: 'small',
  xlarge: 'medium',
  xxlarge: 'large',
};

/**
 * A single value visualization with a label<br/>
 * `import { Value } from 'grommet-controls';`<br/>
 * `<Value value={...} label={...} />`<br/>
 */
const Value = ({
  label, value, size, weight, gap, units, color,
}: IValueProps) => (
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

Value.defaultProps = {
  label: undefined,
  value: undefined,
  weight: 'bold',
  gap: 'small',
  size: 'large',
  color: undefined,
};

export { Value };
