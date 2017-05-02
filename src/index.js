
// Webbiäpin käyttöliittymä

import React from 'react';
import ReactDOM from 'react-dom';
import SearchResults from './components/search_results';
import MainSearch from './components/search_main';
import { DropdownBasicExample } from './components/message_settings';
import { Button } from 'office-ui-fabric-react/lib/Button';
import { DialogBasicExample } from './components/dialog_box';
import { DatePickerBasicExample } from '/Users/hallemi/Rovakaira/src/components/date_picker.js';


const App = () => {
  return (
    <div className="ms-Grid-row ms-Grid-col ms-u-sm12">
    <div id="nav">
          <ul>
            <li id="mainsearch"><a href="#">Haku</a></li>
            <li id="stats"><a href="#">Tilastot</a></li>
            <li id="log-out"><a href="#">Kirjaudu ulos</a></li>
          </ul>
        </div>

    <MainSearch />
    <SearchResults />
    <DropdownBasicExample />

    <DatePickerBasicExample />


  </div>

);
}


ReactDOM.render (<App />, document.querySelector('.container'));
