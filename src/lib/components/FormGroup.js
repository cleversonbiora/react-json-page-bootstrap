import React, { Component } from 'react';
import {SchemaField} from 'react-json-page';

class FormGroup extends Component {
    constructor(props) {
        super(props);
        const 
        {
            label,
            inputType,
            className,
            type,
            ariaDescribedby,
            ...inputProps 
        } = props;
        this.view = {
            type:"div",
            className:"form-group",
            children:[]
        }
        if(props.label){
            this.view.children.push(
                {
                    type:"label",
                    htmlFor:props.id,
                    value:label
                }
            );
        }
        this.view.children.push(
            {
                id:props.id,
                type:inputType || 'text',
                className:"form-control",
                "aria-describedby":`${props.id}Help`,
                ...inputProps 
            }
        );

        console.log({
            id:props.id,
            type:inputType || 'text',
            className:"form-control",
            "aria-describedby":`${props.id}Help`,
            ...inputProps 
        });
        if(ariaDescribedby){
            
            this.view.children.push(
                {
                    id:`${props.id}Help`,
                    type:"small",
                    htmlFor:props.id,
                    value:ariaDescribedby,
                    className:"form-text text-muted"
                }
            );
        }
        if(props.validation){          
            this.view.children.push(
                {
                    type:"div",
                    className:"invalid-feedback d-block",
                    value:`{${props.validation.output}}`
                }
            );
        }
    }
  render() {
    return (
        <SchemaField {...this.view} />
    );
  }
}

export default FormGroup;