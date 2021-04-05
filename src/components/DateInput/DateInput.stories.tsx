import React from 'react';
import { Box } from 'grommet';
import { Document, Example } from '@component-controls/core';
import { DateInput } from './DateInput';
import { smallDate } from '../../utils/moment';

export default {
  title: 'input/DateInput',
  component: DateInput,
} as Document;

const DateTestBed = ({ value, ...rest }) => {
  const [stateValue, setValue] = React.useState(value);
  return (
    <Box direction="row">
      <Box basis="medium">
        <DateInput
          value={stateValue}
          onChange={({ target }) => setValue(target.value)}
          {...rest}
        />
      </Box>
    </Box>
  );
};

export const main: Example = () => (
  <DateTestBed value={smallDate(new Date('08/30/2020'))} />
);
export const autocorrect: Example = () => (
  <DateTestBed value={smallDate(new Date('08/30/2020'))} autocorrect={true} />
);

export const disabled: Example = () => (
  <DateTestBed value={smallDate(new Date('08/30/2020'))} disabled={true} />
);
export const bounds: Example = () => (
  <DateTestBed
    value={smallDate(new Date('08/30/2020'))}
    bounds={[
      smallDate(new Date(new Date('08/30/2020').getFullYear(), 0, 1)),
      smallDate(new Date(new Date('08/30/2020').getFullYear(), 11, 31)),
    ]}
  />
);
export const disabledDates: Example = () => (
  <DateTestBed
    value={smallDate(new Date('08/30/2020'))}
    disabledDates={[
      smallDate(new Date('08/30/2020')),
      smallDate(
        new Date('08/30/2020').setDate(new Date('08/30/2020').getDate() - 1),
      ),
    ]}
  />
);
export const firstDayOfWeek: Example = () => (
  <DateTestBed value={smallDate(new Date('08/30/2020'))} firstDayOfWeek={1} />
);
export const locale: Example = () => (
  <DateTestBed value={smallDate(new Date('08/30/2020'))} locale="de-DE" />
);
export const size: Example = () => (
  <DateTestBed value={smallDate(new Date('08/30/2020'))} size="medium" />
);
