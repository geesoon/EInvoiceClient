import ValidateTinEndpoint from "./endpoints/eInvoice/validateTinEndpoint";
import DocumentTypeEndpoint from "./endpoints/platform/documentTypeEndpoint";
import LoginEndpoint from "./endpoints/platform/loginEndpoint";
import NotificationEndpoint from "./endpoints/platform/notificationEndpoint";
import ITokenStore from "./ITokenStore";
import DocumentType from "./models/documentType";
import DocumentTypeResponse from "./models/documentTypeResponse";
import DocumentTypeVersion from "./models/documentTypeVersion";
import LoginRequest from "./models/loginRequest";
import LoginResponse from "./models/loginResponse";
import GetNotificationRequest from "./models/getNotificationRequest";
import GetNotificationResponse from "./models/getNotificationResponse";
import Session from "./models/session";
import ValidateTinRequest from "./models/validateTinRequest";
import TokenStore from "./tokenStore";
import DocumentEndpoint from "./endpoints/eInvoice/documentEndpoint";
import DocumentSubmissionEndpoint from "./endpoints/eInvoice/documentSubmissionEndpoint";
import SubmitDocumentResponse from "./models/submitDocumentResponse";
import SubmitDocumentRequest from "./models/submitDocumentRequest";
import GetSubmissionResponse from "./models/getSubmissionResponse";
import GetSubmissionRequest from "./models/getSubmissionRequest";
import CancelDocumentRequest from "./models/cancelDocumentRequest";
import CancelDocumentResponse from "./models/cancelDocumentResponse";
import GetRecentDocumentRequest from "./models/getRecentDocumentRequest";
import GetRecentDocumentResponse from "./models/getRecentDocumentResponse";
import SearchDocumentRequest from "./models/searchDocumentRequest";
import SearchDocumentResponse from "./models/searchDocumentResponse";
import DocumentDetails from "./models/documentDetail";
import DocumentExtended from "./models/documentExtended";
import GetDocumentRequest from "./models/getDocumentRequest";
import GetDocumentDetailRequest from "./models/getDocumentDetailRequest";

/**
 * This class is the facade of all eInvoice endpoints available
 */
class EInvoiceClient implements EInvoiceClient {
    // Platform
    private readonly loginEndpoint: LoginEndpoint;
    private readonly documentTypeEndpoint: DocumentTypeEndpoint;
    private readonly notificationEndpoint: NotificationEndpoint;

    // E-Invoice
    private readonly validateTinEndpoint: ValidateTinEndpoint;
    private readonly documentEndpoint: DocumentEndpoint;
    private readonly documentSubmissionEndpoint: DocumentSubmissionEndpoint;

    private tokenStore: ITokenStore | null = null;

    constructor(
        loginEndpoint: LoginEndpoint,
        documentTypeEndpoint: DocumentTypeEndpoint,
        notificationEndpoint: NotificationEndpoint,
        validateTinEndpoint: ValidateTinEndpoint,
        documentEndpoint: DocumentEndpoint,
        documentSubmissionEndpoint: DocumentSubmissionEndpoint
    ) {
        this.loginEndpoint = loginEndpoint;
        this.documentTypeEndpoint = documentTypeEndpoint;
        this.notificationEndpoint = notificationEndpoint;
        this.validateTinEndpoint = validateTinEndpoint;
        this.documentEndpoint = documentEndpoint;
        this.documentSubmissionEndpoint = documentSubmissionEndpoint;
    }

    /**
     * This API is used to authenticate the ERP system associated with a specific taxpayer calling and issue access token which allows ERP system to access those protected APIs.
     * This API is used to authenticate the ERP system associated with an intermediary that is representing a taxpayer (acting on behalf of a specific taxpayer) calling and issue access token which allows ERP system to access those protected APIs.
     * @param {LoginRequest} request
     * @returns {LoginResponse}
     */
    async loginAsync(request: LoginRequest): Promise<LoginResponse> {
        const response = await this.loginEndpoint.loginAsync(request);
        if (this.tokenStore == null) {
            let session = new Session(response);
            this.tokenStore = new TokenStore(session, request, this.loginEndpoint);
        }

        return response;
    }

    /**
     * This API allows taxpayer's systems to retrieve list of document types published by the MyInvois System.
     * @returns 
    */
    async getDocumentTypeAsync(): Promise<DocumentTypeResponse> {
        return await this.documentTypeEndpoint.getAsync(this.getAccessToken());
    }

    /**
     * This API allows taxpayer's ERP system to retrieve the details of single document type that contains structure definitions of the document.
     * @param id 
     * @returns 
     */
    async getDocumentTypeByIdAsync(id: number): Promise<DocumentType> {
        return await this.documentTypeEndpoint.getByIdAsync(id, this.getAccessToken());
    }

    /**
     * This API allows taxpayer's ERP system to retrieve the details of document type version that contains structure definitions of the documents.
     * @param id 
     * @param versionId 
     * @returns 
     */
    async getDocumentTypeByVersionAsync(id: number, versionId: number): Promise<DocumentTypeVersion> {
        return await this.documentTypeEndpoint.getByVersionAsync(id, versionId, this.getAccessToken());
    }

    /**
     * This API allows ERP system to query for previously sent notifications.
     * @param request 
     * @returns 
     */
    async getNotificationAsync(request: GetNotificationRequest): Promise<GetNotificationResponse> {
        return await this.notificationEndpoint.getAsync(request, this.getAccessToken());
    }

    /**
     * This API allows taxpayer's ERP system to validate specific Tax Identification Number (TIN) before adding this number to an invoice and issuing the invoice.
     * @param request 
     * @returns 
     */
    async validateTinAsync(request: ValidateTinRequest): Promise<boolean> {
        return await this.validateTinEndpoint.validateTinAsync(request, this.getAccessToken());
    }

    /**
     * This API allows taxpayer to submit one or more signed documents to MyInvois System.
     * @param request 
     * @returns 
     */
    async submitDocumentsAsync(request: SubmitDocumentRequest): Promise<SubmitDocumentResponse> {
        return await this.documentSubmissionEndpoint.submitDocumentsAsync(request, this.getAccessToken());
    }

    /**
     * This API returns information on documents submitted during a single submission by taxpayer.
     * @param request 
     * @returns 
     */
    async getSubmissionAsync(request: GetSubmissionRequest): Promise<GetSubmissionResponse> {
        return await this.documentSubmissionEndpoint.getSubmissionAsync(request, this.getAccessToken());
    }

    /**
     * This API allows issuer to cancel previously issued document, either self-induced cancellation or by accepting a rejection request made by the buyer.
     * @param request 
     * @returns 
     */
    async cancelDocumentAsync(request: CancelDocumentRequest): Promise<CancelDocumentResponse> {
        return await this.documentEndpoint.cancelDocumentAsync(request, this.getAccessToken())
    }

    /**
     * This API allows a buyer that received an invoice to reject it and request the supplier to cancel it.
     * @param request 
     * @returns 
     */
    async rejectDocumentAsync(request: CancelDocumentRequest): Promise<CancelDocumentResponse> {
        return await this.documentEndpoint.rejectDocumentAsync(request, this.getAccessToken());
    }

    /**
     * This API allows taxpayer's systems to search the documents sent or received which are available on the MyInvois System using various filters. This API will only return documents that are issued within the last 30 days.
     * @param request 
     * @returns 
     */
    async getRecentDocumentAsync(request: GetRecentDocumentRequest): Promise<GetRecentDocumentResponse> {
        return await this.documentEndpoint.getRecentDocumentAsync(request, this.getAccessToken());
    }

    /**
     * This API allows taxpayer's systems to search the documents sent or received which are available on the MyInvois System using various filters.
     * @param request 
     * @returns 
     */
    async searchDocumentAsync(request: SearchDocumentRequest): Promise<SearchDocumentResponse> {
        return await this.documentEndpoint.searchDocumentAsync(request, this.getAccessToken());
    }

    /**
     * This API allows taxpayers to retrieve document source in XML or JSON format along with the additional tax authority metadata.
     * @param request 
     * @returns 
     */
    async getDocumentAsync(request: GetDocumentRequest): Promise<DocumentExtended> {
        return await this.documentEndpoint.getDocumentAsync(request, this.getAccessToken());
    }

    /**
     * This API allows taxpayers to retrieve a single document's full details including validation results.
     * @param request 
     * @returns 
     */
    async getDocumentDetailAsync(request: GetDocumentDetailRequest): Promise<DocumentDetails> {
        return await this.documentEndpoint.getDocumentDetailAsync(request, this.getAccessToken());
    }

    private getAccessToken(): string {
        if (this.tokenStore) {
            return this.tokenStore.getAccessToken();
        }

        return "";
    }
}

export default EInvoiceClient;