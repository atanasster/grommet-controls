import React from 'react';
import { Box } from 'grommet';
import { DateInput } from '../../../index';
import { smallDate } from '../../../utils/moment';

export default {
  title: 'input/DateInput',
  component: DateInput,
};


const DateTestBed = ({ value, ...rest }) => {
  const [stateValue, setValue] = React.useState(value);
  return (
    <Box direction='row'>
      <Box basis='medium'>
        <DateInput
          value={stateValue}
          onChange={({ target }) => setValue(target.value)}
          {...rest}
        />
      </Box>
    </Box>

  );
};


export const main = () => <DateTestBed value={smallDate(new Date())} />;
export const autocorrect = () => <DateTestBed value={smallDate(new Date())} autocorrect={true} />;

export const disabled = () => <DateTestBed value={smallDate(new Date())} disabled={true} />;
export const bounds = () => (
  <DateTestBed
    value={smallDate(new Date())}
    bounds={[
      smallDate(new Date(new Date().getFullYear(), 0, 1)),
      smallDate(new Date(new Date().getFullYear(), 11, 31)),
    ]}
  />
);
export const disabledDates = () => (
  <DateTestBed
    value={smallDate(new Date())}
    disabledDates={[
      smallDate(new Date()),
      smallDate((new Date()).setDate(new Date().getDate() - 1)),
    ]}
  />
);
export const firstDayOfWeek = () => (
  <DateTestBed
    value={smallDate(new Date())}
    firstDayOfWeek={1}
  />
);
export const locale = () => (
  <DateTestBed
    value={smallDate(new Date())}
    locale='de-DE'
  />
);
export const size = () => (
  <DateTestBed
    value={smallDate(new Date())}
    size='medium'
  />
);
