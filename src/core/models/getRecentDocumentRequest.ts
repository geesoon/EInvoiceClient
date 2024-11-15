class GetRecentDocumentRequest {
    public pageNo?: number;
    public pageSize?: number;
    public submissionDateFrom?: Date;
    public submissionDateTo?: Date;
    public issueDateFrom?: Date;
    public issueDateTo?: Date;
    public invoiceDirection?: string;
    public status?: string;
    public documentType?: string;
    public receiverId?: string;
    public receiverIdType?: string;
    public issuerIdType?: string;
    public receiverTin?: string;
    public issuerTin?: string;
    public issuerId?: string;

    constructor(
        pageNo?: number,
        pageSize?: number,
        submissionDateFrom?: Date,
        submissionDateTo?: Date,
        issueDateFrom?: Date,
        issueDateTo?: Date,
        invoiceDirection?: string,
        status?: string,
        documentType?: string,
        receiverId?: string,
        receiverIdType?: string,
        issuerIdType?: string,
        receiverTin?: string,
        issuerTin?: string,
        issuerId?: string
    ) {
        this.pageNo = pageNo;
        this.pageSize = pageSize;
        this.submissionDateFrom = submissionDateFrom;
        this.submissionDateTo = submissionDateTo;
        this.issueDateFrom = issueDateFrom;
        this.issueDateTo = issueDateTo;
        this.invoiceDirection = invoiceDirection;
        this.status = status;
        this.documentType = documentType;
        this.receiverId = receiverId;
        this.receiverIdType = receiverIdType;
        this.issuerIdType = issuerIdType;
        this.receiverTin = receiverTin;
        this.issuerTin = issuerTin;
        this.issuerId = issuerId;
    }
}

export default GetRecentDocumentRequest;