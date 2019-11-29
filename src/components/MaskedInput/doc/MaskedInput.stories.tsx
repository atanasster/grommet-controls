import React from 'react';
import { Box, Calendar } from 'grommet';
import { Add, Subtract } from 'grommet-icons';
import { MaskedInput } from '../MaskedInput';
import { smallDate } from '../../../utils/moment';

export default {
  title: 'CONTROLS/input/MaskedInput',
  component: MaskedInput,
};

const MaskedTestBed = ({ value: defaultValue = '', ...props }) => {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <Box direction='row'>
      <Box basis='medium' gap='small'>
        <MaskedInput
          value={value}
          onChange={({ target }) => setValue(target.value)}
          {...props}
        />
      </Box>
    </Box>
  );
};

const DateInput = (props) => {
  const [date, setDate] = React.useState(smallDate(new Date()));
  return (
    <Box direction='row'>
      <Box basis='medium'>
        <MaskedInput
          mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          dropContent={(
            <Box pad='small'>
              <Calendar
                size='small'
                date={date}
                onSelect={isoDate => setDate(smallDate(new Date(isoDate)))}
              />
            </Box>
          )}
          value={date}
          onChange={({ target }) => setDate(target.value)}
          {...props}
        />
      </Box>
    </Box>
  );
};


const NumberInput = () => {
  const [number, setNumber] = React.useState(10);
  return (
    <Box direction='row'>
      <Box basis='medium'>
        <MaskedInput
          value={number}
          onChange={({ target: { value } }) => setNumber(parseFloat(value))}
          mask={MaskedInput.createNumberMask({
            allowDecimal: true,
          })}
          widgets={[
            {
              icon: <Add />,
              onClick: () => setNumber(number + 1),
            },
            {
              icon: <Subtract />,
              onClick: () => setNumber(number - 1),
            },
          ]}
        />
      </Box>
    </Box>
  );
};
export const main = () => (
  <MaskedTestBed
    value='8024442131'
    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
  />
);

export const a11yTitle = () => (
  <MaskedTestBed
    a11yTitle='Dollars'
    mask={MaskedInput.createNumberMask({})}
    value='18933.85'
  />
);

export const disabled = () => (
  <DateInput
    disabled={true}
  />
);
export const dropContent = () => <DateInput />;

export const widgets = () => <NumberInput />;

export const plain = () => (
  <MaskedTestBed
    value='8024442131'
    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    plain={true}
  />
);

export const focusIndicator = () => (
  <MaskedTestBed
    value='8024442131'
    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    plain={true}
    focusIndicator={true}
  />
);

export const mask = () => (
  <MaskedTestBed
    placeholder='US phone number with country code'
    mask={['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
  />
);
export const guide = () => (
  <MaskedTestBed
    value='8024442131'
    guide={false}
    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    plain={true}
    focusIndicator={true}
  />
);
export const pipe = () => (
  <MaskedTestBed
    mask={[MaskedInput.alphabetic, MaskedInput.digit, MaskedInput.alphabetic, ' ', MaskedInput.digit, MaskedInput.alphabetic, MaskedInput.digit]}
    pipe={conformedValue => ({
      value: conformedValue.toUpperCase(),
    })}
    placeholder='K1A 0B2'
    placeholderChar={MaskedInput.placeholderChars.underscore}
  />
);
export const placeholderChar = () => (
  <MaskedTestBed
    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    placeholderChar={MaskedInput.placeholderChars.underscore}
    value='8024442131'
  />

);
export const keepCharPositions = () => (
  <MaskedTestBed
    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    keepCharPositions={true}
    value='8024442131'
  />
);
export const showMask = () => (
  <MaskedTestBed
    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    showMask={true}
    value='8024442131'
  />


);
export const placeholder = () => (
  <MaskedTestBed
    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    placeholder='Enter phone...'
    value='8024442131'
  />
);
export const name = () => (
  <MaskedTestBed
    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    id='date-id'
    name='date-name'
    value='8024442131'
  />
);
