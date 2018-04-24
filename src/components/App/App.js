import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from '../../reducers';

import './App.css';
import {
  Map,
} from './components';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Map />
  </Provider>
);

export default App;
