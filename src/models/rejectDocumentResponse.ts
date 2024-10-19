import StandardErrorResponse from "./standardErrorResponse";

class RejectDocumentResponse {
    public uuid: string;
    public status: string;
    public error: StandardErrorResponse;

    constructor(uuid: string, status: string, error: StandardErrorResponse) {
        this.uuid = uuid;
        this.status = status;
        this.error = error;
    }
}

export default RejectDocumentResponse;