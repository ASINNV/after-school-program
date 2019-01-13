import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

import * as serviceWorker from './serviceWorker';


const initialState = {
  id: null,
  fullName: null,
  email: null,
  message: null,
  schedule: true
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      state = {
        ...state,
        ...action.payload
      };
      break;
    case "SET_SCHEDULE":
      state = {
        ...state,
        schedule: action.payload
      };
      break;
    default:
      return state;
  }
  return state;
};

const store = createStore(combineReducers({appReducer}), applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
