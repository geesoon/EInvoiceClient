import QueryDocumentMetadata from "./queryDocumentMetadata";
import SearchDocumentResult from "./searchDocumentResult";

class SearchDocumentResponse {
    public metadata: QueryDocumentMetadata;
    public result: SearchDocumentResult[];

    constructor(metadata: QueryDocumentMetadata, result: SearchDocumentResult[]) {
        this.metadata = metadata;
        this.result = result;
    }
}

export default SearchDocumentResponse;