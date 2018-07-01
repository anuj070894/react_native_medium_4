import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { PLAYER_UPDATE, PLAYER_CREATE } from './types';

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
