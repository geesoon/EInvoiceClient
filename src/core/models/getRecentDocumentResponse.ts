import RecentDocumentResult from "./recentDocument";
import QueryDocumentMetadata from "./queryDocumentMetadata";

class GetRecentDocumentResponse {
    public metadata: QueryDocumentMetadata;
    public result: RecentDocumentResult[];
}

export default GetRecentDocumentResponse;