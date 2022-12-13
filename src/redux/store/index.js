/* eslint-disable no-unused-vars */
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import loginReducer from "../reducers/loginReducer";
import musicReducer from "../reducers/musicReducer";
import playerReducer from "../reducers/playerReducer";
import searchReducer from "../reducers/searchReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  tranforms: [
    encryptTransform({
      secretKey: "SECRET_KEY",
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
};

const bigReducer = combineReducers({
  login: loginReducer,
  music: musicReducer,
  search: searchReducer,
  player: playerReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
