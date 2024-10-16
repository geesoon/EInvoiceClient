import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import { plainToInstance, ClassConstructor, instanceToPlain } from "class-transformer";
import IHttpClient from "./IHttpClient";

/**
 * An implementation of IHttpClient
 * @class
 */
class AxiosHttpClient implements IHttpClient {
    async get<TOut>(url: string, dtoClass: ClassConstructor<TOut>, config?: AxiosRequestConfig): Promise<TOut> {
        const response = await axios.get(url, config);
        return plainToInstance(dtoClass, response.data);
    }

    async post<TIn, TOut>(url: string, data: TIn, dtoClass: ClassConstructor<TOut>, config?: AxiosRequestConfig): Promise<TOut> {
        const body = qs.stringify(instanceToPlain<TIn>(data));
        const response = await axios.post(url, body, config);
        return plainToInstance(dtoClass, response.data);
    }
}

export default AxiosHttpClient;