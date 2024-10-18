class DocumentExtended {
    public uuid: string; // Unique document ID in e-Invoice
    public submissionUid: string; // Unique ID of the submission
    public longId: string; // Unique long temporary ID
    public internalId: string; // Internal ID used in submission
    public typeName: string; // Name of the document type
    public typeVersionName: string; // Name of the document type version
    public issuerTin: string; // TIN of the issuer
    public issuerName: string; // Issuer company name
    public receiverId?: string; // Optional: Receiver ID
    public receiverName?: string; // Optional: Receiver name
    public dateTimeIssued: string; // DateTime issued in UTC
    public dateTimeReceived: string; // DateTime received in UTC
    public dateTimeValidated: string; // DateTime validated in UTC
    public totalExcludingTax: number; // Total sales amount in MYR
    public totalDiscount: number; // Total discount amount in MYR
    public totalNetAmount: number; // Total net amount in MYR
    public totalPayableAmount: number; // Total amount in MYR
    public status: string; // Document status (Submitted, Valid, Cancelled)
    public cancelDateTime?: string; // Optional: DateTime of cancellation
    public rejectRequestDateTime?: string; // Optional: DateTime of rejection request
    public documentStatusReason: string; // Reason for cancellation or rejection
    public createdByUserId: string; // User ID or email who created the document
    public document?: string; // Raw document string (optional)

    constructor(
        uuid: string,
        submissionUid: string,
        longId: string,
        internalId: string,
        typeName: string,
        typeVersionName: string,
        issuerTin: string,
        issuerName: string,
        receiverId: string | undefined,
        receiverName: string | undefined,
        dateTimeIssued: string,
        dateTimeReceived: string,
        dateTimeValidated: string,
        totalExcludingTax: number,
        totalDiscount: number,
        totalNetAmount: number,
        totalPayableAmount: number,
        status: string,
        documentStatusReason: string,
        createdByUserId: string,
        document?: string, // Optional: raw document string
        cancelDateTime?: string, // Optional: Cancel DateTime
        rejectRequestDateTime?: string // Optional: Reject Request DateTime
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
        this.documentStatusReason = documentStatusReason;
        this.createdByUserId = createdByUserId;
        this.document = document;
        this.cancelDateTime = cancelDateTime;
        this.rejectRequestDateTime = rejectRequestDateTime;
    }
}

export default DocumentExtended;