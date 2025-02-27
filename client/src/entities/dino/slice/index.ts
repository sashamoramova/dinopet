import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { ArrayTasksType } from "../model";
import {
  createTaskThunk,
  deleteTaskThunk,
  getAllTasksThunk,
  updateTaskThunk,
} from "../api";

type TaskState = {
  tasks: ArrayTasksType | [];
  error: string | null;
  loading: boolean;
};

const initialState: TaskState = {
  tasks: [],
  error: null,
  loading: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //* getAllTasksThunk
      .addCase(getAllTasksThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTasksThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload.data;
        state.error = null;
        message.success(action.payload.message);
      })
      .addCase(getAllTasksThunk.rejected, (state, action) => {
        state.loading = false;
        state.tasks = [];
        state.error = action.payload!.error;
        message.error(action.payload!.error);
      })

      //* createTaskThunk
      .addCase(createTaskThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTaskThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = [...state.tasks, action.payload.data];
        state.error = null;
        message.success(action.payload.message);
      })
      .addCase(createTaskThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload!.error;
        message.error(action.payload!.error);
      })

      //* deleteTaskThunk
      .addCase(deleteTaskThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTaskThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.filter(
          (task) => task.id !== action.payload.data.id
        );
        state.error = null;
        message.success(action.payload.message);
      })
      .addCase(deleteTaskThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload!.error;
        message.error(action.payload!.error);
      })

      //* updateTaskThunk
      .addCase(updateTaskThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTaskThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.map((task) =>
          task.id === action.payload.data.id ? action.payload.data : task
        );
        state.error = null;
        message.success(action.payload.message);
      })
      .addCase(updateTaskThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload!.error;
        message.error(action.payload!.error);
      });
  },
});

export const taskReducer = taskSlice.reducer;
