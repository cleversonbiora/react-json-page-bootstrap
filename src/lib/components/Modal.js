
import React, { Component } from 'react';
import {SchemaField} from 'react-json-page';

class Modal extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        const 
        {
            label,
            title,
            inputType,
            className,
            type,
            id,
            controls,
            footerControls,
            ariaDescribedby,
            ...inputProps 
        } = props;
        this.view = {
            type:"div",
            className:"modal fade",
            id:id,
            tabindex="-1",
            role:"dialog",
            "aria-labelledby": `${id}ModalLabel`,
            "aria-hidden":"true",
            controls:[
                {
                    type:"div",
                    className:"modal-dialog",
                    role:"document",
                    controls:[
                        {
                            type:"div",
                            className:"modal-content",
                            controls:[
                                {
                                    type:"div",
                                    className:"modal-header",
                                    controls:[
                                        {
                                            type:"h5",
                                            id: `${id}ModalLabel`,
                                            className:"modal-title",
                                            value: title || label
                                        },
                                        {
                                            type:"h5",
                                            id: `${id}ModalLabel`,
                                            className:"modal-title",
                                            value: title || label
                                        }
                                    ]
                                },
                                {
                                    type:"div",
                                    className:"modal-body",
                                    controls: controls
                                },
                                {
                                    type:"div",
                                    className:"modal-footer",
                                    controls: footerControls
                                },
                            ]
                        }
                    ]
                }
            ]
        }

    }
//   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//     <span aria-hidden="true">&times;</span>
//   </button>
  render() {
    return (
        <SchemaField {...this.view} />
    );
  }
}

export default Modal;