import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import Router from './Router';

class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyA4GGjPo_kCdyhQsYAppFVJc8heUOzSV5o',
      authDomain: 'managers-63d50.firebaseapp.com',
      databaseURL: 'https://managers-63d50.firebaseio.com',
      projectId: 'managers-63d50',
      storageBucket: 'managers-63d50.appspot.com',
      messagingSenderId: '986661987500',
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
