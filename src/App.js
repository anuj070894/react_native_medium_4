import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
