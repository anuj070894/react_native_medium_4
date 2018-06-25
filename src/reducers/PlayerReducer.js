import { PLAYER_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  skill: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }; // our payload from PlayerActions { prop, value }. [action.payload.prop] is key interpolation and it determined at runtime
    default:
      return state;
  }
}
