import { configureStore } from "@reduxjs/toolkit";
import userSlice from './user/userSlices'
import todoSlice from './todos/todosSlices'

const reducer = {
  user: userSlice,
  todo: todoSlice,
}

export const store = configureStore({
  reducer
});

export function getStoreWithState(preloadedState:RootState) {
  return configureStore({ reducer, preloadedState })
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch