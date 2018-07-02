import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PlayerReducer from './PlayerReducer';
import PlayersListReducer from './PlayersListReducer';

export default combineReducers({
  auth: AuthReducer,
  playerUpdate: PlayerReducer,
  playersList: PlayersListReducer,
});
