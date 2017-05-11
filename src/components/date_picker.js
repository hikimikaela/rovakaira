import * as React from 'react';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';
import { DayPickerStrings } from '../config/constants.js';


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
        <DatePicker firstDayOfWeek={ firstDayOfWeek } strings={ DayPickerStrings } placeholder='Valitse lähetysajankohta...' />

      </div>
    );
  }

  _onDropdownChanged(option: IDropdownOption) {
    this.setState({
      firstDayOfWeek: DayOfWeek[option.key]
    });
  }
}
