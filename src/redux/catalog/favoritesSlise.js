import { createSlice } from "@reduxjs/toolkit";
import { initialFavoritesState } from "./initialState";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialFavoritesState,
  reducers: {
    addToFavorites: {
      reducer(state, action) {
        state.favoritesList = [...state.favoritesList, action.payload];
      },
    },
    removeFromFavorites: {
      reducer(state, action) {
        const newList = state.favoritesList.filter(
          (el) => el.id !== action.payload
        );
        state.favoritesList = [...newList];
      },
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
