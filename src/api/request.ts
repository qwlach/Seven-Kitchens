/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from "axios";

const instance = axios.create({
  timeout: 5000
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject();
    }
  },
  (error: AxiosError) => {
    throw new Error("Http Error: " + error);
  }
);

export interface Result<T = unknown> {
  message: string;
  code: number;
  data: T;
  [key: string]: any; // 其他任意类型
}

export const http = {
  get<T = any>(url: string, params?: object): Promise<Result<T>> {
    console.log(params);

    return instance.get<T, Result<T>>(url, { params });
  },
  post<T = any>(url: string, data?: object): Promise<Result<T>> {
    return instance.post<T, Result<T>>(url, data);
  },
  put<T = any>(url: string, data?: object): Promise<Result<T>> {
    return instance.put<T, Result<T>>(url, data);
  },
  delete<T = any>(url: string, data?: object): Promise<Result<T>> {
    return instance.delete<T, Result<T>>(url, data);
  }
};

export default http;
