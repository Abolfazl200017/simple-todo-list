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
  const todos = getTodosFromLocalStorage();
  userId = id;
  usersTodos = todos || { [id]: { ...InitialUserTodos } };
  userTodos = usersTodos[id] || { ...InitialUserTodos };
  if(JSON.stringify(usersTodos) !== JSON.stringify(todos))
    setTodosOnLocalStorage(usersTodos)
}

export function updateUserTodos(updatedUserTodos: UserTodos): void {
  if (userId !== null) {
    usersTodos = { ...usersTodos, [userId]: updatedUserTodos };
    setTodosOnLocalStorage(usersTodos);
  }
}

export function getUserTodos(id: number): UserTodos {
  setUserTodosFromStorage(id);
  return userTodos;
}
