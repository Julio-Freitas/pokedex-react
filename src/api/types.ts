// eslint-disable-next-line import/named
import { AxiosRequestConfig } from 'axios';

export interface IRequester {
  config: AxiosRequestConfig;
  contentType?: string;
  options?: any;
}
