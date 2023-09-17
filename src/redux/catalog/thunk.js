import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCars } from "../../api/axios.js";

export const getAllCars = createAsyncThunk(
  "catalog/getCars",
  async (_, thunkAPI) => {
    try {
      const result = await fetchAllCars();
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
