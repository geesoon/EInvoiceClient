import IHttpClient from "../IHttpClient";

abstract class Endpoint {
    protected readonly baseURL: URL;
    protected readonly relativePath: string;
    protected readonly httpClient: IHttpClient;
    protected readonly fullUrl: string = this.getFullUrl();

    constructor(baseUrl: URL, relativePath: string, httpClient: IHttpClient) {
        this.baseURL = baseUrl;
        this.relativePath = relativePath;
        this.httpClient = httpClient;
    }

    private getFullUrl(): string {
        return this.baseURL.toString() + this.relativePath;
    }

}

export default Endpoint;