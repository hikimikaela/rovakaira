
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchResults from './components/search_results';
import MainSearch from './components/search_main';
import Navigation from './components/navigation.js';
import { DropdownBasicExample } from './components/message_settings';
import { Button } from 'office-ui-fabric-react/lib/Button';
import { DialogBasicExample } from './components/dialog_box';
import { DatePickerBasicExample } from '/Users/hallemi/Rovakaira/src/components/date_picker.js';
import Time from './components/time.js';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { filterFields } from './config/constants.js'

const App = () => {

  return (
    <div>
      <Navigation />
    <div className="ms-Grid-row ms-Grid-col ms-u-sm12">


    <MainSearch filterFields={filterFields} title="Hae asiakastietokannasta" columns="2"/>

    <SearchResults />
    <DropdownBasicExample />
    <DatePickerBasicExample />
    <Time />

    </div>
    </div>

);
}


ReactDOM.render (<App />, document.querySelector('.container'));
