import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from '../reducers';

import './App.css';
import MapContainer from '../containers/MapContainer';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MapContainer />
  </Provider>
);

export default App;
