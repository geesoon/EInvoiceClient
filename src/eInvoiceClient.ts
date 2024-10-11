import { Url } from "url";
import DocumentTypeEndpoint from "./endpoints/platform/documentTypeEndpoint";
import LoginEndpoint from "./endpoints/platform/loginEndpoint";
import NotificationStatusEndpoint from "./endpoints/platform/notificationStatusEndpoint";
import IHttpClient from "./IHttpClient";
import LoginRequest from "./models/loginRequest";
import NotificationStatusRequest from "./models/notificationStatusRequest";

class EInvoiceClient {
    private readonly baseUrl: URL;
    private readonly loginEndpoint: LoginEndpoint;
    private readonly documentTypeEndpoint: DocumentTypeEndpoint;
    private readonly notificationStatusEndpoint: NotificationStatusEndpoint;
    private readonly httpClient: IHttpClient;

    constructor(baseUrl: Url, httpClient: IHttpClient) {
        this.baseUrl = baseUrl;
        this.httpClient = httpClient;
        this.loginEndpoint = new LoginEndpoint(this.baseUrl, this.httpClient);
        this.documentTypeEndpoint = new DocumentTypeEndpoint(this.baseUrl, this.httpClient);
        this.notificationStatusEndpoint = new NotificationStatusEndpoint(this.baseUrl, this.httpClient);
    }

    async authenticateAsync(request: LoginRequest): Promise<any> {
        const response = await this.loginEndpoint.loginAsync(request);
        return response;
    }

    async getDocumentAsync(): Promise<any> {
        return await this.documentTypeEndpoint.getAsync();
    }

    async getDocumentById(id: number): Promise<any> {
        return await this.documentTypeEndpoint.getByIdAsync(id);
    }

    async getDocumentTypeVersion(id: number, versionId: number) {
        return await this.documentTypeEndpoint.getDocumentTypeVersion(id, versionId);
    }

    async getNotificationAsync(request: NotificationStatusRequest) {
        return await this.notificationStatusEndpoint.getNotificationAsync(request);
    }
}

export default EInvoiceClient;