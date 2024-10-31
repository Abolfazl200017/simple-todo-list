import { UserTodos } from '../redux/todos/todosSlices';
import { __ACCESS_TOKEN_KEY__, __REFRESH_TOKEN_KEY__, __TODOS_KEY__ } from './CONSTANT';

export type UsersTodos = {
  [key: number]: UserTodos;
}

// Auth token functions
export function setAccessTokenToLocalStorage(token: string): void {
  localStorage.setItem(__ACCESS_TOKEN_KEY__, token);
}

export function getAccessTokenToLocalStorage(): string | null {
  return localStorage.getItem(__ACCESS_TOKEN_KEY__);
}

export function removeAccessTokenFromLocalStorage(): void {
  localStorage.removeItem(__ACCESS_TOKEN_KEY__);
}

export function setRefreshTokenToLocalStorage(token: string): void {
  localStorage.setItem(__REFRESH_TOKEN_KEY__, token);
}

export function getRefreshTokenToLocalStorage(): string | null {
  return localStorage.getItem(__REFRESH_TOKEN_KEY__);
}

export function removeRefreshTokenFromLocalStorage(): void {
  localStorage.removeItem(__REFRESH_TOKEN_KEY__);
}

// Todos functions
export function getTodosFromLocalStorage(): UsersTodos | null {
  const todos = localStorage.getItem(__TODOS_KEY__);
  return todos ? JSON.parse(todos) as UsersTodos : null;
}

export function setTodosOnLocalStorage(data: UsersTodos | null): void {
  if (!data) {
    localStorage.removeItem(__TODOS_KEY__);
  } else {
    localStorage.setItem(__TODOS_KEY__, JSON.stringify(data));
  }
}
