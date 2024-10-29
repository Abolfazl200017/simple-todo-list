import { __ACCESS_TOKEN_KEY__, __REFRESH_TOKEN_KEY__ } from './CONSTANT';

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