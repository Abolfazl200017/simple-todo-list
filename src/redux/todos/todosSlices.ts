import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserTodos } from 'utils/todosData';

export type Todo = {
  id: string;
  title: string;
  body: string | null;
  isDone: boolean;
  category: string;
};

export type CategoryConfig = {
  name: string;
  color: string | null;
};

export type UserTodos = {
  [key: string]: {
    config: CategoryConfig;
    todos: Todo[];
  }
};

export type TodosState = {
  loading: boolean;
  todos: UserTodos;
  error: Error | null | unknown;
  success: boolean;
};

const initialState: TodosState = {
  loading: true,
  error: null,
  todos: null,
  success: false,
};

export const todosSlice = createSlice({
  name: 'todosSlice',
  initialState,
  reducers: {
    initState: (state, action: PayloadAction<{ id: number }>) => {
      const userTodos = getUserTodos(action.payload.id);
      state.todos = { ...userTodos };
      state.success = true;
      state.loading = false;
    },
  },
});

export const { initState } = todosSlice.actions;
export default todosSlice.reducer;
