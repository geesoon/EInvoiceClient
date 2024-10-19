class SearchDocumentRequest {
    public uuid?: string;
    public submissionDateFrom?: Date;
    public submissionDateTo?: Date;
    public pageSize?: number;
    public pageNo?: number;
    public issueDateFrom?: Date;
    public issueDateTo?: Date;
    public invoiceDirection?: string;
    public status?: string;
    public documentType?: string;
    public searchQuery?: string;

    constructor(
        uuid?: string,
        submissionDateFrom?: Date,
        submissionDateTo?: Date,
        pageSize?: number,
        pageNo?: number,
        issueDateFrom?: Date,
        issueDateTo?: Date,
        invoiceDirection?: string,
        status?: string,
        documentType?: string,
        searchQuery?: string
    ) {
        this.uuid = uuid;
        this.submissionDateFrom = submissionDateFrom;
        this.submissionDateTo = submissionDateTo;
        this.pageSize = pageSize ?? 100; // Default to 100 if not provided
        this.pageNo = pageNo ?? 1; // Default to 1 if not provided
        this.issueDateFrom = issueDateFrom;
        this.issueDateTo = issueDateTo;
        this.invoiceDirection = invoiceDirection;
        this.status = status;
        this.documentType = documentType;
        this.searchQuery = searchQuery;
    }
}

export default SearchDocumentRequest;