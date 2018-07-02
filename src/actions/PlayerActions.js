import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { PLAYER_UPDATE, PLAYER_CREATE, PLAYERS_FETCH_SUCCESS } from './types';

export const updatePlayer = ({ prop, value }) => {
  return {
    type: PLAYER_UPDATE,
    payload: { prop, value },
  };
}

export const createPlayer = ({ name, phone, skill }) => {
  const { currentUser } = firebase.auth(); // firebase's auth has a currentUser
  // attribute that returns the current user who is authenticated in the app

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/players`) // making a ref from db to where the object should be put
      .push({ name, phone, skill })
      .then(() => {
        dispatch({ type: PLAYER_CREATE });
        Actions.playersList({ type: 'reset' }); // no back buttons will be sent. Meaning whereever you come from to land on the playersCreate screen, just forget everything
      });
  }
}

export const fetchPlayers = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/players`)
      .on('value', (snapshot) => {
        dispatch({ type: PLAYERS_FETCH_SUCCESS, payload: snapshot.val() }); // this function is persistent throughout the app. meaning whenever there is data
        // get that value from the firebase. that value is from the snapsot.
      });
  }
}
