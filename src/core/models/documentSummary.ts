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

    constructor(
        uuid: string,
        submissionUid: string,
        longId: string,
        internalId: string,
        typeName: string,
        typeVersionName: string,
        issuerTin: string,
        issuerName: string,
        receiverId: string,
        receiverName: string,
        dateTimeIssued: Date,
        dateTimeReceived: Date,
        dateTimeValidated: Date,
        totalExcludingTax: number,
        totalDiscount: number,
        totalNetAmount: number,
        totalPayableAmount: number,
        status: string,
        documentStatusReason: string,
        createdByUserId: string,
        cancelDateTime?: Date,
        rejectRequestDateTime?: Date
    ) {
        this.uuid = uuid;
        this.submissionUid = submissionUid;
        this.longId = longId;
        this.internalId = internalId;
        this.typeName = typeName;
        this.typeVersionName = typeVersionName;
        this.issuerTin = issuerTin;
        this.issuerName = issuerName;
        this.receiverId = receiverId;
        this.receiverName = receiverName;
        this.dateTimeIssued = dateTimeIssued;
        this.dateTimeReceived = dateTimeReceived;
        this.dateTimeValidated = dateTimeValidated;
        this.totalExcludingTax = totalExcludingTax;
        this.totalDiscount = totalDiscount;
        this.totalNetAmount = totalNetAmount;
        this.totalPayableAmount = totalPayableAmount;
        this.status = status;
        this.cancelDateTime = cancelDateTime;
        this.rejectRequestDateTime = rejectRequestDateTime;
        this.documentStatusReason = documentStatusReason;
        this.createdByUserId = createdByUserId;
    }
}

export default DocumentSummary;