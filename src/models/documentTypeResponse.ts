import { Expose } from "class-transformer";

class DocumentTypeResponse {
    @Expose({ "name": "result" })
    public result: DocumentType[];

    constructor(result: DocumentType[]) {
        this.result = result;
    }
}

export default DocumentTypeResponse;