import React from 'react';
import { Box, Calendar } from 'grommet';
import { Calendar as CalendarIcon, Add, Subtract } from 'grommet-icons';
import { DropInput } from './DropInput';
import { smallDate } from '../../utils/moment';

export default {
  title: 'input/DropInput',
  component: DropInput,
};

const DateInput = props => {
  const [date, setDate] = React.useState(smallDate(new Date('08/30/2020')));
  return (
    <Box direction="row">
      <Box basis="medium">
        <DropInput
          dropContent={
            <Box pad="small">
              <Calendar
                size="small"
                date={date}
                onSelect={isoDate => setDate(smallDate(new Date(isoDate)))}
              />
            </Box>
          }
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
    <Box direction="row">
      <Box basis="medium">
        <DropInput
          value={number}
          onChange={({ target: { value } }) => setNumber(parseFloat(value))}
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

const DropInputTest = props => {
  return (
    <Box direction="row">
      <Box basis="medium">
        <DropInput {...props} />
      </Box>
    </Box>
  );
};

export const main = () => <DateInput />;
export const a11yTitle = () => <DateInput a11yTitle="Birthdy date" />;
export const disabled = () => <DateInput disabled={true} />;
export const dropContent = () => (
  <DropInputTest
    a11yDropTitle="Open calendar"
    dropContent={
      <Box pad="small">
        <Calendar size="small" />
      </Box>
    }
    defaultValue={smallDate(new Date('08/30/2020'))}
  />
);
export const dropIcon = () => <DateInput dropIcon={<CalendarIcon />} />;
export const widgets = () => <NumberInput />;

export const plain = () => (
  <DropInputTest plain={true} defaultValue="Plain no focus" />
);
export const focusIndicator = () => (
  <DropInputTest
    plain={true}
    focusIndicator={true}
    defaultValue="Plain with focus"
  />
);
export const placeholder = () => <DropInputTest placeholder="Enter phone..." />;
export const name = () => <DropInputTest id="date-id" name="date-name" />;
