import { IApiResponseReject, IApiResponseSuccess } from '@/shared/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ArrayTasksType, IRawTaskData, ITask } from '../model';
import { axiosInstance } from '@/shared/lib/axiosInstance';
import { AxiosError } from 'axios';

enum TASK_THUNKS_TYPES {
  GET_ALL = 'task/getAll',
  CREATE = 'task/create',
  DELETE = 'task/delete',
  UPDATE = 'task/update',
}

export const getAllTasksThunk = createAsyncThunk<
  IApiResponseSuccess<ArrayTasksType>,
  void,
  { rejectValue: IApiResponseReject }
>(TASK_THUNKS_TYPES.GET_ALL, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get<
      IApiResponseSuccess<ArrayTasksType>
    >('/tasks');

    return data;
  } catch (error) {
    const err = error as AxiosError<IApiResponseReject>;
    return rejectWithValue(err.response!.data);
  }
});

export const createTaskThunk = createAsyncThunk<
  IApiResponseSuccess<ITask>,
  IRawTaskData,
  { rejectValue: IApiResponseReject }
>(TASK_THUNKS_TYPES.CREATE, async (newTask, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post<IApiResponseSuccess<ITask>>(
      '/tasks',
      newTask
    );

    return data;
  } catch (error) {
    const err = error as AxiosError<IApiResponseReject>;
    return rejectWithValue(err.response!.data);
  }
});

export const deleteTaskThunk = createAsyncThunk<
  IApiResponseSuccess<ITask>,
  number,
  { rejectValue: IApiResponseReject }
>(TASK_THUNKS_TYPES.DELETE, async (id, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.delete<IApiResponseSuccess<ITask>>(
      `/tasks/${id}`
    );

    return data;
  } catch (error) {
    const err = error as AxiosError<IApiResponseReject>;
    return rejectWithValue(err.response!.data);
  }
});

export const updateTaskThunk = createAsyncThunk<
  IApiResponseSuccess<ITask>,
  { id: number; updatedTask: IRawTaskData },
  { rejectValue: IApiResponseReject }
>(
  TASK_THUNKS_TYPES.UPDATE,
  async ({ id, updatedTask }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.put<IApiResponseSuccess<ITask>>(
        `/tasks/${id}`,
        updatedTask
      );

      return data;
    } catch (error) {
      const err = error as AxiosError<IApiResponseReject>;
      return rejectWithValue(err.response!.data);
    }
  }
);