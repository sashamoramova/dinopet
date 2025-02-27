import { IApiResponseReject, IApiResponseSuccess } from "@/shared/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ArrayDinosType } from "../model";
import { axiosInstance } from "@/shared/lib/axiosInstance";
import { AxiosError } from "axios";

enum DINO_THUNKS_TYPES {
  GET_ALL = "dino/getAll",
}

export const getAllDinosThunk = createAsyncThunk<
  IApiResponseSuccess<ArrayDinosType>,
  void,
  { rejectValue: IApiResponseReject }
>(DINO_THUNKS_TYPES.GET_ALL, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get<
      IApiResponseSuccess<ArrayDinosType>
    >("/dinos");

    return data;
  } catch (error) {
    const err = error as AxiosError<IApiResponseReject>;
    return rejectWithValue(err.response!.data);
  }
});
