import React, { Component } from 'react';
import {SchemaField} from 'react-json-page';

class ModalButton extends Component {
    constructor(props) {
        super(props);
        const 
        {
            target,
            ...inputProps 
        } = props;
        this.view = {
            type:"button",
            "data-toggle":"modal", 
            "data-target":`#${target}`,
            ...inputProps 
        }

    }

  render() {
    return (
        <SchemaField {...this.view} />
    );
  }
}

export default ModalButton;