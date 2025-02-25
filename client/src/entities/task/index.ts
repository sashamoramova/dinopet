export { taskReducer } from './slice';
export {
  getAllTasksThunk,
  createTaskThunk,
  deleteTaskThunk,
  updateTaskThunk,
} from './api';
export { TaskCard } from './ui/TaskCard';
export type { IRawTaskData, ITask, ArrayTasksType } from './model';