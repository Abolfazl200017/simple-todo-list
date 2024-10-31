import axios from 'axios';
import { getAccessTokenToLocalStorage, getRefreshTokenToLocalStorage, removeAccessTokenFromLocalStorage, removeRefreshTokenFromLocalStorage, setAccessTokenToLocalStorage, setRefreshTokenToLocalStorage } from 'utils/localStorage';
import { BASE_URL } from './CONSTANT';
import { SERVER_ERROR } from 'navigation/CONSTANT';

const axiosInstance = axios.create({
  baseURL: BASE_URL //process.env.REACT_APP_API_BASE_URL
});

axiosInstance.interceptors.request.use(request => {
  const accessToken = getAccessTokenToLocalStorage()
  if (accessToken) {
    request.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return request;
}, error => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  response => response, // Directly return successful responses.
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.
      try {
        const refreshToken = getRefreshTokenToLocalStorage(); // Retrieve the stored refresh token.
        // Make a request to your auth server to refresh the token.
        const response = await axios.post('https://your.auth.server/refresh', {
          refreshToken,
        });
        const { accessToken, refreshToken: newRefreshToken } = response.data;
        // Store the new access and refresh tokens.
        setAccessTokenToLocalStorage(accessToken)
        setRefreshTokenToLocalStorage(newRefreshToken)
        // Update the authorization header with the new access token.
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        return axiosInstance(originalRequest); // Retry the original request with the new access token.
      } catch (refreshError) {
        // Handle refresh token errors by clearing stored tokens and redirecting to the login page.
        console.error('Token refresh failed:', refreshError);
        removeAccessTokenFromLocalStorage()
        removeRefreshTokenFromLocalStorage()
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    if (error.response?.status === 500 || error.response?.status === 0) {
      console.error('A server error occurred. Redirecting to error page...');
      window.location.href = SERVER_ERROR; // Redirect to a dedicated 500 error page
    }

    return Promise.reject(error); // For all other errors, return the error as is.
  }
);

export default axiosInstance;