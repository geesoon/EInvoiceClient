import IHttpClient from "../IHttpClient";

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
}

export default Endpoint;