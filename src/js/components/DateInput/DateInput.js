import React, { Component } from 'react';
import { Box, Calendar } from 'grommet';
import { Calendar as CalendarIcon } from 'grommet-icons/icons/Calendar';
import { MaskedInput } from '../MaskedInput';
import { smallDate } from '../../utils/moment';


class DateInput extends Component {
  static defaultProps = {
    dropIcon: <CalendarIcon />,
    size: 'small',
    a11yDropTitle: 'Open calendar',
  }

  onSelect = (isoDate) => {
    const date = new Date(isoDate);
    this.upDateValue(smallDate(date));
  }

  render() {
    const {
      value, bounds, dates, disabledDates, autocorrect,
      firstDayOfWeek, locale, size, mask: userMask, ...rest
    } = this.props;
    let mask;
    if (userMask) {
      mask = { mask: userMask };
    } else if (autocorrect) {
      mask = {
        mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
        pipe: MaskedInput.createAutoCorrectedDatePipe(),
        keepCharPositions: true,
      };
    } else {
      mask = { mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] };
    }
    return (
      <MaskedInput
        update={(update) => { this.upDateValue = update; }}
        value={value}
        dropContent={(
          <Box pad='small'>
            <Calendar
              date={value}
              onSelect={this.onSelect}
              bounds={bounds}
              dates={dates}
              disabled={disabledDates}
              firstDayOfWeek={firstDayOfWeek}
              locale={locale}
              size={size}
            />
          </Box>
        )}
        {...{ ...rest, ...mask }}
      />
    );
  }
}

let DateInputDoc;
if (process.env.NODE_ENV !== 'production') {
  DateInputDoc = require('./doc').default(DateInput); // eslint-disable-line global-require
}

const DateInputWrapper = DateInputDoc || DateInput;

export { DateInputWrapper as DateInput };
