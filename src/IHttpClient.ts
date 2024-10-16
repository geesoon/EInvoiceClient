import { AxiosRequestConfig } from "axios";
import { ClassConstructor } from "class-transformer";

/**
 * Represent an interface for HttpClient
 * @interface
 */
interface IHttpClient {
    /**
     * Get request
     * @param url - The full url to get
     * @param dtoClass - The dto class
     * @param config - The request configuration
     */
    get<TOut>(url: string, dtoClass: ClassConstructor<TOut>, config?: AxiosRequestConfig): Promise<TOut>;

    /**
     * Post request
     * @param url - The full url to post
     * @param data - The request body
     * @param dtoClass - The dto class
     * @param config - The request configuration
     */
    post<TIn, TOut>(url: string, data: TIn, dtoClass: ClassConstructor<TOut>, config?: AxiosRequestConfig): Promise<TOut>;
}

export default IHttpClient;