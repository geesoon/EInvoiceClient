import QueryDocumentMetadata from "./queryDocumentMetadata";
import SearchDocumentResult from "./searchDocumentResult";

class SearchDocumentResponse {
    public metadata: QueryDocumentMetadata;
    public result: SearchDocumentResult[];
}

export default SearchDocumentResponse;