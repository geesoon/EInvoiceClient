import { Expose } from "class-transformer";
import DocumentType from "./documentType";

class DocumentTypeResponse {
    @Expose({ "name": "result" })
    public result: DocumentType[];

    constructor(result: DocumentType[]) {
        this.result = result;
    }
}

export default DocumentTypeResponse;