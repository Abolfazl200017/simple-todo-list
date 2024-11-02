import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateUniqueId, getUserTodos, updateUserTodos } from 'utils/todosData';

export type Todo = {
  title: string;
  body: string | null;
  isDone: boolean;
  category: string;
};

export type CategoryConfig = {
  name: string;
  color: string | null;
};

export type Todos = {
  [key: string]: Todo;
};

export type UserTodos = {
  [key: string]: {
    config: CategoryConfig;
    todos: Todos;
  };
};

export type TodosState = {
  loading: boolean;
  todos: UserTodos;
  error: Error | null | unknown;
  success: boolean;
};

export type AddTodo = { category: string; todo: { title: string; body: string | null } };

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
    addCategory: (state, action: PayloadAction<{ name: string }>) => {
      state.loading = true;
      state.error = null;
      state.success = false;

      if (state.todos[action.payload.name]) {
        state.loading = false;
        state.error = 'نام وارد شده تکراری میباشد!';
      } else {
        state.todos = {
          ...state.todos,
          [action.payload.name]: {
            config: {
              color: null,
              name: action.payload.name,
            },
            todos: {},
          },
        };
        state.success = true;
        state.loading = false;
        updateUserTodos(state.todos);
      }
    },
    addTodo: (state, action: PayloadAction<AddTodo>) => {
      state.loading = true;
      state.error = null;
      state.success = false;
      const id = generateUniqueId();
      const newTodo: Todo = {
        title: action.payload.todo.title,
        body: action.payload.todo.body,
        category: action.payload.category,
        isDone: false,
      };
      const prevCategory = { ...state.todos[action.payload.category] };
      state.todos = {
        ...state.todos,
        [action.payload.category]: {
          config: { ...prevCategory.config },
          todos: {
            ...prevCategory.todos,
            [id]: { ...newTodo },
          },
        },
      };
      state.success = true;
      state.loading = false;
      updateUserTodos(state.todos);
    },
    doneTodo: (state, action:PayloadAction<{category: string, id:string}>) => {
      const prevTodos = { ...state.todos }
      prevTodos[action.payload.category].todos[action.payload.id].isDone = !prevTodos[action.payload.category].todos[action.payload.id].isDone
      state.todos = { ...prevTodos }
      updateUserTodos(state.todos);
    }
  },
});

export const { initState, addCategory, addTodo, doneTodo   } = todosSlice.actions;
export default todosSlice.reducer;
