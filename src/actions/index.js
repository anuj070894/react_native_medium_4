import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

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
  }
}
