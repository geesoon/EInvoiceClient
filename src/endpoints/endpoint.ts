import JsonSerializer from "@/jsonSerializer";
import IHttpClient from "../IHttpClient";
import { AxiosRequestConfig, AxiosResponse, HttpStatusCode } from "axios";
import ApiError from "@/models/apiError";

abstract class Endpoint {
    protected readonly baseURL: URL;
    protected readonly relativePath: string;
    protected readonly httpClient: IHttpClient;
    protected readonly fullUrl: string;

    constructor(baseUrl: URL, relativePath: string, httpClient: IHttpClient) {
        this.baseURL = baseUrl;
        this.relativePath = relativePath;
        this.httpClient = httpClient;
        this.fullUrl = `${this.baseURL.toString()}${this.relativePath}`;
    }

    protected getBaseRequestConfig(accessToken: string): AxiosRequestConfig {
        let config: AxiosRequestConfig = {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        };
        return config;
    }

    protected handleResponse<T>(response: AxiosResponse, dtoClass: any): T {
        if (response.status == HttpStatusCode.Ok) {
            return JsonSerializer.deserialize<T>(response.data, dtoClass);
        }
        throw new ApiError("Api call returns not ok.", response.status, response.data);
    }
}

export default Endpoint;