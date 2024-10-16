import DocumentTypeEndpoint from "./endpoints/platform/documentTypeEndpoint";
import LoginEndpoint from "./endpoints/platform/loginEndpoint";
// import NotificationStatusEndpoint from "./endpoints/platform/notificationStatusEndpoint";
import IHttpClient from "./IHttpClient";
import DocumentTypeResponse from "./models/documentTypeResponse";
import LoginRequest from "./models/loginRequest";
import LoginResponse from "./models/loginResponse";
// import NotificationStatusRequest from "./models/notificationStatusRequest";

class EInvoiceClient {
    private readonly baseUrl: URL;
    private readonly loginEndpoint: LoginEndpoint;
    private readonly documentTypeEndpoint: DocumentTypeEndpoint;
    // private readonly notificationStatusEndpoint: NotificationStatusEndpoint;
    private readonly httpClient: IHttpClient;

    constructor(baseUrl: URL, httpClient: IHttpClient) {
        this.baseUrl = baseUrl;
        this.httpClient = httpClient;
        this.loginEndpoint = new LoginEndpoint(this.baseUrl, this.httpClient);
        this.documentTypeEndpoint = new DocumentTypeEndpoint(this.baseUrl, this.httpClient);
        // this.notificationStatusEndpoint = new NotificationStatusEndpoint(this.baseUrl, this.httpClient);
    }

    async authenticateAsync(request: LoginRequest): Promise<LoginResponse> {
        const response = await this.loginEndpoint.loginAsync(request);
        return response;
    }

    async getDocumentAsync(): Promise<DocumentTypeResponse> {
        return await this.documentTypeEndpoint.getAsync();
    }

    async getDocumentById(id: number): Promise<DocumentTypeResponse> {
        return await this.documentTypeEndpoint.getByIdAsync(id);
    }

    async getDocumentTypeVersion(id: number, versionId: number): Promise<DocumentTypeResponse> {
        return await this.documentTypeEndpoint.getDocumentTypeVersion(id, versionId);
    }

    // async getNotificationAsync(request: NotificationStatusRequest) {
    //     return await this.notificationStatusEndpoint.getNotificationAsync(request);
    // }
}

export default EInvoiceClient;