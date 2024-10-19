class QueryDocumentMetadata {
    public totalPages: number;
    public totalCount: number;

    constructor(totalPages: number, totalCount: number) {
        this.totalPages = totalPages;
        this.totalCount = totalCount;
    }
}

export default QueryDocumentMetadata;