import { createStore } from 'redux';
import produce from 'immer';
import players from '../data/players';
import { matches } from '../data/matches';

// Action Types
export const ADD_PLAYER = 'ADD_PLAYER';
export const ADD_MATCH = 'ADD_MATCH';
export const FINISH_MATCH = 'FINISH_MATCH';
export const UPDATE_PLAYER_SCORE = 'UPDATE_PLAYER_SCORE';

// Action Creators
export const AddPlayer = (playerObj) => ({ type: ADD_PLAYER, payload: playerObj });
export const AddMatch = (id, date, idJoueur1, idJoueur2) => ({
  type: ADD_MATCH,
  payload: { id, date, idJoueur1, idJoueur2, status: 'UPCOMING', league: 'Custom', leagueIcon: '⚽' }
});
export const FinishMatch = (id, idGagnant) => ({ type: FINISH_MATCH, payload: { id, idGagnant } });

// Initial State (pre-seeded with data)
const initialState = {
  players: players,
  matches: matches,
};

// Reducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PLAYER:
      return produce(state, draft => { draft.players.push(action.payload); });
    case ADD_MATCH:
      return produce(state, draft => { draft.matches.push(action.payload); });
    case FINISH_MATCH:
      return produce(state, draft => {
        const match = draft.matches.find(m => m.id === action.payload.id);
        if (match) {
          match.idGagnant = action.payload.idGagnant;
          match.status = 'FT';
        }
      });
    default:
      return state;
  }
}

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);
