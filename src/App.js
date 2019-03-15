import React, { Component } from 'react';
import formJson from './assets/form3.json';
import {DynamicBootstrapPage} from './lib'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <DynamicBootstrapPage form={formJson} />
      </div>
    );
  }
}

export default App;
