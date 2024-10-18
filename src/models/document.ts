class DocumentRequest {
    public format: string;
    public document: string;
    public documentHash: string;
    public codeNumber: string;

    constructor(format: string, document: string, documentHash: string, codeNumber: string) {
        this.format = format;
        this.document = document;
        this.documentHash = documentHash;
        this.codeNumber = codeNumber;
    }
}

export default DocumentRequest;