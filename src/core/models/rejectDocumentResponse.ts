import StandardErrorResponse from "./standardErrorResponse";

class RejectDocumentResponse {
    public uuid: string;
    public status: string;
    public error: StandardErrorResponse;
}

export default RejectDocumentResponse;