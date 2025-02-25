import {
  deleteTaskThunk,
  getAllTasksThunk,
  IRawTaskData,
  updateTaskThunk,
} from "@/entities/task";
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { unwrapResult } from "@reduxjs/toolkit";

export const useTaskList = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.task.tasks);

  const deleteTask = useCallback(
    async (id: number) => {
      dispatch(deleteTaskThunk(id));
    },
    [dispatch]
  );

  const updateTask = useCallback(
    async (id: number, updatedTask: IRawTaskData) => {
      const result = await dispatch(updateTaskThunk({ id, updatedTask }));
      console.log("result =====>>>", result);
      unwrapResult(result);
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getAllTasksThunk());
  }, [dispatch]);

  return {
    tasks,
    deleteTask,
    updateTask,
  };
};
