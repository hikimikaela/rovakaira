
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
import { filterFields } from './config/constants.js';
import Dropzone from 'react-dropzone';

const App = () => {

  return (
    <div className="ms-font-m">
      <Navigation />
    <div className="ms-font-s-plus">


    <MainSearch filterFields={filterFields}/>

    <SearchResults />
    <DropdownBasicExample />
      <div className="dropzone">
      <Dropzone />
      </div>
    <DatePickerBasicExample />
    <Time />

    </div>
    </div>



);
}


ReactDOM.render (<App />, document.querySelector('.container'));
