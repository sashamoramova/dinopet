import { AxiosError } from 'axios';
import { axiosInstance } from '../../../shared/lib/axiosInstance';
import { IApiResponseReject, IApiResponseSuccess } from '../../../shared/types';
import { ArrayTasksType, IRawTaskData, ITask } from '../model';
import { defaultRejectedAxiosError } from '../../../shared/consts';

export default class TaskApi {
  static async getTasks(): Promise<
    IApiResponseSuccess<ArrayTasksType> | IApiResponseReject
  > {
    try {
      const { data } = await axiosInstance.get<
        IApiResponseSuccess<ArrayTasksType>
      >('/tasks');
      return data;
    } catch (error) {
      const axiosError = error as AxiosError<IApiResponseReject>;
      if (!axiosError.response) {
        return defaultRejectedAxiosError as IApiResponseReject;
      }
      return axiosError.response.data;
    }
  }

  static async getTaskById(
    id: number
  ): Promise<IApiResponseSuccess<ITask> | IApiResponseReject> {
    try {
      const { data } = await axiosInstance.get<IApiResponseSuccess<ITask>>(
        `/tasks/${id}`
      );
      return data;
    } catch (error) {
      const axiosError = error as AxiosError<IApiResponseReject>;
      if (!axiosError.response) {
        return defaultRejectedAxiosError as IApiResponseReject;
      }
      return axiosError.response.data;
    }
  }

  static async createTask(
    newTask: IRawTaskData
  ): Promise<IApiResponseSuccess<ITask> | IApiResponseReject> {
    try {
      const { data } = await axiosInstance.post<IApiResponseSuccess<ITask>>(
        '/tasks',
        newTask
      );
      return data;
    } catch (error) {
      const axiosError = error as AxiosError<IApiResponseReject>;
      if (!axiosError.response) {
        return defaultRejectedAxiosError as IApiResponseReject;
      }
      return axiosError.response.data;
    }
  }

  static async deleteTaskById(
    id: number
  ): Promise<IApiResponseSuccess<ITask> | IApiResponseReject> {
    try {
      const { data } = await axiosInstance.delete<IApiResponseSuccess<ITask>>(
        `/tasks/${id}`
      );
      return data;
    } catch (error) {
      const axiosError = error as AxiosError<IApiResponseReject>;
      if (!axiosError.response) {
        return defaultRejectedAxiosError as IApiResponseReject;
      }
      return axiosError.response.data;
    }
  }

  static async updateTaskById(
    id: number,
    updatedTask: IRawTaskData
  ): Promise<IApiResponseSuccess<ITask> | IApiResponseReject> {
    try {
      const { data } = await axiosInstance.put<IApiResponseSuccess<ITask>>(
        `/tasks/${id}`,
        updatedTask
      );
      return data;
    } catch (error) {
      const axiosError = error as AxiosError<IApiResponseReject>;
      if (!axiosError.response) {
        return defaultRejectedAxiosError as IApiResponseReject;
      }
      return axiosError.response.data;
    }
  }
}