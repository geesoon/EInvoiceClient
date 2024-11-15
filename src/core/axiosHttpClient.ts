import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs";
import IHttpClient from "./IHttpClient";

/**
 * An implementation of IHttpClient
 * @class
 */
class AxiosHttpClient implements IHttpClient {
    async get(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        if (data != null && data != undefined) {
            const query = qs.stringify(data);
            url = `${url}?${query}`;
        }
        return await axios.get(url, config);
    }

    async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        return await axios.post(url, data, config);
    }

    async put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        return await axios.put(url, data, config);
    }
}

export default AxiosHttpClient;