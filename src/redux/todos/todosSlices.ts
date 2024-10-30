import { createSlice } from '@reduxjs/toolkit';

export type Todo = {
  id: string;
  title: string;
  body: string | null;
  isDone: boolean;
  category: string;
};

export type Category = {
  id: string;
  color: string | null;
};

export type UserTodos = {
  categories: Category[];
  todos: Todo[];
};

export type TodosState = {
    loading: boolean;
    Todos: UserTodos[];
    error: Error | null | unknown;
    sucsess: boolean;
}

const initialState: TodosState = {
    loading: true,
    error: null,
    Todos: [],
    sucsess: false,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
  },
});

// Action creators are generated for each case reducer function


export default userSlice.reducer;
