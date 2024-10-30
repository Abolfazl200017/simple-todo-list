import { UserTodos } from '../redux/todos/todosSlices';
import { getTodosFromLocalStorage, setTodosOnLocalStorage, UsersTodos } from './localStorage';

let userId: number | null = null;
let userTodos: UserTodos | null = null;
let usersTodos: UsersTodos | null = null;

export const InitialUserTodos: UserTodos = {
  categories: [],
  todos: [],
};


function setUserTodosFromStorage(id: number) {
  const todos: UsersTodos | null = getTodosFromLocalStorage();
  userId = id;
  usersTodos = todos ? todos : <UsersTodos>{
    [id]: { ...InitialUserTodos }
  };
  if(!userTodos[id])
    userTodos = { ...userTodos, [id]: { ...InitialUserTodos}}
  userTodos = todos[id]
}

export function updateUserTodos(updatedUserTodos: UserTodos): void {
  userTodos = updatedUserTodos;
  usersTodos = {
    ...usersTodos,
    [userId]: { ...updatedUserTodos },
  };

  setTodosOnLocalStorage(usersTodos);
}

export function getUserTodos(id: number): UserTodos {
  setUserTodosFromStorage(id);
  return userTodos;
}
