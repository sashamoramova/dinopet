export interface IRawTaskData {
  title: string;
  body: string;
}

export interface ITask extends IRawTaskData {
  id: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ArrayTasksType = Array<ITask>;
