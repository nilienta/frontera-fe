import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { getToken } from './token';

const BACKEND_URL = 'https://httpbin.org/';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();
    const headers = config.headers;

    if (headers) {
        headers['x-token'] = token;
    }

    return config;
  });

  return api;
};
