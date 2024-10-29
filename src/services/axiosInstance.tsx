import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/' //process.env.REACT_APP_API_BASE_URL
});

export default axiosInstance;