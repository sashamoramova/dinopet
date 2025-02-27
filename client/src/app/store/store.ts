import { userReducer } from '@/entities/user';
import { taskReducer } from '@/entities/task';
import { dinoReducer } from '@/entities/dino';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
    dino: dinoReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;