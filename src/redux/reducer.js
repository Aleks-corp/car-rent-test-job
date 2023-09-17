import { combineReducers } from "redux";
import { favoritesReducer } from "./catalog/favoritesSlise";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import { catalogReducer } from "./catalog/catalogSlice";

const persistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favoritesList"],
};
const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export const reducer = combineReducers({
  favorites: persistedReducer,
  catalog: catalogReducer,
});
