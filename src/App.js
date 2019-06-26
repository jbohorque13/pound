/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import RootNavigation from './navigation/RootNavigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers';

export const store = createStore(
  reducers,
  applyMiddleware(
    thunk
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigation />
      </ Provider>
    );
  }
}

export default App;
