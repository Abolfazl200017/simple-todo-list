import { UserTodos } from '../redux/todos/todosSlices';
import { getTodosFromLocalStorage, setTodosOnLocalStorage, UsersTodos } from './localStorage';

let userId: number | null = null;
let userTodos: UserTodos | null = null;
let usersTodos: UsersTodos | null = null;

const initialUserTodos = <UserTodos>{ 'inbox': { config: { color: null, name: 'صندوق'}, todos: {}}}

function setUserTodosFromStorage(id: number) {
  const todos = getTodosFromLocalStorage();
  userId = id;
  usersTodos = todos || { [id]: { ...initialUserTodos } };
  userTodos = usersTodos[id] || { ...initialUserTodos };
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

export function generateUniqueId() {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}