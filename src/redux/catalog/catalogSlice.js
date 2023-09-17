import { createSlice } from "@reduxjs/toolkit";
import { initialCatalogState } from "./initialState";
import { getAllCars } from "./thunk";

const handlePending = (state) => {
  state.error = null;
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const handleFulfilledFetchCatalog = (state, action) => {
  state.catalogList = action.payload;
  state.filteredCatalog = action.payload;
  state.isLoading = false;
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState: initialCatalogState,
  reducers: {
    filteredCatalog: {
      reducer(state, action) {
        state.filteredCatalog = action.payload;
      },
    },
    isShownModal: {
      reducer(state, action) {
        state.showModal = action.payload;
      },
    },
    setModalItem: {
      reducer(state, action) {
        state.selectedItem = action.payload;
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, handlePending)
      .addCase(getAllCars.fulfilled, handleFulfilledFetchCatalog)
      .addCase(getAllCars.rejected, handleRejected);
  },
});
export const { filteredCatalog, isShownModal, setModalItem } =
  catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
