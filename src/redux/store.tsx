import { configureStore } from "@reduxjs/toolkit";
import userSlice from './user/userSlices'
import todoSlice from './todos/todosSlices'

export const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch