import DocumentTypeEndpoint from "./endpoints/platform/documentTypeEndpoint";
import LoginEndpoint from "./endpoints/platform/loginEndpoint";
import NotificationEndpoint from "./endpoints/platform/notificationEndpoint";
import ITokenStore from "./ITokenStore";
import DocumentTypeResponse from "./models/documentTypeResponse";
import LoginRequest from "./models/loginRequest";
import LoginResponse from "./models/loginResponse";
import NotificationRequest from "./models/notificationRequest";
import NotificationResponse from "./models/notificationResponse";
import Session from "./models/session";
import TokenStore from "./tokenStore";

class EInvoiceClient {
    private readonly loginEndpoint: LoginEndpoint;
    private readonly documentTypeEndpoint: DocumentTypeEndpoint;
    private readonly notificationEndpoint: NotificationEndpoint;
    private tokenStore: ITokenStore | null = null;

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
        if (this.tokenStore == null) {
            let session = new Session(response);
            this.tokenStore = new TokenStore(session, request, this.loginEndpoint);
            console.log(this.tokenStore.getAccessToken());
        }

        return response;
    }

    async getDocumentAsync(): Promise<DocumentTypeResponse> {
        return await this.documentTypeEndpoint.getAsync(this.getAccessToken());
    }

    async getDocumentById(id: number): Promise<DocumentTypeResponse> {
        return await this.documentTypeEndpoint.getByIdAsync(id, this.getAccessToken());
    }

    async getDocumentTypeVersion(id: number, versionId: number): Promise<DocumentTypeResponse> {
        return await this.documentTypeEndpoint.getDocumentTypeVersion(id, versionId, this.getAccessToken());
    }

    async getNotificationAsync(request: NotificationRequest): Promise<NotificationResponse> {
        return await this.notificationEndpoint.getNotificationAsync(request, this.getAccessToken());
    }

    private getAccessToken(): string {
        if (this.tokenStore) {
            return this.tokenStore.getAccessToken();
        }

        return "";
    }
}

export default EInvoiceClient;