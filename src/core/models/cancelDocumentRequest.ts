class CancelDocumentRequest {
    public uuid: string;
    public status: string;
    public reason: string;

    constructor(uuid: string, status: string, reason: string) {
        this.uuid = uuid;
        this.status = status;
        this.reason = reason;
    }
}

export default CancelDocumentRequest;