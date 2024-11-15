import RecentDocumentResult from "./recentDocument";
import QueryDocumentMetadata from "./queryDocumentMetadata";

class GetRecentDocumentResponse {
    public metadata: QueryDocumentMetadata;
    public result: RecentDocumentResult[];

    constructor(metadata: QueryDocumentMetadata, result: RecentDocumentResult[]) {
        this.metadata = metadata;
        this.result = result;
    }
}

export default GetRecentDocumentResponse;