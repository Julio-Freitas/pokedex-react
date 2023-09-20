/* eslint-disable import/named */
import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios';

export const requester = (
  config: AxiosRequestConfig,
  contentType?: string,
  options?: any,
) => {
  const service = axios.create({
    baseURL: config.baseURL,
    ...options,
  });

  const onRequest = (config: InternalAxiosRequestConfig<any>) => {
    const newConfig = config;
    newConfig.headers['Content-Type'] = contentType ?? 'application/json';
    newConfig.headers['Access-Control-Allow-Origin'] = '*';
    return newConfig;
  };

  const onError = (error: any) => Promise.reject(error);

  service.interceptors.request.use(onRequest, onError);

  return {
    async get<T = any>(uri: string): Promise<AxiosResponse<T>> {
      const response = await service.get<T>(uri);
      return response;
    },

    async post<T = any>(uri: string, data: any): Promise<AxiosResponse<T>> {
      const response = await service.post<T>(uri, data);
      return response;
    },
  };
};
