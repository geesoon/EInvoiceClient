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
}

export default GetRecentDocumentRequest;