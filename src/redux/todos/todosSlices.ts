import { createSlice } from '@reduxjs/toolkit';
import { getUserTodos } from '@utils/todosData';

export type Todo = {
  id: string;
  title: string;
  body: string | null;
  isDone: boolean;
  category: string;
};

export type Category = {
  name: string;
  color: string | null;
};

export type UserTodos = {
  categories: Category[];
  todos: Todo[];
};

export type TodosState = {
    loading: boolean;
    Todos: UserTodos| null;
    error: Error | null | unknown;
    sucsess: boolean;
}

const initialState: TodosState = {
    loading: true,
    error: null,
    Todos: null,
    sucsess: false,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initialState: (state, action) => {
        const userTodos: UserTodos = getUserTodos(action.payload.id)
        state.Todos = userTodos;
        state.sucsess = true
        state.loading = false
    }
  },
});

// Action creators are generated for each case reducer function


export default userSlice.reducer;
