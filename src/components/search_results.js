import React from 'react';
import { Button } from 'office-ui-fabric-react/lib/Button';
import ReactDOM from 'react-dom';
//import { Consts } from './config/constants.js'

const SearchResults = () => {
  return (
    <div className="ms-Grid-row ms-Grid-col ms-u-sm12">
    <hr />
      Hakutulokset
      <div id="placeholder">
        tähän se fabricin boksi
      </div>
      <div className="ms-Grid-row ms-Grid-col ms-u-sm12">
        <div className="ms-Grid-col ms-u-sm12">

          <Button id="continue-button">
            Jatka
          </Button>
            <Button id="back-button">
              Palaa
          </Button>
          <Button id="delete-button">
            Poista valitut
        </Button>
      </div>
      </div>
      </div>

  );
};

export default SearchResults;
