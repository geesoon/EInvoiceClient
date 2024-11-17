class DocumentSummary {
    public uuid: string;
    public submissionUid: string;
    public longId: string;
    public internalId: string;
    public typeName: string;
    public typeVersionName: string;
    public issuerTin: string;
    public issuerName: string;
    public receiverId: string;
    public receiverName: string;
    public dateTimeIssued: Date;
    public dateTimeReceived: Date;
    public dateTimeValidated: Date;
    public totalExcludingTax: number;
    public totalDiscount: number;
    public totalNetAmount: number;
    public totalPayableAmount: number;
    public status: string;
    public cancelDateTime?: Date;
    public rejectRequestDateTime?: Date;
    public documentStatusReason: string;
    public createdByUserId: string;
}

export default DocumentSummary;