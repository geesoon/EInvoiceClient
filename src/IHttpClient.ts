import { AxiosRequestConfig } from "axios";

interface IHttpClient {
    get(url: string, config?: AxiosRequestConfig): Promise<any>;
    post(url: string, data: any, config?: AxiosRequestConfig): Promise<any>;
}

export default IHttpClient;