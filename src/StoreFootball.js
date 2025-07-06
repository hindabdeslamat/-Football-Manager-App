import produce from "immer";
import './GlobalStyles.css';

// Type d'actions //
export const ADD_PLAYER = "AddPlayer";
export const ADD_MATCH = "AddMatch";
export const FINISH_MATCH = "FinishMatch";

// Actions //
export function AddPlayer(playerObj) {
  return {
    type: ADD_PLAYER,
    payload: {
      id: playerObj.id,
      nom: playerObj.nom,
      prenom: playerObj.prenom,
      age: playerObj.age,
      sexe: playerObj.sexe,
      score: playerObj.score,
      photo: playerObj.photo,
    },
  };
}

export function AddMatch(Id, date, id_joueur1, id_joueur2, id_gagnant) {
  return {
    type: ADD_MATCH,
    payload: {
      id: Id,
      date: date,
      idJoueur1: id_joueur1,
      idJoueur2: id_joueur2,
      idGagnant: id_gagnant,
    },
  };
}

export function FinishMatch(IdMatche, id_gagnant) {
  return {
    type: FINISH_MATCH,
    payload: {
      id: IdMatche,
      idGagnant: id_gagnant,
    },
  };
}

// État initial //
const initialState = {
  players: [],
  matches: [],
};

// Reducers //
export function Reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PLAYER:
      return produce(state, (draft) => {
        draft.players.push(action.payload);
      });

    case ADD_MATCH:
      return produce(state, (draft) => {
        draft.matches.push(action.payload);
      });

    case FINISH_MATCH:
      return produce(state, (draft) => {
        const match = draft.matches.find((m) => m.id === action.payload.id);
        if (match) {
          match.idGagnant = action.payload.idGagnant;
        } else {
          alert("Match non existant");
        }
      });

    default:
      return state;
  }
}
