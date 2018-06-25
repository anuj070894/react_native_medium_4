import { PLAYER_UPDATE } from './types';

export const updatePlayer = ({ prop, value }) => {
  return {
    type: PLAYER_UPDATE,
    payload: { prop, value },
  };
}
