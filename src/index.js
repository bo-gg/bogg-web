import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import axios from 'axios';

import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';


const AUTH_TOKEN = '9ba7134691f3e5188fc623eec430512c05e47ef1'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const createStoreWithMiddleware = applyMiddleware(
  promise 
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
