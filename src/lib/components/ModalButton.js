import React, { Component } from 'react';

class ModalButton extends Component {

  render() {
    const 
    {
        target,
        value,
        ...inputProps 
    } = this.props;
    return (
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${target}`} {...inputProps }>
          {value}
      </button>
    );
  }
}

export default ModalButton;