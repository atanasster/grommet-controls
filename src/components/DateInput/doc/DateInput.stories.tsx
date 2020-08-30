import React from 'react';
import { Box } from 'grommet';
import { DateInput } from '../DateInput';
import { smallDate } from '../../../utils/moment';

export default {
  title: 'input/DateInputs',
  component: DateInput,
};

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

export const main = () => (
  <DateTestBed value={smallDate(new Date('08/30/2020'))} />
);
export const autocorrect = () => (
  <DateTestBed value={smallDate(new Date('08/30/2020'))} autocorrect={true} />
);

export const disabled = () => (
  <DateTestBed value={smallDate(new Date('08/30/2020'))} disabled={true} />
);
export const bounds = () => (
  <DateTestBed
    value={smallDate(new Date('08/30/2020'))}
    bounds={[
      smallDate(new Date(new Date('08/30/2020').getFullYear(), 0, 1)),
      smallDate(new Date(new Date('08/30/2020').getFullYear(), 11, 31)),
    ]}
  />
);
export const disabledDates = () => (
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
export const firstDayOfWeek = () => (
  <DateTestBed value={smallDate(new Date('08/30/2020'))} firstDayOfWeek={1} />
);
export const locale = () => (
  <DateTestBed value={smallDate(new Date('08/30/2020'))} locale="de-DE" />
);
export const size = () => (
  <DateTestBed value={smallDate(new Date('08/30/2020'))} size="medium" />
);
