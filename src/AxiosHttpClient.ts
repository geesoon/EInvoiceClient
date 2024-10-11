import axios, { AxiosRequestConfig } from "axios";
import IHttpClient from "./IHttpClient";

class AxiosHttpClient implements IHttpClient {
    async get(url: string, config?: AxiosRequestConfig) {
        return await axios.get(url, config);
    }

    async post(url: string, data: any, config?: AxiosRequestConfig) {
        return await axios.post(url, data, config);
    }
}

export default AxiosHttpClient;