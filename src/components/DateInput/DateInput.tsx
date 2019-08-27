import React, { Component } from 'react';
import { Box, Calendar } from 'grommet';
import { Calendar as CalendarIcon } from 'grommet-icons/icons/Calendar';
import { MaskedInput } from '../MaskedInput';
import { smallDate } from '../../utils/moment';
import { IDateInputProps } from './DateInputProps';

/**
* A masked date entry field with a drop down calendar<br/>
* All properties of MaskedInput apply<br/>
* `import { DateInput } from 'grommet-controls';`<br/>
* `<DateInput value={...} />`<br/>
*/

class DateInput extends Component<IDateInputProps> {
  static defaultProps = {
    dropIcon: <CalendarIcon />,
    size: 'small',
    a11yDropTitle: 'Open calendar',
  }

  upDateValue = null;

  onSelect = (isoDate) => {
    const date = new Date(isoDate);
    this.upDateValue(smallDate(date));
  }

  render() {
    const {
      value, bounds, dates, disabledDates, autocorrect,
      firstDayOfWeek, locale, size, mask: userMask, maskFormat, ...rest
    } = this.props;
    let mask;
    if (userMask) {
      mask = { mask: userMask };
    } else if (autocorrect) {
      mask = {
        mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
        pipe: MaskedInput.createAutoCorrectedDatePipe(maskFormat),
        keepCharPositions: true,
      };
    } else {
      mask = { mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] };
    }
    const controlledValue = value === undefined ? '' : value;
    return (
      <MaskedInput
        update={(update) => { this.upDateValue = update; }}
        value={controlledValue}
        dropContent={(
          <Box pad='small'>
            <Calendar
              date={controlledValue.toString()}
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

export { DateInput };
