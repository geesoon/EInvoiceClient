import DocumentSubmissionErrorCode from "./documentSubmissionErrorCode";

class DocumentSubmissionErrorResponse {
    public code: DocumentSubmissionErrorCode;
    public message: string;
    public details?: string; // Optional additional details about the error

    constructor(code: DocumentSubmissionErrorCode, message: string, details?: string) {
        this.code = code;
        this.message = message;
        this.details = details;
    }
}

export default DocumentSubmissionErrorResponse;