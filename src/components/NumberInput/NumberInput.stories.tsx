import React from 'react';
import { Box } from 'grommet';
import { Document, Example } from '@component-controls/core';
import { AddCircle, SubtractCircle } from 'grommet-icons';
import { NumberInput } from './NumberInput';

export default {
  title: 'input/NumberInput',
  component: NumberInput,
} as Document;

export const main: Example = () => {
  const [number, setNumber] = React.useState('12000.34');
  return (
    <Box direction="row">
      <Box basis="medium" gap="small">
        <NumberInput
          value={number}
          thousandsSeparatorSymbol=","
          onChange={({ target: { value } }) => setNumber(value)}
        />
      </Box>
    </Box>
  );
};

const IntegerInput = props => {
  const [number, setNumber] = React.useState('5');
  return (
    <Box direction="row">
      <Box basis="medium" gap="small">
        <NumberInput
          value={number}
          step={1}
          onChange={({ target: { value } }) => setNumber(value)}
          {...props}
        />
      </Box>
    </Box>
  );
};

const FloatInput = props => {
  const [number, setNumber] = React.useState('2000.23');
  return (
    <Box direction="row">
      <Box basis="medium" gap="small">
        <NumberInput
          value={number}
          step={1}
          onChange={({ target: { value } }) => setNumber(value)}
          {...props}
        />
      </Box>
    </Box>
  );
};
export const a11yIncrement: Example = () => (
  <IntegerInput
    a11yIncrement="Add to entry"
    step={10}
    a11yDecrement="Remove from entry"
    thousandsSeparatorSymbol=","
  />
);

export const min: Example = () => <IntegerInput min={5} />;
export const max: Example = () => <IntegerInput max={5} />;
export const step: Example = () => <IntegerInput step={10} />;
export const disabled: Example = () => <IntegerInput disabled={true} />;
export const addIcon: Example = () => (
  <IntegerInput addIcon={<AddCircle />} subtractIcon={<SubtractCircle />} />
);
export const prefix: Example = () => <IntegerInput prefix="$" />;
export const suffix: Example = () => <IntegerInput suffix=" USD" />;
export const thousandsSeparatorSymbol: Example = () => (
  <FloatInput
    thousandsSeparatorSymbol=" "
    decimalSymbol=","
    updateToString={true}
  />
);
export const decimalSymbol: Example = () => (
  <FloatInput
    thousandsSeparatorSymbol=""
    decimalSymbol=","
    updateToString={true}
  />
);
export const decimals: Example = () => <FloatInput decimals={4} />;
export const integers: Example = () => <IntegerInput integers={4} />;
