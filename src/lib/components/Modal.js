
import React, { Component } from 'react';
import {SchemaField} from 'react-json-page';

class Modal extends Component {
    constructor(props) {
        super(props);
        const 
        {
            label,
            title,
            id,
            children,
            footerchildren,
        } = props;
        this.view = {
            type:"div",
            className:"modal fade",
            id:id,
            tabIndex:"-1",
            role:"dialog",
            "aria-labelledby": `${id}ModalLabel`,
            "aria-hidden":"true",
            children:[
                {
                    type:"div",
                    className:"modal-dialog",
                    role:"document",
                    children:[
                        {
                            type:"div",
                            className:"modal-content",
                            children:[
                                {
                                    type:"div",
                                    className:"modal-header",
                                    children:[
                                        {
                                            type:"h5",
                                            id: `${id}ModalLabel`,
                                            className:"modal-title",
                                            value: title || label
                                        },
                                        {
                                            id: `${id}ModalClose`,
                                            type:"button",
                                            className:"close",
                                            "data-dismiss": "modal", 
                                            "aria-label":"Close",
                                            children:[
                                                {
                                                    type:"span",
                                                    className:"modal-title",
                                                    "aria-hidden": "true",
                                                    value: "&times;"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type:"div",
                                    className:"modal-body",
                                    children: children
                                },
                                {
                                    type:"div",
                                    className:"modal-footer",
                                    children: footerchildren
                                },
                            ]
                        }
                    ]
                }
            ]
        }

    }
  render() {
    return (
        <SchemaField {...this.view} />
    );
  }
}

export default Modal;