import * as React from 'react';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';

const DayPickerStrings: IDatePickerStrings = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],

  shortMonths: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ],

  days: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ],

  shortDays: [
    'S',
    'M',
    'T',
    'W',
    'T',
    'F',
    'S'
  ],

  goToToday: 'Go to today',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year'
};

export interface IDatePickerBasicExampleState {
  firstDayOfWeek ?: DayOfWeek;
}

export class DatePickerBasicExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstDayOfWeek: DayOfWeek.Sunday
    };
  }

  render() {
    let { firstDayOfWeek } = this.state;

    return (
      <div>
        <DatePicker firstDayOfWeek={ firstDayOfWeek } strings={ DayPickerStrings } placeholder='Select a date...' />
      
      </div>
    );
  }

  _onDropdownChanged(option: IDropdownOption) {
    this.setState({
      firstDayOfWeek: DayOfWeek[option.key]
    });
  }
}
