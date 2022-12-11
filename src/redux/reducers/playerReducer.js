import { ADD_TO_FAV, PLAY_MUSIC } from "../actions";

const initialState = {
  songBuffer: {},
  favSongs: [],
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_MUSIC:
      return { ...state, songBuffer: action.payload };
    case ADD_TO_FAV:
      return { ...state, favSongs: [...state.favSongs, action.payload] };
    default:
      return state;
  }
};

export default playerReducer;
