import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Reducers } from 'react-json-page';
import { combineReducers } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';

  export const ReducersApp = combineReducers({
    dynamicFormState: Reducers
  });
  export const Store = createStore(ReducersApp);
  
  ReactDOM.render(
      <Provider store={Store}>
        <App />
      </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
