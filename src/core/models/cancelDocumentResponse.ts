import StandardErrorResponse from "./standardErrorResponse";

class CancelDocumentResponse {
    public uuid: string;
    public status: string;
    public error: StandardErrorResponse;
}

export default CancelDocumentResponse;