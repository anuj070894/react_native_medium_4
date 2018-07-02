import { PLAYER_UPDATE, PLAYER_CREATE, PLAYER_UPDATE_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  skill: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }; // our payload from PlayerActions { prop, value }. [action.payload.prop] is key interpolation and it determined at runtime
		case PLAYER_CREATE:
			return INITIAL_STATE;
		case PLAYER_UPDATE_SUCCESS:
		  return INITIAL_STATE;
		default:
      return state;
  }
}
