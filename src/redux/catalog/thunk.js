import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCars, fetchCarById } from "../../api/axios.js";

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

export const getById = createAsyncThunk(
  "catalog/getCarById",
  async (id, thunkAPI) => {
    try {
      const result = await fetchCarById(id);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
