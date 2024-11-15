import Document from "./document";

class SubmitDocumentRequest {
    public documents: Document[];

    constructor(documents: Document[]) {
        this.documents = documents;
    }
}

export default SubmitDocumentRequest;