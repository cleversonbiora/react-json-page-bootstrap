import React, { Component } from 'react';
import {DynamicPage} from 'react-json-page'
import FormGroup from './components/FormGroup'
import Modal from './components/Modal'
import ModalButton from './components/ModalButton'

class DynamicBootstrapPage extends Component {
  constructor(props) {
    super(props);
    this.Components = {
      FormGroup,
      Modal,
      ModalButton
    }
    if(props.customComponents){
      this.Components = Object.assign(this.Components, props.customComponents);
    }

  }

  render() {
    return(
      <DynamicPage form={this.props.form}  customComponents={this.Components}/>);
  }
}
export default DynamicBootstrapPage;