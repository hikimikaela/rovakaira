import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
//import { Consts } from './config/constants.js'




class Time extends Component {
  constructor () {
    super();

    this.state = {
      time: "",
      valid: true
    };
}


  isValid(ev) {
    this.setState({time:ev.target.value})
    if(ev.target.value.length == 0 || ev.target.value.match("^([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]$)")) {
      this.setState({valid: true})
    } else {
      this.setState({valid: false})
    }
    console.log(this.state.validTime)
 }

  render() {


    return (
      <div>
      <div className="ms-Grid-row ms-Grid-col ms-u-sm12 ms-font-s-plus">
      <label>
      Kellonaika

      <input
        value={this.state.time}
        type="text"
        className={this.state.valid ? "form-control valid" : "form-control invalid"}
        placeholder="Aika muodossa 00:00"
        onChange={ this.isValid.bind(this) } />

        </label>
      </div>
      <div className="ms-Grid-row ms-Grid-col ms-u-sm12">
        <div className="ms-Grid-col ms-u-sm12">

          <Button id="continue-button">
            Jatka
          </Button>
            <Button id="back-button">
              Palaa
          </Button>
          </div>
          </div>
      </div>
      );
    }
  }


export default Time;
