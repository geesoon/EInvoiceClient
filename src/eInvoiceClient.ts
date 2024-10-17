import DocumentTypeEndpoint from "./endpoints/platform/documentTypeEndpoint";
import LoginEndpoint from "./endpoints/platform/loginEndpoint";
import NotificationEndpoint from "./endpoints/platform/notificationEndpoint";
import DocumentTypeResponse from "./models/documentTypeResponse";
import LoginRequest from "./models/loginRequest";
import LoginResponse from "./models/loginResponse";
import NotificationRequest from "./models/notificationRequest";
import NotificationResponse from "./models/notificationResponse";

class EInvoiceClient {
    private readonly loginEndpoint: LoginEndpoint;
    private readonly documentTypeEndpoint: DocumentTypeEndpoint;
    private readonly notificationEndpoint: NotificationEndpoint;

    constructor(
        loginEndpoint: LoginEndpoint,
        documentTypeEndpoint: DocumentTypeEndpoint,
        notificationEndpoint: NotificationEndpoint
    ) {
        this.loginEndpoint = loginEndpoint;
        this.documentTypeEndpoint = documentTypeEndpoint;
        this.notificationEndpoint = notificationEndpoint;
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

    async getNotificationAsync(request: NotificationRequest): Promise<NotificationResponse> {
        return await this.notificationEndpoint.getNotificationAsync(request);
    }
}

export default EInvoiceClient;