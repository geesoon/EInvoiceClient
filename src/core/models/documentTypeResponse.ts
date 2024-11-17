import { Expose } from "class-transformer";
import DocumentType from "./documentType";

class DocumentTypeResponse {
    @Expose({ "name": "result" })
    public result: DocumentType[];
}

export default DocumentTypeResponse;