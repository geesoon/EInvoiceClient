import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import IHttpClient from "./IHttpClient";

/**
 * An implementation of IHttpClient
 * @class
 */
class AxiosHttpClient implements IHttpClient {
    async get(url: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
        if (data) {
            const query = qs.stringify(data);
            url = `${url}${query}`;
        }
        const response = await axios.get(url, config);
        return response.data;
    }

    async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
        const response = await axios.post(url, data, config);
        return response.data;
    }
}

export default AxiosHttpClient;