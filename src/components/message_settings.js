import React from 'react';
import { Button } from 'office-ui-fabric-react/lib/Button';
import ReactDOM from 'react-dom';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { DialogBasicExample } from './dialog_box';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
//import { Consts } from './config/constants.js'


export class DropdownBasicExample extends React.Component {
  constructor() {
    super();
    let items = this.getInitialViestiPohjat()
    this.state = {
      inputValue: "",
      inputChanged: false,
      viestiPohjat: items,
      selectedItem: null,
      showDialog: false
    };
  }
//tässä tallennetaan valmiita viestipohjia
  getInitialViestiPohjat() {
    let list = [];
    for (let i = 0; i < 3; i++) {
      list.push({ key: i, text: "Viestipohja"+" "+ (i+1), content: "Hyvät kansalaiset!"+" "+ (i+1) +" Donec a porta sem, in consectetur erat. Sed a tempor nulla, a interdum elit. Curabitur ultricies in est facilisis placerat. Mauris ac sapien id metus dignissim viverra at et nulla. Integer malesuada nisi sed efficitur malesuada. Phasellus auctor dictum auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum lobortis pellentesque eros. Donec elementum mollis sem vel bibendum. Pellentesque urna quam, porttitor vitae feugiat vel, fermentum a diam." });
    }

    return list;
  }

//tässä haetaan ja tallennetaan viestikentän arvo
  onInputChange(event) {
    //console.log(event.target.value)
    this.setState({inputValue: event, inputChanged: true })
  }

  //tässä työnnetään viestikentän arvo viestipohjiin
  onSaveInput() {
    let { viestiPohjat } = this.state;
    viestiPohjat.push({ text: this.state.inputValue.substr(0, 15), key: viestiPohjat.length + "uniikkikey", content: this.state.inputValue});
    this.setState({

    })
  }

//tässä seivataan viestikenttään kirjoitettu teksti viestipohjaksi
onSaveMidEditInput(title) {
  let { viestiPohjat } = this.state;
  viestiPohjat.push({ text: title, key: viestiPohjat.length + "uniikkikey", content: this.state.inputValue });
  this.setState({
    showDialog: false,
    inputValue: this.state.selectedItem
  });
}

onChangeMidEditInput() {
  this.setState({
    showDialog: false,
    inputValue: this.state.selectedItem
  });
}

//näytetään dialogiboksi kun viestikenttään on kirjoitettu jotain ja dropdownista valitaan viestipohja
  onDDChanged(selectedItem, index) {
    this.setState({ selectedItem: selectedItem.content})
    if (this.state.inputChanged && this.state.inputValue.length > 0) {
      this.setState({showDialog: true, inputChanged: false})

    } else {
      this.setState({ inputValue: selectedItem.content, inputChanged: false})
    }
  }


  render() {
    let { selectedItem, inputValue, viestiPohjat, showDialog, onSaveMidEditInput } = this.state;
    console.log('viestipohja render')
    return (

        <div>
            <div className='ms-Grid-row'>
                <div className='ms-DropdownBasicExample ms-Grid-col ms-u-sm6'>
                    {this.state.showDialog ? <DialogBasicExample whenSaved={ this.onSaveMidEditInput.bind(this) } whenChange={ this.onChangeMidEditInput.bind(this) } /> : null}
                    <Dropdown
                      label='Hae viestipohjista'
                      id='Basicdrop1'
                      ariaLabel='Basic dropdown example'
                      options={ viestiPohjat }
                      onChanged={this.onDDChanged.bind(this)}
                      />

                </div>
                <div className='ms-Grid-col ms-u-sm6'>
                    <Button onClick={this.onSaveInput.bind(this)} id="presaved">Tallenna viestipohjaksi</Button>
                </div>


            </div>
            <div>

                <TextField multiline autoAdjustHeight ref="inputValue" value={inputValue} onChanged={this.onInputChange.bind(this)}/>

            </div>
        </div>
    )


}
}
