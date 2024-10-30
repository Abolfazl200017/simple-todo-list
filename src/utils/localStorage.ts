import { UserTodos } from '../redux/todos/todosSlices';
import { __ACCESS_TOKEN_KEY__, __REFRESH_TOKEN_KEY__, __TODOS_KEY__ } from './CONSTANT';

export type UsersTodos = {
  [key: number]: UserTodos;
}

// user auth tokens functions
export function setAccessTokenToLocalStorage(token: string): void {
  localStorage.setItem(__ACCESS_TOKEN_KEY__, token);
}

export function getAccessTokenToLocalStorage(): string|undefined {
    return localStorage.getItem(__ACCESS_TOKEN_KEY__);
}

export function removeAccessTokenFromLocalStorage() :void {
    localStorage.removeItem(__ACCESS_TOKEN_KEY__);
}

export function setRefreshTokenToLocalStorage(token: string): void {
  localStorage.setItem(__REFRESH_TOKEN_KEY__, token);
}

export function getRefreshTokenToLocalStorage(): string|undefined {
    return localStorage.getItem(__REFRESH_TOKEN_KEY__);
}

export function removeRefreshTokenFromLocalStorage() :void {
    localStorage.removeItem(__REFRESH_TOKEN_KEY__);
}

// todos tokens functions
export function getTodosFromLocalStorage() : UsersTodos | null {
  const todos = localStorage.getItem(__TODOS_KEY__);
  return todos ? <UsersTodos>JSON.parse(todos) : null
}

export function setTodosOnLocalStorage(data:UsersTodos|null) :void {
  if(!data){
    console.log('reseting todos local storage!')
    localStorage.removeItem(__TODOS_KEY__)
  }
  localStorage.setItem(__TODOS_KEY__, JSON.stringify(data));
}