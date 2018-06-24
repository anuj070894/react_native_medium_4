import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from './types';
import firebase from 'firebase';


const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
}

const loginUserFail = (dispatch) => {
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
    firebase.auth().signInWithEmailAndPassword(email, pwd)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, pwd)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
}

