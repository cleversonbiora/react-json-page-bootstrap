import React, { Component } from 'react';
import {DynamicPage} from 'react-json-page'
import FormGroup from './components/FormGroup'
import 'bootstrap/dist/css/bootstrap.css';

class DynamicBootstrapPage extends Component {
  constructor(props) {
    super(props);
    this.Components = {
      FormGroup
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