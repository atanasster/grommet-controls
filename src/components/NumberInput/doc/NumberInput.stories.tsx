import React from 'react';
import { Box } from 'grommet';
import { AddCircle, SubtractCircle } from 'grommet-icons';
import { NumberInput } from '../NumberInput';

export default {
  title: 'CONTROLS|input/NumberInput',
  component: NumberInput,
};

export const main = () => {
  const [number, setNumber] = React.useState('12000.34');
  return (
    <Box direction='row'>
      <Box basis='medium' gap='small'>
        <NumberInput
          value={number}
          thousandsSeparatorSymbol=','
          onChange={({ target: { value } }) => setNumber(value)}
        />
      </Box>
    </Box>
  );
};

const IntegerInput = (props) => {
  const [number, setNumber] = React.useState('5');
  return (
    <Box direction='row'>
      <Box basis='medium' gap='small'>
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

const FloatInput = (props) => {
  const [number, setNumber] = React.useState('2000.23');
  return (
    <Box direction='row'>
      <Box basis='medium' gap='small'>
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
export const a11yIncrement = () => (
  <IntegerInput
    a11yIncrement='Add to entry'
    step={10}
    a11yDecrement='Remove from entry'
    thousandsSeparatorSymbol=','
  />
);


export const min = () => (
  <IntegerInput
    min={5}
  />
          );
export const max = () => (
  <IntegerInput
    max={5}
  />
          );
export const step = () => (
  <IntegerInput
    step={10}
  />
          );
export const disabled = () => (
  <IntegerInput
    disabled={true}
  />
          );
export const addIcon = () => (
  <IntegerInput
    addIcon={<AddCircle />}
    subtractIcon={<SubtractCircle />}
  />
          );
export const prefix = () => (
  <IntegerInput
    prefix='$'
  />
          );
export const suffix = () => (
  <IntegerInput
    suffix=' USD'
  />
          );
export const thousandsSeparatorSymbol = () => (
  <FloatInput
    thousandsSeparatorSymbol=' '
    decimalSymbol=','
    updateToString={true}
  />
          );
export const decimalSymbol = () => (
  <FloatInput
    thousandsSeparatorSymbol=''
    decimalSymbol=','
    updateToString={true}
  />
          );
export const decimals = () => (
  <FloatInput
    decimals={4}
  />
          );
export const integers = () => (
  <IntegerInput
    integers={4}
  />
          );
