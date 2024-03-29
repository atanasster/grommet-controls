import React from 'react';
import { Box, Calendar } from 'grommet';
import { Document, Example } from '@component-controls/core';
import { Calendar as CalendarIcon, Add, Subtract } from 'grommet-icons';
import { DropInput } from './DropInput';
import { smallDate } from '../../utils/moment';

export default {
  title: 'input/DropInput',
  component: DropInput,
} as Document;

const DateInput = props => {
  const [date, setDate] = React.useState(smallDate(new Date('08/30/2020')));
  return (
    <Box direction="row">
      <Box basis="medium">
        <DropInput
          a11yTitle="select a date"
          dropContent={
            <Box pad="small">
              <Calendar
                size="small"
                date={date}
                onSelect={isoDate =>
                  setDate(smallDate(new Date(isoDate as string)))
                }
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
          a11yTitle="select a number"
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
        <DropInput placeholder="select a value" {...props} />
      </Box>
    </Box>
  );
};

export const main: Example = () => <DateInput />;
export const a11yTitle: Example = () => <DateInput a11yTitle="Birthdy date" />;
export const disabled: Example = () => <DateInput disabled={true} />;
export const dropContent: Example = () => (
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
export const dropIcon: Example = () => (
  <DateInput dropIcon={<CalendarIcon />} />
);
export const widgets: Example = () => <NumberInput />;

export const plain: Example = () => (
  <DropInputTest plain={true} defaultValue="Plain no focus" />
);
export const focusIndicator: Example = () => (
  <DropInputTest
    plain={true}
    focusIndicator={true}
    defaultValue="Plain with focus"
  />
);
export const placeholder: Example = () => (
  <DropInputTest placeholder="Enter phone..." />
);
export const name: Example = () => (
  <DropInputTest id="date-id" name="date-name" />
);
