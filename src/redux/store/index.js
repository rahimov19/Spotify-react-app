import { combineReducers, configureStore } from "@reduxjs/toolkit";

import loginReducer from "../reducers/loginReducer";
import musicReducer from "../reducers/musicReducer";
import playerReducer from "../reducers/playerReducer";
import searchReducer from "../reducers/searchReducer";

const bigReducer = combineReducers({
  login: loginReducer,
  music: musicReducer,
  search: searchReducer,
  player: playerReducer,
});

export const store = configureStore({ reducer: bigReducer });
