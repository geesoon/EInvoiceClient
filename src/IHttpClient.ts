import { AxiosRequestConfig } from "axios";

/**
 * Represent an interface for HttpClient
 * @interface
 */
interface IHttpClient {
    /**
     * Get request
     * @param url - The full url to get
     * @param data - The query parameter
     * @param config - The request configuration
     */
    get(url: string, data?: any, config?: AxiosRequestConfig): Promise<any>;

    /**
     * Post request
     * @param url - The full url to post
     * @param data - The request body
     * @param config - The request configuration
     */
    post(url: string, data?: any, config?: AxiosRequestConfig): Promise<any>;
}

export default IHttpClient;