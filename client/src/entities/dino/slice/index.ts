import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { ArrayDinosType } from "../model";
import {
  getAllDinosThunk,
} from "../api";

type DinoState = {
  dinos: ArrayDinosType | [];
  error: string | null;
  loading: boolean;
};

const initialState: DinoState = {
  dinos: [],
  error: null,
  loading: false,
};

const dinoSlice = createSlice({
  name: "dino",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //* getAllDinosThunk
      .addCase(getAllDinosThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllDinosThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.dinos = action.payload.data;
        state.error = null;
        message.success(action.payload.message);
      })
      .addCase(getAllDinosThunk.rejected, (state, action) => {
        state.loading = false;
        state.dinos = [];
        state.error = action.payload!.error;
        message.error(action.payload!.error);
      })
  },
});

export const dinoReducer = dinoSlice.reducer;
