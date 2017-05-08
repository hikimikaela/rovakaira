import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { TextField } from 'office-ui-fabric-react/lib/TextField';





export class DialogBasicExample extends React.Component {

  constructor() {
    super();
  this.state = {
  showDialog: true,
  messageTitle: ''
  //selectedItem: null

};
  }

  onTitleChange(text) {
    this.setState({messageTitle: text });
  }

/*
  onSaveMidEditInput() {

    let { viestiPohjat } = this.state;
    viestiPohjat.push({ text: this.state.dialogTextFieldValue, key: viestiPohjat.length + "uniikkikey", content: this.state.dialogInputValue });
    this.setState({
      showDialog: false
    });
  }
*/
  render() {
console.log('dialog render');
let {whenSaved, whenChange} = this.props;
    return (

      <div>
        <Dialog
          isOpen={ this.state.showDialog }
          type={ DialogType.normal }
          onDismiss={ this._closeDialog.bind(this) }
          title='Tallenna viestipohjaksi'
          subText='Haluatko tallentaa viestin viestipohjaksi?'
          isBlocking={ false }
          containerClassName='ms-dialogMainOverride'
        >

        <TextField onChanged={this.onTitleChange.bind(this)} />
          <DialogFooter>
            <Button onClick={ this.props.whenChange }>Jatka tallentamatta</Button>
            <Button buttonType={ ButtonType.primary } ref="dialogInputValue" onClick={() => this.props.whenSaved(this.state.messageTitle) }>Tallenna viestipohjaksi</Button>


          </DialogFooter>
        </Dialog>
      </div>
    );
  }

   _showDialog() {
    this.setState({ showDialog: true });
  }

  _closeDialog() {
      this.setState({ showDialog: false });
  // dialogInputValue: selectedItem.content
    }

  _onChoiceChanged() {
    console.log('Choice option change');
  }
}
