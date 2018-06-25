import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';


const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
  Actions.main();
}

const loginUserFail = (dispatch, error) => {
  console.log(error);
  dispatch({
    type: LOGIN_USER_FAIL,
  });
}

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
}

export const passwordChanged = (pwd) => {
  return {
    type: PASSWORD_CHANGED,
    payload: pwd,
  };
}

export const loginUser = (email, pwd) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER }); // this is to show the loader
    firebase.auth().signInWithEmailAndPassword(email, pwd)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, pwd)
          .then(user => loginUserSuccess(dispatch, user))
          .catch((error) => loginUserFail(dispatch, error));
      });
  };
}

