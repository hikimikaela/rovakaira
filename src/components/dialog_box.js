import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';



export class DialogBasicExample extends React.Component {

  constructor() {
    super();
  this.state = {
  showDialog: true
};
  }

  onSaveMidEditInput() {
    let { viestiPohjat } = this.state;
    viestiPohjat.push({ text: this.state.inputValue.substr(0, 10), key: viestiPohjat.length + "uniikkikey", content: this.state.inputValue });
    this.setState({
      showDialog: false
    });
  }
  render() {
console.log('dialog render');
let {whenSaved} = this.props;
    return (

      <div>
        <Dialog
          isOpen={ this.state.showDialog }
          //isOpen={ this.props.showDialog }
          type={ DialogType.normal }
          onDismiss={ this._closeDialog.bind(this) }
          title='Tallenna viestipohjaksi'
          subText='Haluatko tallentaa viestin viestipohjaksi?'
          isBlocking={ false }
          containerClassName='ms-dialogMainOverride'
        >
          <ChoiceGroup
            options={ [
              {
                key: 'A',
                text: 'Kylla'

              },

              {
                key: 'B',
                text: 'En',
                checked: true
              }
            ] }
            onChanged={ this._onChoiceChanged }
          />
          { null }
          <DialogFooter>
            <Button onClick={ this._closeDialog.bind(this) }>Palaa</Button>
            <Button buttonType={ ButtonType.primary } onClick={ this.props.whenSaved }>Jatka</Button>


          </DialogFooter>
        </Dialog>
      </div>
    );
  }

  todellaClicked() {
    this.props.whenSaved()
  }

   _showDialog() {
    this.setState({ showDialog: true });
  }

_closeDialog() {
    this.setState({ showDialog: false });
  }

  _onChoiceChanged() {
    console.log('Choice option change');
  }
}
