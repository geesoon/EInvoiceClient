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
}

export default SearchDocumentRequest;