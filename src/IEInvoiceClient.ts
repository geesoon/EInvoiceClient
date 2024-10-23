import CancelDocumentRequest from "./models/cancelDocumentRequest";
import CancelDocumentResponse from "./models/cancelDocumentResponse";
import DocumentDetails from "./models/documentDetail";
import DocumentExtended from "./models/documentExtended";
import DocumentTypeResponse from "./models/documentTypeResponse";
import DocumentTypeVersion from "./models/documentTypeVersion";
import GetDocumentDetailRequest from "./models/getDocumentDetailRequest";
import GetDocumentRequest from "./models/getDocumentRequest";
import GetNotificationRequest from "./models/getNotificationRequest";
import GetNotificationResponse from "./models/getNotificationResponse";
import GetRecentDocumentRequest from "./models/getRecentDocumentRequest";
import GetRecentDocumentResponse from "./models/getRecentDocumentResponse";
import GetSubmissionRequest from "./models/getSubmissionRequest";
import GetSubmissionResponse from "./models/getSubmissionResponse";
import LoginRequest from "./models/loginRequest";
import LoginResponse from "./models/loginResponse";
import SearchDocumentRequest from "./models/searchDocumentRequest";
import SearchDocumentResponse from "./models/searchDocumentResponse";
import SubmitDocumentRequest from "./models/submitDocumentRequest";
import SubmitDocumentResponse from "./models/submitDocumentResponse";
import ValidateTinRequest from "./models/validateTinRequest";
import DocumentType from "./models/documentType";

interface IEInvoiceClient {
    // Platform
    loginAsync(request: LoginRequest): Promise<LoginResponse>;
    getDocumentTypeAsync(): Promise<DocumentTypeResponse>;
    getDocumentTypeByIdAsync(id: number): Promise<DocumentType>;
    getDocumentTypeByVersionAsync(id: number, versionId: number): Promise<DocumentTypeVersion>;
    getNotificationAsync(request: GetNotificationRequest): Promise<GetNotificationResponse>;

    // E-Invoice
    validateTinAsync(request: ValidateTinRequest): Promise<boolean>;
    submitDocumentsAsync(request: SubmitDocumentRequest): Promise<SubmitDocumentResponse>;
    getSubmissionAsync(request: GetSubmissionRequest): Promise<GetSubmissionResponse>;
    cancelDocumentAsync(request: CancelDocumentRequest): Promise<CancelDocumentResponse>;
    rejectDocumentAsync(request: CancelDocumentRequest): Promise<CancelDocumentResponse>;
    getRecentDocumentAsync(request: GetRecentDocumentRequest): Promise<GetRecentDocumentResponse>;
    searchDocumentAsync(request: SearchDocumentRequest): Promise<SearchDocumentResponse>;
    getDocumentAsync(request: GetDocumentRequest): Promise<DocumentExtended>;
    getDocumentDetailAsync(request: GetDocumentDetailRequest): Promise<DocumentDetails>;
}

export default IEInvoiceClient;