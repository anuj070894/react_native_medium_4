import { PLAYERS_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = { }; // the data we get from firebase is an object that has the objects
// of players inside an object with id of the record as the key. and not an array of objects
// the reason is that we can easily update the record for an id with objs inside an obj than
// in an array
// { ...state, [id]: action.payload }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYERS_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }

}
